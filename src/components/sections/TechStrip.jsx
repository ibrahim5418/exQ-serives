import { technologies, technologiesFor } from '../../data/technologies'
import './TechStrip.css'

// "Technologies we work with" (Task 18). Shows confirmed entries only and
// renders nothing until there are some. Never labelled as partners.
export default function TechStrip({ service, headingLevel = 2, className = '' }) {
  const list = service ? technologiesFor(service) : technologies
  if (!list.length) return null
  const H = `h${headingLevel}`
  return (
    <section className={`tech ${className}`.trim()} aria-label="Technologies we work with">
      <H className="tech__title label">Technologies we work with</H>
      <ul className="tech__list">
        {list.map((t, i) => (
          <li key={t.name} className="tech__item" data-reveal style={{ '--i': i }}>
            {t.logo ? <img src={t.logo} alt={t.name} width="120" height="32" loading="lazy" decoding="async" /> : t.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
