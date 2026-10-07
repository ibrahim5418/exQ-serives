import { Link } from 'react-router'
import { practiceAreas } from '../../data/services'
import { ArrowRight, ServiceIcon } from '../common/Icons'
import './ServiceCards.css'

// The five practice areas as cards, each with a one-line summary and "Learn more".
// Web Infrastructure appears once, as a secondary link on the consulting card.
export default function ServiceCards({ headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <ul className="svc-cards">
      {practiceAreas.map((area, i) => {
        const [main, ...more] = area.services
        return (
          <li key={area.id} className="svc-card card card--interactive" data-reveal style={{ '--i': i }}>
            <span className="svc-card__num tabular" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="icon-tile">
              <ServiceIcon name={main.icon} />
            </span>
            <H className="svc-card__title">
              <Link to={`/services/${main.slug}`} className="card__link">
                {area.label}
              </Link>
            </H>
            <p className="svc-card__text">{main.readout}</p>
            <span className="svc-card__more" aria-hidden="true">
              Learn more <ArrowRight width={18} height={18} />
            </span>
            {more.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="svc-card__also">
                Also: {s.name} <ArrowRight width={16} height={16} />
              </Link>
            ))}
          </li>
        )
      })}
    </ul>
  )
}
