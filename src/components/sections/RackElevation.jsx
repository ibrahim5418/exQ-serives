import { Link } from 'react-router'
import { rackUnits, offRack } from '../../data/home'
import { getService } from '../../data/services'
import Tape from '../common/Tape'
import { Jack } from '../common/Icons'
import './RackElevation.css'

// An annotated rack elevation: what sits in a typical office cabinet,
// with a leader line from each unit to what exQ does with it.
export default function RackElevation() {
  let u = 11
  return (
    <div className="rack">
      <ol className="rack__units">
        {rackUnits.map((unit) => {
          const top = u
          u -= unit.u
          const service = getService(unit.service)
          return (
            <li key={unit.label} className="rack__row" style={{ '--u': unit.u }}>
              <div className={`rack__unit rack__unit--${unit.label.toLowerCase().replace(/[^a-z]+/g, '-')}`} aria-hidden="true">
                <span className="rack__u tabular">U{top}</span>
                <Tape>{unit.label}</Tape>
                <span className="rack__detail" />
              </div>
              <span className="rack__leader" aria-hidden="true" />
              <div className="rack__note">
                <p>
                  <strong className="rack__name">{unit.name}.</strong> {unit.text}{' '}
                  <Link to={`/services/${service.slug}`} className="rack__svc">
                    {service.shortName}
                  </Link>
                </p>
              </div>
            </li>
          )
        })}
      </ol>

      <div className="rack__off">
        <h3 className="rack__off-title">And outside the cabinet</h3>
        <ul className="rack__off-list">
          {offRack.map((item) => {
            const service = getService(item.service)
            return (
              <li key={item.name}>
                <Jack cable={service.cable} size={14} />
                <Link to={`/services/${service.slug}`}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
