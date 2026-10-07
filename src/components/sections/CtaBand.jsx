import { company, cta } from '../../data/company'
import Button from '../common/Button'
import Rise from '../common/Rise'
import './CtaBand.css'

// Closing call to action, after the reference: a large centred statement on
// a tinted band, both CTAs, and the email address underneath.
export default function CtaBand({
  title = 'Let’s talk about how your technology should work.',
  text = 'Book a free 30-minute consultation or send us a message. We reply within one business day.',
  service,
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <h2 id="cta-title" className="cta-band__title display">
          <Rise text={title} />
        </h2>
        <p className="cta-band__text" data-reveal>
          {text}
        </p>
        <div className="btn-row btn-row--stack-mobile cta-band__actions" data-reveal style={{ '--i': 1 }}>
          <Button to={cta.primary.to}>{cta.primary.label}</Button>
          <Button to={service ? `${cta.secondary.to}?service=${service}` : cta.secondary.to} variant="secondary">
            {cta.secondary.label}
          </Button>
        </div>
        <p className="cta-band__email" data-reveal style={{ '--i': 2 }}>
          <a href={company.email.href}>{company.email.display}</a>
        </p>
      </div>
    </section>
  )
}
