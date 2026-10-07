// Business types exQ supports (Task 13). These describe typical technology needs,
// not claimed clients or specialisations. Keep it that way unless a real,
// approved client example exists. exQ serves enterprises and growing businesses
// in each sector.
//
// Structure per industry: challenges → needs ("Usually involves") →
// security considerations → relevant services → CTA.

export const industriesIntro = 'We support both enterprises and growing businesses in each of these sectors.'

export const industries = [
  {
    id: 'growing-businesses',
    name: 'Growing businesses',
    intro:
      'Growing businesses need dependable IT long before they can justify a full IT department. Support, security and a well-run network matter as much at fifteen people as they do at five hundred.',
    challenges: [
      'IT falls to whoever is most comfortable with computers, on top of their real job',
      'Systems added one at a time, with nothing written down',
      'Every new hire needs accounts, a laptop and access, and it takes days',
    ],
    needs: ['Everyday helpdesk and onsite cover', 'Business email and shared files', 'Basic security across devices and accounts', 'An office network that just works'],
    security: [
      'Multi-factor sign-in and updated devices before the first client asks',
      'Access removed promptly when people leave',
    ],
    services: ['it-support', 'cloud-saas', 'cybersecurity'],
  },
  {
    id: 'professional',
    name: 'Professional services',
    intro:
      'Accountants, legal practices, consultancies and agencies live on documents, email and client trust. Confidential files need to be easy for the team to reach and hard for anyone else to.',
    challenges: [
      'Confidential client files spread across inboxes, laptops and personal drives',
      'Staff working from the office, client sites and home',
      'Clients asking for evidence of how their data is protected',
    ],
    needs: ['Secure document storage and sharing', 'Email protection against impersonation and fraud', 'Reliable remote access for staff', 'Backups that can be restored quickly'],
    security: [
      'Protection against invoice fraud and mailbox takeover',
      'Clear, reviewable permissions on client folders',
    ],
    services: ['cloud-saas', 'cybersecurity', 'it-support'],
  },
  {
    id: 'retail',
    name: 'Retail',
    intro:
      'Point-of-sale terminals, card readers, stock systems and store Wi-Fi have to work during trading hours, and a shop floor is no place for tangled cables or shared passwords.',
    challenges: [
      'Downtime at the till costs sales immediately',
      'Several outlets set up differently, each with its own quirks',
      'Little or no technical staff on site',
    ],
    needs: ['Stable connectivity for point-of-sale and payment devices', 'Payment and guest traffic kept on separate networks', 'CCTV on the store network', 'Consistent setups across multiple outlets'],
    security: [
      'Payment devices kept on their own network segment',
      'No shared passwords on tills and back-office systems',
    ],
    services: ['network-infrastructure', 'cybersecurity', 'it-support'],
  },
  {
    id: 'education',
    name: 'Education',
    intro:
      'Schools, colleges and training institutes run lots of users on shared devices, computer labs and Wi-Fi that gets hammered at the start of every session.',
    challenges: [
      'Hundreds of users sharing devices and Wi-Fi at the same moment',
      'Staff and student accounts that change every term',
      'Small IT teams supporting a large estate',
    ],
    needs: ['Computer lab setup and maintenance', 'Wi-Fi designed for many users at once', 'Staff and student accounts managed centrally', 'Sensible controls on shared devices'],
    security: [
      'Student and staff data kept apart, with access by role',
      'Shared devices that reset cleanly and can’t be misused',
    ],
    services: ['network-infrastructure', 'cloud-saas', 'it-support'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    intro:
      'Appointment systems, patient records and connected equipment need to be available when patients are waiting, and patient information needs careful protection.',
    challenges: [
      'Front desks and clinical systems that can’t wait for a fix',
      'Connected equipment from different vendors on the same network',
      'Sensitive records that must stay available and private',
    ],
    needs: ['Reliable networks for front desks and connected equipment', 'Controlled access to patient information', 'Backups for records and billing systems', 'Quick help when a system stops working'],
    security: [
      'Access to patient information limited by role and reviewed regularly',
      'Tested backups for records and billing systems',
    ],
    services: ['cybersecurity', 'network-infrastructure', 'it-support'],
  },
  {
    id: 'logistics',
    name: 'Logistics',
    intro:
      'Warehouses and transport offices depend on coverage in awkward spaces, handheld devices, tracking systems and a solid link between depots and head office.',
    challenges: [
      'Wi-Fi coverage across large, metal-heavy spaces',
      'Handheld scanners and printers that must keep working on every shift',
      'Depots and offices that need to share the same systems',
    ],
    needs: ['Wi-Fi coverage across warehouse floors', 'Handheld scanners and printers kept working', 'Connectivity between sites', 'Cloud tools for teams on the move'],
    security: [
      'Secure links between depots and head office',
      'Lost or shared handheld devices that can be locked remotely',
    ],
    services: ['network-infrastructure', 'it-support', 'cloud-saas'],
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    intro:
      'Guest Wi-Fi, billing systems, booking platforms and CCTV all sit on the same premises. Guests notice when the Wi-Fi is poor; owners notice when the billing system stops.',
    challenges: [
      'Guest Wi-Fi that has to perform at peak times',
      'Billing, booking and CCTV systems from different suppliers',
      'Round-the-clock operations with few technical staff on shift',
    ],
    needs: ['Guest Wi-Fi kept separate from business systems', 'Billing and booking systems supported', 'CCTV and access devices on the network', 'Website, domain and email kept running'],
    security: [
      'Guest networks fully separated from billing and staff systems',
      'Booking and payment data kept out of shared accounts',
    ],
    services: ['network-infrastructure', 'cybersecurity', 'website-hosting'],
  },
  {
    id: 'startups',
    name: 'Startups',
    intro:
      'Setting things up properly at the start is far cheaper than untangling them at fifty people. A few early decisions about accounts, devices and security save months later.',
    challenges: [
      'Fast hiring with no standard setup for new starters',
      'Tools signed up for on personal cards and accounts',
      'Security questions from the first enterprise customer or investor',
    ],
    needs: ['Cloud email, storage and accounts set up correctly from day one', 'Standard laptop setup for every new hire', 'Security basics before the first client audit', 'A technology plan that scales with headcount'],
    security: [
      'Company-owned accounts with multi-factor sign-in from the start',
      'A documented baseline ready for customer security questionnaires',
    ],
    services: ['cloud-saas', 'it-consulting', 'it-support'],
  },
]
