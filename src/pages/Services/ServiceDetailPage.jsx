import { Link, useParams } from 'react-router'
import { cta } from '../../data/company'
import { services, getService } from '../../data/services'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/common/Button'
import FaqList from '../../components/common/FaqList'
import { ArrowRight, Check, ServiceIcon } from '../../components/common/Icons'
import ProcessSteps from '../../components/sections/ProcessSteps'
import TechStrip from '../../components/sections/TechStrip'
import ExampleCards from '../../components/sections/ExampleCards'
import CtaBand from '../../components/sections/CtaBand'
import NotFoundPage from '../NotFound/NotFoundPage'
import './ServiceDetailPage.css'

function Block({ id, title, children, className = '' }) {
  return (
    <section className={`block ${className}`.trim()} aria-labelledby={id}>
      <h2 id={id} className="block__title display">
        {title}
      </h2>
      <div className="block__body">{children}</div>
    </section>
  )
}

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const s = getService(slug)
  if (!s) return <NotFoundPage />

  const index = services.indexOf(s)
  const others = services.filter((o) => o.slug !== s.slug)
  const next = services[(index + 1) % services.length]

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Services', to: '/services' }, { label: s.name }]}
        title={s.name}
        tagline={s.hero.title}
        lead={s.hero.lead}
      >
        <Button to={cta.primary.to}>{cta.primary.label}</Button>
        <Button to={`${cta.secondary.to}?service=${s.slug}`} variant="secondary">
          {cta.secondary.label}
        </Button>
      </PageHeader>

      <div className="container service">
        <Block id="problem-title" title={s.problem.title}>
          <div className="block__two">
            <div className="prose">
              {s.problem.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="signs card" data-reveal>
              <h3 className="signs__title">Signs you might recognise</h3>
              <ul className="ticks">
                {s.problem.signs.map((sign) => (
                  <li key={sign}>{sign}</li>
                ))}
              </ul>
            </div>
          </div>
        </Block>

        <Block id="solution-title" title={s.solution.title}>
          <div className="prose">
            {s.solution.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Block>

        <Block id="included-title" title="What’s included">
          <ul className="included">
            {s.included.map((item, i) => (
              <li key={item.title} className="included__item" data-reveal style={{ '--i': i % 3 }}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block id="receive-title" title="What you receive">
          <ul className="receive">
            {s.deliverables.map((d, i) => (
              <li key={d} className="receive__item card" data-reveal style={{ '--i': i }}>
                <span className="receive__icon" aria-hidden="true">
                  <Check width={18} height={18} />
                </span>
                {d}
              </li>
            ))}
          </ul>
        </Block>

        <TechStrip service={s.slug} className="block" />

        {s.example && (
          <Block id="example-title" title="Example engagement">
            <ExampleCards id={s.example} showService={false} />
          </Block>
        )}

        <Block id="needs-title" title="Typical situations we help with">
          <ul className="needs">
            {s.needs.map((n, i) => (
              <li key={n} data-reveal style={{ '--i': i }}>
                {n}
              </li>
            ))}
          </ul>
        </Block>

        <Block id="benefits-title" title="What changes for your business">
          <p className="outcome">{s.overview.outcome}</p>
          <dl className="benefits">
            {s.benefits.map((b, i) => (
              <div key={b.title} className="benefits__item" data-reveal style={{ '--i': i }}>
                <dt>{b.title}</dt>
                <dd>{b.text}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block id="approach-title" title="How we deliver it">
          <ProcessSteps steps={s.approach} />
        </Block>

        <Block id="faq-title" title="Common questions" className="block--last">
          <FaqList items={s.faqs} />
        </Block>
      </div>

      <nav className="related section--surface" aria-labelledby="related-title">
        <div className="container related__inner">
          <div className="related__head">
            <h2 id="related-title" className="related__title">
              Other services
            </h2>
            <Link to={`/services/${next.slug}`} className="link-arrow">
              Next: {next.name} <ArrowRight width={18} height={18} />
            </Link>
          </div>
          <ul className="related__list">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={`/services/${o.slug}`} className="chip">
                  <ServiceIcon name={o.icon} size={18} />
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <CtaBand title="Let’s look at your setup." text={s.ctaText} service={s.slug} />
    </>
  )
}
