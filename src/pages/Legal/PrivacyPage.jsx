import LegalPage from './LegalPage'
import { company, legalUpdated } from '../../data/company'

// Plain-language policy covering what this website actually does.
// Have it reviewed by a legal adviser before launch (Task 17).
const sections = [
  {
    heading: 'Who we are',
    body: [
      `${company.legalName} ("exQ", "we", "us") provides IT services from ${company.location}. Contact us about this policy at ${company.email.display}.`,
    ],
  },
  {
    heading: 'What we collect',
    body: [
      'We only collect personal information that you choose to give us. Through this website, that means the details you enter in the enquiry form or when booking a consultation:',
      [
        'Your name and, optionally, your company',
        'Your email address and, optionally, your phone number',
        'The service you are interested in and your message',
        'The date and time you choose for a consultation, and the details you enter when booking it',
      ],
      'If you email, message or call us directly, we receive the information you share in that conversation.',
      'This website does not use analytics, advertising or tracking cookies. Fonts and images are served from our own site.',
    ],
  },
  {
    heading: 'How we use it',
    body: [
      'We use your information to reply to your enquiry, to arrange and hold consultations you book, to prepare quotes or proposals you ask for, and, if you become a client, to provide and administer our services. We do not sell your information or use it for unrelated marketing.',
    ],
  },
  {
    heading: 'Services that process your data',
    body: [
      'We use a small number of service providers to run this website. Each receives only what it needs:',
      [
        'Resend, an email delivery service, delivers enquiry form submissions to our inbox and sends you a confirmation email.',
        'Cloudflare Turnstile checks that enquiry form submissions come from a person rather than an automated script. It may process technical information such as your IP address and browser details.',
        'Microsoft Bookings handles consultation bookings made on our booking page, and sends calendar invitations and confirmations.',
      ],
      'Your messages are then stored by our email provider. We may also disclose information where the law requires it. We do not otherwise share your details with third parties without your permission.',
    ],
  },
  {
    heading: 'Your rights and data protection law',
    body: [
      `We handle personal data in line with the ${company.dataProtectionLaw}.`,
      `To access, correct or delete your personal data, email ${company.email.display}.`,
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      'We keep enquiry correspondence for as long as needed to respond and for reasonable business records. Client records are kept for the duration of our working relationship and any period required by law.',
    ],
  },
  {
    heading: 'Security',
    body: [
      'We take reasonable technical and organisational measures to protect the information we hold. No method of transmission over the internet is completely secure, so please avoid sending passwords or other sensitive credentials through the enquiry form.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: ['If we change how we handle personal information, we will update this page and the date at the top.'],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={legalUpdated}
      intro="How exQ Services collects, uses and protects information submitted through this website."
      sections={sections}
    />
  )
}
