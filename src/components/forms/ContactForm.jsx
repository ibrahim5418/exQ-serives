import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router'
import { company, emailConfig } from '../../data/company'
import { services } from '../../data/services'
import Button from '../common/Button'
import { Check } from '../common/Icons'
import './ContactForm.css'

const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.slug === 'it-support' ? s.name : s.shortName })),
  { value: 'other', label: 'Other' },
]

const empty = { name: '', company: '', email: '', phone: '', service: '', message: '', website: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your name so we know who to reply to.'
  if (!v.email.trim()) e.email = 'Enter an email address we can reply to.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = 'That email address doesn’t look complete. Check it has an @ and a domain, like name@company.com.'
  if (v.phone.trim() && !/^[+()\-\s\d]{7,20}$/.test(v.phone.trim()))
    e.phone = 'Use digits only, with an optional + and spaces, like +91 98765 43210.'
  if (!v.service) e.service = 'Choose the service closest to what you need, or pick Other.'
  if (v.message.trim().length < 10) e.message = 'Tell us a little about what you need, even a sentence helps.'
  return e
}

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed
  const formRef = useRef(null)
  const successRef = useRef(null)
  const uid = useId()

  // Pre-select a service when arriving from a service page (/contact?service=slug).
  // Read after mount so the prerendered HTML and the first client render match.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('service')
    if (slug && serviceOptions.some((o) => o.value === slug)) {
      setValues((v) => ({ ...v, service: slug }))
    }
  }, [])

  useEffect(() => {
    if (status === 'sent') successRef.current?.focus()
  }, [status])

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    if (submitted) setErrors(validate(next))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    const found = validate(values)
    setErrors(found)
    const firstBad = Object.keys(found)[0]
    if (firstBad) {
      formRef.current?.querySelector(`[name="${firstBad}"]`)?.focus()
      return
    }
    // Honeypot: real people never see or fill this field.
    if (values.website) {
      setStatus('sent')
      return
    }

    setStatus('sending')
    const serviceLabel = serviceOptions.find((o) => o.value === values.service)?.label || 'Other'
    const params = {
      name: values.name.trim(),
      email: values.email.trim(),
      subject: `Website enquiry: ${serviceLabel}${values.company.trim() ? ` (${values.company.trim()})` : ''}`,
      message: [
        values.message.trim(),
        '',
        '---',
        `Company: ${values.company.trim() || 'Not given'}`,
        `Phone: ${values.phone.trim() || 'Not given'}`,
        `Service: ${serviceLabel}`,
      ].join('\n'),
      company: values.company.trim(),
      phone: values.phone.trim(),
      service: serviceLabel,
    }

    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, params, { publicKey: emailConfig.publicKey })
      setStatus('sent')
    } catch {
      setStatus('failed')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-done" ref={successRef} tabIndex={-1} role="status">
        <span className="form-done__icon" aria-hidden="true">
          <Check width={22} height={22} />
        </span>
        <h2 className="form-done__title">Thanks{values.name ? `, ${values.name.trim().split(' ')[0]}` : ''}. Your enquiry is with us.</h2>
        <p>
          Someone from the team will reply to <strong>{values.email || 'you'}</strong> to arrange a conversation. If it’s
          urgent, call us on <a href={company.phone.href}>{company.phone.display}</a>.
        </p>
        <button
          type="button"
          className="form-done__again"
          onClick={() => {
            setValues(empty)
            setSubmitted(false)
            setErrors({})
            setStatus('idle')
          }}
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  const field = (name) => ({
    id: `${uid}-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${uid}-${name}-err` : undefined,
  })

  const renderError = (name) =>
    errors[name] ? (
      <p className="field__error" id={`${uid}-${name}-err`}>
        {errors[name]}
      </p>
    ) : null

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} noValidate>
      <div className="form__grid">
        <div className="field">
          <label htmlFor={`${uid}-name`}>
            Name <span className="field__req">Required</span>
          </label>
          <input type="text" autoComplete="name" {...field('name')} />
          {renderError('name')}
        </div>

        <div className="field">
          <label htmlFor={`${uid}-company`}>Company</label>
          <input type="text" autoComplete="organization" {...field('company')} />
        </div>

        <div className="field">
          <label htmlFor={`${uid}-email`}>
            Email <span className="field__req">Required</span>
          </label>
          <input type="email" autoComplete="email" inputMode="email" {...field('email')} />
          {renderError('email')}
        </div>

        <div className="field">
          <label htmlFor={`${uid}-phone`}>Phone</label>
          <input type="tel" autoComplete="tel" inputMode="tel" {...field('phone')} />
          {renderError('phone')}
        </div>

        <div className="field field--full">
          <label htmlFor={`${uid}-service`}>
            Service <span className="field__req">Required</span>
          </label>
          <div className="field__select">
            <select {...field('service')}>
              <option value="">Choose a service</option>
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          {renderError('service')}
        </div>

        <div className="field field--full">
          <label htmlFor={`${uid}-message`}>
            Message <span className="field__req">Required</span>
          </label>
          <textarea
            rows={6}
            placeholder="What’s happening, how many people are involved, and anything you’re planning."
            {...field('message')}
          />
          {renderError('message')}
        </div>

        <div className="field field--trap" aria-hidden="true">
          <label htmlFor={`${uid}-website`}>Leave this field empty</label>
          <input type="text" tabIndex={-1} autoComplete="off" {...field('website')} />
        </div>
      </div>

      {status === 'failed' && (
        <div className="form__alert" role="alert">
          <p>
            <strong>Your message didn’t send.</strong> Nothing you typed has been lost. Try again in a moment, or email{' '}
            <a href={company.email.href}>{company.email.display}</a> or call{' '}
            <a href={company.phone.href}>{company.phone.display}</a>.
          </p>
        </div>
      )}

      <div className="form__foot">
        <Button type="submit" variant="ink" disabled={status === 'sending'} aria-disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </Button>
        <p className="form__privacy">
          We use your details only to reply to this enquiry. See our <Link to="/privacy-policy">privacy policy</Link>.
        </p>
      </div>
    </form>
  )
}
