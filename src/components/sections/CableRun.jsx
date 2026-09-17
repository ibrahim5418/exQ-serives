import './CableRun.css'

// A sequence drawn as one cable run with a termination point per step.
export default function CableRun({ steps, cable = 'teal', headingLevel = 3, className = '' }) {
  const H = `h${headingLevel}`
  return (
    <ol className={`cable-run ${className}`.trim()} style={{ '--run': `var(--cable-${cable})`, '--steps': steps.length }}>
      {steps.map((step, i) => (
        <li key={step.title} className="cable-run__step">
          <span className="cable-run__point" aria-hidden="true" />
          <span className="cable-run__num tabular" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <H className="cable-run__title">{step.title}</H>
          <p className="cable-run__text">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}
