import { Link } from 'react-router'
import { caseStudies, caseStudyFields } from '../../data/caseStudies'
import PageHeader from '../../components/common/PageHeader'
import { ArrowRight } from '../../components/common/Icons'
import ExampleCards from '../../components/sections/ExampleCards'
import { CaseStudyCards, Testimonials } from '../../components/sections/Proof'
import CtaBand from '../../components/sections/CtaBand'
import './CaseStudiesPage.css'

export default function CaseStudiesPage() {
  const hasStudies = caseStudies.length > 0

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Case Studies' }]}
        title="Case studies"
        tagline="How exQ approaches IT projects."
        lead="Client case studies are published only with the client’s written approval. Until then, here is how every write-up is structured, and the kind of work we take on."
      />

      <section className="section" aria-labelledby="cs-status">
        <div className="container split">
          <div className="stack">
            <h2 id="cs-status" className="display">
              {hasStudies ? 'Published case studies' : 'No write-ups published yet'}
            </h2>
            {hasStudies ? (
              <CaseStudyCards />
            ) : (
              <>
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
                  Ask about a project like yours <ArrowRight width={18} height={18} />
                </Link>
              </>
            )}
          </div>

          <section className="structure card" aria-labelledby="structure-title" data-reveal>
            <h3 id="structure-title" className="structure__title">
              How every write-up is structured
            </h3>
            <p className="structure__client">Client named only with written permission.</p>
            <ol className="structure__list">
              {caseStudyFields.map((f, i) => (
                <li key={f.key}>
                  <span className="structure__num tabular" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <p className="structure__label">{f.label}</p>
                    <p className="structure__hint">{f.hint}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="examples-title">
        <div className="container">
          <div className="section-head">
            <h2 id="examples-title" className="display">
              Example engagements
            </h2>
            <p>Typical projects, not client stories. Each links to the service it belongs to.</p>
          </div>
          <ExampleCards />
        </div>
      </section>

      <Testimonials />

      <CtaBand
        title="Planning something similar?"
        text="Tell us what you’re trying to do. We’ll explain how we’d approach it and what it’s likely to involve."
      />
    </>
  )
}
