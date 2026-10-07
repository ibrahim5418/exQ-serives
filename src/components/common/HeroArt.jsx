// Abstract line illustration for the homepage hero: a cloud drawn in parallel
// contours over a small network (cloud → firewall → switch → devices).
// Brand-colour strokes only, so it works in both themes (Task 9: no stock photos).
// Lines draw themselves in on load; small data packets then travel the links.
const cloud =
  'M150 250c-36 0-62-27-62-60 0-31 24-57 55-60 9-45 49-78 96-78 41 0 76 24 91 59 8-3 17-5 26-5 41 0 74 33 74 74 0 3 0 6-1 9 22 9 37 31 37 56 0 3-1 5-3 5H150z'

// Routes the packets follow (same coordinates as the drawn links).
const routes = [
  { d: 'M300 250V368', delay: '0s' },
  { d: 'M300 436V464H160V486', delay: '1.1s' },
  { d: 'M300 436V464H440V486', delay: '2.2s' },
]

// `--d` staggers the draw-in of each part, in order of the signal path.
const draw = (d) => ({ pathLength: 1, style: { '--d': d } })

export default function HeroArt({ className = '' }) {
  return (
    <svg className={`hero-art ${className}`.trim()} viewBox="0 0 560 520" fill="none" aria-hidden="true" focusable="false">
      <circle cx="300" cy="250" r="214" className="hero-art__ring hero-art__draw" {...draw(0)} />
      <circle cx="300" cy="250" r="150" className="hero-art__ring hero-art__ring--dash" />
      <circle cx="470" cy="70" r="30" className="hero-art__line hero-art__draw" {...draw(1)} />

      <g className="hero-art__cloud">
        <path d={cloud} className="hero-art__line hero-art__line--strong hero-art__draw" {...draw(1)} />
        <path d={cloud} className="hero-art__line hero-art__draw" transform="translate(14 14)" {...draw(2)} />
        <path d={cloud} className="hero-art__line hero-art__line--faint hero-art__draw" transform="translate(28 28)" {...draw(3)} />
      </g>

      {/* uplink */}
      <path d="M300 250v118" className="hero-art__line hero-art__line--strong hero-art__draw" {...draw(3)} />
      <circle cx="300" cy="250" r="5" className="hero-art__node" />

      {/* firewall + switch */}
      <rect x="226" y="368" width="148" height="30" rx="7" className="hero-art__line hero-art__line--strong hero-art__draw" {...draw(4)} />
      <path d="M244 383h40" className="hero-art__line hero-art__line--accent hero-art__draw" {...draw(5)} />
      <circle cx="350" cy="383" r="4" className="hero-art__node hero-art__node--accent hero-art__blink" />
      <rect x="226" y="406" width="148" height="30" rx="7" className="hero-art__line hero-art__draw" {...draw(5)} />
      <path d="M244 421h8M260 421h8M276 421h8M292 421h8M308 421h8" className="hero-art__line" />

      {/* devices */}
      <path d="M300 436v28M160 464h280M160 464v22M300 464v22M440 464v22" className="hero-art__line hero-art__draw" {...draw(6)} />
      <rect x="132" y="486" width="56" height="26" rx="5" className="hero-art__line hero-art__draw" {...draw(7)} />
      <rect x="272" y="486" width="56" height="26" rx="5" className="hero-art__line hero-art__draw" {...draw(7)} />
      <rect x="412" y="486" width="56" height="26" rx="5" className="hero-art__line hero-art__draw" {...draw(7)} />
      <circle cx="160" cy="464" r="4" className="hero-art__node" />
      <circle cx="300" cy="464" r="4" className="hero-art__node" />
      <circle cx="440" cy="464" r="4" className="hero-art__node" />

      {/* data packets */}
      {routes.map((r) => (
        <circle
          key={r.d}
          r="4.5"
          className="hero-art__packet"
          style={{ offsetPath: `path('${r.d}')`, animationDelay: r.delay }}
        />
      ))}
    </svg>
  )
}
