# exQ Services website

Multi-page marketing site for exQ Services, built with Vite, React 19 and React Router 7.
Every route is prerendered to static HTML at build time, so pages load with real content, their
own titles, meta tags and structured data, then hydrate into a normal React app. Each page is its
own JavaScript chunk; the current page's chunk loads before hydration and the rest are fetched
when the browser is idle, so later pages render instantly.

## Commands

```bash
npm install          # once
npm run dev          # local dev server (http://localhost:5173), including /api/contact
npm run build        # production build + prerender into dist/
npm run preview      # serve dist/ like production, including /api/contact (http://localhost:4173)
node scripts/make-brand-assets.js   # regenerate favicon, apple-touch-icon, logo.png, og-image.jpg
```

## Where things live

```
api/
  contact.js       POST /api/contact: validates the enquiry and sends it through Resend
src/
  data/            All site content. Edit copy here, not in components.
    company.js       fixed facts: names, email, phone, WhatsApp, booking link, CTAs, legal date
    services.js      the six services and the five practice areas
    industries.js    the eight industries (challenges, needs, security, services)
    home.js          homepage-only blocks
    team.js          leadership bios (photos go here when available)
    faqs.js          Contact page FAQs
    navigation.js    header and footer links
    technologies.js  "Technologies we work with" (confirmed entries only)
    caseStudies.js   case studies, testimonials, client logos, example engagements
    content/*.json   the data files behind those (empty arrays render nothing)
  lib/
    contact.js       form fields and validation shared by the form and the API
    theme.js         light/dark theme (saved under localStorage "exq-theme")
  routes/          route table (AppRoutes.jsx) and per-page SEO + JSON-LD (meta.js)
  components/
    layout/        Header (mega menu, mobile panel), Footer, MobileActionBar, ThemeToggle
    common/        Button, PageHeader, Rise (headline motion), HeroArt, icons, wordmark
    sections/      ServiceCards, ExampleCards, ProcessSteps, RackElevation, TechStrip,
                   LeaderCards, Proof (testimonials, logos, case studies), CtaBand
    forms/         ContactForm
  hooks/           head/meta updates, focus and scroll on navigation, page motion,
                   pointer effects (spotlight, magnetic buttons)
  pages/           one folder per page, each with its own CSS
  styles/          tokens.css (all colours, both themes), base, layout, shared components
scripts/           prerender.js, make-brand-assets.js, optimize-images.js
docs/              product-brief.md (facts and rules), design-system.md
```

## Contact form (Resend)

The form posts JSON to `/api/contact`, a Vercel-style serverless function. It validates the fields
again on the server, checks the honeypot, applies a basic limit of 5 submissions per IP per hour,
optionally verifies Cloudflare Turnstile, then sends two emails through Resend:

- to **info@exq.services**: subject `New enquiry: {Service} — {Name}`, all fields plus page URL and
  time, Reply-To set to the visitor;
- to the visitor: "We've received your enquiry", the one-business-day promise and a link to `/book`.

Configuration is through environment variables only (copy `.env.example` to `.env` locally):

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | Resend API key. Without it the API answers 503 and the form shows its error message. |
| `CONTACT_TO_EMAIL` | no | Recipient, default `info@exq.services` |
| `CONTACT_FROM_EMAIL` | no | Sender, default `exQ Services <info@exq.services>`. The domain must be verified in Resend (SPF/DKIM). |
| `VITE_TURNSTILE_SITE_KEY` | no | Turnstile site key (public). Set with the secret to switch Turnstile on. |
| `TURNSTILE_SECRET_KEY` | no | Turnstile secret, verified on the server. |

`npm run dev` and `npm run preview` load these from `.env` and serve the function locally. The
in-memory rate limit is per server instance; for a hard global limit, back it with a shared store
such as Upstash Redis.

## Content changes

- **Technologies strip**: set `"confirmed": true` for each entry Jamal confirms in
  `src/data/content/technologies.json`. Add an optional monochrome `logo` path in `public/`.
- **Case studies, testimonials, client logos**: add entries to the JSON files in
  `src/data/content/` (schemas at the top of `src/data/caseStudies.js`). Published case studies get
  their own page at `/case-studies/{slug}` and are added to the sitemap automatically.
- **Headshots**: add matching WebP photos (at least 800 × 800) to `src/assets/images/` and set
  `photo` for each leader in `src/data/team.js`.
- **Legal date**: `legalUpdated` in `src/data/company.js`.

## Theme

Light is the default on a first visit. The inline script at the top of `index.html` applies the
saved choice before first paint, so there's no flash. Every colour comes from `src/styles/tokens.css`.

## Deployment notes

`dist/` is a static site plus the `api/` function. Not configured yet (deployment is out of scope
for this stage): domain redirects, security headers and the Content-Security-Policy. When the CSP
is added, allow the inline theme script (by hash) and `https://challenges.cloudflare.com` for
Turnstile; frame `https://bookings.cloud.microsoft` for `/book`; and allow `connect-src 'self'`
(the form calls Resend from the server, not the browser).
