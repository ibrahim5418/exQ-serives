import PageHeader from '../../components/common/PageHeader'
import Rise from '../../components/common/Rise'
import LeaderCards from '../../components/sections/LeaderCards'
import CtaBand from '../../components/sections/CtaBand'
import { leadershipIntro } from '../../data/team'
import './AboutPage.css'

// Section order follows Task 15: intro, mission, vision, how we work,
// leadership, how we deliver, final CTA.

const facts = [
  ['Headquarters', 'Riyadh, Saudi Arabia'],
  ['Delivery', 'Remote and onsite'],
  ['Services', 'Five practice areas, one team'],
  ['Engagements', 'Enterprises and growing businesses'],
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
      'We pair technical depth with a friendly, down-to-earth manner. We explain what we’re doing in plain language and treat your staff’s time as valuable.',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About' }]}
        title="An IT team that works as part of yours"
        lead="exQ Services is an IT services company that looks after the everyday technology of growing businesses and enterprises: support, cloud, security, networks and web infrastructure. Headquartered in Riyadh, we support clients locally and internationally."
      />

      <section className="section section--tight" aria-label="exQ Services at a glance">
        <div className="container">
          <dl className="facts">
            {facts.map(([k, v], i) => (
              <div key={k} className="facts__item" data-reveal style={{ '--i': i }}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--surface" aria-label="Mission and vision">
        <div className="container mv">
          <div className="mv__item" data-reveal>
            <h2 className="label">Mission</h2>
            <p className="mv__text">
              To give every organisation we work with IT that is secure, reliable and well documented, delivered by one
              accountable team.
            </p>
          </div>
          <div className="mv__item" data-reveal style={{ '--i': 1 }}>
            <h2 className="label">Vision</h2>
            <p className="mv__text">
              To be the most trusted IT operations partner for businesses in Saudi Arabia and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="partner-title">
        <div className="container split split--even about-pair">
          <div data-reveal>
            <h2 id="partner-title" className="display">
              A partner, not a call-out service
            </h2>
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
          <div data-reveal style={{ '--i': 1 }}>
            <h2 className="display">Why proactive support matters</h2>
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

      <section className="section section--surface" aria-labelledby="how-title">
        <div className="container">
          <div className="section-head">
            <h2 id="how-title" className="display">
              <Rise text="How we approach the work" />
            </h2>
          </div>
          <div className="principles">
            {principles.map((p, i) => (
              <article key={p.title} className="principles__item card" data-reveal style={{ '--i': i }}>
                <h3>{p.title}</h3>
                {p.body.map((para) => (
                  <p key={para.slice(0, 20)}>{para}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="section" aria-labelledby="leadership-title" tabIndex={-1}>
        <div className="container">
          <div className="section-head">
            <h2 id="leadership-title" className="display">
              <Rise text="Leadership" />
            </h2>
            <p>{leadershipIntro}</p>
          </div>
          <LeaderCards />
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="deliver-title">
        <div className="container split">
          <h2 id="deliver-title" className="display">
            How we deliver
          </h2>
          <p className="lead deliver__text" data-reveal>
            We are headquartered in Riyadh. Remote support reaches clients wherever they operate, and onsite work is
            arranged by location.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
