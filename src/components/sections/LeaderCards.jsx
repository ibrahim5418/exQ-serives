import { useState } from 'react'
import { Link } from 'react-router'
import { leaders } from '../../data/team'
import { ArrowRight } from '../common/Icons'
import './LeaderCards.css'

function Avatar({ leader, size }) {
  if (leader.photo) {
    return <img className={`avatar avatar--${size}`} src={leader.photo} alt={`${leader.name}, ${leader.title}`} width="800" height="800" loading="lazy" decoding="async" />
  }
  return (
    <span className={`avatar avatar--${size}`} aria-hidden="true">
      {leader.initials}
    </span>
  )
}

function LeaderCard({ leader, index }) {
  // On phones the bio collapses to its first sentence with "Read more".
  const [expanded, setExpanded] = useState(false)
  const bioId = `${leader.id}-bio`
  return (
    <article className="leader card" data-reveal style={{ '--i': index }} aria-labelledby={`${leader.id}-name`}>
      <div className="leader__head">
        <Avatar leader={leader} size="lg" />
        <div>
          <h3 id={`${leader.id}-name`} className="leader__name">
            {leader.name}
          </h3>
          <p className="leader__title">{leader.title}</p>
        </div>
      </div>
      <p className="leader__remit">{leader.remit}</p>
      <div id={bioId} className={`leader__bio prose${expanded ? ' is-expanded' : ''}`}>
        <p>
          {leader.bio[0]} <span className="leader__bio-rest">{leader.bio.slice(1).join(' ')}</span>
        </p>
      </div>
      <button
        type="button"
        className="leader__more"
        aria-expanded={expanded}
        aria-controls={bioId}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? 'Read less' : 'Read more'}
        <span className="visually-hidden"> about {leader.name}</span>
      </button>
      <ul className="leader__tags" aria-label="Expertise">
        {leader.expertise.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
      <p className="leader__creds">{leader.credentials.join(' · ')}</p>
    </article>
  )
}

// Full leadership cards (About page).
export default function LeaderCards() {
  return (
    <div className="leaders">
      {leaders.map((l, i) => (
        <LeaderCard key={l.id} leader={l} index={i} />
      ))}
    </div>
  )
}

// Homepage teaser: photo or initials, name, title, linking to About.
export function LeaderTeaser() {
  return (
    <ul className="leader-teaser">
      {leaders.map((l, i) => (
        <li key={l.id} className="card card--interactive leader-teaser__item" data-reveal style={{ '--i': i }}>
          <Avatar leader={l} size="md" />
          <div>
            <h3 className="leader-teaser__name">
              <Link to="/about#leadership" className="card__link">
                {l.name}
              </Link>
            </h3>
            <p className="leader__title">{l.title}</p>
          </div>
          <ArrowRight className="leader-teaser__arrow" width={20} height={20} />
        </li>
      ))}
    </ul>
  )
}
