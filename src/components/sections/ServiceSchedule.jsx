import { Link } from 'react-router'
import { services } from '../../data/services'
import { ArrowRight, Jack } from '../common/Icons'
import './ServiceSchedule.css'

// The six services as a patch schedule: one row per port.
export default function ServiceSchedule({ headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <div className="schedule">
      <div className="schedule__head" aria-hidden="true">
        <span>Port</span>
        <span>Service</span>
        <span>What it covers</span>
        <span>Usually right for</span>
      </div>
      <ol className="schedule__list">
        {services.map((s) => (
          <li key={s.slug} className="schedule__row">
            <span className="schedule__port tabular">
              <Jack cable={s.cable} size={18} />
              {s.port}
            </span>
            <H className="schedule__name">
              <Link to={`/services/${s.slug}`}>{s.name}</Link>
            </H>
            <p className="schedule__covers">{s.readout}</p>
            <p className="schedule__who">{s.overview.whoFor}</p>
            <ArrowRight className="schedule__arrow" />
          </li>
        ))}
      </ol>
    </div>
  )
}
