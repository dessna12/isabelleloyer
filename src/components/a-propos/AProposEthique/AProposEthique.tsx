import './AProposEthique.css'

const piliers = [
  {
    number: '1',
    title: 'Le non-jugement',
    text: "Quels que soient vos choix passés, vos mécanismes de survie (compulsions, addictions) ou vos doutes, vous trouverez ici une écoute inconditionnelle.",
  },
  {
    number: '2',
    title: 'La sécurité et la douceur',
    text: "C'est le pilier de mon travail. On ne force pas la guérison. En utilisant la psychotraumatologie et le travail corporel, nous veillons à ce que vous ne soyez jamais submergée.",
  },
  {
    number: '3',
    title: 'La collaboration',
    text: "Nous formons une équipe. Je ne suis pas l'experte qui « sait » tout sur vous, mais celle qui met ses outils au service de votre propre capacité de résilience.",
  },
]

export default function AProposEthique() {
  return (
    <section className="apropos-ethique reveal">
      <div className="apropos-ethique__inner">
        <p className="apropos-ethique__label">Mon éthique de soin</p>
        <h2 className="apropos-ethique__title">Un cadre fondé sur la confiance</h2>
        <div className="apropos-ethique__grid">
          {piliers.map(({ number, title, text }) => (
            <div key={number} className="apropos-ethique__item">
              <span className="apropos-ethique__number">{number}</span>
              <h3 className="apropos-ethique__item-title">{title}</h3>
              <p className="apropos-ethique__item-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
