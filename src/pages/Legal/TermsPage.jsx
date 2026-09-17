import LegalPage from './LegalPage'
import { company } from '../../data/company'

// Website terms of use. Service agreements with clients are separate documents.
// Have these reviewed by a legal adviser before relying on them.
const sections = [
  {
    heading: 'About these terms',
    body: [
      `These terms apply to your use of the ${company.name} website at exq.services. By using the site, you agree to them. Work we carry out for clients is covered by separate written agreements, not by these terms.`,
    ],
  },
  {
    heading: 'Information on this site',
    body: [
      'The content on this website is general information about our services. It is not professional advice for your specific situation, and it may change without notice. Please talk to us before making decisions based on it.',
    ],
  },
  {
    heading: 'Intellectual property',
    body: [
      `The text, design and exQ name and wordmark on this site belong to ${company.name}. Photographs are licensed stock images used for illustration. You may share links to our pages, but please do not copy or republish substantial parts of the site without permission.`,
    ],
  },
  {
    heading: 'Enquiries',
    body: [
      'Sending an enquiry through this website does not create a contract or oblige either of us to anything. Any work is agreed separately, in writing.',
    ],
  },
  {
    heading: 'Links to other websites',
    body: ['Where we link to other websites, we are not responsible for their content or how they handle your information.'],
  },
  {
    heading: 'Liability',
    body: [
      'We work to keep this website accurate and available, but we cannot guarantee that it will always be error-free or uninterrupted. To the extent permitted by law, we are not liable for losses arising from use of the website itself.',
    ],
  },
  {
    heading: 'Governing law',
    body: ['These terms are governed by the laws of India.'],
  },
  {
    heading: 'Contact',
    body: [`Questions about these terms can be sent to ${company.email.display}.`],
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="14 September 2026"
      intro="The terms that apply when you use the exQ Services website."
      sections={sections}
    />
  )
}
