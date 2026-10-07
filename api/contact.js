// POST /api/contact — sends the enquiry form to exQ through Resend (Task 5).
//
// Written as a Vercel-style serverless function (default export taking Node's
// req/res); `npm run dev` and `npm run preview` serve it locally through a
// small Vite middleware (see vite.config.js). Configuration comes only from
// environment variables; nothing secret lives in the source:
//
//   RESEND_API_KEY        required. Resend API key.
//   CONTACT_TO_EMAIL      optional. Recipient, default info@exq.services.
//   CONTACT_FROM_EMAIL    optional. Sender on a domain verified in Resend,
//                         default "exQ Services <info@exq.services>".
//   TURNSTILE_SECRET_KEY  optional. When set, a valid Cloudflare Turnstile
//                         token is required with every submission.

import { createHash } from 'node:crypto'
import { limits, serviceLabel, validateAll } from '../src/lib/contact.js'

const SITE_URL = 'https://exq.services'
const DEFAULT_TO = 'info@exq.services'
const DEFAULT_FROM = 'exQ Services <info@exq.services>'
const RATE_LIMIT = 5 // submissions per IP
const RATE_WINDOW_MS = 60 * 60 * 1000 // per hour

// Best-effort, per-instance rate limit. Serverless instances don't share
// memory, so this stops bursts from one client rather than guaranteeing a
// global cap; swap in a shared store (e.g. Upstash Redis) for a hard limit.
const hits = new Map()

function rateLimited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) {
    for (const [key, times] of hits) if (!times.some((t) => now - t < RATE_WINDOW_MS)) hits.delete(key)
  }
  return false
}

const clientIp = (req) =>
  String(req.headers['x-forwarded-for'] || '')
    .split(',')[0]
    .trim() ||
  req.socket?.remoteAddress ||
  'unknown'

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const clean = (v, max) =>
  String(v ?? '')
    .replace(/\r\n?/g, '\n')
    .trim()
    .slice(0, max)

// Strip line breaks from anything that ends up in a header (subject, reply-to).
const oneLine = (v) => String(v).replace(/[\r\n]+/g, ' ').trim()

async function verifyTurnstile(token, ip, secret) {
  if (!token) return false
  const body = new URLSearchParams({ secret, response: token, remoteip: ip })
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body })
  const data = await res.json().catch(() => ({}))
  return data.success === true
}

async function sendEmail(apiKey, payload, idempotencyKey) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...(idempotencyKey ? { 'Idempotency-Key': idempotencyKey } : {}),
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    throw new Error(`Resend responded ${res.status}: ${detail.slice(0, 300)}`)
  }
  return res.json()
}

function enquiryEmail(e) {
  const rows = [
    ['Name', e.name],
    ['Company', e.company || 'Not given'],
    ['Email', e.email],
    ['Phone', e.phone || 'Not given'],
    ['Service', e.service],
    ['Message', e.message],
    ['Page', e.pageUrl || 'Not given'],
    ['Received', e.time],
  ]
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n\n')
  const html = `<!doctype html><html><body style="margin:0;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#0F1E36;background:#F5F7FA">
<table role="presentation" width="100%" style="max-width:640px;margin:0 auto;background:#FFFFFF;border:1px solid #E3E8EF;border-radius:12px;border-collapse:separate">
<tr><td style="padding:24px 28px 8px"><p style="margin:0;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#0F766E">New website enquiry</p>
<h1 style="margin:8px 0 0;font-size:22px">${escapeHtml(e.service)} — ${escapeHtml(e.name)}</h1></td></tr>
${rows
  .map(
    ([k, v]) => `<tr><td style="padding:12px 28px;border-top:1px solid #E3E8EF">
<p style="margin:0 0 4px;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#4A5568">${k}</p>
<p style="margin:0;font-size:15px;line-height:1.55;white-space:pre-wrap">${escapeHtml(v)}</p></td></tr>`,
  )
  .join('')}
<tr><td style="padding:16px 28px 24px;border-top:1px solid #E3E8EF;font-size:13px;color:#4A5568">Reply to this email to answer ${escapeHtml(e.name)} directly.</td></tr>
</table></body></html>`
  return { text, html }
}

