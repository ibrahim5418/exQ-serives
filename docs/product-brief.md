# Product brief

The authoritative requirements are in Jamal Ahamed's *exQ Website — Developer Brief (Final)*, 29 September 2026. This file summarises what the code relies on.

## Platform and stack

Web. Vite + React 19 + React Router 7, every route prerendered to static HTML (`scripts/prerender.js`) and hydrated. Plain CSS with design tokens; no UI framework. Contact form posts to a serverless function (`api/contact.js`) that sends through Resend.

## Users

Owners, managers and IT leads at enterprises and growing businesses who depend on their technology. They arrive with a live problem or a planned change and want to judge quickly whether exQ is a credible, safe pair of hands.

## Positioning

exQ is one accountable team for the technology behind a business: helpdesk, cloud platforms, security, networks and web infrastructure. Headquartered in Riyadh, supporting clients locally and internationally.

## Fixed facts (brief section 1)

- Brand: exQ Services (short form exQ). Legal name (footer, Privacy, Terms only): Exq IT Consulting and Services.
- Domain: https://exq.services
- Email (only public address, and form recipient): info@exq.services
- Phone: +966 50 094 7061 (`tel:+966500947061`), shown only in the footer and on the Contact page.
- WhatsApp: https://wa.me/966500947061 (Jamal to confirm the number).
- Location: Riyadh, Saudi Arabia (city only).
- Booking: Microsoft Bookings, embedded on `/book`.
- Primary CTA "Book a free consultation" → `/book`; secondary "Send an enquiry" → `/contact`.
- Founder Jamal Ahamed; Co-founder Abdul Hadhi Asif.
- Governing law: Kingdom of Saudi Arabia. Data protection: Saudi PDPL.
- Contact priority: email and the form, then booking, then WhatsApp, then phone.

All of these live in `src/data/company.js`.

## Practice areas

Five practice areas over six service pages (URLs unchanged): Managed IT & Support (`it-support`), Cloud & Digital Workplace (`cloud-saas`), Cybersecurity (`cybersecurity`), Network & Infrastructure (`network-infrastructure`), IT Consulting & Projects (`it-consulting`, with Web Infrastructure `website-hosting` as its second link).

## Never on the site

- Indian addresses, +91 numbers, sales@ addresses, staff or client counts.
- Founders' LinkedIn or other personal profiles, or their current or past employers.
- Invented clients, testimonials, logos, results, partner badges or certifications exQ does not hold.
- "Partners" wording for technologies: the strip is "Technologies we work with" and shows only entries Jamal has confirmed.

Testimonials, client logos and case studies render from JSON in `src/data/content/` and show nothing until real, approved entries exist. The three example engagements always carry the label "Example engagement: shows a typical project, not a specific client."

## Still to come from Jamal

- Confirmation of the WhatsApp number.
- The confirmed "Technologies we work with" list (flip `confirmed` in `src/data/content/technologies.json`).
- Matching headshots (set `photo` in `src/data/team.js`), and Abdul's approval of his bio.
- Logo files (light and dark) and a 1200 × 630 share image (replace the generated ones in `public/`).
- Legal review of Privacy and Terms, and the launch date for "Last updated" (`legalUpdated` in `src/data/company.js`).

## Accessibility

WCAG 2.2 AA: keyboard access, 2px focus ring, one H1 per page, labelled fields with announced errors, 4.5:1 contrast in both themes, reduced-motion support.
