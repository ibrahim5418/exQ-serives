import { useEffect, useId, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { company } from '../../data/company'
import { limits, serviceOptions, validateAll, validateField } from '../../lib/contact'
import Button from '../common/Button'
import { Check } from '../common/Icons'
import './ContactForm.css'

const empty = { name: '', company: '', email: '', phone: '', service: '', message: '', website: '' }

// Cloudflare Turnstile switches on when VITE_TURNSTILE_SITE_KEY is set; its
// script loads only here, on the Contact page (Tasks 5 and 22).
const TURNSTILE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY
const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile)
  if (!loadTurnstile.promise) {
    loadTurnstile.promise = new Promise((resolve, reject) => {
      const s = document.createElement('script')
      s.src = TURNSTILE_SRC
      s.async = true
      s.defer = true
      s.onload = () => resolve(window.turnstile)
      s.onerror = reject
      document.head.appendChild(s)
    })
  }
  return loadTurnstile.promise
}

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed
  const [token, setToken] = useState('')
  const [searchParams] = useSearchParams()
  const formRef = useRef(null)
  const successRef = useRef(null)
  const turnstileRef = useRef(null)
  const widgetId = useRef(null)
  const sending = useRef(false)
  const uid = useId()

  // Pre-select the service from ?service=slug (read after mount so the
  // prerendered HTML and the first client render match).
  const preset = searchParams.get('service')
  useEffect(() => {
    if (preset && serviceOptions.some((o) => o.value === preset)) {
      setValues((v) => ({ ...v, service: preset }))
    }
  }, [preset])

  useEffect(() => {
    if (!TURNSTILE_KEY || !turnstileRef.current) return
    let cancelled = false
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !turnstileRef.current) return
        widgetId.current = ts.render(turnstileRef.current, {
          sitekey: TURNSTILE_KEY,
          callback: setToken,
          'expired-callback': () => setToken(''),
          'error-callback': () => setToken(''),
        })
      })
      .catch(() => {
        // Widget failed to load; the server rejects the submission and the
        // visitor sees the standard error with the email fallback.
      })
    return () => {
      cancelled = true
      if (window.turnstile && widgetId.current) window.turnstile.remove(widgetId.current)
      widgetId.current = null
    }
  }, [])

  useEffect(() => {
    if (status === 'sent') successRef.current?.focus()
  }, [status])

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) setErrors((err) => ({ ...err, [name]: validateField(name, value) }))
  }

  // Check each field when the visitor leaves it (Task 5).
  const onBlur = (e) => {
    const { name, value } = e.target
    if (!['name', 'email', 'service', 'message'].includes(name)) return
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((err) => ({ ...err, [name]: validateField(name, value) }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (sending.current) return // ignore double clicks while sending

    const found = validateAll(values)
    setErrors(found)
    setTouched({ name: true, email: true, service: true, message: true })
    const firstBad = Object.keys(found)[0]
    if (firstBad) {
      const field = formRef.current?.querySelector(`[name="${firstBad}"]`)
      field?.focus()
      field?.scrollIntoView({ block: 'center' })
      return
    }

    sending.current = true
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          pageUrl: window.location.href,
          turnstileToken: token,
        }),
      })
      if (!res.ok) throw new Error(`status ${res.status}`)
      setStatus('sent')
    } catch {
      setStatus('failed')
      if (window.turnstile && widgetId.current) window.turnstile.reset(widgetId.current)
      setToken('')
    } finally {
      sending.current = false
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-done" ref={successRef} tabIndex={-1} role="status">
        <span className="form-done__icon" aria-hidden="true">
          <Check width={22} height={22} />
        </span>
        <p className="form-done__text">
          Thank you. We’ve received your enquiry and will reply by email within one business day.
        </p>
      </div>
    )
  }

  const field = (name) => ({
    id: `${uid}-${name}`,
    name,
    value: values[name],
    onChange,
    onBlur,
    maxLength: limits[name],
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${uid}-${name}-err` : undefined,
  })

  const renderError = (name) =>
    errors[name] ? (
      <p className="field__error" id={`${uid}-${name}-err`} role="alert">
        {errors[name]}
      </p>
    ) : null

  const isSending = status === 'sending'
  const count = values.message.trim().length

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} noValidate aria-describedby={`${uid}-req`}>
      <p id={`${uid}-req`} className="form__req">
        Fields marked <span aria-hidden="true">*</span>
        <span className="visually-hidden">required</span> are required.
      </p>
      <div className="form__grid">
        <div className="field">
          <label htmlFor={`${uid}-name`}>
            Name <span className="field__req" aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="name" required {...field('name')} />
          {renderError('name')}
        </div>

        <div className="field">
          <label htmlFor={`${uid}-company`}>Company</label>
          <input type="text" autoComplete="organization" {...field('company')} />
        </div>

        <div className="field">
          <label htmlFor={`${uid}-email`}>
            Email <span className="field__req" aria-hidden="true">*</span>
          </label>
          <input type="email" autoComplete="email" inputMode="email" required {...field('email')} />
          {renderError('email')}
        </div>

        <div className="field">
          <label htmlFor={`${uid}-phone`}>Phone</label>
          <input type="tel" autoComplete="tel" inputMode="tel" {...field('phone')} />
        </div>

        <div className="field field--full">
          <label htmlFor={`${uid}-service`}>
            Service <span className="field__req" aria-hidden="true">*</span>
          </label>
          <div className="field__select">
            <select required {...field('service')}>
              <option value="">Choose a service</option>
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          {renderError('service')}
        </div>

        <div className="field field--full">
          <label htmlFor={`${uid}-message`}>
            Message <span className="field__req" aria-hidden="true">*</span>
          </label>
          <textarea
            rows={6}
            required
            placeholder="What’s happening, how many people are involved, and anything you’re planning."
            {...field('message')}
          />
          <div className="field__meta">
            {renderError('message')}
            <span className="field__count tabular" aria-hidden="true">
              {count} / 2,000
            </span>
          </div>
        </div>

        {/* Honeypot: off-screen, hidden from assistive tech, never filled by people. */}
        <div className="field--trap" aria-hidden="true">
          <label htmlFor={`${uid}-website`}>Website</label>
          <input type="text" id={`${uid}-website`} name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
        </div>
      </div>

      {TURNSTILE_KEY && <div ref={turnstileRef} className="form__turnstile" />}

      {status === 'failed' && (
        <div className="form__alert" role="alert">
          <p>
            Sorry, we couldn’t send your message. Please try again or email us at{' '}
            <a href={company.email.href}>{company.email.display}</a>.
          </p>
        </div>
      )}

      <div className="form__foot">
        <Button type="submit" disabled={isSending} aria-disabled={isSending}>
          {isSending ? 'Sending…' : 'Send enquiry'}
        </Button>
        <p className="form__privacy">
          We use your details only to reply to this enquiry. See our <Link to="/privacy-policy">privacy policy</Link>.
        </p>
      </div>
    </form>
  )
}
