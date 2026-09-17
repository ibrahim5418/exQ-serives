---
name: exQ Services
description: Everyday IT for Indian SMBs, drawn as a properly dressed network cabinet.
colors:
  rack: "#141618"
  rack-raised: "#1c1f22"
  rack-panel: "#23272b"
  rack-line: "#353a3f"
  rack-ink: "#eef0ec"
  rack-ink-2: "#aeb4b1"
  rack-ink-3: "#868d8a"
  ground: "#e9ebe7"
  sheet: "#f6f7f4"
  sheet-line: "#cfd3ce"
  ink: "#15181a"
  ink-2: "#4a5155"
  ink-3: "#626a6e"
  tape: "#f7f7f2"
  tape-yellow: "#f3c316"
  tape-ink: "#111314"
  teal: "#07bfc2"
  teal-ink: "#04696b"
  teal-press: "#05a7aa"
  teal-lit: "#1fd0d3"
  cable-yellow: "#f2c230"
  cable-red: "#d9433b"
  cable-blue: "#2f6fd6"
  cable-green: "#3ba55c"
  cable-grey: "#9aa2a6"
  led: "#3fd17a"
  led-off: "#2c3135"
  error: "#b3261e"
  ok: "#1f7a45"
  field: "#ffffff"
  field-stroke: "#8c9491"
typography:
  display:
    fontFamily: "Amp, Archivo Variable, Archivo Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.55rem, 1.35rem + 4.6vw, 5.1rem)"
    fontWeight: 790
    lineHeight: 0.98
    letterSpacing: "-0.024em"
    fontVariation: "'wdth' 86"
  headline:
    fontFamily: "Amp, Archivo Variable, Archivo Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 1.45rem + 3vw, 3.9rem)"
    fontWeight: 760
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 94"
  title:
    fontFamily: "Amp, Archivo Variable, Archivo Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 1.25rem + 1.7vw, 2.6rem)"
    fontWeight: 760
    lineHeight: 1.12
    letterSpacing: "-0.016em"
    fontVariation: "'wdth' 94"
  subtitle:
    fontFamily: "Amp, Archivo Variable, Archivo Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.05rem + 0.4vw, 1.35rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 94"
  lead:
    fontFamily: "Amp, Archivo Variable, Archivo Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 1.02rem + 0.35vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Amp, Archivo Variable, Archivo Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Amp, Archivo Variable, Archivo Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 640
    lineHeight: 1.1
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 80"
rounded:
  tape: "1px"
  hardware: "2px"
  control: "3px"
spacing:
  s-1: "0.25rem"
  s-2: "0.5rem"
  s-3: "0.75rem"
  s-4: "1rem"
  s-5: "1.5rem"
  s-6: "2rem"
  s-7: "3rem"
  s-8: "4.5rem"
  gutter: "clamp(1rem, 0.5rem + 2.6vw, 2.5rem)"
  section: "clamp(4rem, 2.6rem + 5.5vw, 8rem)"
  stroke: "2px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.tape-ink}"
    rounded: "{rounded.control}"
    padding: "0.7em 1.15em 0.7em 1.25em"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.teal-lit}"
  button-primary-active:
    backgroundColor: "{colors.teal-press}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.rack-ink}"
    rounded: "{rounded.control}"
    padding: "0.7em 1.15em 0.7em 1.25em"
    height: "3rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.control}"
    padding: "0.7em 1.15em 0.7em 1.25em"
    height: "3rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.7em 1.15em 0.7em 1.25em"
    height: "3rem"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  tape:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.tape-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tape}"
    padding: "0.3em 0.62em 0.26em"
  tape-yellow:
    backgroundColor: "{colors.tape-yellow}"
    textColor: "{colors.tape-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tape}"
    padding: "0.3em 0.62em 0.26em"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.rack-ink-2}"
    rounded: "{rounded.tape}"
    padding: "0.42rem 0.62rem 0.38rem"
  nav-link-active:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.tape-ink}"
    rounded: "{rounded.tape}"
    padding: "0.42rem 0.62rem 0.38rem"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.7rem 0.85rem"
    height: "3rem"
  figure-frame:
    backgroundColor: "{colors.rack-panel}"
    rounded: "{rounded.control}"
---

# Design System: exQ Services

## Overview

**Creative North Star: "The Dressed Cabinet"**

