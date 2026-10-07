import { Link } from 'react-router'
import { practiceAreas } from '../../data/services'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/common/Button'
import { ArrowRight, ServiceIcon } from '../../components/common/Icons'
import './NotFoundPage.css'

// Branded 404 (Task 20). The prerendered 404.html is served with status 404 and noindex.
export default function NotFoundPage() {
  return (
    <>
      <PageHeader
        title="We can’t find that page"
        lead="The page you were looking for doesn’t exist or has moved. These are the places most people are after."
      >
        <Button to="/">Home</Button>
        <Button to="/services" variant="secondary">
          Services
        </Button>
        <Button to="/contact" variant="secondary">
          Contact
        </Button>
      </PageHeader>
      <section className="section section--tight" aria-labelledby="nf-services">
        <div className="container">
          <h2 id="nf-services" className="label">
            Our services
          </h2>
          <ul className="nf-list">
            {practiceAreas.flatMap((a) => a.services).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>
                  <ServiceIcon name={s.icon} size={20} />
                  {s.name}
                  <ArrowRight width={18} height={18} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
