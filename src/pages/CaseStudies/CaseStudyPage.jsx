import { Link, useParams } from 'react-router'
import { getCaseStudy } from '../../data/caseStudies'
import { getService } from '../../data/services'
import PageHeader from '../../components/common/PageHeader'
import { ServiceIcon } from '../../components/common/Icons'
import CtaBand from '../../components/sections/CtaBand'
import NotFoundPage from '../NotFound/NotFoundPage'
import './CaseStudiesPage.css'

// One approved case study from content/caseStudies.json (Task 14).
export default function CaseStudyPage() {
  const { slug } = useParams()
  const c = getCaseStudy(slug)
  if (!c) return <NotFoundPage />

  const facts = [
    ['Client', c.client],
    ['Industry', c.industry],
    ['Challenge', c.challenge],
    ['Solution', c.solution],
    ['Technology', Array.isArray(c.technology) ? c.technology.join(', ') : c.technology],
    ['Implementation', c.implementation],
    ['Business impact', c.impact],
  ].filter(([, v]) => v)

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Case Studies', to: '/case-studies' }, { label: c.client }]}
        title={c.client}
        tagline={c.industry}
        lead={c.summary}
      />
      <section className="section">
        <div className="container cs-detail">
          <dl className="cs-detail__facts">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          {c.quote && (
            <blockquote className="cs-detail__quote">
              <p>“{c.quote.text}”</p>
              <footer>
                {c.quote.name}
                {c.quote.role ? `, ${c.quote.role}` : ''}
              </footer>
            </blockquote>
          )}
          {c.services?.length > 0 && (
            <div>
              <h2 className="label">Related services</h2>
              <ul className="chips cs-detail__services">
                {c.services.map((slugName) => {
                  const s = getService(slugName)
                  return s ? (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} className="chip">
                        <ServiceIcon name={s.icon} size={18} />
                        {s.name}
                      </Link>
                    </li>
                  ) : null
                })}
              </ul>
            </div>
          )}
        </div>
      </section>
      <CtaBand title="Planning something similar?" />
    </>
  )
}
