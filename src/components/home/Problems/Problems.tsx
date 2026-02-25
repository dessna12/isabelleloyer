import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'
import './Problems.css'

const symptoms = [
  <><em>Sortir de l'Emprise & de la Toxicité</em><br /> Pour ne plus douter de vos perceptions, sortir de la confusion et retrouver votre identité face à une relation dénigrante ou manipulatrice.</>,
  <><em>Réparer les Blessures d'Enfance </em><br /> Pour apaiser un manque de confiance profond ou un sentiment d'illégitimité né d'un climat familial insécurisant, d'une absence de limites ou d'un vécu incestuel</>,
  <><em>Réguler les Compulsions & Addictions </em><br /> Pour comprendre comment l'alcool ou les troubles alimentaires (boulimie, hyperphagie) sont des tentatives de survie face à une angoisse ou un vide que vous ne maîtrisez plus.</>,
  <><em>Restaurer le Lien de Couple </em><br /> Pour sortir des disputes répétitives et comprendre comment vos histoires personnelles influencent votre relation et votre sentiment de sécurité aujourd'hui.</>
]

export default function Problems() {
  const headingRef = useReveal()
  const textRef = useReveal(0.1)
  const flowRef = useReveal(0.08)
  const closingRef = useReveal(0.1)

  return (
    <section className="problems">
      <div className="problems__container">
        <p ref={headingRef as React.RefObject<HTMLParagraphElement>} className="problems__label reveal">
          Vous reconnaissez-vous ?
        </p>

        <h2 ref={textRef as React.RefObject<HTMLHeadingElement>} className="problems__title reveal">
          Mettre des mots sur votre vécu pour sortir de l'impasse
        </h2>

        <p className="problems__intro">
          Le trauma ne se limite pas aux événements visibles. Il se loge souvent dans le quotidien, sous différentes formes{"\u00A0"}:
        </p>

        <div ref={flowRef as React.RefObject<HTMLDivElement>} className="problems__flow reveal">
          {symptoms.map((s, i) => (
            <p key={i} className="problems__item">
              {s}
            </p>
          ))}
        </div>



        <div ref={closingRef as React.RefObject<HTMLDivElement>} className="problems__closing reveal">
          <span className="problems__closing-icon" aria-hidden>◎</span>
          <p>
            Ces réactions ne sont pas un signe de faiblesse — elles sont souvent la conséquence d'événements
            qui ont dépassé vos capacités d'adaptation à un moment de votre vie.
          </p>
        </div>

        <Link to="/traumas" className="problems__link">
          Comprendre ses traumas
          <span className="problems__link-arrow" aria-hidden>→</span>
        </Link>
      </div>
    </section>
  )
}