The site is a properly dressed network cabinet: every service is a labelled port, every run is traceable, and nothing is decorated that a good engineer would not also do to real equipment. It reads as an IT partner who takes care over the detail. The world was rolled as "Patch Panel & Label Tape" (seed key `e2e409a9`). The concept roll printed that key, the decision page closed unanswered, the round was re-asked through the structured question tool, and the user chose the pick card: position 1 on the ordered list.

Two surfaces carry the whole site. A light enclosure-grey ground (a tint of RAL 7035) holds reading content. Rack-black bands hold the moments where the cabinet is visible: the sticky header, the hero, the closing CTA band and the footer. Content is laid out as ruled lists and schedules rather than card grids: a 2px ink rule opens each list and 1px hairlines divide its rows. Six service cable colours work as a code, not as decoration. Label tape (flat white, or yellow when active) appears only on real objects. Depth and material detail belong to drawn hardware (the 1U patch panel, rack elevation units, a rating plate, a job sheet). UI surfaces stay flat.

Density is calm and editorial, with generous section padding (4 to 8rem fluid). The one interaction the site is remembered for is plugging a cable into a hero port: the plug seats, the port LED blinks to link, and that service's readout appears.

**Key Characteristics:**
- Enclosure-grey ground with rack-black bands for header, hero, CTA and footer.
- Archivo throughout, with the width axis separating label work (condensed) from reading work (normal).
- One 2px stroke draws every rule, cable run, route line, outline control and termination point.
- Six fixed service cable colours, each tied to a port number, recurring wherever that service appears.
- Flat label tape marks only ports, rack units, photo captions and the active nav item.
- Ruled lists and schedules in place of card grids; hardware drawings in place of icon tiles.

## Colors

Near-neutral cabinet greys and enclosure greys, a single brand teal, and a six-colour cable code used only to identify services.

### Primary
- **Patch Teal** (`teal`): the brand colour from the live site and the colour of Port 01 (IT Support). Fills the primary button, the wordmark's full stop, the hero headline's full stop, text selection and the focus ring on dark bands. It brightens to **Lit Teal** (`teal-lit`) on hover and darkens to **Pressed Teal** (`teal-press`) on press.
- **Deep Teal Ink** (`teal-ink`): teal dark enough to use on light surfaces. Draws the focus ring on the ground and sheet surfaces, and the tinted focus halo on form fields.

### Secondary
- **Label Tape White** (`tape`) and **Label Tape Yellow** (`tape-yellow`) with **Tape Ink** (`tape-ink`): printed label tape. White is the resting label. Yellow marks the live or selected state (the plugged-in port) and the skip link.

### Tertiary: the cable code
Each service owns a fixed port number and cable colour. They appear together wherever that service appears: jack bullets, the patch-panel plug and readout LED, the colour strip along a service page header, the route line on a service page, and termination points.
- **01 Patch Teal** (`teal`): IT Support & Managed Services.
- **02 Cable Yellow** (`cable-yellow`): Cloud & SaaS Solutions.
- **03 Cable Red** (`cable-red`): Cybersecurity.
- **04 Cable Blue** (`cable-blue`): Network & Infrastructure.
- **05 Cable Green** (`cable-green`): Website & Hosting Solutions.
- **06 Cable Grey** (`cable-grey`): IT Consulting & Special Projects. This was changed from violet during the finish review and is now final.
- **Link LED** (`led`) and **Dark LED** (`led-off`): port status lights only.

### Neutral
- **Rack Black** (`rack`): the cabinet band background (header, hero, CTA, footer, mobile nav).
- **Rack Raised** (`rack-raised`) and **Rack Panel** (`rack-panel`): the dropdown menu surface, the hover and current row inside it, and the backing behind photos before they load.
- **Rack Line** (`rack-line`): 1px dividers on dark bands (header and footer edges, mobile nav rows).
- **Rack Ink** (`rack-ink`), **Rack Ink 2** (`rack-ink-2`), **Rack Ink 3** (`rack-ink-3`): text on dark bands, used for headings, supporting copy and metadata/captions respectively.
- **Enclosure Grey** (`ground`): the page ground.
- **Sheet** (`sheet`): the lighter paper surface for dense reference content (service index strip, job sheet, sign-panels, form confirmation).
- **Sheet Line** (`sheet-line`): 1px row dividers on light surfaces.
- **Ink** (`ink`), **Ink 2** (`ink-2`), **Ink 3** (`ink-3`): text on light surfaces for headings, body/prose and metadata. Ink also draws every 2px rule.
- **Field** (`field`) and **Field Stroke** (`field-stroke`): form field fill and resting border.
- **Error Red** (`error`) and **OK Green** (`ok`): form validation only.

