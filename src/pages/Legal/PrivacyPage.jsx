import LegalPage from './LegalPage'
import { company } from '../../data/company'

// Plain-language policy covering what this website actually does.
// Have it reviewed by a legal adviser before relying on it.
const sections = [
  {
    heading: 'Who we are',
    body: [
      `${company.name} ("exQ", "we", "us") provides IT services from Mannady Street, Parrys, Chennai 600 001, Tamil Nadu, India. You can contact us about this policy at ${company.email.display}.`,
    ],
  },
  {
    heading: 'What we collect',
    body: [
      'We only collect personal information that you choose to give us. Through this website, that means the details you enter in the enquiry form:',
      ['Your name and, optionally, your company', 'Your email address and, optionally, your phone number', 'The service you are interested in and your message'],
      'If you call or email us directly, we receive the information you share in that conversation.',
      'This website does not use analytics, advertising or tracking cookies, and fonts and images are served from our own site.',
    ],
  },
  {
    heading: 'How we use it',
    body: [
      'We use your information to reply to your enquiry, to prepare quotes or proposals you ask for, and, if you become a client, to provide and administer our services. We do not sell your information or use it for unrelated marketing.',
    ],
  },
  {
    heading: 'Who we share it with',
    body: [
      'Enquiry form submissions are delivered to our inbox through EmailJS, an email delivery service, and stored by our email provider. We may also disclose information where the law requires it. We do not otherwise share your details with third parties without your permission.',
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      'We keep enquiry correspondence for as long as needed to respond and for reasonable business records. Client records are kept for the duration of our working relationship and any period required by law.',
    ],
  },
  {
    heading: 'Your choices',
    body: [
      `You can ask us to show you the personal information we hold about you, correct it, or delete it where we are not required to keep it. Email ${company.email.display} and we will respond as soon as we reasonably can.`,
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
      updated="14 September 2026"
      intro="What happens to the information you share with exQ Services through this website."
      sections={sections}
    />
  )
}
