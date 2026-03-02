import { useState } from 'react'
import './AccompCard.css'

export interface Accomp {
  number: string
  quote: string
  title: string
  type: string
  situation: string
  aide: string
}

export default function AccompCard({ a }: { a: Accomp }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="reveal">
    <article className={`accomp-card${isOpen ? ' accomp-card--open' : ''}`}>
      <button className="accomp-card__header" onClick={() => setIsOpen(o => !o)} aria-expanded={isOpen}>
        <div className="accomp-card__header-top">
          <span className="accomp-card__number">{a.number}</span>
          <span className="accomp-card__toggle">{isOpen ? '−' : '+'}</span>
        </div>
        <p className="accomp-card__quote">« {a.quote} »</p>
        <p className="accomp-card__title">{a.title}</p>
        <p className="accomp-card__type">{a.type}</p>
      </button>

      <div className="accomp-card__body-wrap">
        <div className="accomp-card__body">
          <div className="accomp-card__col">
            <p className="accomp-card__col-label">La situation</p>
            <p className="accomp-card__col-text">{a.situation}</p>
          </div>
          <div className="accomp-card__col">
            <p className="accomp-card__col-label">Mon aide</p>
            <p className="accomp-card__col-text">{a.aide}</p>
          </div>
        </div>
      </div>
    </article>
    </div>
  )
}
