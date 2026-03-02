import './AccompSigns.css'

const signs = [
  "Vous sursautez au moindre bruit ou vivez en état d'alerte permanent.",
  "Vous avez l'impression d'être « déconnectée » de votre corps ou de vos émotions.",
  "Vous ressentez une fatigue psychique que le sommeil ne répare pas.",
  "Vous vous excusez en permanence, même quand vous n'êtes pas responsable.",
]

export default function AccompSigns() {
  return (
    <section className="accomp-signs reveal">
      <div className="accomp-signs__inner">
        <p className="accomp-signs__label">À reconnaître</p>
        <h2 className="accomp-signs__title">Les signes qui ne trompent pas</h2>
        <p className="accomp-signs__sub">
          Si vous cochez plusieurs de ces cases, votre système est probablement en état de « survie ».
        </p>
        <ul className="accomp-signs__list">
          {signs.map((sign, i) => (
            <li key={i} className="accomp-signs__item">
              <span className="accomp-signs__dot" />
              <span>{sign}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
