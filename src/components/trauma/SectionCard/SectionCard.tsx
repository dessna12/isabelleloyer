import './SectionCard.css'

export interface Section {
  number: string
  title: string
  target: string
  intro: string
  lived: string
  support: string
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
          {[
            { label: 'Ce que vous vivez', text: s.lived },
            { label: 'Mon accompagnement', text: s.support },
          ].map(({ label, text }) => (
            <div key={label} className="section-card__bullet">
              <span className="section-card__dot" />
              <p style={{ margin: 0 }}>
                <strong className="section-card__bullet-label">{label}</strong>
                <span className="section-card__bullet-text">{text}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
