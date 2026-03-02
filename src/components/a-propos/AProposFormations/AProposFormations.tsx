import { PiGraduationCap, PiBrain, PiFlowerLotus, PiPersonArmsSpread, PiUsersThree } from 'react-icons/pi'
import './AProposFormations.css'

const formations = [
  {
    icon: PiGraduationCap,
    title: 'EFAPO',
    text: "Diplômée de l'EFAPO — École Française d'Analyse Psycho-Organique.",
  },
  {
    icon: PiBrain,
    title: 'Psychotraumatologie',
    text: 'Formation approfondie en Psychotraumatologie (OYA Formations).',
  },
  {
    icon: PiFlowerLotus,
    title: 'TCA',
    text: 'Formation aux Troubles du Comportement Alimentaire (Association Autrement).',
  },
  {
    icon: PiPersonArmsSpread,
    title: 'Somatic Experiencing® & ICV',
    text: "Thérapeute psychocorporelle — Praticienne en Somatic Experiencing® (Approche de résolution des traumas par la conscience corporelle) et en ICV (Intégration du Cycle de la Vie).",
  },
  {
    icon: PiUsersThree,
    title: 'Approche Systémique et Relationnelle',
    text: "Pour comprendre l'individu au sein de son couple et de sa famille.",
  },
]

export default function AProposFormations() {
  return (
    <section className="apropos-formations">
      <div className="apropos-formations__inner">
        <div className="apropos-formations__header reveal">
          <p className="apropos-formations__label">Parcours & formations</p>
          <h2 className="apropos-formations__title">Un accompagnement ancré dans une formation solide</h2>
        </div>
        <div className="apropos-formations__timeline reveal">
          {formations.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="apropos-formations__entry">
                <div className="apropos-formations__entry-marker">
                  <Icon className="apropos-formations__entry-icon" aria-hidden size={22} />
                  <span className="apropos-formations__entry-line" />
                </div>
                <div className="apropos-formations__entry-content">
                  <p className="apropos-formations__entry-title">{f.title}</p>
                  <p className="apropos-formations__entry-text">{f.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
