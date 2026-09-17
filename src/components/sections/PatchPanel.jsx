import { useState } from 'react'
import { Link } from 'react-router'
import { services } from '../../data/services'
import './PatchPanel.css'

// The homepage's service selector, drawn as a 1U patch panel.
// Hovering or focusing a port plugs the cable into it; each port is a link
// to that service. Port 01 is patched on arrival.
export default function PatchPanel() {
  const [active, setActive] = useState(0)
  const [touched, setTouched] = useState(false)
  const current = services[active]

  const select = (i) => {
    setTouched(true)
    setActive(i)
  }

  return (
    <div
      className={`patch${touched ? '' : ' is-arriving'}`}
      style={{ '--active-cable': `var(--cable-${current.cable})` }}
    >
      <div className="patch__face">
        <span className="patch__ear patch__ear--l" aria-hidden="true" />
        <ul className="patch__ports" aria-label="Our six services">
          {services.map((s, i) => {
            const on = i === active
            return (
              <li key={s.slug} className={`port${on ? ' is-on' : ''}`} style={{ '--cable': `var(--cable-${s.cable})` }}>
                <Link
                  to={`/services/${s.slug}`}
                  className="port__link"
                  onMouseEnter={() => select(i)}
                  onFocus={() => select(i)}
                >
                  <span className="port__label" aria-hidden="true">
                    <span className="port__num tabular">{s.port}</span>
                    {s.label}
                  </span>
                  <span className="port__socket" aria-hidden="true">
                    <span className="port__led" />
                    {on && (
                      <span className="port__plug" key={s.slug}>
                        <span className="port__plug-face" />
                        <span className="port__boot" />
                        <span className="port__cable" />
                      </span>
                    )}
                  </span>
                  <span className="visually-hidden">
                    {s.name}: {s.readout}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="patch__readout" aria-hidden="true">
          <span className="patch__body" key={current.slug}>
            <span className="patch__name">
              <span className="patch__status-led" />
              {current.name}
            </span>
            <span className="patch__text">{current.readout}</span>
          </span>
        </div>
        <span className="patch__ear patch__ear--r" aria-hidden="true" />
      </div>
    </div>
  )
}
