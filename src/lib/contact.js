// Contact form rules shared by the browser form and the /api/contact function,
// so both validate the same way (Task 5).

export const serviceOptions = [
  { value: 'it-support', label: 'Managed IT & Support' },
  { value: 'cloud-saas', label: 'Cloud & Digital Workplace' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'network-infrastructure', label: 'Network & Infrastructure' },
  { value: 'website-hosting', label: 'Web Infrastructure (Domains & Hosting)' },
  { value: 'it-consulting', label: 'IT Consulting & Projects' },
  { value: 'other', label: 'Other' },
]

export const serviceLabel = (value) => serviceOptions.find((o) => o.value === value)?.label

export const MESSAGE_MIN = 20
export const MESSAGE_MAX = 2000

export const limits = { name: 120, company: 160, email: 254, phone: 40, message: MESSAGE_MAX }

export const messages = {
  name: 'Please enter your name.',
  email: 'Please enter a valid email address.',
  service: 'Please choose a service.',
  message: 'Please tell us a little more (at least 20 characters).',
  messageTooLong: 'Please keep your message under 2,000 characters.',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Validates one field; returns an error message or ''.
export function validateField(name, raw) {
  const value = String(raw ?? '').trim()
  switch (name) {
    case 'name':
      return value ? '' : messages.name
    case 'email':
      return value && value.length <= limits.email && EMAIL_RE.test(value) ? '' : messages.email
    case 'service':
      return serviceLabel(value) ? '' : messages.service
    case 'message':
      if (value.length < MESSAGE_MIN) return messages.message
      if (value.length > MESSAGE_MAX) return messages.messageTooLong
      return ''
    default:
      return ''
  }
}

export const requiredFields = ['name', 'email', 'service', 'message']

export function validateAll(values) {
  const errors = {}
  for (const name of requiredFields) {
    const error = validateField(name, values[name])
    if (error) errors[name] = error
  }
  return errors
}