### Named Rules
**The Cable Code Rule.** The six cable colours identify services and nothing else. Port 01 through 06 map to teal, yellow, red, blue, green and grey in that fixed order. A cable colour never decorates a section, a heading or a background, and no seventh colour is added.

**The Two Surfaces Rule.** A section is either cabinet (Rack Black, Rack Ink) or enclosure (Enclosure Grey or Sheet, Ink). Never tint a surface with a cable colour or wash it with a gradient.

## Typography

**Display Font:** Archivo Variable (with a metric-matched Arial fallback "Archivo Fallback", then Helvetica Neue, Arial)
**Body Font:** the same Archivo Variable
**Ampersand:** "Amp", a unicode-range face (U+0026 only) that borrows Helvetica Neue / Arial / Liberation Sans / Roboto's conventional "&", because Archivo's stylised "Et" ampersand reads oddly in service names such as "Cloud & SaaS". It is the first family in the stack, in two weight bands (100–550 and 551–900).

**Character:** One grotesque carries the whole site. Its width axis does the work a second typeface would normally do: squeezed (76–86%) for labels and the hero headline, slightly narrowed (92–96%) for headings, full width for reading.

### Hierarchy
- **Display** (790, `clamp(2.55rem → 5.1rem)`, 0.98, width 86%, max 12.5ch): the home hero headline only, ending in a teal full stop.
- **Headline** (760, `clamp(2.2rem → 3.9rem)`, 1.04, width 94%): page `h1`s in page headers, max about 17ch.
- **Title** (760, `clamp(1.7rem → 2.6rem)`, 1.12, width 94%): section `h2`s. Closing statements scale up to about `clamp(1.9rem → 3.3rem)`.
- **Subtitle** (700, `clamp(1.15rem → 1.35rem)`, 1.12): `h3`s, list-row titles and step titles (1.1–1.25rem in place).
- **Lead** (400, `clamp(1.1rem → 1.3rem)`, 1.5, max 40–50ch): one supporting sentence under a headline.
- **Body** (400, 1.0625rem, 1.6, max 66ch): prose. Emphasis is `strong` at 680.
- **Label** (640, 0.78rem, width 80%, 0.05–0.07em, uppercase): tape text, schedule column heads, field-definition terms and footer column headings. Port labels on the patch panel squeeze further (0.68rem, width 76%).

### Named Rules
**The Width Axis Rule.** Condense to label, widen to read. Uppercase condensed caps are only for tape, table/column heads, definition terms and footer headings. Never use them as a line above a heading.

**The Tabular Numbers Rule.** Port numbers, step numbers and rack-unit numbers use tabular figures.

## Layout

The container is a single 82rem column with fluid gutters (`clamp(1rem → 2.5rem)`). Sections breathe with `clamp(4rem → 8rem)` block padding, or `clamp(3rem → 5.5rem)` for the tight variant. The spatial model is an asymmetric 12-part split: 7/5 for hero and page headers with an aside, 5/7 or 4/8 for headed lists, and 1:1 for even pairs. Splits stack below 60em.

Lists are the main unit of content. A service schedule is a five-column table at 60em and up (port, name, what it covers, who it suits, arrow) and collapses to a port-plus-name row with stacked detail below that. Project, value, commitment and industry lists are ruled rows. Sequences are drawn as a **cable run**: a 2px line with square termination points, horizontal at 60em and up, vertical on phones.

The hero patch panel is two ports across on phones, three at 40em, and six across at 80em, where the cables hang free below the panel. The readout sits under the ports from 48em and beside them from 64em. Wide screens (90em+) frame the hero with drawn rack rails.

Breakpoints are 30, 40, 48, 56, 60, 64, 75, 80 and 90em. The header is sticky at 4.25rem (4.5rem at 64em+). The desktop nav appears at 64em. Below that there is a full-screen dark mobile panel.

