import { Link } from 'react-router'
import { services } from '../../data/services'
import PageHeader from '../../components/common/PageHeader'
import Figure from '../../components/common/Figure'
import Tape from '../../components/common/Tape'
import Button from '../../components/common/Button'
import { Jack } from '../../components/common/Icons'
import CtaBand from '../../components/sections/CtaBand'
import patchImg from '../../assets/images/services-patch-panel-1600.webp'
import patchImgSm from '../../assets/images/services-patch-panel-800.webp'
import './ServicesPage.css'

const patch = {
  src: patchImg,
  srcSm: patchImgSm,
  width: 1067,
  height: 1600,
  alt: 'Close-up of a server rack with neatly routed teal patch cables',
  caption: 'Every run labelled and traceable',
}

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
        title="IT services for businesses that depend on their technology"
        lead="From the helpdesk to the network cabinet, each service below solves a specific business problem. Use one, or let us look after the lot."
        aside={<Figure image={patch} priority ratio="4 / 3" sizes="(min-width: 60em) 40vw, 100vw" />}
      >
        <Button to="/contact">Get a free IT consultation</Button>
      </PageHeader>

      <nav className="svc-index" aria-label="Services on this page">
        <div className="container">
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`}>
                  <Jack cable={s.cable} size={14} />
                  {s.shortName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="section section--tight">
        <div className="container">
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="svc-entry" tabIndex={-1} aria-labelledby={`${s.slug}-title`}>
              <div className="svc-entry__head">
                <h2 id={`${s.slug}-title`} className="svc-entry__title">
                  {s.name}
                </h2>
                <div className="svc-entry__meta">
                  <Tape>
                    <Jack cable={s.cable} size={12} />
                    Port {s.port}
                  </Tape>
                  <Link to={`/services/${s.slug}`} className="link-arrow">
                    What’s included
                    <span className="visually-hidden"> in {s.name}</span>
                  </Link>
                </div>
              </div>
              <dl className="svc-entry__fields">
                {fields.map(([key, label]) => (
                  <div key={key} className={`svc-entry__field svc-entry__field--${key}`}>
                    <dt>{label}</dt>
                    <dd>{s.overview[key]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>

      <CtaBand
        title="Not sure which of these you need?"
        text="Most businesses aren’t. Describe what’s going wrong or what you’re planning, and we’ll point you to the right starting place."
      />
    </>
  )
}
