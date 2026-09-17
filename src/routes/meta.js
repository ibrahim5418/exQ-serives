// Page titles and descriptions for every route. Used by the browser
// (useHeadMeta) and by scripts/prerender.js, so each page ships with its own
// <title>, description, canonical URL and Open Graph tags in the HTML.
import { company } from '../data/company'
import { services } from '../data/services'

const base = {
  '/': {
    title: 'exQ Services | IT Support, Cloud, Cybersecurity & Networks, Chennai',
    description:
      'exQ Services helps businesses across India manage, secure and improve everyday technology: IT support, managed services, cloud, cybersecurity, networks, hosting and IT consulting.',
  },
  '/about': {
    title: 'About exQ Services | An IT Team That Works as Part of Yours',
    description:
      'exQ Services is a Chennai-based team of 50+ IT professionals that supported 40+ businesses in the past year. Partnership-first, proactive and tailored IT support.',
  },
  '/services': {
    title: 'Business IT Services | Support, Cloud, Security, Networks & More',
    description:
      'Six IT services from one team: IT support and managed services, cloud and SaaS, cybersecurity, network infrastructure, website and hosting, and IT consulting.',
  },
  '/industries': {
    title: 'Industries | Technology Support for Growing Businesses',
    description:
      'How exQ Services supports the technology behind professional firms, retail, education, healthcare, logistics, hospitality, startups and other growing businesses.',
  },
  '/case-studies': {
    title: 'Case Studies & Project Work | exQ Services',
    description:
      'How exQ Services documents its IT projects: challenge, approach, solution, technology and outcome, plus the kinds of projects the team takes on.',
  },
  '/contact': {
    title: 'Contact exQ Services | Get a Free IT Consultation',
    description:
      'Talk to exQ Services about IT support, cloud, cybersecurity, networks or hosting. Call +91 96004 21207, email sales@exq.services or send an enquiry.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | exQ Services',
    description: 'How exQ Services collects, uses and protects information submitted through this website.',
  },
  '/terms-of-service': {
    title: 'Terms of Service | exQ Services',
    description: 'The terms that apply to using the exQ Services website.',
  },
}

for (const s of services) {
  base[`/services/${s.slug}`] = {
    title: `${s.seo.title} | exQ Services`,
    description: s.seo.description,
  }
}

export const routeMeta = base

export const notFoundMeta = {
  title: 'Page not found | exQ Services',
  description: 'The page you were looking for isn’t here. Find exQ Services’ IT support, cloud, security and network services from the homepage.',
  noindex: true,
}

export const prerenderPaths = Object.keys(base)

export function getMeta(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const meta = base[clean]
  if (!meta) return { ...notFoundMeta, url: `${company.siteUrl}${clean}` }
  return { ...meta, url: `${company.siteUrl}${clean === '/' ? '/' : clean}` }
}

export const ogImagePath = '/og-image.jpg'
