// Homepage-only content blocks.

// "You'll usually hear from a business when…" — each moment points at a service.
export const moments = [
  { text: 'Your team keeps losing time to small IT problems nobody owns.', service: 'it-support' },
  { text: 'Email and files are scattered across accounts nobody manages.', service: 'cloud-saas' },
  { text: 'A client asks how you protect their data, and you’re not sure what to say.', service: 'cybersecurity' },
  { text: 'You’re moving office, or opening a new one, and the network has to be ready.', service: 'network-infrastructure' },
  { text: 'The website or email broke, and nobody remembers who set up the domain.', service: 'website-hosting' },
  { text: 'You’re about to spend real money on technology and want a second opinion.', service: 'it-consulting' },
]

// Rack elevation: what sits in a typical office cabinet and what exQ does with it.
// `u` is the unit height in the rack.
export const rackUnits = [
  { u: 1, label: 'FIREWALL', name: 'Firewall', text: 'Rules, secure remote access and guest separation.', service: 'cybersecurity' },
  { u: 1, label: 'SWITCH', name: 'Managed switch', text: 'Switching, VLANs and power for phones, cameras and access points.', service: 'network-infrastructure' },
  { u: 2, label: 'PATCH PANEL', name: 'Patch panel', text: 'Structured cabling, labelled end to end.', service: 'network-infrastructure', patch: true },
  { u: 1, label: 'WI-FI', name: 'Wireless', text: 'Access points planned for coverage and capacity.', service: 'network-infrastructure' },
  { u: 2, label: 'NVR / CCTV', name: 'CCTV recorder', text: 'IP cameras and recording on the network.', service: 'network-infrastructure' },
  { u: 2, label: 'SERVER / NAS', name: 'Storage and backup', text: 'Local files, backups and the way back after a failure.', service: 'cybersecurity' },
  { u: 2, label: 'UPS', name: 'Power protection', text: 'Battery backup and clean shutdowns when the power cuts.', service: 'network-infrastructure' },
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

// How an engagement runs, drawn as a single cable run.
export const process = [
  { title: 'Talk', text: 'A conversation about your business, your team and what’s getting in the way.' },
  { title: 'Assess', text: 'We look at your setup properly, onsite or remotely, and write down what we find.' },
  { title: 'Plan', text: 'You get a plain-language plan and quote, with priorities you can agree to.' },
  { title: 'Set up', text: 'We do the work, tidy what exists, and document everything we touch.' },
  { title: 'Support', text: 'We stay on: day-to-day help, maintenance and regular reviews as you grow.' },
]

// What working with exQ looks like. Drawn from the company's stated values;
// these are ways of working, not service-level guarantees.
export const commitments = [
  { title: 'You’ll know who you’re dealing with.', text: 'We’d rather work as an extension of your team than as a ticket queue, so we get to know your setup and the people who use it.' },
  { title: 'We explain before we act.', text: 'You’ll hear what we plan to do, why, and what it involves before the work starts, in plain language rather than jargon.' },
  { title: 'We keep a record as we go.', text: 'What we set up and change gets written down, so the next fix starts from facts instead of guesswork.' },
  { title: 'We’ll tell you when you don’t need to spend.', text: 'Sometimes the right answer is to configure what you already own properly. We’d rather say so.' },
]
