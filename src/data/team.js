// Leadership (Task 15). Bios must match the approved copy word for word.
// No LinkedIn or other personal profile links, and no employer names.
// Add `photo` (a matching WebP headshot, at least 800 × 800) when available;
// until then the card shows the initials.

export const leadershipIntro =
  'exQ is led by practitioners who have run IT and infrastructure operations day to day.'

export const leaders = [
  {
    id: 'jamal-ahamed',
    name: 'Jamal Ahamed',
    initials: 'JA',
    title: 'Founder',
    remit: 'Leads IT operations, service management and client delivery',
    bio: [
      'Jamal Ahamed is the Founder of exQ, where he leads service delivery and client relationships.',
      'He specialises in IT operations and service management, helping organisations run secure, stable and well-governed technology environments. His experience spans IT service management, Windows Server administration, Microsoft 365 and Google Workspace, DNS and ERP platforms, IT asset lifecycle, procurement and cybersecurity policy across the Middle East and South Asia.',
    ],
    expertise: [
      'IT Operations & ITSM',
      'Microsoft 365 & Google Workspace',
      'Systems Administration',
      'IT Governance & Cybersecurity Policy',
      'IT Asset & Vendor Management',
    ],
    credentials: ['BSc, Information Technology'],
    photo: null,
  },
  {
    id: 'abdul-hadhi-asif',
    name: 'Abdul Hadhi Asif',
    initials: 'AH',
    title: 'Co-founder',
    remit: 'Leads infrastructure operations and managed services',
    bio: [
      'Abdul Hadhi Asif is Co-founder of exQ, where he leads infrastructure operations and managed services.',
      'He brings enterprise operational discipline from 24/7 high-availability environments, with experience in VMware virtualisation, identity and access management, backup and disaster recovery, network operations and SLA-driven incident management.',
    ],
    expertise: [
      'Infrastructure & Virtualisation',
      'Identity & Access Management',
      'Backup & Disaster Recovery',
      'NOC & Incident Management',
      'ITIL / ITSM',
    ],
    credentials: ['BBA, Information Systems Management', 'Microsoft Certified: Azure Fundamentals'],
    photo: null,
  },
]
