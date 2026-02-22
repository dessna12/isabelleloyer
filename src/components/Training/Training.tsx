import { useReveal } from '../../hooks/useReveal'
import './Training.css'

const formations = [
  {
    title: 'EFAPO',
    text: 'Dipl\u00f4m\u00e9e de l\'EFAPO \u2014 \u00c9cole Fran\u00e7aise d\'Analyse Psycho-Organique.',
  },
  {
    title: 'Psychotraumatologie',
    text: 'Formation approfondie en Psychotraumatologie (OYA Formations).',
  },
  {
    title: 'TCA',
    text: 'Formation aux Troubles du Comportement Alimentaire (Association Autrement).',
  },
  {
    title: 'IFS & psychocorporel',
    text: 'Pratique de l\'IFS et outils psychocorporels.',
  },
]

export default function Training() {
  const headRef = useReveal()
  const timelineRef = useReveal(0.08)

  return (
    <section className="training">
      <div className="training__container">
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="training__header reveal">
          <p className="training__label">Parcours & formation</p>
          <h2 className="training__title">Un accompagnement ancré dans une formation solide</h2>
        </div>

        <div ref={timelineRef as React.RefObject<HTMLDivElement>} className="training__timeline reveal">
          {formations.map((f, i) => (
            <div key={i} className="training__entry">
              <div className="training__entry-marker">
                <span className="training__entry-dot" />
                <span className="training__entry-line" />
              </div>
              <div className="training__entry-content">
                <p className="training__entry-title">{f.title}</p>
                <p className="training__entry-text">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
