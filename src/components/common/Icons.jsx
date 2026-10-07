// Authored icon set: 24px grid, 1.75px stroke, round caps. Icons use
// currentColor so they follow the theme.
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

const icon = (paths) => {
  const Icon = (p) => (
    <svg {...base} {...p}>
      {paths}
    </svg>
  )
  return Icon
}

export const ArrowRight = icon(<path d="M4 12h15M13 6l6 6-6 6" />)
export const ArrowUpRight = icon(<path d="M7 17L17 7M8 7h9v9" />)
export const ChevronDown = icon(<path d="M6 9l6 6 6-6" />)
export const Menu = icon(<path d="M4 7h16M4 12h16M4 17h16" />)
export const Close = icon(<path d="M6 6l12 12M18 6L6 18" />)
export const Plus = icon(<path d="M12 5v14M5 12h14" />)
export const Check = icon(<path d="M5 12.5l4.5 4.5L19 7.5" />)

export const Phone = icon(
  <path d="M6 3.5h3l1.5 4.5-2 1.3a10.5 10.5 0 0 0 6.2 6.2l1.3-2 4.5 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4 5.5a2 2 0 0 1 2-2z" />,
)

export const Mail = icon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
  </>,
)

export const Pin = icon(
  <>
    <path d="M12 21s-7-6-7-11.5a7 7 0 0 1 14 0C19 15 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </>,
)

export const Calendar = icon(
  <>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </>,
)

export const Clock = icon(
  <>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </>,
)

// Chat bubble with a handset: the WhatsApp button glyph (always shown with its label).
export const Chat = icon(
  <>
    <path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.6 19z" />
    <path d="M9.3 8.8c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .5-.1.6l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .6-.5.8-.6.3-1.6.4-3-.3a8.2 8.2 0 0 1-3.6-3.6c-.6-1.3-.5-2.3-.2-2.9z" />
  </>,
)

export const Sun = icon(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.6 4.6L6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
  </>,
)

export const Moon = icon(<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />)

/* ---------- Service icons ---------- */
const serviceIcons = {
  support: (
    <>
      <path d="M4.5 13v-1.5a7.5 7.5 0 0 1 15 0V13" />
      <rect x="3.5" y="12.5" width="4" height="6" rx="1.5" />
      <rect x="16.5" y="12.5" width="4" height="6" rx="1.5" />
      <path d="M18.5 18.5c0 1.5-1.5 2.5-4 2.5h-1.5" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18.5h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 9.1 4.75 4.75 0 0 0 7 18.5z" />
      <path d="M9.5 14.5l2.5-2.5 2.5 2.5M12 12v5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z" />
      <path d="M8.75 12l2.25 2.25 4.25-4.5" />
    </>
  ),
  network: (
    <>
      <rect x="9" y="3" width="6" height="4.5" rx="1" />
      <rect x="3" y="16.5" width="6" height="4.5" rx="1" />
      <rect x="15" y="16.5" width="6" height="4.5" rx="1" />
      <path d="M12 7.5v4.5M6 16.5V12h12v4.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.4 3.4 5.2 3.4 8.5s-1.1 6.1-3.4 8.5c-2.3-2.4-3.4-5.2-3.4-8.5S9.7 5.9 12 3.5z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="16.5" cy="9.5" r="2.5" />
      <path d="M15.5 14.2a4.5 4.5 0 0 1 5 4.3" />
    </>
  ),
  document: (
    <>
      <path d="M6 3h8.5L19 7.5V21H6z" />
      <path d="M14 3v5h5M9 12.5h6M9 16h6" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10M5 7h14" />
      <path d="M5 7l-2.5 6a2.5 2.5 0 0 0 5 0zM19 7l-2.5 6a2.5 2.5 0 0 0 5 0z" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7" />
    </>
  ),
}

export function ServiceIcon({ name, size = 24, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      {serviceIcons[name] || serviceIcons.support}
    </svg>
  )
}
