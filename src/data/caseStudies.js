// Proof content: case studies, testimonials, client logos and example engagements.
//
// exQ has no published client work yet, and nothing invented may appear (Task 14).
// Each type lives in its own JSON file under ./content. Every component that
// renders one of them renders nothing when its file is empty, so adding an
// entry is all it takes to make it appear.
//
// content/caseStudies.json — one object per approved write-up:
// {
//   "slug": "office-network-rollout",            // URL: /case-studies/office-network-rollout
//   "published": true,                            // only published entries render
//   "client": "Client name (written permission required)",
//   "industry": "Professional services",
//   "summary": "One sentence a visitor can scan.",
//   "challenge": "What wasn't working.",
//   "solution": "What was put in place.",
//   "technology": ["Structured cabling", "Managed switches"],
//   "implementation": "How the work was carried out.",
//   "impact": "What changed for the business, in terms the client agrees with.",
//   "quote": { "text": "…", "name": "…", "role": "…" },   // optional
//   "services": ["network-infrastructure"]
// }
//
// content/testimonials.json — [{ "quote": "…", "name": "…", "role": "…", "company": "…" }]
// content/clientLogos.json  — [{ "name": "…", "logo": "/logos/client.svg" }]  (written permission only)

import caseStudiesData from './content/caseStudies.json'
import testimonialsData from './content/testimonials.json'
import clientLogosData from './content/clientLogos.json'
import examplesData from './content/examples.json'

export const caseStudies = caseStudiesData.filter((c) => c.published)
export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug)

export const testimonials = testimonialsData
export const clientLogos = clientLogosData

// Example engagements: typical projects, not specific clients.
export const examples = examplesData
export const getExample = (id) => examples.find((e) => e.id === id)
// Every example card carries this label: "Example engagement: shows a typical project, not a specific client."
export const exampleLabel = { title: 'Example engagement', note: 'shows a typical project, not a specific client.' }

// The five parts every case-study write-up follows (shown on the Case Studies page).
export const caseStudyFields = [
  { key: 'challenge', label: 'Challenge', hint: 'What wasn’t working, and what it was costing the business.' },
  { key: 'solution', label: 'Solution', hint: 'What we put in place, and why.' },
  { key: 'technology', label: 'Technology', hint: 'The platforms, equipment and tools involved.' },
  { key: 'implementation', label: 'Implementation', hint: 'How the work was planned and rolled out.' },
  { key: 'impact', label: 'Business impact', hint: 'What changed for the client afterwards, in their words where possible.' },
]
