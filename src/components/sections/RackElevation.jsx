import { Link } from 'react-router'
import { rackUnits, offRack } from '../../data/home'
import { getService } from '../../data/services'
import { ArrowRight } from '../common/Icons'
import './RackElevation.css'

const kindOf = (label) => label.toLowerCase().split(' ')[0]

// An annotated rack elevation: what sits in a typical office cabinet,
// with a leader line from each unit to what exQ does with it.
export default function RackElevation() {
  let u = 11
  return (
    <div className="rack">
      <ol className="rack__units">
        {rackUnits.map((unit, i) => {
          const top = u
          u -= unit.u
          const service = getService(unit.service)
          return (
            <li key={unit.label} className="rack__row" style={{ '--u': unit.u, '--i': i }} data-reveal>
              <div className={`rack__unit rack__unit--${kindOf(unit.label)}`} aria-hidden="true">
                <span className="rack__u tabular">U{top}</span>
                <span className="rack__detail" />
                <span className="rack__led" />
              </div>
              <span className="rack__leader" aria-hidden="true" />
              <p className="rack__note">
                <strong className="rack__name">{unit.label}.</strong> {unit.text}{' '}
                <Link to={`/services/${service.slug}`} className="rack__svc">
                  {service.name}
                </Link>
              </p>
            </li>
          )
        })}
      </ol>

      <div className="rack__off" data-reveal>
        <h3 className="rack__off-title">And outside the cabinet</h3>
        <ul className="rack__off-list">
          {offRack.map((item) => {
            const service = getService(item.service)
            return (
              <li key={item.name}>
                <Link to={`/services/${service.slug}`}>
                  <span>{item.name}</span>
                  <ArrowRight width={18} height={18} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
