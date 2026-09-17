import PageHeader from '../../components/common/PageHeader'
import './LegalPage.css'

// Shared reading layout for legal documents.
export default function LegalPage({ title, updated, intro, sections }) {
  return (
    <>
      <PageHeader crumbs={[{ label: title }]} title={title} lead={intro} />
      <div className="section section--tight">
        <div className="container legal">
          <p className="legal__updated">Last updated {updated}</p>
          {sections.map((s) => (
            <section key={s.heading} className="legal__section">
              <h2>{s.heading}</h2>
              {s.body.map((p, i) =>
                Array.isArray(p) ? (
                  <ul key={i}>
                    {p.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i}>{p}</p>
                ),
              )}
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
