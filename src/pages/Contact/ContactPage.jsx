import { company, cta } from '../../data/company'
import { generalFaqs } from '../../data/faqs'
import PageHeader from '../../components/common/PageHeader'
import FaqList from '../../components/common/FaqList'
import Button from '../../components/common/Button'
import ContactForm from '../../components/forms/ContactForm'
import { Calendar, Chat, Clock, Mail, Phone, Pin } from '../../components/common/Icons'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Contact' }]}
        title="Talk to us about your IT"
        tagline="Book a free consultation or send an enquiry."
        lead="Tell us a little about your business and what you need. Remote support works wherever you are; onsite visits are arranged by location."
      />

      <section className="section contact" aria-labelledby="form-title">
        <div className="container contact__grid">
          <div className="contact__form">
            <h2 id="form-title" className="contact__h2 display">
              Send an enquiry
            </h2>
            <ContactForm />
          </div>

          {/* Right column order per Task 16: booking, email, WhatsApp, phone, location, reply promise. */}
          <aside className="contact__aside" aria-labelledby="direct-title">
            <h2 id="direct-title" className="visually-hidden">
              Other ways to reach us
            </h2>

            <div className="book-card card">
              <Calendar width={28} height={28} className="book-card__icon" />
              <h3 className="book-card__title">Book a free consultation</h3>
              <p>A free 30-minute conversation about your IT, cloud, security or network needs.</p>
              <Button to={cta.primary.to} arrow>
                {cta.primary.label}
              </Button>
            </div>

            <ul className="direct">
              <li className="direct__item">
                <h3 className="direct__label">Email</h3>
                <a href={company.email.href} className="direct__value">
                  <Mail width={20} height={20} />
                  {company.email.display}
                </a>
              </li>
              <li className="direct__item">
                <h3 className="direct__label">WhatsApp</h3>
                <Button
                  href={company.whatsapp.href}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Chat width={20} height={20} />}
                >
                  Chat on WhatsApp
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </Button>
              </li>
              <li className="direct__item">
                <h3 className="direct__label">Phone</h3>
                <a href={company.phone.href} className="direct__value">
                  <Phone width={20} height={20} />
                  {company.phone.display}
                </a>
              </li>
              <li className="direct__item">
                <h3 className="direct__label">Location</h3>
                <p className="direct__value">
                  <Pin width={20} height={20} />
                  {company.location}
                </p>
              </li>
            </ul>

            <p className="contact__promise">
              <Clock width={20} height={20} />
              {company.replyPromise}
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="contact-faq">
        <div className="container split">
          <h2 id="contact-faq" className="display">
            Before you get in touch
          </h2>
          <FaqList items={generalFaqs} />
        </div>
      </section>
    </>
  )
}
