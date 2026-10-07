import { Link } from 'react-router'
import { practiceAreas } from '../../data/services'
import { cta } from '../../data/company'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/common/Button'
import { ArrowRight, ServiceIcon } from '../../components/common/Icons'
import TechStrip from '../../components/sections/TechStrip'
import CtaBand from '../../components/sections/CtaBand'
import './ServicesPage.css'

const fields = [
  ['problem', 'The problem'],
  ['service', 'What we do'],
  ['whoFor', 'Who it’s for'],
  ['outcome', 'What changes'],
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Services' }]}
        title="IT services"
        tagline="One accountable team for managed IT, cloud, security, networks and consulting."
        lead="Each service below solves a specific business problem. Use one, or let us look after the lot: the same team plans your network, cloud accounts and security together."
      >
        <Button to={cta.primary.to}>{cta.primary.label}</Button>
        <Button to={cta.secondary.to} variant="secondary">
          {cta.secondary.label}
        </Button>
      </PageHeader>

      <nav className="svc-index" aria-label="Practice areas on this page">
        <div className="container">
          <ul>
            {practiceAreas.map((a) => (
              <li key={a.id}>
                <a href={`#${a.id}`}>{a.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="section section--tight">
        <div className="container svc-areas">
          {practiceAreas.map((area) => (
            <section key={area.id} id={area.id} className="svc-area" tabIndex={-1} aria-labelledby={`${area.id}-title`}>
              <h2 id={`${area.id}-title`} className="svc-area__title display">
                {area.label}
              </h2>
              <div className="svc-area__list">
                {area.services.map((s) => (
                  <article key={s.slug} className="svc-entry card" data-reveal aria-labelledby={`${s.slug}-title`}>
                    <div className="svc-entry__head">
                      <span className="icon-tile">
                        <ServiceIcon name={s.icon} />
                      </span>
                      <div>
                        <p className="label tabular">Service {s.number}</p>
                        <h3 id={`${s.slug}-title`} className="svc-entry__title">
                          {s.name}
                        </h3>
                      </div>
                      <Link to={`/services/${s.slug}`} className="link-arrow svc-entry__link">
                        What’s included
                        <span className="visually-hidden"> in {s.name}</span>
                        <ArrowRight width={18} height={18} />
                      </Link>
                    </div>
                    <dl className="svc-entry__fields">
                      {fields.map(([key, label]) => (
                        <div key={key} className="svc-entry__field">
                          <dt>{label}</dt>
                          <dd>{s.overview[key]}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                ))}
              </div>
            </section>
          ))}
          <TechStrip />
        </div>
      </div>

      <CtaBand
        title="Not sure which of these you need?"
        text="Most businesses aren’t. Describe what’s going wrong or what you’re planning, and we’ll point you to the right starting place."
      />
    </>
  )
}
