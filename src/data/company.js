// Verified company facts. Source: the previous exq.services site (checked 14 Sep 2026).
// Only add figures here that the business can stand behind.

export const company = {
  name: 'exQ Services',
  shortName: 'exQ',
  siteUrl: 'https://exq.services',
  tagline: 'IT support, cloud, security and infrastructure for growing businesses.',
  mission:
    'Make IT effortless, secure and scalable, so the businesses we work with can focus on growing.',
  stats: [
    { value: '50+', label: 'IT professionals on the team' },
    { value: '40+', label: 'businesses supported in the past year' },
  ],
  address: {
    street: 'Mannady Street, Parrys',
    city: 'Chennai',
    postcode: '600001',
    region: 'Tamil Nadu',
    country: 'India',
    lines: ['Mannady Street, Parrys', 'Chennai 600 001', 'Tamil Nadu, India'],
  },
  phone: { display: '+91 96004 21207', href: 'tel:+919600421207' },
  email: { display: 'sales@exq.services', href: 'mailto:sales@exq.services' },
  serviceArea: 'Clients across India, with head office in Chennai',
  // The five values stated on the previous site, reworded for clarity.
  values: [
    {
      title: 'Partnership first',
      text: 'We don’t just fix problems and leave. We build working relationships and, over time, become an extension of your team.',
    },
    {
      title: 'Reliable, proactive support',
      text: 'Help when something breaks, and ongoing maintenance so it breaks less often in the first place.',
    },
    {
      title: 'Tailored, not one-size-fits-all',
      text: 'Recommendations built around your goals, your budget and the infrastructure you already have.',
    },
    {
      title: 'Security and scalability at the core',
      text: 'Networks and cloud systems set up to be safe today and ready to grow with the business.',
    },
    {
      title: 'People-centred service',
      text: 'Technical expertise with a friendly, down-to-earth attitude. We explain things in plain language.',
    },
  ],
}

// EmailJS keeps working exactly as it did on the previous site.
// Values can be overridden per environment through .env (see .env.example).
export const emailConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'g_ZlobahDenG2yrCY',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_m8bov1a',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_dvz3yys',
}
