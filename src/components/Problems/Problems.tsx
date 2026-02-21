import { useReveal } from '../../hooks/useReveal'
import './Problems.css'

const symptoms = [
  "Hypervigilance, sensation d'être toujours sur le qui-vive",
  'Difficulté à ressentir ou exprimer vos émotions',
  'Cauchemars ou souvenirs envahissants',
  "Crises d'angoisse ou stress inexpliqué",
  'Fatigue émotionnelle, perte de sens ou épuisement',
  'Difficultés relationnelles ou conflits répétés dans le couple',
]

export default function Problems() {
  const headingRef = useReveal()
  const textRef = useReveal(0.1)
  const listRef = useReveal(0.1)
  const closingRef = useReveal(0.1)

  return (
    <section className="problems">
      <div className="problems__container">
        <p ref={headingRef as React.RefObject<HTMLParagraphElement>} className="problems__label reveal">
          Vous reconnaissez-vous ?
        </p>

        <h2 ref={textRef as React.RefObject<HTMLHeadingElement>} className="problems__title reveal">
          Quand les blessures du passé continuent d'impacter votre présent
        </h2>

        <p className="problems__intro">
          Certaines expériences de vie peuvent laisser des traces durables dans le corps, les émotions et les relations.
          Même longtemps après les événements, un mal-être difficile à expliquer peut persister.
        </p>

        <div ref={listRef as React.RefObject<HTMLDivElement>} className="problems__grid reveal">
          {symptoms.map((s, i) => (
            <div key={i} className={`problems__item${i % 2 === 0 ? ' problems__item--alt' : ''}`}>
              <span className="problems__icon">◆</span>
              <p className="problems__text">{s}</p>
            </div>
          ))}
        </div>

        <p ref={closingRef as React.RefObject<HTMLParagraphElement>} className="problems__closing reveal">
          Ces réactions ne sont pas un signe de faiblesse — elles sont souvent la conséquence d'événements
          qui ont dépassé vos capacités d'adaptation à un moment de votre vie.
        </p>
      </div>
    </section>
  )
}
