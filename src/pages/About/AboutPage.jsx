import { Link } from 'react-router'
import { company } from '../../data/company'
import { services } from '../../data/services'
import PageHeader from '../../components/common/PageHeader'
import Figure from '../../components/common/Figure'
import { ArrowRight, Jack } from '../../components/common/Icons'
import CtaBand from '../../components/sections/CtaBand'
import teamImg from '../../assets/images/about-team-1600.webp'
import teamImgSm from '../../assets/images/about-team-800.webp'
import './AboutPage.css'

const team = {
  src: teamImg,
  srcSm: teamImgSm,
  width: 1600,
  height: 1067,
  alt: 'A group of young colleagues gathered around a table, laughing over a laptop',
  caption: 'Colleagues around a meeting table',
  note: 'Stock photo, not the exQ team',
}

// Verified facts only. Shown as an equipment rating plate rather than stat tiles.
const plate = [
  ['Team', 'More than 50 IT professionals'],
  ['Businesses supported', 'Over 40 in the past year'],
  ['Head office', 'Mannady Street, Parrys, Chennai'],
  ['Clients', 'Across India'],
  ['Support', 'Remote and onsite'],
  ['Services', 'Six, from helpdesk to consulting'],
]

const principles = [
  {
    title: 'Tailored, not templated',
    body: [
      'A ten-person design studio and a forty-person logistics office don’t need the same setup, and they shouldn’t pay for the same one.',
      'We start from how your team works, the tools you already have and where you’re heading, then recommend what fits. Sometimes that means doing less than you expected.',
    ],
  },
  {
    title: 'Security and scalability from the start',
    body: [
      'It’s much cheaper to build a network or cloud platform properly than to secure and extend a messy one later.',
      'So the basics go in from day one: sensible access, multi-factor sign-in, backups that restore, and equipment with room to grow.',
    ],
  },
  {
    title: 'People come first',
    body: [
      'Technology problems are really people problems: someone can’t work, a customer is waiting, a manager is stuck.',
      'Our team pairs technical depth with a friendly, down-to-earth manner. We explain what we’re doing in plain language and treat your staff’s time as valuable.',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About' }]}
        title="An IT team that works as part of yours"
        lead="exQ Services is a Chennai-based team of more than 50 IT professionals. We look after the everyday technology of businesses across India: support, cloud, security, networks and websites."
        aside={<Figure image={team} priority ratio="4 / 3" sizes="(min-width: 60em) 40vw, 100vw" />}
      />

      <section className="section" aria-labelledby="who-title">
        <div className="container about-who">
          <div className="about-who__copy">
            <h2 id="who-title">Who we are</h2>
            <div className="prose">
              <p>
                Most growing businesses depend on technology every hour of the day, but few can justify a full IT
                department of their own. That’s the gap we fill.
              </p>
              <p>
                We’re a team of more than 50 IT professionals covering support, cloud platforms, cybersecurity,
                networking, web infrastructure and consulting. In the past year alone we supported over 40 businesses,
                from remote support and onsite troubleshooting to cloud management, security and infrastructure setup.
              </p>
              <p>
                Our aim hasn’t changed: make IT effortless, secure and scalable, so the people we work with can focus on
                growing their business.
              </p>
            </div>
            <p className="about-who__line">Technology made simple. Support that sticks.</p>
          </div>

          <aside className="plate" aria-label="exQ Services at a glance">
            <p className="plate__head">
              <span className="wordmark">
                exQ<span className="wordmark__dot">.</span>
              </span>
              <span className="plate__model">Services</span>
            </p>
            <dl className="plate__rows">
              {plate.map(([k, v]) => (
                <div key={k} className="plate__row">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section sheet" aria-labelledby="partner-title">
        <div className="container split split--even about-pair">
          <div>
            <h2 id="partner-title">A partner, not a call-out service</h2>
            <div className="prose">
              <p>
                Some IT providers only appear when something breaks. We’d rather be involved before it does. We get to
                know how your business runs, who uses what and where your technology is heading, so advice and fixes fit
                the business rather than a checklist.
              </p>
              <p>
                In practice that means one team you can reach, and regular reviews instead of silence until the next
                outage.
              </p>
            </div>
          </div>
          <div>
            <h2>Why proactive support matters</h2>
            <div className="prose">
              <p>
                Most IT failures give warning signs first: a disk filling up, a backup that quietly stopped running, a
                laptop months behind on updates, a certificate about to expire.
              </p>
              <p>
                Catching those early is cheaper and far less disruptive than dealing with the outage afterwards. That’s
                why maintenance, health checks and regular reviews are built into the way we support clients, not sold
                as extras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="container">
          <div className="section-head">
            <h2 id="how-title">How we approach the work</h2>
          </div>
          <div className="principles">
            {principles.map((p) => (
              <article key={p.title} className="principles__item">
                <h3>{p.title}</h3>
                {p.body.map((para) => (
                  <p key={para.slice(0, 20)}>{para}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-rack" aria-labelledby="cap-title">
        <div className="container split">
          <div className="section-head">
            <h2 id="cap-title">What we can take on</h2>
            <p>
              Six service lines, run by one team. That matters more than it sounds: the people setting up your firewall
              also know how your cloud accounts and laptops are configured.
            </p>
          </div>
          <ul className="about-caps">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>
                  <span className="about-caps__port tabular">{s.port}</span>
                  <Jack cable={s.cable} size={16} />
                  <span className="about-caps__name">{s.name}</span>
                  <ArrowRight width={18} height={18} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="where-title">
        <div className="container split">
          <h2 id="where-title">Where we are</h2>
          <div className="prose">
            <p>
              Our head office is on Mannady Street in Parrys, Chennai. We work with businesses across India: remote
              support reaches you wherever you are, and onsite visits are arranged according to your location.
            </p>
            <address className="about-address">
              {company.address.lines.map((l) => (
                <span key={l}>{l}</span>
              ))}
              <a href={company.phone.href}>{company.phone.display}</a>
              <a href={company.email.href}>{company.email.display}</a>
            </address>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let’s talk about how your technology should work."
        text="A short conversation is usually enough to see where we could help, and whether we’re the right fit."
      />
    </>
  )
}
