// Homepage-only content blocks (Task 11).

// "Businesses usually get in touch when…" — each moment points at a service.
export const moments = [
  { text: 'Your team keeps losing time to small IT problems nobody owns.', service: 'it-support' },
  { text: 'Email and files are scattered across accounts nobody manages.', service: 'cloud-saas' },
  { text: 'A client asks how you protect their data, and you’re not sure what to say.', service: 'cybersecurity' },
  { text: 'You’re moving office, or opening a new one, and the network has to be ready.', service: 'network-infrastructure' },
  { text: 'The website or email broke, and nobody remembers who set up the domain.', service: 'website-hosting' },
  { text: 'You’re about to spend real money on technology and want a second opinion.', service: 'it-consulting' },
]

// Two ways of working with exQ.
export const engagementTracks = [
  {
    title: 'For enterprises',
    text: 'Extra hands and specialist skills alongside your in-house IT team, from infrastructure projects to security reviews and managed operations.',
  },
  {
    title: 'For growing businesses',
    text: 'A complete outsourced IT department, from day-to-day helpdesk to cloud, security and networks.',
  },
]

// "What working with exQ looks like."
export const whyExq = [
  { icon: 'team', title: 'One accountable team', text: 'Support, cloud, security and networks planned together, not by separate suppliers.' },
  { icon: 'document', title: 'Documented from day one', text: 'Everything we set up or change is written down, and the records are yours.' },
  { icon: 'scale', title: 'Advice before spend', text: 'Sometimes the right answer is to configure what you already own.' },
  { icon: 'gear', title: 'Operations experience', text: 'Our founders run IT and infrastructure operations day to day.' },
]

// Rack elevation: what sits in a typical office cabinet and what exQ does with it.
// `u` is the unit height in the rack.
export const rackUnits = [
  { u: 1, label: 'Firewall', text: 'Rules, secure remote access and guest separation.', service: 'cybersecurity' },
  { u: 1, label: 'Managed switch', text: 'Switching, VLANs and power for phones, cameras and access points.', service: 'network-infrastructure' },
  { u: 2, label: 'Patch panel', text: 'Structured cabling, labelled end to end.', service: 'network-infrastructure', patch: true },
  { u: 1, label: 'Wireless', text: 'Access points planned for coverage and capacity.', service: 'network-infrastructure' },
  { u: 2, label: 'CCTV recorder', text: 'IP cameras and recording on the network.', service: 'network-infrastructure' },
  { u: 2, label: 'Storage and backup', text: 'Local files, backups and the way back after a failure.', service: 'cybersecurity' },
  { u: 2, label: 'Power protection', text: 'Battery backup and clean shutdowns when the power cuts.', service: 'network-infrastructure' },
]

// Everything that doesn't live in the rack.
export const offRack = [
  { name: 'Laptops, desktops and printers', service: 'it-support' },
  { name: 'Business email and calendars', service: 'cloud-saas' },
  { name: 'Cloud storage and collaboration', service: 'cloud-saas' },
  { name: 'Accounts, sign-in and access', service: 'cybersecurity' },
  { name: 'Domains, DNS and SSL', service: 'website-hosting' },
  { name: 'Hosting and website upkeep', service: 'website-hosting' },
]

// How we work: six steps, one line each.
export const process = [
  { title: 'Discover', text: 'Understand your business, team and goals.' },
  { title: 'Assess', text: 'Review your current setup and write down what we find.' },
  { title: 'Design', text: 'A plain-language plan and quote with clear priorities.' },
  { title: 'Implement', text: 'Do the work and document everything we touch.' },
  { title: 'Operate', text: 'Day-to-day support and maintenance.' },
  { title: 'Optimise', text: 'Regular reviews and improvements as you grow.' },
]
