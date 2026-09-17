// Case studies.
//
// Nothing is published yet: the previous site had no verified project write-ups,
// and this site does not invent clients or results. When a write-up has been
// approved by the client, add an object below and set `published: true`.
//
// {
//   slug: 'office-network-rollout',           // used for anchors
//   published: false,                          // only published entries render
//   client: 'Client name, or a description such as "A 40-person CA firm"',
//   clientApproved: false,                     // written permission to name them
//   sector: 'Professional services',
//   services: ['network-infrastructure', 'cybersecurity'],
//   summary: 'One sentence a visitor can scan.',
//   challenge: 'What was wrong or what needed to change.',
//   approach: 'How the work was planned.',
//   solution: 'What was delivered.',
//   technology: ['Structured cabling', 'Managed switches', 'Business Wi-Fi'],
//   outcome: 'What changed for the client. Only measurable claims the client agrees with.',
// }

export const caseStudies = []

export const publishedCaseStudies = caseStudies.filter((c) => c.published)

// The fields every write-up follows, shown on the Case Studies page.
export const caseStudyFields = [
  { key: 'challenge', label: 'Challenge', hint: 'What wasn’t working, and what it was costing the business.' },
  { key: 'approach', label: 'Approach', hint: 'How we assessed the situation and planned the work.' },
  { key: 'solution', label: 'Solution', hint: 'What we put in place, and how it was rolled out.' },
  { key: 'technology', label: 'Technology', hint: 'The platforms, equipment and tools involved.' },
  { key: 'outcome', label: 'Outcome', hint: 'What changed for the client afterwards, in their words where possible.' },
]

// Kinds of work exQ takes on. These describe engagement types, not specific clients.
export const engagementTypes = [
  { title: 'Office network rollout', services: ['network-infrastructure'], text: 'Cabling, switching, Wi-Fi and firewall for a new or relocated office.' },
  { title: 'Email and file migration', services: ['cloud-saas'], text: 'Moving mail, calendars and shared files off old servers onto a managed cloud platform.' },
  { title: 'Security clean-up', services: ['cybersecurity'], text: 'Multi-factor sign-in, device protection, access reviews and tested backups after an assessment.' },
  { title: 'Managed support takeover', services: ['it-support'], text: 'Documenting an undocumented setup and taking over day-to-day support.' },
  { title: 'Domain and hosting recovery', services: ['website-hosting'], text: 'Regaining control of domains and hosting, and fixing DNS for site and email.' },
  { title: 'IT assessment and roadmap', services: ['it-consulting'], text: 'A written review of the current setup with a prioritised plan for the next year.' },
]
