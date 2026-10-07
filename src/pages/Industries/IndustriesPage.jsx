import { Link } from 'react-router'
import { industries, industriesIntro } from '../../data/industries'
import { getService } from '../../data/services'
import { cta } from '../../data/company'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/common/Button'
import { ServiceIcon } from '../../components/common/Icons'
import CtaBand from '../../components/sections/CtaBand'
import './IndustriesPage.css'

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Industries' }]}
        title="Industries we support"
        tagline="IT shaped around the way your sector works."
        lead={`${industriesIntro} These are the kinds of businesses our services suit and the technology they typically depend on. If yours isn’t listed, the same services usually still apply.`}
      />

      <nav className="ind-index" aria-label="Industries on this page">
        <div className="container">
          <ul className="chips">
            {industries.map((ind) => (
              <li key={ind.id}>
                <a href={`#${ind.id}`} className="chip">
                  {ind.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="section section--tight">
        <div className="container ind-list">
          {industries.map((ind, n) => (
            <section key={ind.id} id={ind.id} className="ind" tabIndex={-1} aria-labelledby={`${ind.id}-title`}>
              <div className="ind__head">
                <p className="label tabular">{String(n + 1).padStart(2, '0')}</p>
                <h2 id={`${ind.id}-title`} className="ind__name display">
                  {ind.name}
                </h2>
                <p className="ind__intro">{ind.intro}</p>
              </div>

              <div className="ind__grid">
                <div className="ind__part" data-reveal>
                  <h3 className="ind__label">Challenges</h3>
                  <ul className="ticks">
                    {ind.challenges.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="ind__part" data-reveal style={{ '--i': 1 }}>
                  <h3 className="ind__label">Technology needs</h3>
                  <ul className="ticks">
                    {ind.needs.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="ind__part" data-reveal style={{ '--i': 2 }}>
                  <h3 className="ind__label">Security considerations</h3>
                  <ul className="ticks">
                    {ind.security.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="ind__part" data-reveal style={{ '--i': 3 }}>
                  <h3 className="ind__label">Relevant services</h3>
                  <ul className="ind__svc">
                    {ind.services.map((slug) => {
                      const s = getService(slug)
                      return (
                        <li key={slug}>
                          <Link to={`/services/${slug}`}>
                            <ServiceIcon name={s.icon} size={18} />
                            {s.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              <div className="ind__cta">
                <Button to={`${cta.secondary.to}?service=${ind.services[0]}`} variant="secondary" arrow>
                  Talk to us about IT for {ind.name.toLowerCase()}
                </Button>
              </div>
            </section>
          ))}
        </div>
      </div>

      <CtaBand
        title="Every business runs differently. Tell us how yours does."
        text="We’ll ask about your team, your locations and the systems you rely on, then suggest where to start."
      />
    </>
  )
}
