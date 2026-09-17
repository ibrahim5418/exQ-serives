import { Link } from 'react-router'
import { company } from '../../data/company'
import { getService } from '../../data/services'
import { industries } from '../../data/industries'
import { moments, process, commitments } from '../../data/home'
import { engagementTypes } from '../../data/caseStudies'
import Button from '../../components/common/Button'
import Figure from '../../components/common/Figure'
import { ArrowRight, Jack } from '../../components/common/Icons'
import PatchPanel from '../../components/sections/PatchPanel'
import ServiceSchedule from '../../components/sections/ServiceSchedule'
import RackElevation from '../../components/sections/RackElevation'
import CableRun from '../../components/sections/CableRun'
import CtaBand from '../../components/sections/CtaBand'
import heroImg from '../../assets/images/home-hero-cabinet-1600.webp'
import heroImgSm from '../../assets/images/home-hero-cabinet-800.webp'
import deskImg from '../../assets/images/home-office-desk-1600.webp'
import deskImgSm from '../../assets/images/home-office-desk-800.webp'
import './HomePage.css'

const hero = {
  src: heroImg,
  srcSm: heroImgSm,
  width: 1600,
  height: 1067,
  alt: 'Engineer reaching into a network cabinet to reseat patch cables',
  caption: 'Cabinet work in progress',
}

const desk = {
  src: deskImg,
  srcSm: deskImgSm,
  width: 1600,
  height: 1067,
  alt: 'Office employee smiling at her desk with a desktop computer and paperwork',
  caption: 'The people IT is really for',
}

export default function HomePage() {
  return (
    <>
      {/* Hero: the cabinet */}
      <section className="hero band-rack" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1 id="hero-title" className="hero__title">
              Technology that works for your business<span className="hero__dot">.</span>
            </h1>
            <p className="hero__lead">
              exQ Services helps businesses manage IT, cloud, cybersecurity and infrastructure, with practical support
              built around the way they actually work.
            </p>
            <div className="btn-row">
              <Button to="/contact">Get a free IT consultation</Button>
              <Button to="/services" variant="ghost">
                Explore our services
              </Button>
            </div>
          </div>
          <div className="hero__panel">
            <PatchPanel />
          </div>
          <div className="hero__photo">
            <Figure image={hero} priority ratio="5 / 4" sizes="(min-width: 60em) 40vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Who we are, and when people call */}
      <section className="section intro" aria-labelledby="intro-title">
        <div className="container">
          <div className="intro__grid">
            <h2 id="intro-title" className="intro__statement">
              From day-to-day support to infrastructure projects, we keep the technology behind your business running
              properly.
            </h2>
            <div className="intro__body prose">
              <p>
                We’re a team of <strong>more than 50 IT professionals</strong>. In the past year alone we supported{' '}
                <strong>over 40 businesses</strong>, looking after their helpdesks, cloud platforms, security, networks
                and websites.
              </p>
              <p>
                The aim is simple: make IT effortless, secure and scalable, so the people we work with can get on with
                growing their business.
              </p>
              <Link to="/about" className="link-arrow">
                More about exQ <ArrowRight width={18} height={18} />
              </Link>
            </div>
          </div>

          <div className="moments">
            <h2 className="moments__title">Businesses usually get in touch when…</h2>
            <ul className="moments__list">
              {moments.map((m) => {
                const s = getService(m.service)
                return (
                  <li key={m.text} className="moments__item">
                    <p>{m.text}</p>
                    <Link to={`/services/${s.slug}`} className="moments__link">
                      <Jack cable={s.cable} size={14} />
                      {s.shortName}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* The six services */}
      <section className="section sheet" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <h2 id="services-title">Six services. One team that knows your setup.</h2>
            <p>
              Take one service or several. Because the same team covers all six, your network, cloud accounts and
              security settings get planned together instead of by three different suppliers.
            </p>
          </div>
          <ServiceSchedule />
          <p className="services__more">
            <Link to="/services" className="link-arrow">
              Compare the services in detail <ArrowRight width={18} height={18} />
            </Link>
          </p>
        </div>
      </section>

      {/* Why exQ */}
      <section className="section why" aria-labelledby="why-title">
        <div className="container why__grid">
          <div className="why__photo">
            <Figure image={desk} ratio="4 / 5" sizes="(min-width: 60em) 38vw, 100vw" />
          </div>
          <div className="why__copy">
            <h2 id="why-title">Not every business needs the same IT setup.</h2>
            <p className="why__intro">
              We work around the way your team actually operates. In practice, that comes down to five things.
            </p>
            <dl className="values">
              {company.values.map((v) => (
                <div key={v.title} className="values__item">
                  <dt>{v.title}</dt>
                  <dd>{v.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Capabilities: the rack */}
      <section className="section band-rack capabilities" aria-labelledby="rack-title">
        <div className="container">
          <div className="section-head">
            <h2 id="rack-title">What we look after</h2>
            <p>
              We install, configure and support the equipment in a typical office cabinet, and the services that live
              outside it.
            </p>
          </div>
          <RackElevation />
        </div>
      </section>

      {/* Process */}
      <section className="section sheet" aria-labelledby="process-title">
        <div className="container">
          <div className="section-head">
            <h2 id="process-title">How we work</h2>
            <p>
              The same run every time, whether it’s a single office network or ongoing support for the whole business.
            </p>
          </div>
          <CableRun steps={process} />
        </div>
      </section>

      {/* Industries */}
      <section className="section industries-strip" aria-labelledby="ind-title">
        <div className="container split">
          <div className="section-head industries-strip__head">
            <h2 id="ind-title">Who we work with</h2>
            <p>
              Businesses that depend on their technology but don’t want to run an IT department. What that needs looks
              different in a clinic than in a warehouse.
            </p>
            <Link to="/industries" className="link-arrow">
              Technology support by industry <ArrowRight width={18} height={18} />
            </Link>
          </div>
          <ul className="industries-strip__list">
            {industries.map((ind) => (
              <li key={ind.id}>
                <Link to={`/industries#${ind.id}`}>
                  {ind.name}
                  <ArrowRight width={18} height={18} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Project work */}
      <section className="section sheet" aria-labelledby="projects-title">
        <div className="container projects-wrap">
          <div className="section-head">
            <h2 id="projects-title">The kind of projects we take on</h2>
            <p>
              We only publish case studies our clients have approved, so you won’t find invented success stories here.
              These are the engagements we do most often; ask us about one like yours and we’ll talk you through it.
            </p>
          </div>
          <ol className="projects">
            {engagementTypes.map((e) => {
              const s = getService(e.services[0])
              return (
                <li key={e.title} className="projects__row">
                  <h3 className="projects__title">{e.title}</h3>
                  <p className="projects__text">{e.text}</p>
                  <Link to={`/services/${s.slug}`} className="projects__svc">
                    <Jack cable={s.cable} size={14} />
                    {s.shortName}
                  </Link>
                </li>
              )
            })}
          </ol>
          <p className="services__more">
            <Link to="/case-studies" className="link-arrow">
              How we write up our work <ArrowRight width={18} height={18} />
            </Link>
          </p>
        </div>
      </section>

      {/* Trust: ways of working instead of borrowed testimonials */}
      <section className="section commit" aria-labelledby="commit-title">
        <div className="container">
          <div className="section-head">
            <h2 id="commit-title">What working with us looks like</h2>
          </div>
          <ul className="commit__list">
            {commitments.map((c) => (
              <li key={c.title} className="commit__item">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
