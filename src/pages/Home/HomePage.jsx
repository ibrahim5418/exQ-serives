import { Link } from 'react-router'
import { company, cta } from '../../data/company'
import { getService } from '../../data/services'
import { industries } from '../../data/industries'
import { moments, engagementTracks, whyExq, process } from '../../data/home'
import Button from '../../components/common/Button'
import Rise from '../../components/common/Rise'
import HeroArt from '../../components/common/HeroArt'
import { ArrowRight, ServiceIcon } from '../../components/common/Icons'
import ServiceCards from '../../components/sections/ServiceCards'
import TechStrip from '../../components/sections/TechStrip'
import RackElevation from '../../components/sections/RackElevation'
import ProcessSteps from '../../components/sections/ProcessSteps'
import ExampleCards from '../../components/sections/ExampleCards'
import { ClientLogos, Testimonials } from '../../components/sections/Proof'
import { LeaderTeaser } from '../../components/sections/LeaderCards'
import CtaBand from '../../components/sections/CtaBand'
import './HomePage.css'

// Section order and copy follow Task 11 exactly.
export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">IT services · Riyadh</p>
            <h1 id="hero-title" className="hero__title display">
              <Rise
                lines={['Managed IT, cloud', 'and cybersecurity', 'for businesses that', 'depend on their', 'technology.']}
                tones={[true, true, false, false, false]}
              />
            </h1>
            <p className="hero__lead lead enter" style={{ '--i': 3 }}>
              exQ is one accountable team for support, cloud, security, networks and web infrastructure. {company.positioning}
            </p>
            <div className="btn-row btn-row--stack-mobile enter" style={{ '--i': 4 }}>
              <Button to={cta.primary.to} arrow>
                {cta.primary.label}
              </Button>
              <Button to="/services" variant="secondary">
                Explore services
              </Button>
            </div>
            <p className="hero__trust enter" style={{ '--i': 5 }}>
              <span>Remote and onsite</span>
              <span>Enterprises and growing businesses</span>
              <span>Documented from day one</span>
            </p>
          </div>
          <div className="hero__art">
            <HeroArt />
          </div>
        </div>
      </section>

      {/* Businesses usually get in touch when… */}
      <section className="section moments" aria-labelledby="moments-title">
        <div className="container">
          <div className="section-head">
            <h2 id="moments-title" className="display">
              <Rise text="Businesses usually get in touch when…" />
            </h2>
          </div>
          <ul className="moments__list">
            {moments.map((m, i) => {
              const s = getService(m.service)
              return (
                <li key={m.text} className="moments__item card card--interactive" data-reveal style={{ '--i': i }}>
                  <p className="moments__text">{m.text}</p>
                  <Link to={`/services/${s.slug}`} className="moments__link card__link">
                    <ServiceIcon name={s.icon} size={18} />
                    {s.name}
                    <ArrowRight width={16} height={16} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Services: five practice areas */}
      <section className="section section--surface" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <p className="eyebrow">Services</p>
              <h2 id="services-title" className="display">
                <Rise text="Five practice areas. One team that knows your environment." />
              </h2>
            </div>
            <Link to="/services" className="link-arrow">
              All services <ArrowRight width={18} height={18} />
            </Link>
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* Engagement tracks */}
      <section className="section" aria-labelledby="tracks-title">
        <div className="container">
          <h2 id="tracks-title" className="visually-hidden">
            Ways to work with exQ
          </h2>
          <div className="tracks">
            {engagementTracks.map((t, i) => (
              <article key={t.title} className="track card" data-reveal style={{ '--i': i }}>
                <h3 className="track__title display">{t.title}</h3>
                <p className="track__text">{t.text}</p>
                <Button to={cta.primary.to} arrow>
                  {cta.primary.label}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why exQ */}
      <section className="section section--surface" aria-labelledby="why-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why exQ</p>
            <h2 id="why-title" className="display">
              <Rise text="What working with exQ looks like." />
            </h2>
          </div>
          <ul className="values">
            {whyExq.map((v, i) => (
              <li key={v.title} className="values__item" data-reveal style={{ '--i': i }}>
                <span className="values__icon">
                  <ServiceIcon name={v.icon} size={28} />
                </span>
                <h3 className="values__title">{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
          <TechStrip className="home-tech" />
        </div>
      </section>

      {/* What we look after */}
      <section className="section" aria-labelledby="rack-title">
        <div className="container">
          <div className="section-head">
            <h2 id="rack-title" className="display">
              <Rise text="What we look after" />
            </h2>
            <p>
              We install, configure and support the equipment in a typical office cabinet, and the services that live
              outside it.
            </p>
          </div>
          <RackElevation />
        </div>
      </section>

      {/* How we work */}
      <section className="section section--surface" aria-labelledby="process-title">
        <div className="container">
          <div className="section-head">
            <h2 id="process-title" className="display">
              <Rise text="How we work" />
            </h2>
          </div>
          <ProcessSteps steps={process} />
        </div>
      </section>

      {/* Industries */}
      <section className="section" aria-labelledby="ind-title">
        <div className="container industries-strip">
          <div className="section-head">
            <h2 id="ind-title" className="display">
              <Rise text="Who we work with." />
            </h2>
            <Link to="/industries" className="link-arrow">
              IT support by industry <ArrowRight width={18} height={18} />
            </Link>
          </div>
          <ul className="chips" data-reveal>
            {industries.map((ind) => (
              <li key={ind.id}>
                <Link to={`/industries#${ind.id}`} className="chip">
                  {ind.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Example engagements */}
      <section className="section section--surface" aria-labelledby="examples-title">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <h2 id="examples-title" className="display">
                <Rise text="Example engagements" />
              </h2>
              <p>Typical projects, described honestly. Client case studies appear only with the client’s approval.</p>
            </div>
            <Link to="/case-studies" className="link-arrow">
              Case studies <ArrowRight width={18} height={18} />
            </Link>
          </div>
          <ExampleCards />
        </div>
      </section>

      <Testimonials />
      <ClientLogos />

      {/* Leadership teaser */}
      <section className="section" aria-labelledby="leaders-title">
        <div className="container leaders-strip">
          <div className="section-head">
            <h2 id="leaders-title" className="display">
              <Rise text="Led by practitioners." />
            </h2>
            <Link to="/about" className="link-arrow">
              About exQ <ArrowRight width={18} height={18} />
            </Link>
          </div>
          <LeaderTeaser />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
