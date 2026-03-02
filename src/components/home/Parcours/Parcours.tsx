import './Parcours.css'

const formations = [
  'Diplômée de l\'EFAPO (École Française d\'Analyse Psycho-Organique).',
  'Formation approfondie en Psychotraumatologie (OYA Formations).',
  'Formation aux TCA (Troubles du Comportement Alimentaire – Association Autrement).',
  'Pratique de l\'IFS et outils psychocorporels.',
]

export default function Parcours() {
  return (
    <section className="parcours">
      <div className="parcours__container">
        <div className="parcours__header reveal">
          <p className="parcours__label">Parcours & formation</p>
          <h2 className="parcours__title">Un accompagnement ancré dans une formation solide</h2>
        </div>

        <ul className="parcours__list reveal">
          {formations.map((f, i) => (
            <li key={i} className="parcours__item">
              <span className="parcours__item-dot" aria-hidden>◎</span>
              <span className="parcours__item-text">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
