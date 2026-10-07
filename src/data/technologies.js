// "Technologies we work with" strip (Task 18).
// Only entries Jamal has confirmed are shown: flip `confirmed` to true in
// content/technologies.json. Wording is always "Technologies we work with",
// never "Partners". `logo` is an optional monochrome SVG path in /public that
// follows the vendor's brand guidelines; without one, the name is shown as text.

import data from './content/technologies.json'

export const technologies = data.filter((t) => t.confirmed)

export const technologiesFor = (slug) => technologies.filter((t) => t.services.includes(slug))
