import { services } from './services'

// Header (Task 10): Services opens the mega menu; Case Studies and Insights
// join this list only once they have real content.
export const mainNav = [
  { label: 'Services', to: '/services', mega: true },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav = {
  services: services.map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
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
