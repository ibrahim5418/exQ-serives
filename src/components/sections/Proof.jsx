import { Link } from 'react-router'
import { caseStudies, clientLogos, testimonials } from '../../data/caseStudies'
import { ArrowRight } from '../common/Icons'
import './Proof.css'

// Proof components (Task 14). Each renders nothing until its JSON file has
// real, approved entries: no empty boxes, no placeholders.

export function Testimonials({ headingLevel = 2 }) {
  if (!testimonials.length) return null
  const H = `h${headingLevel}`
  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <H id="testimonials-title" className="display section-title">
          What clients say
        </H>
        <ul className="quotes">
          {testimonials.map((t, i) => (
            <li key={`${t.name}-${i}`} className="quote card" data-reveal style={{ '--i': i }}>
              <blockquote>
                <p>“{t.quote}”</p>
              </blockquote>
              <p className="quote__who">
                <strong>{t.name}</strong>
                {[t.role, t.company].filter(Boolean).join(', ')}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ClientLogos({ headingLevel = 2 }) {
  if (!clientLogos.length) return null
  const H = `h${headingLevel}`
  return (
    <section className="section section--tight" aria-labelledby="clients-title">
      <div className="container">
        <H id="clients-title" className="label">
          Clients
        </H>
        <ul className="logos">
          {clientLogos.map((c) => (
            <li key={c.name} className="logos__item">
              <img src={c.logo} alt={c.name} width="140" height="40" loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function CaseStudyCards({ headingLevel = 3 }) {
  if (!caseStudies.length) return null
  const H = `h${headingLevel}`
  return (
    <ul className="cs-cards">
      {caseStudies.map((c, i) => (
        <li key={c.slug} className="card card--interactive cs-card" data-reveal style={{ '--i': i }}>
          <p className="label">{c.industry}</p>
          <H>
            <Link to={`/case-studies/${c.slug}`} className="card__link">
              {c.client}
            </Link>
          </H>
          <p className="cs-card__summary">{c.summary}</p>
          <span className="link-arrow" aria-hidden="true">
            Read the case study <ArrowRight width={18} height={18} />
          </span>
        </li>
      ))}
    </ul>
  )
}
