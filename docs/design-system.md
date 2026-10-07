# Design system

Light, fresh and premium, with the interaction language of the reference video: bold uppercase two-tone headlines, a pill navigation capsule, headlines that rise line by line, a sheet that lifts off each new page, and quiet hover fills. Light is the default; dark is designed separately (navy, never black). Motion stays within the developer brief: 300ms or less, once per element, off under `prefers-reduced-motion`.

## Colour

Every colour is a token in `src/styles/tokens.css`, defined for `:root` (light) and `[data-theme="dark"]`. Components never use raw hex values.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--bg` | `#FFFFFF` | `#0E1726` | Page background |
| `--surface` | `#F5F7FA` | `#16223A` | Alternate sections |
| `--card` | `#FFFFFF` | `#1C2B47` | Cards, menus, fields |
| `--border` | `#E3E8EF` | `#2A3A57` | Card and input borders, dividers |
| `--text` | `#0F1E36` | `#E6EDF7` | Headings and body |
| `--text-muted` | `#4A5568` | `#A7B4C8` | Secondary text |
| `--primary` | `#2F6FED` | `#6C9BFF` | Buttons, links, display headlines |
| `--primary-hover` | `#2459C7` | `#8DB3FF` | Hover; links on `--surface` |
| `--on-primary` | `#FFFFFF` | `#0E1726` | Text on primary |
| `--accent` | `#14B8A6` | `#2DD4BF` | Icons, dots, highlights |
| `--accent-text` | `#0F766E` | `#5EEAD4` | Teal text (eyebrows, labels) |
| `--focus` | `#2F6FED` | `#8DB3FF` | Focus ring |
| `--error` / `--success` | `#C53030` / `#2F855A` | `#FC8181` / `#68D391` | Form states |

Derived tokens: `--tint` (hero and CTA bands), `--border-strong` (control borders, 3:1), `--link` / `--link-on-surface` (primary is 4.2:1 on `--surface`, so links there use the hover shade), `--header-bg`, `--scrim`, `--shadow-hover` (light only; dark uses borders), `--img-filter`, `--embed-bg` (Bookings stays white in both themes).

## Type

Two self-hosted faces, Latin subset only:

- **Bricolage Grotesque 800** (`--font-display`) for H1, H2, every `.display` element, the wordmark and the mobile menu. A characterful modern grotesque that holds up in bold uppercase. Its metric-matched fallback (Arial at 86.5%) keeps the swap from shifting layout. This is an agreed exception to Task 9's one-font rule, approved by the site owner on 7 October 2026.
- **Plus Jakarta Sans 400/500/600/700** (`--font`) for everything you read.

H1 52/34px, H2 36/28px, H3 22/20px, body 17px, small 14px; line-height 1.6 body, 1.2 headings. Display headings are uppercase; `.tone` colours a phrase in `--primary`.

## Layout

1200px content width, 16px mobile gutter, 112/64px section spacing. Cards: 1px border, 12px radius, 24–32px padding, soft shadow on hover in light mode. Buttons: 48px tall, 8px radius; primary solid, secondary outlined. Tap targets are at least 44 × 44px.

## Components

- **Header**: wordmark, pill navigation (a dot slides in beside the hovered or current item), theme toggle, primary CTA. Services opens a five-column mega menu on click, Enter or Space; Esc or an outside click closes it.
- **Mobile panel**: full height, focus trapped, scroll locked, services as an expandable group, "Dark mode" switch and CTA at the bottom. A bottom action bar (Email · WhatsApp · Book) shows on phones.
- **Page header**: breadcrumb, large blue uppercase H1 on the left; tagline, lead and actions on the right; faint line grid behind.
- **Sections**: service cards, example-engagement cards (always labelled), process steps, the cabinet diagram, CTA band, leadership cards (initials until photos arrive), technologies strip (hidden until confirmed), and proof components that render nothing while empty.

## Motion

- `.rise` (component `Rise`): words or lines rise out of a mask on page entry and replay on theme switch. Transform only, so the text paints immediately.
- `.enter`: CSS-only entrance for above-the-fold blocks.
- `[data-reveal]`: blocks below the fold fade and slide in once (`usePageMotion`).
- `.curtain`: a sheet with an angled, primary-edged leading edge sweeps up off the new page on route changes.
- Theme switch: the new theme spreads in a circle from the toggle (View Transitions API, 200ms), with a 200ms colour ease as the fallback. Headlines replay their rise.
- Header: tucks away while scrolling down and returns on the way up; a 2px progress line tracks reading position (`--header-offset` moves sticky elements with it).
- Pointer effects (`useInteractionEffects`, mouse and trackpad only): a soft spotlight follows the cursor across cards, and primary and icon buttons lean up to 6px towards it.
- Links: underlines sweep in from the left.
- Ambient detail: the hero illustration draws itself in and small data packets travel its links; cabinet LEDs flicker like real network activity; process connectors draw towards the next step as it appears.

All of it is disabled under `prefers-reduced-motion`. Entrance animations stay at 300ms or less.

## Imagery

No stock photos. Line illustrations in brand colours (`HeroArt`), an authored icon set (`Icons.jsx`, 1.75px stroke, `currentColor`), and the cabinet diagram drawn with tokens. Real work photos and headshots can replace these as they arrive.
