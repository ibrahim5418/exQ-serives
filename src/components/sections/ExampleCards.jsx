import { Link } from 'react-router'
import { examples, exampleLabel } from '../../data/caseStudies'
import { getService } from '../../data/services'
import { ArrowRight, ServiceIcon } from '../common/Icons'
import './ExampleCards.css'

function ExampleCard({ example, headingLevel, index = 0, showService = true }) {
  const H = `h${headingLevel}`
  const s = getService(example.service)
  return (
    <article className="example card" data-reveal style={{ '--i': index }}>
      <p className="example-label">
        <ServiceIcon name="document" size={18} />
        <span>
          <strong>{exampleLabel.title}:</strong> {exampleLabel.note}
        </span>
      </p>
      <H className="example__title">{example.title}</H>
      <dl className="example__rows">
        <div>
          <dt>Situation</dt>
          <dd>{example.situation}</dd>
        </div>
        <div>
          <dt>What exQ does</dt>
          <dd>{example.work}</dd>
        </div>
        <div>
          <dt>What you receive</dt>
          <dd>{example.receive}</dd>
        </div>
      </dl>
      {showService && (
        <Link to={`/services/${s.slug}`} className="link-arrow example__svc">
          {s.name} <ArrowRight width={18} height={18} />
        </Link>
      )}
    </article>
  )
}

// The three example engagements (Task 14), or just one by id.
export default function ExampleCards({ id, headingLevel = 3, showService = true }) {
  const list = id ? examples.filter((e) => e.id === id) : examples
  if (!list.length) return null
  return (
    <div className={`examples${list.length === 1 ? ' examples--single' : ''}`}>
      {list.map((e, i) => (
        <ExampleCard key={e.id} example={e} headingLevel={headingLevel} index={i} showService={showService} />
      ))}
    </div>
  )
}
