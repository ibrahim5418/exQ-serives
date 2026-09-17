import { company } from '../../data/company'
import { generalFaqs } from '../../data/faqs'
import PageHeader from '../../components/common/PageHeader'
import FaqList from '../../components/common/FaqList'
import ContactForm from '../../components/forms/ContactForm'
import { Mail, Phone, Pin } from '../../components/common/Icons'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Contact' }]}
        title="Talk to us about your IT"
        lead="Tell us a little about your business and what you need. We’ll get back to you to arrange a conversation, and the first one is free."
      />

      <section className="section contact" aria-labelledby="form-title">
        <div className="container contact__grid">
          <div className="contact__form">
            <h2 id="form-title" className="contact__h2">
              Send an enquiry
            </h2>
            <ContactForm />
          </div>

          <aside className="contact__aside" aria-labelledby="direct-title">
            <h2 id="direct-title" className="contact__h2">
              Or reach us directly
            </h2>
            <ul className="direct">
              <li>
                <Phone />
                <div>
                  <p className="direct__label">Call</p>
                  <a href={company.phone.href}>{company.phone.display}</a>
                </div>
              </li>
              <li>
                <Mail />
                <div>
                  <p className="direct__label">Email</p>
                  <a href={company.email.href}>{company.email.display}</a>
                </div>
              </li>
              <li>
                <Pin />
                <div>
                  <p className="direct__label">Office</p>
                  <address>
                    {company.address.lines.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </address>
                </div>
              </li>
            </ul>
            <p className="contact__area">
              We work with businesses across India. Remote support works wherever you are; onsite visits are arranged by
              location.
            </p>
          </aside>
        </div>
      </section>

      <section className="section sheet" aria-labelledby="contact-faq">
        <div className="container split">
          <h2 id="contact-faq">Before you get in touch</h2>
          <FaqList items={generalFaqs} />
        </div>
      </section>
    </>
  )
}
