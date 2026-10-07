// The six services. Every page that mentions a service reads from here,
// so wording changes happen in one place.
//
// `number` is the service's fixed label ("Service 01"). `practice` groups the
// six services into the five practice areas used by the menu and homepage.

export const services = [
  {
    slug: 'it-support',
    ctaText: 'Tell us where IT is costing your team time. We’ll suggest practical next steps, with no obligation.',
    number: '01',
    practice: 'managed-it',
    icon: 'support',
    name: 'Managed IT & Support',
    shortName: 'Managed IT & Support',
    readout:
      'Day-to-day help for your people and devices, remote or onsite, plus the upkeep that stops problems coming back.',
    overview: {
      problem:
        "When a laptop won't start or the printer drops off the network, the real cost isn't the repair. It's the hours your team spends waiting, working around it, or fixing it themselves.",
      service:
        'We act as your IT desk. Your staff reach a team that knows your setup. We fix what we can remotely, come onsite when we can’t, and keep up the maintenance that stops the same faults recurring.',
      whoFor: 'Businesses without an in-house IT team, or with one person stretched across too much.',
      outcome: 'Fewer interruptions, faster fixes and one place to call.',
    },
    seo: {
      title: 'Managed IT & Support Services | exQ Services',
      description:
        'Helpdesk, remote and onsite support, device management and preventive maintenance, with one team that knows your environment.',
    },
    // "What you receive" (Task 12)
    deliverables: [
      'User and device register',
      'Agreed support channel and response expectations in writing',
      'Record of every fix',
      'Monthly service summary',
    ],
    // Matching example engagement (Task 14), where one exists
    example: null,
    hero: {
      title: 'IT support your team can actually reach',
      lead: 'Remote and onsite support for your people, devices and systems, with the routine maintenance that keeps small problems from turning into lost days.',
    },
    problem: {
      title: 'Most IT problems aren’t dramatic. They’re constant.',
      body: [
        'A slow laptop here, a mailbox that won’t sync there, a new joiner who waits three days for a working login. None of it is a crisis, but together it adds up to hours of lost work every week.',
        'In many growing businesses, IT falls to whoever is most comfortable with computers. That person has a real job too. Nothing gets written down, so every fix starts from scratch.',
      ],
      signs: [
        'Staff fix their own IT issues, or just live with them',
        'Nobody is sure which devices are up to date or still under warranty',
        'New starters wait days for a laptop, email and access',
        'The same problem keeps coming back after it’s been “fixed”',
      ],
    },
    solution: {
      title: 'One team that knows your setup',
      body: [
        'We take over the day-to-day. Your staff raise an issue by phone or email and someone familiar with your environment picks it up. Most problems are sorted remotely in the same conversation; when hands are needed, an engineer comes to your office.',
        'Alongside the fixes we handle the quiet work: updates, device health checks, and a record of what you have and how it’s configured. That record is what makes the next fix faster.',
      ],
    },
    included: [
      { title: 'Remote helpdesk', text: 'Help by phone, email and remote session for software, email, printing and access problems.' },
      { title: 'Onsite support', text: 'An engineer at your office for hardware faults, installations and anything that can’t be solved remotely.' },
      { title: 'Hardware troubleshooting', text: 'Diagnosis and repair for laptops, desktops, printers and peripherals.' },
      { title: 'Software troubleshooting', text: 'Operating system faults, business applications, crashes, slowdowns and licensing issues.' },
      { title: 'Device setup', text: 'New computers prepared, configured and handed over ready to use, with accounts and apps in place.' },
      { title: 'Joiners and leavers', text: 'Accounts, devices and access ready on day one, and removed cleanly when someone leaves.' },
      { title: 'Preventive maintenance', text: 'Scheduled updates, health checks and clean-ups so devices stay reliable.' },
      { title: 'Connectivity issues', text: 'Wi-Fi, VPN and internet problems traced to their cause rather than just restarted.' },
      { title: 'System records', text: 'An up-to-date list of your devices, users and key settings, maintained as we work.' },
    ],
    needs: [
      'A 15-person office with no IT staff and a growing list of small problems',
      'A business whose one IT-minded employee has had enough of being the helpdesk',
      'A company opening a second location that needs the same support there',
      'A team with an internal IT lead who needs extra hands and onsite cover',
    ],
    benefits: [
      { title: 'Less waiting', text: 'Problems reach someone who can fix them instead of sitting in an inbox.' },
      { title: 'Fewer repeat faults', text: 'Root causes are fixed and recorded, so the same issue doesn’t return next month.' },
      { title: 'Predictable upkeep', text: 'Maintenance happens on a schedule rather than after something breaks.' },
      { title: 'Your people stay on their work', text: 'Nobody on your team has to be the unofficial IT department.' },
    ],
    approach: [
      { title: 'Walk-through', text: 'We visit or call to understand your team, devices, software and the problems you deal with most.' },
      { title: 'Baseline', text: 'We record what you have, fix anything urgent and agree how your staff will reach us.' },
      { title: 'Ongoing support', text: 'Day-to-day requests handled remotely or onsite, with maintenance on a regular schedule.' },
      { title: 'Review', text: 'We look back at what came up, what keeps recurring and what should be replaced or improved.' },
    ],
    faqs: [
      { q: 'Do you only offer remote support?', a: 'No. Most issues are quickest to fix remotely, but we come onsite for hardware faults, installations and anything that needs someone in the room.' },
      { q: 'Can you work alongside our existing IT person?', a: 'Yes. Many businesses have someone internal who knows the company well. We can take the routine load, cover leave, or handle specialist work while they stay the main point of contact.' },
      { q: 'What does support cover?', a: 'The computers, printers and peripherals your team uses every day, your office network, and the business software people rely on. If something falls outside what we handle, we’ll say so and help you find the right specialist.' },
      { q: 'How do we get started?', a: 'Usually with a conversation and a walk-through of your setup. You can start with a one-off clean-up or a specific project and move to ongoing support once you’ve seen how we work.' },
    ],
  },
  {
    slug: 'cloud-saas',
    ctaText: 'Tell us how your email, files and cloud accounts are set up today. We’ll suggest practical next steps, with no obligation.',
    number: '02',
    practice: 'cloud',
    icon: 'cloud',
    name: 'Cloud & Digital Workplace',
    shortName: 'Cloud & Digital Workplace',
    readout:
      'Business email, cloud storage and collaboration tools set up properly and kept tidy as your team changes.',
    overview: {
      problem:
        'Cloud tools are easy to sign up for and hard to run well. Accounts pile up, files end up in five places, and nobody is sure who still has access.',
      service:
        'We set up or migrate your email, storage and collaboration platforms, then look after the administration: users, licences, permissions and support.',
      whoFor: 'Businesses moving off old email servers or shared drives, and teams whose cloud accounts grew without a plan.',
      outcome: 'Cloud tools that are simpler to manage, less wasteful and safer to use.',
    },
    seo: {
      title: 'Cloud & Digital Workplace | Microsoft 365 & Google Workspace | exQ',
      description:
        'Set-up, migration and administration of business email, storage and collaboration platforms, with licences and access kept in order.',
    },
    // "What you receive" (Task 12)
    deliverables: [
      'Tenant configuration record',
      'User and licence register',
      'Migration plan with sign-off',
      'Admin handover',
    ],
    // Matching example engagement (Task 14), where one exists
    example: 'microsoft-365',
    hero: {
      title: 'Cloud tools, set up properly and kept in order',
      lead: 'Business email, file storage and collaboration platforms planned, migrated and administered, so your team gets the benefit of the cloud without the sprawl.',
    },
    problem: {
      title: 'The cloud made software easy to buy. Running it is another matter.',
      body: [
        'Most businesses never planned their cloud setup. Someone signed up for email, someone else started a shared folder, and a few years later there are paid licences for people who have left, files spread across personal accounts, and no clear owner.',
        'Moving off an old email server or a local file share feels risky too. Nobody wants to be the person who lost ten years of mail during the switch.',
      ],
      signs: [
        'You’re paying for licences nobody uses',
        'Company files live in personal accounts and inboxes',
        'Former employees may still have access to your data',
        'Email still runs on an old server or a hosting plan nobody manages',
      ],
    },
    solution: {
      title: 'A cloud setup with a plan behind it',
      body: [
        'We start by working out what you actually use and what you need. Then we set up or tidy your platform: domain, mailboxes, shared storage, groups and permissions, with sensible security settings from the beginning.',
        'Migrations are planned and tested before anything moves, and scheduled so your team isn’t cut off mid-week. Afterwards we stay on as administrators, handling new users, leavers, licence changes and the questions that come up.',
      ],
    },
    included: [
      { title: 'Cloud setup', text: 'A business productivity platform configured for your domain, users and way of working.' },
      { title: 'Email migration', text: 'Mailboxes, contacts and calendars moved from old servers or providers without losing mail.' },
      { title: 'Business email', text: 'Professional email on your own domain, with spam filtering and correct DNS records.' },
      { title: 'Cloud storage', text: 'Shared drives and folder structures that match how your teams work, with sensible permissions.' },
      { title: 'Collaboration tools', text: 'Chat, video meetings, shared calendars and document co-editing set up and explained.' },
      { title: 'User and licence management', text: 'Accounts created, changed and removed as people join, move and leave; licences matched to real use.' },
      { title: 'SaaS administration', text: 'Day-to-day administration of the cloud applications your business depends on.' },
      { title: 'Cloud migration', text: 'Files and workloads moved off local servers and shared drives in stages, with a way back if needed.' },
      { title: 'Ongoing cloud support', text: 'Help for your staff with sync problems, sharing, access and everyday questions.' },
    ],
    needs: [
      'An office still running email on an ageing local server',
      'A company whose files are split across personal drives, USB disks and one shared PC',
      'A growing team that needs consistent accounts and permissions for every new hire',
      'A business that suspects it pays for more licences than it uses',
    ],
    benefits: [
      { title: 'Work from anywhere, properly', text: 'The same files and email in the office, at home or on the road.' },
      { title: 'Tidy administration', text: 'Clear ownership of accounts, licences and shared data.' },
      { title: 'Less waste', text: 'Licences matched to the people and features you actually need.' },
      { title: 'Safer data', text: 'Access controlled centrally and removed promptly when people leave.' },
    ],
    approach: [
      { title: 'Review', text: 'We map your current email, storage and apps: what’s used, what’s paid for and who has access.' },
      { title: 'Plan', text: 'We agree the target setup, the migration order and a cut-over date that suits your team.' },
      { title: 'Migrate and configure', text: 'Data moves in stages and is checked; security and sharing settings are configured.' },
      { title: 'Administer', text: 'We stay on as your cloud administrators, handling changes and support requests.' },
    ],
    faqs: [
      { q: 'Will we lose email during a migration?', a: 'A migration should be planned so mail keeps flowing throughout. Existing mail is copied first, delivery is switched at an agreed time, and anything that arrived in between is brought across.' },
      { q: 'Which cloud platform should we use?', a: 'It depends on how your team works, the tools you already rely on and your budget. We’ll talk through the options, explain the trade-offs and make a recommendation before you commit.' },
      { q: 'Can you take over a setup someone else built?', a: 'Yes. We review what’s there, document it, fix anything risky and then manage it from that point on.' },
      { q: 'Is the cloud secure enough for our business data?', a: 'The major business platforms offer strong security, but a lot depends on configuration. Multi-factor sign-in, sensible sharing rules and regular access reviews are part of how we set things up.' },
    ],
  },
  {
    slug: 'cybersecurity',
    ctaText: 'Tell us what worries you about your security. We’ll help you work out what matters most, with no obligation.',
    number: '03',
    practice: 'security',
    icon: 'shield',
    name: 'Cybersecurity',
    shortName: 'Cybersecurity',
    readout:
      'Practical protection for your users, devices, accounts and network, starting with the risks most likely to hurt you.',
    overview: {
      problem:
        'Most breaches at smaller businesses don’t need a sophisticated attacker. A reused password, an unpatched laptop or a convincing email is usually enough.',
      service:
        'We assess where you’re exposed, put sensible protection in place across devices, accounts, networks and backups, and help your staff spot the tricks aimed at them.',
      whoFor: 'Any business that holds customer data, handles payments, or relies on systems it can’t afford to lose.',
      outcome: 'Fewer avoidable risks, and a clear plan if something does go wrong.',
    },
    seo: {
      title: 'Cybersecurity Services | Assessment, Protection & Recovery | exQ',
      description:
        'Security assessments, identity and endpoint protection, network security, backup and recovery, and staff awareness.',
    },
    // "What you receive" (Task 12)
    deliverables: [
      'Written assessment with prioritised risks',
      'Remediation record',
      'Backup restore test report',
      'Access review',
    ],
    // Matching example engagement (Task 14), where one exists
    example: 'security-baseline',
    hero: {
      title: 'Security that fits the way your business works',
      lead: 'Practical protection for your people, devices, accounts and network. We start with the risks most likely to cause real damage and deal with those first.',
    },
    problem: {
      title: 'Most attacks on businesses aren’t clever. They’re opportunistic.',
      body: [
        'Attackers look for easy ways in: an account without multi-factor sign-in, a laptop that hasn’t been updated for months, a shared admin password, an employee who opens a convincing invoice email.',
        'Buying security products doesn’t close those gaps on its own. What helps is knowing where you’re exposed, configuring what you already own properly, and making sure you can recover if something gets through.',
      ],
      signs: [
        'Staff share passwords or use the same one everywhere',
        'You can’t say for certain that every laptop is updated and protected',
        'Nobody has checked whether your backups actually restore',
        'Former employees or old vendors may still have access',
      ],
    },
    solution: {
      title: 'Close the gaps that matter most',
      body: [
        'We begin with a practical assessment of devices, accounts, network, email, backups and how your staff work. You get a plain-language summary of where the real risks are and what to do about each one.',
        'Then we put the fixes in place, from endpoint protection and account security to firewall rules and backup routines, and keep them maintained. Where it’s useful, we run short awareness sessions so your team knows what a phishing attempt looks like.',
      ],
    },
    included: [
      { title: 'Security assessment', text: 'A practical review of devices, accounts, network and habits, with prioritised recommendations.' },
      { title: 'Endpoint protection', text: 'Protection software deployed and kept current on laptops, desktops and servers.' },
      { title: 'Device security', text: 'Encryption, screen locks, update policies and secure configuration for company devices.' },
      { title: 'Account security', text: 'Multi-factor sign-in, password policies and removal of shared or stale accounts.' },
      { title: 'Access controls', text: 'People get access to what their role needs, and lose it when they leave.' },
      { title: 'Network security', text: 'Firewall configuration, separated guest networks and secure remote access.' },
      { title: 'Security configuration', text: 'Email, cloud platforms and systems hardened with sensible, documented settings.' },
      { title: 'Backup and recovery', text: 'Backups designed around what you can’t afford to lose, with restores tested.' },
      { title: 'Security awareness', text: 'Short, practical sessions that help staff recognise phishing and social engineering.' },
      { title: 'Monitoring where it fits', text: 'Alerts and log review on key systems, scoped to your needs and agreed in writing.' },
    ],
    needs: [
      'A business that has had a scare, such as a hacked mailbox or a suspicious payment request',
      'A company asked by a client or partner to show that basic security measures are in place',
      'An office where devices, passwords and access have never been reviewed',
      'A team handling customer data that wants to reduce its exposure',
    ],
    benefits: [
      { title: 'Fewer easy targets', text: 'The common gaps attackers rely on are closed first.' },
      { title: 'A way back', text: 'Tested backups and a clear idea of what happens if something goes wrong.' },
      { title: 'Answers for clients', text: 'Something concrete to point to when customers ask how you protect their data.' },
      { title: 'Staff who know what to look for', text: 'Your people become a line of defence rather than the weak link.' },
    ],
    approach: [
      { title: 'Assess', text: 'We review devices, accounts, network, email and backups, and talk to the people who use them.' },
      { title: 'Prioritise', text: 'You get a short, plain-language list of risks, ordered by likelihood and impact.' },
      { title: 'Fix', text: 'We implement the agreed measures, starting with those that remove the most risk.' },
      { title: 'Maintain', text: 'Protection stays current, access is reviewed and backups are tested on a schedule.' },
    ],
    faqs: [
      { q: 'Do you provide security monitoring?', a: 'Monitoring is scoped for each client. If your systems need it, we agree in writing what is watched, how alerts are handled and during which hours, before any work begins.' },
      { q: 'We’re a small business. Are we really a target?', a: 'Most attacks are automated and indiscriminate, so size doesn’t protect you. Smaller businesses are often easier targets simply because the basic protections were never set up.' },
      { q: 'Will security measures slow my team down?', a: 'They shouldn’t. Multi-factor sign-in, updates and sensible access rules add seconds, not hours. We design controls around how your team works so nobody goes looking for workarounds.' },
      { q: 'Can you help us answer a client’s security questionnaire?', a: 'Yes. We can help you answer it accurately and put missing measures in place where you need them.' },
    ],
  },
  {
    slug: 'network-infrastructure',
    ctaText: 'Tell us about your office, or the one you’re moving into. We’ll suggest practical next steps, with no obligation.',
    number: '04',
    practice: 'network',
    icon: 'network',
    name: 'Network & Infrastructure',
    shortName: 'Network & Infrastructure',
    readout:
      'Wired and wireless networks, cabling, firewalls and office hardware, planned and installed to work reliably.',
    overview: {
      problem:
        'An unreliable network makes everything else unreliable. Dropped calls, slow file access and Wi-Fi dead spots usually trace back to how the network was put together.',
      service:
        'We design, install and support office networks: structured cabling, switches, routers, Wi-Fi, firewalls and the devices that connect to them, including CCTV where needed.',
      whoFor: 'Businesses moving into or fitting out an office, adding a location, or living with a network that grew piece by piece.',
      outcome: 'Connectivity your team can depend on, and a setup someone can actually understand.',
    },
    seo: {
      title: 'Network & Infrastructure Services | exQ Services',
      description:
        'Design, installation and support of office networks: cabling, switching, Wi-Fi, firewalls, CCTV and power protection.',
    },
    // "What you receive" (Task 12)
    deliverables: [
      'Network diagram',
      'Labelled cabling schedule',
      'IP and VLAN plan',
      'Device configuration backups',
    ],
    // Matching example engagement (Task 14), where one exists
    example: 'office-network',
    hero: {
      title: 'A network your office can depend on',
      lead: 'Office networks planned, cabled, installed and supported, from the patch panel and switches to Wi-Fi, firewalls and every device that connects to them.',
    },
    problem: {
      title: 'A network is only as good as the way it was put together.',
      body: [
        'Plenty of office networks grew one cable and one cheap switch at a time. It works, mostly, until the Wi-Fi drops during a client call or nobody can tell which cable goes where.',
        'When a network is planned properly, with suitable equipment, tidy labelled cabling and documented settings, problems become rare, and easy to trace when they do happen.',
      ],
      signs: [
        'Wi-Fi is weak or drops in parts of the office',
        'Nobody knows which cable goes to which desk or device',
        'Home-grade routers and switches are doing business work',
        'Moving a desk or adding staff means another messy cable run',
      ],
    },
    solution: {
      title: 'Planned, installed and labelled properly',
      body: [
        'We start with a site survey: your floor plan, how many people and devices you have, where you need coverage and what you’ll need in a year or two. From that we plan the cabling, equipment and Wi-Fi layout.',
        'Installation is done neatly, with every run labelled and the rack dressed so it can be maintained. You receive documentation of what was installed and how it’s configured, and we stay on hand to support and extend it.',
      ],
    },
    included: [
      { title: 'Network design', text: 'A layout for cabling, switching, Wi-Fi and security based on your space and plans for growth.' },
      { title: 'LAN and WAN setup', text: 'Office networks, and links between branches or sites, configured and tested.' },
      { title: 'Wi-Fi', text: 'Access points placed for coverage and capacity, with separate staff and guest networks.' },
      { title: 'Routers and switches', text: 'Business-grade equipment selected, configured and documented.' },
      { title: 'Firewalls', text: 'Firewall deployment, rules and ongoing support to control what gets in and out.' },
      { title: 'Structured cabling', text: 'Planned cable runs, patch panels and network points, labelled end to end.' },
      { title: 'Racks and wiring', text: 'Tidy racks and cabinets, cable management and power planning.' },
      { title: 'Device integration', text: 'Printers, phones, access control and other devices connected and configured.' },
      { title: 'CCTV and surveillance support', text: 'IP cameras and recorders installed on your network and kept working.' },
      { title: 'Office IT fit-outs', text: 'The full technology setup for a new or relocated office, coordinated with your move.' },
    ],
    needs: [
      'A business moving into a new office that needs cabling and Wi-Fi before the first day',
      'An office with dead spots, slow speeds or regular outages',
      'A company adding a branch that needs to connect back to head office',
      'A site that needs CCTV added to its existing network',
    ],
    benefits: [
      { title: 'Reliable connections', text: 'Fewer drops, better coverage and consistent speeds across the office.' },
      { title: 'Easy to maintain', text: 'Labelled cabling and documented settings make changes and fixes quicker.' },
      { title: 'Room to grow', text: 'Capacity planned for more people and devices, not just today’s headcount.' },
      { title: 'Safer by design', text: 'Guest traffic kept separate and access controlled at the firewall.' },
    ],
    approach: [
      { title: 'Survey', text: 'We walk the site, review what already exists and understand how the space will be used.' },
      { title: 'Design', text: 'You get a plan covering cabling, equipment and Wi-Fi coverage, with a clear quote.' },
      { title: 'Install', text: 'We install, label, configure and test, working around your business hours where possible.' },
      { title: 'Document and support', text: 'You receive the documentation, and we support and extend the network as you grow.' },
    ],
    faqs: [
      { q: 'Can you schedule work so we aren’t disrupted?', a: 'We plan installations to keep disruption low and can schedule the noisy or disruptive parts outside business hours where needed. Timings are agreed before the job starts.' },
      { q: 'Do you supply the equipment?', a: 'We’ll recommend equipment that suits your needs and budget, and can arrange supply or work with hardware you already own if it’s fit for the job.' },
      { q: 'We already have a network. Can you fix it rather than replace it?', a: 'Often, yes. We review what’s there, keep what’s sound and fix or replace only what’s causing problems.' },
      { q: 'Do you handle CCTV?', a: 'We support IP-based CCTV that runs on your network: cameras, recorders, cabling and remote viewing.' },
    ],
  },
  {
    slug: 'website-hosting',
    ctaText: 'Tell us where your domain, website and email live today, if you know. We’ll help you untangle it.',
    number: '05',
    practice: 'consulting',
    icon: 'globe',
    name: 'Web Infrastructure',
    shortName: 'Web Infrastructure',
    readout:
      'Domains, hosting, DNS, SSL and website upkeep handled, so your site stays online, secure and renewed on time.',
    overview: {
      problem:
        'Expired domains, lapsed SSL certificates and hosting logins nobody can find are more common than you’d think, and they tend to surface at the worst possible moment.',
      service:
        'We look after the technical side of your web presence: domain and DNS management, hosting, SSL, website setup and deployment, and ongoing maintenance.',
      whoFor: 'Businesses whose website was set up years ago by someone no longer around, or who want one team handling domains, email records and hosting.',
      outcome: 'A website that stays up, loads securely and renews on time.',
    },
    seo: {
      title: 'Web Infrastructure | Domains, DNS, Hosting & SSL | exQ',
      description:
        'Domains, DNS, hosting, SSL and website upkeep managed by one team, so your site and email stay online and secure.',
    },
    // "What you receive" (Task 12)
    deliverables: [
      'Register of domains, DNS, hosting and SSL with renewal dates',
      'All logins handed to the owner',
      'Renewal reminders',
    ],
    // Matching example engagement (Task 14), where one exists
    example: null,
    hero: {
      title: 'The technical side of your website, looked after',
      lead: 'Domains, DNS, hosting, SSL and site maintenance managed by one team, so your website and the email that depends on it stay online.',
    },
    problem: {
      title: 'Websites rarely fail because of the design.',
      body: [
        'They fail because a domain wasn’t renewed, a certificate expired, the hosting account belongs to a former employee, or a DNS change quietly broke company email.',
        'These are technical jobs with long gaps between them, which is exactly why they get forgotten. We keep track of them so you don’t have to.',
      ],
      signs: [
        'You’re not sure who controls your domain name',
        'Browsers have warned visitors that your site isn’t secure',
        'Hosting, domain and email are spread across different accounts',
        'Nobody has updated the website software in a long time',
      ],
    },
    solution: {
      title: 'One team for domains, hosting and upkeep',
      body: [
        'We bring your domains, DNS and hosting under clear, company-owned accounts and document where everything lives. SSL certificates are set up to renew, and the DNS records for your website and email are checked and corrected.',
        'For new sites we handle hosting setup and deployment. For existing ones we take on maintenance: updates, backups, checks that the site is up and responding, and fixes when something breaks. We aren’t a marketing agency; our job is keeping the site running properly.',
      ],
    },
    included: [
      { title: 'Domain management', text: 'Registration, renewals and transfers, held in accounts your business owns.' },
      { title: 'DNS management', text: 'Records for your website, email and services configured correctly and documented.' },
      { title: 'Web hosting', text: 'Hosting suited to your site, set up and managed.' },
      { title: 'SSL certificates', text: 'HTTPS across your site, with certificates that renew on time.' },
      { title: 'Website setup', text: 'A new site set up on hosting and connected to your domain.' },
      { title: 'Website deployment', text: 'Sites moved or launched carefully, with a rollback plan.' },
      { title: 'Website maintenance', text: 'Software updates, backups and fixes that keep the site secure and working.' },
      { title: 'Web infrastructure support', text: 'Email authentication records, redirects, performance and hosting issues.' },
    ],
    needs: [
      'A business whose website was built by a freelancer who can no longer be reached',
      'A company whose email stopped working after a website change',
      'An organisation that wants its domains and hosting in its own name rather than a vendor’s',
      'A site that needs moving to more reliable hosting',
    ],
    benefits: [
      { title: 'No surprise outages', text: 'Renewals and certificates are tracked before they lapse.' },
      { title: 'You own your assets', text: 'Domains and hosting sit in accounts your business controls.' },
      { title: 'Email that keeps working', text: 'DNS changes are made with your mail in mind.' },
      { title: 'A secure site', text: 'HTTPS everywhere and software kept up to date.' },
    ],
    approach: [
      { title: 'Audit', text: 'We find out where your domain, DNS, hosting and site live today, and who controls them.' },
      { title: 'Consolidate', text: 'Accounts move into your ownership and are documented, without taking anything offline.' },
      { title: 'Secure', text: 'SSL, DNS and email records are corrected and backups put in place.' },
      { title: 'Maintain', text: 'Renewals, updates and fixes are handled as part of ongoing support.' },
    ],
    faqs: [
      { q: 'Do you design websites?', a: 'Our focus is the technical side: domains, hosting, deployment, security and maintenance. If you need a new design, we’re happy to work alongside your designer or agency.' },
      { q: 'Can you move our site to new hosting without downtime?', a: 'We plan migrations so the switch is as short as possible, usually timed for a quiet period, with the old site kept available until the new one is confirmed working.' },
      { q: 'Our domain is registered in someone else’s name. Can you help?', a: 'Yes. We’ll help you establish ownership and transfer the domain into an account your business controls.' },
      { q: 'Will changing hosting affect our email?', a: 'It can if DNS is handled carelessly. We check your email records before any change and keep mail flowing throughout.' },
    ],
  },
  {
    slug: 'it-consulting',
    ctaText: 'Tell us about the decision or project in front of you. We’ll help you think it through, with no obligation.',
    number: '06',
    practice: 'consulting',
    icon: 'compass',
    name: 'IT Consulting & Projects',
    shortName: 'IT Consulting & Projects',
    readout:
      'Clear advice, assessments and project help for the technology decisions that are expensive to get wrong.',
    overview: {
      problem:
        'Technology often gets bought in a hurry, because a vendor called at the right moment or something broke. A year later it doesn’t fit, and nobody remembers why it was chosen.',
      service:
        'We help you assess what you have, plan what you need, choose the right tools and vendors, and deliver one-off projects, with documentation you keep.',
      whoFor: 'Owners and managers facing a technology decision, an audit, an office move, or a system that isn’t working out.',
      outcome: 'Better technology decisions, made with a plan rather than a sales pitch.',
    },
    seo: {
      title: 'IT Consulting & Projects | Strategy, Assessment & Roadmaps | exQ',
      description:
        'Independent IT assessments, roadmaps, vendor selection and project delivery for technology decisions that are costly to get wrong.',
    },
    // "What you receive" (Task 12)
    deliverables: [
      'Current-state assessment',
      '12-month technology roadmap',
      'Vendor comparison',
      'Project plan',
    ],
    // Matching example engagement (Task 14), where one exists
    example: null,
    hero: {
      title: 'Technology decisions, made with a plan',
      lead: 'Assessments, planning, vendor selection and project delivery for businesses that want clear advice before they spend.',
    },
    problem: {
      title: 'The expensive mistakes happen before anything is installed.',
      body: [
        'A system bought without clear requirements. A vendor chosen because they called at the right time. An office move where IT was an afterthought until the week before.',
        'A little planning up front avoids most of this. It helps to have someone on your side who understands the technology and will explain the trade-offs in plain terms.',
      ],
      signs: [
        'You’re about to buy a system and aren’t sure it’s the right one',
        'An auditor, client or investor is asking questions about your IT',
        'Your technology has grown without anyone writing it down',
        'You have a project, such as an office move, and nobody to own the IT side',
      ],
    },
    solution: {
      title: 'Clear advice, then help delivering it',
      body: [
        'Consulting starts with understanding your business: what you do, how your team works and where technology helps or gets in the way. We review your current setup and give you a written assessment with practical recommendations and priorities.',
        'When you’re ready to act, we help select tools and vendors, plan the work, and manage or deliver special projects, from office relocations to system rollouts. Everything we find and change is documented, so the knowledge stays with your business.',
      ],
    },
    included: [
      { title: 'IT assessments', text: 'A structured review of systems, devices, security and support, with written findings.' },
      { title: 'Technology planning', text: 'A practical roadmap that matches IT spending to where the business is heading.' },
      { title: 'Vendor and tool selection', text: 'Requirements defined, options compared, and a recommendation you can defend.' },
      { title: 'Infrastructure planning', text: 'Capacity, network and hardware planning for growth, new sites or relocations.' },
      { title: 'Technology recommendations', text: 'Straight answers on what to keep, replace, consolidate or stop paying for.' },
      { title: 'IT documentation', text: 'Clear records of systems, accounts, network and procedures, written for your team.' },
      { title: 'Audit preparation', text: 'Help gathering evidence and closing gaps before an IT, security or client audit.' },
      { title: 'Special projects', text: 'Office moves, system rollouts and one-off technology projects, planned and delivered.' },
      { title: 'Digital transformation support', text: 'Moving paper-based or manual processes onto suitable digital tools.' },
    ],
    needs: [
      'A business choosing new software that wants an independent view first',
      'A company preparing for an audit or a client’s IT due diligence',
      'An office relocation that needs the IT side planned and managed',
      'A growing business that wants a plan instead of buying technology piecemeal',
    ],
    benefits: [
      { title: 'Fewer costly mistakes', text: 'Decisions based on requirements, not on whichever vendor called first.' },
      { title: 'A plan you can follow', text: 'Priorities and budgets set out clearly, one step at a time.' },
      { title: 'Knowledge that stays', text: 'Documentation that outlasts any single employee or supplier.' },
      { title: 'Projects with an owner', text: 'Someone accountable for the technology side of your project.' },
    ],
    approach: [
      { title: 'Understand', text: 'We learn how your business runs and what you’re trying to achieve.' },
      { title: 'Assess', text: 'We review your current technology and identify gaps, risks and waste.' },
      { title: 'Recommend', text: 'You receive written, prioritised recommendations in plain language.' },
      { title: 'Deliver', text: 'If you choose, we plan and carry out the work, and document the result.' },
    ],
    faqs: [
      { q: 'Is consulting only for large companies?', a: 'No. Smaller businesses often benefit most, because one poor purchase or a badly planned move takes a bigger share of the budget.' },
      { q: 'Will you just recommend your own services?', a: 'Recommendations are based on what fits your business. Sometimes that includes work we can do; sometimes it’s another supplier, or simply using an existing tool differently.' },
      { q: 'What do we get at the end of an assessment?', a: 'A written summary of what you have, what’s working, what’s at risk and what we’d do next, in order of priority.' },
      { q: 'Can you manage a project that involves other suppliers?', a: 'Yes. We can coordinate with software vendors, landlords, electricians and internet providers so the technology side of the project has a single point of contact.' },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)

// The five practice areas (Task 10). Each lists its services in menu order;
// Web Infrastructure sits as the second link under IT Consulting & Projects.
export const practiceAreas = [
  { id: 'managed-it', label: 'Managed IT & Support', services: ['it-support'] },
  { id: 'cloud', label: 'Cloud & Digital Workplace', services: ['cloud-saas'] },
  { id: 'security', label: 'Cybersecurity', services: ['cybersecurity'] },
  { id: 'network', label: 'Network & Infrastructure', services: ['network-infrastructure'] },
  { id: 'consulting', label: 'IT Consulting & Projects', services: ['it-consulting', 'website-hosting'] },
].map((area) => ({ ...area, services: area.services.map(getService) }))