**The One Stroke Rule.** A 2px stroke (`--stroke`) draws every structural rule, cable run, route line, termination point, outline and ghost button border, input border and select chevron. 1px is reserved for hairline row dividers (Sheet Line, Rack Line) and the tape's inset edge.

## Elevation & Depth

Interface surfaces are flat. Hierarchy comes from the two surfaces, 2px rules and hairlines. Depth, bevels and shadows appear only on drawn hardware, where they describe a physical object: the brushed patch-panel face, recessed RJ45 sockets, screw heads, rack units, the rating plate, the job sheet lying on the page, and the services dropdown hanging off the dark header. Cables, boots, plugs and the page-header colour strip get cylindrical side-to-side shading, and rails, socket pins and rack-unit faces are textured with repeating gradients. Gradients appear nowhere else.

### Shadow Vocabulary
- **Panel face** (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.6), 0 14px 30px -18px rgba(0,0,0,0.9)`): the 1U patch panel.
- **Socket recess** (`box-shadow: inset 0 0 0 2px #333a3e, inset 0 3px 5px rgba(0,0,0,0.8)`): the RJ45 keystone. Its rim lightens to `#59636a` on hover and focus.
- **Dropdown** (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 10px 20px -10px rgba(0,0,0,0.75)`): the services menu on Rack Raised.
- **Sheet on desk** (`box-shadow: 0 16px 30px -22px rgba(0,0,0,0.5)`): the blank job sheet on Case Studies.
- **Inset edge** (`box-shadow: inset 0 0 0 1px …`): tape (16% tape ink), the rating plate (`#3c4246`) and sign-panels (Sheet Line).
- **Field focus halo** (`box-shadow: 0 0 0 3px rgba(4,105,107,0.35)`): form fields on focus. The error variant uses `rgba(179,38,30,0.25)`.

### Named Rules
**The Hardware-Only Depth Rule.** Something casts a shadow only if it would cast one in a real cabinet. Buttons, list rows, sections and tape stay flat.

**The Flat Tape Rule.** Label tape is a solid fill with a 1px inset hairline. No gloss, no gradient, no drop shadow.

## Shapes

Corners are nearly square, like cut tape and sheet steel. There are three radii: **tape** 1px (label tape, nav-link tape, termination points, rack units), **hardware** 2px (patch panel, sockets, readout window, job sheet, confirmation panel) and **control** 3px (buttons, inputs, photo frames, dropdown). The only round forms are LEDs, screw heads, rivets and leader-line dots. Termination points are small squares, 1.1–1.15rem, with a 2px ink border around a cable-coloured core. Jack bullets are drawn RJ45 plug faces: a cable-coloured square with a dark contact window and latch slot.

## Components

### Buttons
Plain and confident. They sit flat and are nearly square.
- **Shape:** 3px radius, minimum height 3rem, weight 680 at 94% width, with a trailing arrow that nudges 3px right on hover.
- **Primary:** teal fill with tape-ink text. It brightens on hover and darkens on press, and moves down 1px on active. There is no inset lip, bevel or shadow.
- **Ghost (on rack):** transparent with a 2px `#5d6468` border and Rack Ink text. The border turns Rack Ink on hover.
- **Ink (on light):** Ink fill with Sheet text, lifting to `#2a2f33` on hover.
- **Outline (on light):** a 2px Ink border with Ink text that fills with Ink on hover.
- **Focus:** a 3px teal outline at 3px offset on dark bands, and teal-ink on light surfaces.
- **Text link with arrow:** weight 660 with a 2px current-colour underline border. The arrow nudges 3px on hover.

### Label Tape
- **Style:** flat fill (white, or yellow for live/selected), tape-ink text in the Label style, 1px radius, and a 1px inset hairline at 16% ink.
- **Where:** ports (patch panel, "Port 0n" beside a service entry), rack units in the elevation, photo captions and the active desktop nav item. Nowhere else.

### Inputs / Fields
- **Style:** white fill, 2px Field Stroke border, 3px radius, minimum height 3rem. Labels sit above in 640 weight. A "Required" note is right-aligned in Ink 3.
- **Hover:** the border darkens to Ink 2.
- **Focus:** the border goes to Ink with a 3px teal-ink halo.
- **Error:** Error Red border and red halo. The message has a small square red marker, not an icon.
- **Select:** the native arrow is hidden. The chevron is drawn with the 2px stroke.

### Navigation
- **Header:** a sticky Rack Black bar with a 1px Rack Line bottom edge. The wordmark "exQ" (820 weight, 96% width, -0.045em tracking) is followed by a teal full stop.
- **Links:** 0.95rem, weight 560, Rack Ink 2. Hover goes to Rack Ink. The current page is marked with a strip of white label tape.
- **Services dropdown:** a small patch list on Rack Raised. Each row has a jack in its cable colour and a condensed port number. It opens on hover for fine pointers and through the caret button for keyboard and touch.
- **Mobile:** a 2px-bordered "Menu" toggle opens a full-screen Rack Black panel with large 1.35rem links divided by Rack Line hairlines. The current page shows in teal.
- **Footer:** Rack Black with plain condensed uppercase column headings in Rack Ink 3. There is no tape in the footer.

### Photo Figure
A 3px-radius frame on Rack Panel with the image cropped to a fixed ratio (16:10, 5:4 or 4:3). It has a caption row beneath: a label-tape caption plus a small "illustrative" note in Ink 3 / Rack Ink 3.

### Patch Panel (signature)
The hero's 1U panel has rack ears and screws, and six RJ45 ports, each with a tape label ("01 IT SUPPORT"). Hover or focus on a port seats a plug: the face fades in, and at 80em and up the boot and cable in that port's colour drop up into the socket. The tape turns yellow, and the port LED blinks from off to link with a stepped 1.1s pattern. A readout window (Rack black, 1px `#2c3135` edge) names the service with a status dot in its cable colour. Port 01 plugs itself in shortly after arrival. Each port is a link to its service page.

### Cable Run and Service Route (signature)
A **cable run** is a 2px ink line with square termination points whose core carries a cable colour, and numbered steps. On a service detail page, a vertical **route** line in that service's cable colour connects every section, with a termination point before each heading. A 0.55rem shaded strip in the same colour runs along the bottom of the page header.

### Rack Elevation (signature)
A drawn cabinet: two perforated rails and units sized in U, each with a condensed U number, a tape label and a front-panel texture for its kind of equipment (switch, patch panel, firewall, Wi-Fi, NVR, server, UPS). On wide screens a 2px leader line with a dot connects each unit to its note.

### Service Schedule
A ruled table of the six services. A 2px ink rule opens it and 1px Sheet Line hairlines divide the rows. Condensed caps column heads appear at 60em and up. The whole row is clickable through the name link. On hover the row gets a 3.5% ink wash, the name gets a 2px underline and the arrow moves 4px right.

## Do's and Don'ts

### Do:
- **Do** keep the port-to-cable mapping fixed: 01 teal, 02 yellow, 03 red, 04 blue, 05 green, 06 grey (`#9aa2a6`).
- **Do** draw every structural line with the 2px stroke and use 1px only for row hairlines.
- **Do** put reading content on Enclosure Grey or Sheet, and reserve Rack Black for header, hero, CTA and footer bands.
- **Do** lay out collections as ruled lists or schedules that open with a 2px ink rule.
- **Do** use Archivo's width axis for hierarchy: about 80% for labels, 86% for display, 92–96% for headings, 100% for body.
- **Do** keep the Amp face first in the font stack so "&" renders as a conventional ampersand.
- **Do** mark any photo as illustrative in its caption row.

### Don't:
- **Don't** put label tape on anything other than a port, a rack unit, a photo caption or the active nav item. Footer headings, section headings and cards get no tape.
- **Don't** place a condensed uppercase label or tape strip above a heading as a kicker or eyebrow.
- **Don't** give tape gloss, gradients or a drop shadow, or give the primary button an inset lip or bevel.
- **Don't** use gradient washes, glassmorphism, glows or blobs. Gradients belong only to drawn hardware: cylindrical shading on cables, boots, plugs and the header colour strip, and repeating textures on rails, sockets and rack-unit faces.
- **Don't** add shadows to UI surfaces. Depth belongs to drawn hardware only.
- **Don't** use a cable colour for decoration, or introduce a seventh service colour (the earlier violet for IT Consulting is retired).
- **Don't** fall back to icon-tile grids, counters or testimonial carousels. Hardware drawings, jack bullets and ruled lists do that work.
