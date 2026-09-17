import { Plus } from './Icons'

export default function FaqList({ items, headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <div className="faq">
      {items.map((item) => (
        <details className="faq__item" key={item.q}>
          <summary className="faq__q">
            <H className="faq__title">{item.q}</H>
            <Plus className="faq__icon" />
          </summary>
          <div className="faq__a">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
