import { Link, useParams } from 'react-router'
import { company } from '../../data/company'
import { services, getService } from '../../data/services'
import PageHeader from '../../components/common/PageHeader'
import Figure from '../../components/common/Figure'
import Button from '../../components/common/Button'
import FaqList from '../../components/common/FaqList'
import { ArrowRight, Jack } from '../../components/common/Icons'
import CableRun from '../../components/sections/CableRun'
import CtaBand from '../../components/sections/CtaBand'
import NotFoundPage from '../NotFound/NotFoundPage'
import './ServiceDetailPage.css'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const s = getService(slug)
  if (!s) return <NotFoundPage />

  const index = services.indexOf(s)
  const others = services.filter((o) => o.slug !== s.slug)
  const next = services[(index + 1) % services.length]

  return (
    <div style={{ '--run': `var(--cable-${s.cable})` }}>
      <PageHeader
        crumbs={[{ label: 'Services', to: '/services' }, { label: s.shortName }]}
        title={s.hero.title}
        lead={s.hero.lead}
        cable={s.cable}
        aside={<Figure image={s.image} priority ratio="4 / 3" sizes="(min-width: 60em) 40vw, 100vw" />}
      >
        <Button to={`/contact?service=${s.slug}`}>Get a free IT consultation</Button>
        <Button href={company.phone.href} variant="ghost" arrow={false}>
          Call {company.phone.display}
        </Button>
      </PageHeader>

      <div className="container">
        <div className="route">
          <section className="route__stop" aria-labelledby="problem-title">
            <h2 id="problem-title" className="route__title">
              {s.problem.title}
            </h2>
            <div className="route__two">
              <div className="prose">
                {s.problem.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="signs">
                <h3 className="signs__title">Signs you might recognise</h3>
                <ul className="signs__list">
                  {s.problem.signs.map((sign) => (
                    <li key={sign}>{sign}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="route__stop" aria-labelledby="solution-title">
            <h2 id="solution-title" className="route__title">
              {s.solution.title}
            </h2>
            <div className="prose route__prose">
              {s.solution.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </section>

          <section className="route__stop" aria-labelledby="included-title">
            <h2 id="included-title" className="route__title">
              What’s included
            </h2>
            <ul className="included">
              {s.included.map((item) => (
                <li key={item.title} className="included__item">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="route__stop" aria-labelledby="needs-title">
            <h2 id="needs-title" className="route__title">
              Typical situations we help with
            </h2>
            <ul className="needs">
              {s.needs.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </section>

          <section className="route__stop" aria-labelledby="benefits-title">
            <h2 id="benefits-title" className="route__title">
              What changes for your business
            </h2>
            <p className="outcome">{s.overview.outcome}</p>
            <dl className="benefits">
              {s.benefits.map((b) => (
                <div key={b.title} className="benefits__item">
                  <dt>{b.title}</dt>
                  <dd>{b.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="route__stop" aria-labelledby="approach-title">
            <h2 id="approach-title" className="route__title">
              How we deliver it
            </h2>
            <CableRun steps={s.approach} cable={s.cable} className="route__run" />
          </section>

          <section className="route__stop route__stop--last" aria-labelledby="faq-title">
            <h2 id="faq-title" className="route__title">
              Common questions
            </h2>
            <div className="route__faq">
              <FaqList items={s.faqs} />
            </div>
          </section>
        </div>
      </div>

      <nav className="related sheet" aria-labelledby="related-title">
        <div className="container related__inner">
          <div>
            <h2 id="related-title" className="related__title">
              Other services
            </h2>
            <Link to={`/services/${next.slug}`} className="link-arrow related__next">
              Next: {next.name} <ArrowRight width={18} height={18} />
            </Link>
          </div>
          <ul className="related__list">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={`/services/${o.slug}`}>
                  <Jack cable={o.cable} size={14} />
                  {o.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <CtaBand
        title="Let’s look at your setup."
        text={s.ctaText}
      />
    </div>
  )
}
