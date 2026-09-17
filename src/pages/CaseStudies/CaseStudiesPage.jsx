import { Link } from 'react-router'
import { publishedCaseStudies, caseStudyFields, engagementTypes } from '../../data/caseStudies'
import { getService } from '../../data/services'
import PageHeader from '../../components/common/PageHeader'
import { Jack } from '../../components/common/Icons'
import CtaBand from '../../components/sections/CtaBand'
import './CaseStudiesPage.css'

function CaseStudy({ study }) {
  return (
    <article id={study.slug} className="cs">
      <header className="cs__head">
        <p className="cs__sector">{study.sector}</p>
        <h2>{study.client}</h2>
        <p className="cs__summary">{study.summary}</p>
      </header>
      <dl className="cs__fields">
        {caseStudyFields.map((f) => (
          <div key={f.key} className="cs__field">
            <dt>{f.label}</dt>
            <dd>{Array.isArray(study[f.key]) ? study[f.key].join(', ') : study[f.key]}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

export default function CaseStudiesPage() {
  const hasStudies = publishedCaseStudies.length > 0

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Case Studies' }]}
        title="Case studies"
        lead="Project write-ups from real exQ work, published only once the client involved has reviewed and approved them."
      />

      {hasStudies ? (
        <section className="section" aria-label="Published case studies">
          <div className="container cs-list">
            {publishedCaseStudies.map((study) => (
              <CaseStudy key={study.slug} study={study} />
            ))}
          </div>
        </section>
      ) : (
        <section className="section" aria-labelledby="cs-status">
          <div className="container split">
            <div className="stack">
              <h2 id="cs-status">No write-ups published yet</h2>
              <div className="prose">
                <p>
                  We could fill this page with polished success stories and made-up percentages. We’d rather not. Each
                  case study here will describe a real project, and it will only appear once the client has read it and
                  agreed to it being published.
                </p>
                <p>
                  Until then, the quickest way to hear about work like yours is to ask. We’re happy to talk through
                  comparable projects on a call.
                </p>
              </div>
              <Link to="/contact" className="link-arrow">
                Ask about a project like yours
              </Link>
            </div>

            <section className="jobsheet" aria-labelledby="jobsheet-title">
              <div className="jobsheet__top">
                <h3 id="jobsheet-title">How every write-up is structured</h3>
                <p className="jobsheet__ref">Ref. ______</p>
              </div>
              <dl className="jobsheet__fields">
                <div className="jobsheet__meta">
                  <dt>Client</dt>
                  <dd>Named only with written permission</dd>
                </div>
                {caseStudyFields.map((f, i) => (
                  <div key={f.key} className="jobsheet__field">
                    <dt>
                      <span className="tabular">{i + 1}.</span> {f.label}
                    </dt>
                    <dd>{f.hint}</dd>
                  </div>
                ))}
              </dl>
              <p className="jobsheet__sign">
                <span>Approved by client</span>
                <span>Date</span>
              </p>
            </section>
          </div>
        </section>
      )}

      <section className="section sheet" aria-labelledby="eng-title">
        <div className="container">
          <div className="section-head">
            <h2 id="eng-title">Work we regularly take on</h2>
            <p>Types of engagement, not client stories. Each links to the service it belongs to.</p>
          </div>
          <ul className="eng">
            {engagementTypes.map((e) => {
              const s = getService(e.services[0])
              return (
                <li key={e.title} className="eng__row">
                  <h3 className="eng__title">{e.title}</h3>
                  <p className="eng__text">{e.text}</p>
                  <Link to={`/services/${s.slug}`} className="eng__svc">
                    <Jack cable={s.cable} size={14} />
                    {s.shortName}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Planning something similar?"
        text="Tell us what you’re trying to do. We’ll explain how we’d approach it and what it’s likely to involve."
      />
    </>
  )
}
