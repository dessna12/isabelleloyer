import './AccompMethod.css'

const levels = [
  {
    number: '1',
    label: 'Le Mental',
    desc: 'Mettre du sens sur le « pourquoi » pour sortir de la culpabilité.',
  },
  {
    number: '2',
    label: "L'Émotionnel",
    desc: 'Apprendre à réguler la peur, la honte ou la colère.',
  },
  {
    number: '3',
    label: 'Le Corporel',
    desc: 'Apaiser la mémoire physique du trauma (la sidération, les tensions) là où les mots ne suffisent plus.',
  },
]

export default function AccompMethod() {
  return (
    <section className="accomp-method reveal">
      <div className="accomp-method__inner">
        <p className="accomp-method__label">Ma méthode</p>
        <h2 className="accomp-method__title">Un cadre sécurisant et actif</h2>
        <p className="accomp-method__sub">
          Je propose une écoute active et une approche intégrative, ce qui signifie que nous travaillons sur trois niveaux indissociables&nbsp;:
        </p>
        <div className="accomp-method__grid">
          {levels.map(({ number, label, desc }) => (
            <div key={number} className="accomp-method__item">
              <span className="accomp-method__number">{number}</span>
              <h3 className="accomp-method__item-title">{label}</h3>
              <p className="accomp-method__item-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
