import './ProcessSteps.css'

// A numbered sequence on one connecting line: the homepage's six-step process
// and each service's delivery steps.
export default function ProcessSteps({ steps, headingLevel = 3, className = '' }) {
  const H = `h${headingLevel}`
  return (
    <ol className={`steps ${className}`.trim()} style={{ '--steps': steps.length }}>
      {steps.map((step, i) => (
        <li key={step.title} className="steps__item" data-reveal style={{ '--i': i }}>
          <span className="steps__num tabular" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <H className="steps__title">{step.title}</H>
          <p className="steps__text">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}
