// Business types exQ can support. These describe typical technology needs,
// not claimed clients or specialisations. Keep it that way unless a real,
// approved client example exists.

export const industries = [
  {
    id: 'smb',
    name: 'Small and medium businesses',
    title: 'Technology support for small and medium businesses',
    intro:
      'Growing businesses need dependable IT long before they can justify a full IT department. Support, security and a well-run network matter as much at fifteen people as they do at five hundred.',
    needs: ['Everyday helpdesk and onsite cover', 'Business email and shared files', 'Basic security across devices and accounts', 'An office network that just works'],
    services: ['it-support', 'cloud-saas', 'cybersecurity'],
  },
  {
    id: 'professional',
    name: 'Professional services',
    title: 'Technology support for professional firms',
    intro:
      'Accountants, legal practices, consultancies and agencies live on documents, email and client trust. Confidential files need to be easy for the team to reach and hard for anyone else to.',
    needs: ['Secure document storage and sharing', 'Email protection against impersonation and fraud', 'Reliable remote access for staff', 'Backups that can be restored quickly'],
    services: ['cloud-saas', 'cybersecurity', 'it-support'],
  },
  {
    id: 'retail',
    name: 'Retail',
    title: 'Technology support for retail businesses',
    intro:
      'Billing counters, card terminals, stock systems and store Wi-Fi have to work during trading hours, and a shop floor is no place for tangled cables or shared passwords.',
    needs: ['Stable connectivity for billing and payment devices', 'Payment and guest traffic kept on separate networks', 'CCTV on the store network', 'Consistent setups across multiple outlets'],
    services: ['network-infrastructure', 'cybersecurity', 'it-support'],
  },
  {
    id: 'education',
    name: 'Education',
    title: 'Technology support for schools and training centres',
    intro:
      'Schools, colleges and training institutes run lots of users on shared devices, computer labs and Wi-Fi that gets hammered at the start of every session.',
    needs: ['Computer lab setup and maintenance', 'Wi-Fi designed for many users at once', 'Staff and student accounts managed centrally', 'Sensible controls on shared devices'],
    services: ['network-infrastructure', 'cloud-saas', 'it-support'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    title: 'Technology support for clinics and diagnostic centres',
    intro:
      'Appointment systems, patient records and connected equipment need to be available when patients are waiting, and patient information needs careful protection.',
    needs: ['Reliable networks for front desks and connected equipment', 'Controlled access to patient information', 'Backups for records and billing systems', 'Quick help when a system stops working'],
    services: ['cybersecurity', 'network-infrastructure', 'it-support'],
  },
  {
    id: 'logistics',
    name: 'Logistics',
    title: 'Technology support for logistics and warehousing',
    intro:
      'Warehouses and transport offices depend on coverage in awkward spaces, handheld devices, tracking systems and a solid link between depots and head office.',
    needs: ['Wi-Fi coverage across warehouse floors', 'Handheld scanners and printers kept working', 'Connectivity between sites', 'Cloud tools for teams on the move'],
    services: ['network-infrastructure', 'it-support', 'cloud-saas'],
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    title: 'Technology support for hotels and restaurants',
    intro:
      'Guest Wi-Fi, billing systems, booking platforms and CCTV all sit on the same premises. Guests notice when the Wi-Fi is poor; owners notice when the billing system stops.',
    needs: ['Guest Wi-Fi kept separate from business systems', 'Billing and booking systems supported', 'CCTV and access devices on the network', 'Website, domain and email kept running'],
    services: ['network-infrastructure', 'cybersecurity', 'website-hosting'],
  },
  {
    id: 'startups',
    name: 'Startups and growing businesses',
    title: 'Technology support for startups and scaling teams',
    intro:
      'Setting things up properly at the start is far cheaper than untangling them at fifty people. A few early decisions about accounts, devices and security save months later.',
    needs: ['Cloud email, storage and accounts set up correctly from day one', 'Standard laptop setup for every new hire', 'Security basics before the first client audit', 'A technology plan that scales with headcount'],
    services: ['cloud-saas', 'it-consulting', 'it-support'],
  },
]
