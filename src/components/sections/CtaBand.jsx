import { company } from '../../data/company'
import Button from '../common/Button'
import { Mail, Phone } from '../common/Icons'
import './CtaBand.css'

export default function CtaBand({
  title = 'Your team should be working on the business, not waiting for the network to come back.',
  text = 'Tell us what’s slowing things down. We’ll look at your setup and suggest practical next steps, with no obligation.',
  action = 'Get a free IT consultation',
}) {
  return (
    <section className="cta band-rack" aria-labelledby="cta-title">
      <span className="cta__cable" aria-hidden="true">
        <span className="cta__boot" />
      </span>
      <div className="container cta__inner">
        <h2 id="cta-title" className="cta__title">
          {title}
        </h2>
        <div className="cta__side">
          <p className="cta__text">{text}</p>
          <Button to="/contact">{action}</Button>
          <ul className="cta__direct">
            <li>
              <Phone width={18} height={18} />
              <a href={company.phone.href}>{company.phone.display}</a>
            </li>
            <li>
              <Mail width={18} height={18} />
              <a href={company.email.href}>{company.email.display}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
