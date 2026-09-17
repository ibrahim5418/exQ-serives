import { services } from './services'

export const mainNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    children: services.map((s) => ({ label: s.name, to: `/services/${s.slug}`, port: s.port, cable: s.cable })),
  },
  { label: 'Industries', to: '/industries' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav = {
  services: services.map((s) => ({
    label: s.slug === 'it-support' ? s.name : s.shortName,
    to: `/services/${s.slug}`,
  })),
  company: [
    { label: 'About', to: '/about' },
    { label: 'Industries', to: '/industries' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Contact', to: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms-of-service' },
  ],
}
