// Fixed facts (Developer Brief, section 1). Every name, contact detail and link
// on the site comes from here. Nothing else may appear: no street address,
// no staff or client counts, no other phone numbers or addresses.

const bookingUrl =
  'https://bookings.cloud.microsoft/book/exQITServicesandConsultation@EXQITSERVICES.onmicrosoft.com/'

export const company = {
  name: 'exQ Services',
  shortName: 'exQ',
  legalName: 'Exq IT Consulting and Services',
  siteUrl: 'https://exq.services',
  location: 'Riyadh, Saudi Arabia',
  positioning: 'Headquartered in Riyadh, supporting clients locally and internationally.',
  email: { display: 'info@exq.services', href: 'mailto:info@exq.services' },
  phone: { display: '+966 50 094 7061', href: 'tel:+966500947061', schema: '+966500947061' },
  whatsapp: { href: 'https://wa.me/966500947061', label: 'WhatsApp' },
  booking: {
    url: bookingUrl,
    embedUrl: `${bookingUrl}?ismsaljsauthenabled`,
  },
  replyPromise: 'We reply to every enquiry within one business day.',
  copyright: '© 2026 Exq IT Consulting and Services. All rights reserved.',
  founders: [
    { name: 'Jamal Ahamed', jobTitle: 'Founder' },
    { name: 'Abdul Hadhi Asif', jobTitle: 'Co-founder' },
  ],
  governingLaw: 'the Kingdom of Saudi Arabia',
  dataProtectionLaw: 'Saudi Personal Data Protection Law (PDPL)',
}

// Primary and secondary calls to action, used site-wide.
export const cta = {
  primary: { label: 'Book a free consultation', to: '/book' },
  secondary: { label: 'Send an enquiry', to: '/contact' },
}

// "Last updated" on the Privacy Policy and Terms. Set to the launch date.
export const legalUpdated = '7 October 2026'
