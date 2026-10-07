import { Link } from 'react-router'
import { company } from '../../data/company'
import { footerNav } from '../../data/navigation'
import Wordmark from '../common/Wordmark'
import { Mail, Phone, Pin } from '../common/Icons'
import './Footer.css'

function Column({ title, links }) {
  return (
    <div className="footer__col">
      <h2 className="footer__heading">{title}</h2>
      <ul className="footer__links">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Four columns (Task 10): Services · Company · Legal · Contact.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Link to="/" className="footer__brand" aria-label="exQ Services, home">
              <Wordmark />
            </Link>
            <p>
              Managed IT, cloud, cybersecurity and networks from one accountable team. {company.positioning}
            </p>
          </div>

          <Column title="Services" links={footerNav.services} />
          <Column title="Company" links={footerNav.company} />
          <Column title="Legal" links={footerNav.legal} />

          <div className="footer__col">
            <h2 className="footer__heading">Contact</h2>
            <ul className="footer__links footer__links--icons">
              <li>
                <Mail width={18} height={18} />
                <a href={company.email.href}>{company.email.display}</a>
              </li>
              <li>
                <Phone width={18} height={18} />
                <a href={company.phone.href}>{company.phone.display}</a>
              </li>
              <li>
                <Pin width={18} height={18} />
                <span>{company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <p>{company.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
