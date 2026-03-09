import './SectionCard.css'

export interface Section {
  number: string
  title: string
  target: string
  intro: string
  lived: string[]
}

export default function SectionCard({ s }: { s: Section }) {
  return (
    <article className="section-card">
      <span className="section-card__number">{s.number}</span>

      <div>
        <p className="section-card__target">{s.target}</p>
        <h2 className="section-card__title">{s.title}</h2>
        <p className="section-card__intro">{s.intro}</p>

        <div className="section-card__bullets">
          <strong className="section-card__bullet-label">Ce que vous vivez</strong>
          {s.lived.map((item, i) => (
            <div key={i} className="section-card__bullet">
              <span className="section-card__dot" />
              <p style={{ margin: 0 }}>
                <span className="section-card__bullet-text">{item}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
