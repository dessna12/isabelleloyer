import './TherapieApproche.css'

const etapes = [
  {
    number: '1',
    title: 'Le décodage des déclencheurs',
    text: "Nous identifions ensemble ce qui, chez l'autre, vient réveiller une peur ou une insécurité ancienne (peur de l'abandon, peur du rejet, besoin de contrôle).",
  },
  {
    number: '2',
    title: 'La régulation du système nerveux',
    text: "Si l'un de vous est en état de « sidération » ou de « colère défensive » pendant une dispute, aucune communication n'est possible. J'aide chacun à s'apaiser pour que le dialogue puisse reprendre.",
  },
  {
    number: '3',
    title: 'La création d\'une bulle sécurisante',
    text: "Le cabinet devient un espace neutre où l'on apprend à exprimer ses besoins sans attaquer l'autre.",
  },
]

export default function TherapieApproche() {
  return (
    <section className="therapie-approche reveal">
      <div className="therapie-approche__inner">
        <p className="therapie-approche__label">Mon approche</p>
        <h2 className="therapie-approche__title">
          Le couple sous l'angle du lien et du trauma
        </h2>
        <p className="therapie-approche__intro">
          Contrairement à une médiation classique, j'intègre ma spécialisation en
          psychotraumatismes pour éclairer votre dynamique de couple.
        </p>
        <div className="therapie-approche__steps">
          {etapes.map(({ number, title, text }) => (
            <div key={number} className="therapie-approche__step">
              <span className="therapie-approche__number">{number}</span>
              <div>
                <h3 className="therapie-approche__step-title">{title}</h3>
                <p className="therapie-approche__step-text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
