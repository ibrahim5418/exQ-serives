import { Link } from 'react-router'
import { company, cta } from '../../data/company'
import { Calendar, Chat, Mail } from '../common/Icons'
import './MobileActionBar.css'

// Bottom action bar on phones, every page (Task 16): Email · WhatsApp · Book.
export default function MobileActionBar() {
  return (
    <nav className="action-bar" aria-label="Quick contact">
      <a href={company.email.href} className="action-bar__item">
        <Mail width={20} height={20} />
        Email
      </a>
      <a href={company.whatsapp.href} className="action-bar__item" target="_blank" rel="noopener noreferrer">
        <Chat width={20} height={20} />
        WhatsApp
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
      <Link to={cta.primary.to} className="action-bar__item action-bar__item--primary">
        <Calendar width={20} height={20} />
        Book
      </Link>
    </nav>
  )
}
