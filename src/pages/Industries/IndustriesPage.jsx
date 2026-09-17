import { Link } from 'react-router'
import { industries } from '../../data/industries'
import { getService } from '../../data/services'
import PageHeader from '../../components/common/PageHeader'
import Figure from '../../components/common/Figure'
import { Jack } from '../../components/common/Icons'
import CtaBand from '../../components/sections/CtaBand'
import labImg from '../../assets/images/industries-lab-1600.webp'
import labImgSm from '../../assets/images/industries-lab-800.webp'
import './IndustriesPage.css'

const lab = {
  src: labImg,
  srcSm: labImgSm,
  width: 1600,
  height: 1067,
  alt: 'Two women in blue scrubs working together at a computer in a laboratory',
  caption: 'Technology at work beyond the office',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Industries' }]}
        title="Technology support for the way your sector works"
        lead="Every kind of business leans on technology differently. Here’s where our services tend to fit, and what support usually involves."
        aside={<Figure image={lab} priority ratio="4 / 3" sizes="(min-width: 60em) 40vw, 100vw" />}
      />

      <section className="section section--tight" aria-labelledby="ind-list-title">
        <div className="container">
          <div className="ind-note">
            <h2 id="ind-list-title">Where we can help</h2>
            <p>
              These are the kinds of businesses our services suit and the technology they typically depend on. We don’t
              claim to specialise in every sector below; if yours isn’t listed, the same services usually still apply.
            </p>
          </div>

          <div className="ind-list">
            {industries.map((ind) => (
              <article key={ind.id} id={ind.id} className="ind" tabIndex={-1} aria-labelledby={`${ind.id}-title`}>
                <h3 id={`${ind.id}-title`} className="ind__name">
                  {ind.name}
                </h3>
                <div className="ind__body">
                  <p className="ind__title">{ind.title}</p>
                  <p className="ind__intro">{ind.intro}</p>
                </div>
                <div className="ind__needs">
                  <p className="ind__label">Usually involves</p>
                  <ul>
                    {ind.needs.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
                <div className="ind__svc">
                  <p className="ind__label">Relevant services</p>
                  <ul>
                    {ind.services.map((slug) => {
                      const s = getService(slug)
                      return (
                        <li key={slug}>
                          <Link to={`/services/${slug}`}>
                            <Jack cable={s.cable} size={14} />
                            {s.shortName}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Every business runs differently. Tell us how yours does."
        text="We’ll ask about your team, your locations and the systems you rely on, then suggest where to start."
      />
    </>
  )
}
