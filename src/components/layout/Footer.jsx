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

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer band-rack">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Link to="/" className="footer__brand" aria-label="exQ Services, home">
              <Wordmark />
            </Link>
            <p>
              exQ Services helps businesses manage, maintain, secure and improve the technology they use every day, from
              the helpdesk to the network cabinet.
            </p>
          </div>

          <Column title="Services" links={footerNav.services} />
          <Column title="Company" links={footerNav.company} />
          <Column title="Legal" links={footerNav.legal} />

          <div className="footer__col footer__contact">
            <h2 className="footer__heading">Contact</h2>
            <ul className="footer__links footer__links--icons">
              <li>
                <Pin width={18} height={18} />
                <address>
                  Mannady Street
                  <br />
                  Chennai, Tamil Nadu, India
                </address>
              </li>
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

        <div className="footer__base">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>Mannady Street, Parrys, Chennai 600 001</p>
        </div>
      </div>
    </footer>
  )
}
