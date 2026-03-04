import './TherapiePourquoi.css'

const raisons = [
  {
    title: 'Sortir des cercles vicieux',
    text: 'Comprendre pourquoi les mêmes reproches reviennent sans cesse et comment les désamorcer.',
  },
  {
    title: 'Apaiser les réactivités',
    text: "Identifier quand c'est « l'enfant blessé » en nous qui réagit plutôt que l'adulte, notamment après une trahison ou une perte de confiance.",
  },
  {
    title: 'Retrouver une intimité réelle',
    text: 'Recréer un lien où chacun se sent entendu, respecté et en sécurité dans son intégrité.',
  },
]

export default function TherapiePourquoi() {
  return (
    <section className="therapie-pourquoi reveal">
      <div className="therapie-pourquoi__inner">
        <p className="therapie-pourquoi__label">Pourquoi consulter ?</p>
        <h2 className="therapie-pourquoi__title">
          Sortir des schémas qui vous enferment
        </h2>
        <p className="therapie-pourquoi__intro">
          La thérapie de couple est une démarche courageuse pour retrouver un espace
          de dialogue sécurisant.
        </p>
        <div className="therapie-pourquoi__grid">
          {raisons.map(({ title, text }) => (
            <div key={title} className="therapie-pourquoi__item">
              <span className="therapie-pourquoi__icon">◎</span>
              <div>
                <h3 className="therapie-pourquoi__item-title">{title}</h3>
                <p className="therapie-pourquoi__item-text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
