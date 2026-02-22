import { Link } from 'react-router-dom'
import { PiLeaf } from 'react-icons/pi'
import { useReveal } from '../../hooks/useReveal'
import './Problems.css'

const symptoms = [
  <><em>Hypervigilance</em> — sensation d'être toujours sur le qui-vive, en alerte</>,
  <>Difficulté à <em>ressentir ou exprimer</em> vos émotions, comme un vide intérieur</>,
  <><em>Cauchemars</em>, souvenirs envahissants qui surgissent sans prévenir</>,
  <>Crises d'<em>angoisse</em> ou stress difficile à nommer, qui semblent venir de nulle part</>,
  <><em>Fatigue profonde</em> — émotionnelle, physique — perte de sens ou d'élan</>,
  <>Conflits qui se répètent, <em>difficultés relationnelles</em> qui vous épuisent</>,
  <><em>Troubles du comportement alimentaire</em>, tentative de régulation face à une tension intérieure trop importante.</>
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
          Quand les blessures du passé continuent d'impacter votre présent
        </h2>

        <p className="problems__intro">
          Certaines expériences de vie laissent des traces durables dans le corps, les émotions et les relations.
          Même longtemps après, un mal-être difficile à expliquer peut persister.
        </p>

        <div ref={flowRef as React.RefObject<HTMLDivElement>} className="problems__flow reveal">
          {symptoms.map((s, i) => (
            <p key={i} className="problems__item">
              {s}
            </p>
          ))}
        </div>

        

        <div ref={closingRef as React.RefObject<HTMLDivElement>} className="problems__closing reveal">
          <PiLeaf className="problems__closing-icon" aria-hidden size={28} />
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
