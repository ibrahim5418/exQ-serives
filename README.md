# exQ Services website

Multi-page marketing site for exQ Services, built with Vite, React 19 and React Router 7.
Every route is prerendered to static HTML at build time, so pages load with real content and
their own titles and meta tags, then hydrate into a normal React app.

## Commands

```bash
npm install          # once
npm run dev          # local dev server (http://localhost:5173)
npm run build        # production build + prerender into dist/
npm run preview      # serve dist/ exactly like production (http://localhost:4173)
npm run images       # re-generate WebP photos from src/assets/images/source
```

`node scripts/make-brand-assets.js` rebuilds `public/og-image.jpg` and `public/apple-touch-icon.png`.

## Where things live

```
src/
  data/            All site content. Edit copy here, not in components.
    company.js       verified facts, contact details, values, EmailJS settings
    services.js      the six services (every service page renders from this)
    industries.js    industry entries
    caseStudies.js   case-study records (empty until clients approve write-ups)
    faqs.js          general FAQs (contact page)
    home.js          homepage-only blocks
    navigation.js    header and footer links
  routes/          route table (AppRoutes.jsx) and per-page SEO metadata (meta.js)
  components/
    layout/        Header, Footer, Layout
    common/        Button, Figure, Tape, PageHeader, FaqList, icons, wordmark
    sections/      PatchPanel, ServiceSchedule, RackElevation, CableRun, CtaBand
    forms/         ContactForm
  pages/           one folder per page, each with its own CSS
  hooks/           head/meta updates, focus management on navigation
  styles/          tokens.css (colours, type, spacing), base, layout, shared components
  assets/images/   optimised photos; originals in source/, credits in CREDITS.md
scripts/           prerender.js, optimize-images.js, make-brand-assets.js
public/            favicon, share image, .htaccess
docs/
  product-brief.md   audience, positioning, verified facts and content rules
  design-system.md   colours, type, components and visual rules
```

### Adding a case study

Open `src/data/caseStudies.js`, copy the commented template into the `caseStudies` array, fill in
challenge / approach / solution / technology / outcome and set `published: true`. Only publish
write-ups the client has approved.

### Replacing photos

Drop a new original into `src/assets/images/source/` using the same file name, run `npm run images`,
then update `CREDITS.md`. Real photos of the exQ team and installations should replace the stock
images as soon as they exist (captions currently say "Illustrative photo").

## Contact form

The enquiry form sends through EmailJS using the same account as the previous site
(service `service_m8bov1a`, template `template_dvz3yys`). The template receives `name`, `email`,
`subject` and `message` as before; `message` now also contains company, phone and service, and those
are sent as separate `company`, `phone` and `service` fields too. To use different EmailJS settings,
copy `.env.example` to `.env` and fill it in.

## Deployment

Upload the contents of `dist/` to the web root. Each page is a folder (`dist/about/index.html`), and
the included `.htaccess` serves `/about` without a trailing slash, forces HTTPS, sets caching and
points 404s at `404.html`. On Netlify, Vercel or Cloudflare Pages no extra config is needed.
`sitemap.xml` and `robots.txt` are generated on every build.
