// Page titles, descriptions and structured data for every route (Tasks 2 and 19).
// Used by the browser (useHeadMeta) and by scripts/prerender.js, so each page
// ships with its own <title>, description, canonical URL, Open Graph/Twitter
// tags and JSON-LD in the HTML.
import { company } from '../data/company'
import { services, getService } from '../data/services'
import { generalFaqs } from '../data/faqs'
import { caseStudies } from '../data/caseStudies'

const base = {
  '/': {
    title: 'exQ Services | Managed IT, Cloud & Cybersecurity',
    description:
      'Managed IT support, cloud and Microsoft 365, cybersecurity, networks and IT consulting for growing businesses and enterprises. Headquartered in Riyadh.',
  },
  '/about': {
    title: 'About exQ Services | Your IT Operations Partner',
    description:
      'exQ is an IT services company led by practitioners who run IT and infrastructure operations. Headquartered in Riyadh, supporting clients internationally.',
    crumbs: ['About'],
  },
  '/services': {
    title: 'IT Services | Managed IT, Cloud, Security & Networks | exQ',
    description:
      'One accountable team for managed IT, cloud and digital workplace, cybersecurity, network infrastructure and IT consulting.',
    crumbs: ['Services'],
  },
  '/industries': {
    title: 'Industries We Support | exQ Services',
    description:
      'IT, cloud and security support shaped around how professional services, retail, education, healthcare, logistics, hospitality and startups work.',
    crumbs: ['Industries'],
  },
  '/case-studies': {
    title: 'Case Studies | exQ Services',
    description: 'How exQ approaches IT projects, and client case studies published with the client’s approval.',
    crumbs: ['Case Studies'],
  },
  '/contact': {
    title: 'Contact exQ Services | Book a Free IT Consultation',
    description:
      'Book a free consultation or send an enquiry to info@exq.services. Headquartered in Riyadh, Saudi Arabia.',
    crumbs: ['Contact'],
    faqs: generalFaqs,
  },
  '/book': {
    title: 'Book a Free IT Consultation | exQ Services',
    description:
      'Choose a time for a free 30-minute consultation with exQ Services about IT support, cloud, cybersecurity or networks.',
    crumbs: ['Book a consultation'],
  },
  '/privacy-policy': {
    title: 'Privacy Policy | exQ Services',
    description: 'How exQ Services collects, uses and protects information submitted through this website.',
    crumbs: ['Privacy Policy'],
  },
  '/terms-of-service': {
    title: 'Terms of Service | exQ Services',
    description: 'The terms that apply to using the exQ Services website.',
    crumbs: ['Terms of Service'],
  },
}

for (const s of services) {
  base[`/services/${s.slug}`] = {
    title: s.seo.title,
    description: s.seo.description,
    crumbs: [['Services', '/services'], s.name],
    service: s.slug,
    faqs: s.faqs,
  }
}

for (const c of caseStudies) {
  base[`/case-studies/${c.slug}`] = {
    title: `${c.client} | Case Study | exQ Services`,
    description: c.summary,
    crumbs: [['Case Studies', '/case-studies'], c.client],
  }
}

export const routeMeta = base

export const notFoundMeta = {
  title: 'Page not found | exQ Services',
  description: 'The page you were looking for isn’t here. Find exQ Services’ managed IT, cloud, security and network services from the homepage.',
  noindex: true,
}

export const prerenderPaths = Object.keys(base)

export const ogImagePath = '/og-image.jpg'
export const ogImageAlt = 'exQ Services — Managed IT, cloud and cybersecurity'

const abs = (path) => `${company.siteUrl}${path === '/' ? '/' : path}`

// Organization block, used site-wide.
export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${company.siteUrl}/#organization`,
  name: company.name,
  legalName: company.legalName,
  url: company.siteUrl,
  logo: `${company.siteUrl}/logo.png`,
  email: company.email.display,
  telephone: company.phone.schema,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressCountry: 'SA',
  },
  founder: company.founders.map((f) => ({ '@type': 'Person', name: f.name, jobTitle: f.jobTitle })),
}

// The Organization as a nested value (no @context).
const { '@context': _context, ...orgRef } = organizationLd

// Page-specific structured data: WebSite (home), Service, BreadcrumbList, FAQPage.
function structuredData(path, meta) {
  const blocks = []
  if (path === '/') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: company.name,
      url: `${company.siteUrl}/`,
      publisher: { '@id': `${company.siteUrl}/#organization` },
    })
  }
  if (meta.crumbs) {
    const items = [['Home', '/'], ...meta.crumbs.map((c) => (Array.isArray(c) ? c : [c, path]))]
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map(([name, href], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item: abs(href),
      })),
    })
  }
  if (meta.service) {
    const s = getService(meta.service)
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.name,
      serviceType: s.name,
      description: s.seo.description,
      url: abs(path),
      provider: orgRef,
      areaServed: 'Worldwide',
    })
  }
  if (meta.faqs?.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: meta.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  return blocks
}

export function getMeta(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const meta = base[clean]
  if (!meta) return { ...notFoundMeta, url: abs(clean), jsonLd: [] }
  return { ...meta, url: abs(clean), jsonLd: structuredData(clean, meta) }
}
