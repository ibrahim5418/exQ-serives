import { Link } from 'react-router'
import { services } from '../../data/services'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/common/Button'
import { Jack } from '../../components/common/Icons'

export default function NotFoundPage() {
  return (
    <>
      <PageHeader
        title="Nothing is patched into this port."
        lead="The page you were looking for doesn’t exist or has moved. These are the places most people are after."
      >
        <Button to="/">Go to the homepage</Button>
        <Button to="/contact" variant="ghost">
          Contact us
        </Button>
      </PageHeader>
      <section className="section section--tight" aria-labelledby="nf-services">
        <div className="container">
          <h2 id="nf-services" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
            Our services
          </h2>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem' }}>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                  <Jack cable={s.cable} size={14} />
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