function autoReplyEmail(name) {
  const first = name.split(/\s+/)[0]
  const text = [
    `Hello ${first},`,
    'Thank you for contacting exQ Services. We’ve received your enquiry and will reply by email within one business day.',
    `If you’d like to talk sooner, you can book a free 30-minute consultation: ${SITE_URL}/book`,
    'exQ Services\ninfo@exq.services',
  ].join('\n\n')
  const html = `<!doctype html><html><body style="margin:0;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#0F1E36;background:#F5F7FA">
<table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E3E8EF;border-radius:12px;border-collapse:separate">
<tr><td style="padding:28px">
<p style="margin:0 0 20px;font-size:24px;font-weight:700;letter-spacing:-.03em">ex<span style="color:#2F6FED">Q</span><span style="color:#14B8A6">.</span></p>
<p style="margin:0 0 14px;font-size:16px;line-height:1.6">Hello ${escapeHtml(first)},</p>
<p style="margin:0 0 14px;font-size:16px;line-height:1.6">Thank you for contacting exQ Services. We’ve received your enquiry and will reply by email within one business day.</p>
<p style="margin:0 0 22px;font-size:16px;line-height:1.6">If you’d like to talk sooner, you can book a free 30-minute consultation.</p>
<p style="margin:0 0 26px"><a href="${SITE_URL}/book" style="display:inline-block;padding:13px 20px;background:#2F6FED;color:#FFFFFF;text-decoration:none;font-weight:600;border-radius:8px">Book a free consultation</a></p>
<p style="margin:0;font-size:14px;line-height:1.6;color:#4A5568">exQ Services<br><a href="mailto:info@exq.services" style="color:#2459C7">info@exq.services</a></p>
</td></tr></table></body></html>`
  return { text, html }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'method_not_allowed' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      body = null
    }
  }
  if (!body || typeof body !== 'object') return res.status(400).json({ ok: false, error: 'invalid_body' })

  // Honeypot filled: answer as if it worked, send nothing.
  if (String(body.website || '').trim()) return res.status(200).json({ ok: true })

  const ip = clientIp(req)
  if (rateLimited(ip)) return res.status(429).json({ ok: false, error: 'rate_limited' })

  const values = {
    name: oneLine(clean(body.name, limits.name)),
    company: oneLine(clean(body.company, limits.company)),
    email: oneLine(clean(body.email, limits.email)),
    phone: oneLine(clean(body.phone, limits.phone)),
    service: clean(body.service, 64),
    message: clean(body.message, limits.message + 1),
  }
  const errors = validateAll(values)
  if (Object.keys(errors).length) return res.status(422).json({ ok: false, error: 'invalid_fields', fields: errors })

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
  if (turnstileSecret) {
    const human = await verifyTurnstile(String(body.turnstileToken || ''), ip, turnstileSecret).catch(() => false)
    if (!human) return res.status(403).json({ ok: false, error: 'verification_failed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set; enquiry not sent.')
    return res.status(503).json({ ok: false, error: 'not_configured' })
  }

  const to = process.env.CONTACT_TO_EMAIL || DEFAULT_TO
  const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM
  const enquiry = {
    ...values,
    service: serviceLabel(values.service),
    pageUrl: oneLine(clean(body.pageUrl, 500)),
    time: `${new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Riyadh' }).format(new Date())} (Riyadh time)`,
  }

  // Same visitor, same message → same key, so a repeated request can't send twice.
  const idempotencyKey = createHash('sha256')
    .update([values.email, values.service, values.message].join('|'))
    .digest('hex')

  try {
    const { text, html } = enquiryEmail(enquiry)
    await sendEmail(
      apiKey,
      {
        from,
        to: [to],
        reply_to: values.email,
        subject: oneLine(`New enquiry: ${enquiry.service} — ${values.name}`),
        text,
        html,
      },
      `enquiry-${idempotencyKey}`,
    )
  } catch (err) {
    console.error('[contact] Failed to send enquiry:', err.message)
    return res.status(502).json({ ok: false, error: 'send_failed' })
  }

  // The enquiry is in; a failed auto-reply shouldn't turn that into an error.
  try {
    const { text, html } = autoReplyEmail(values.name)
    await sendEmail(
      apiKey,
      { from, to: [values.email], reply_to: to, subject: "We've received your enquiry", text, html },
      `autoreply-${idempotencyKey}`,
    )
  } catch (err) {
    console.error('[contact] Auto-reply failed:', err.message)
  }

  return res.status(200).json({ ok: true })
}
