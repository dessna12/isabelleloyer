import './Problems.css'

const symptoms = [
  <><em>Vous vous sentez prisonnier d'une relation qui vous détruit </em><br /> Vous doutez de vos propres perceptions, vous vivez dans la confusion ou vous avez le sentiment de vous être "effacé" face à une personne manipulatrice ou dénigrante.</>,
  <><em>Vous portez un sentiment d'illégitimité qui vient de loin  </em><br /> Vous avez grandi dans un climat insécurisant ou sans limites claires. Aujourd'hui, cela se traduit par un manque de confiance profond, une peur d'être abandonné ou le sentiment de n'être jamais vraiment à votre place. </>,
  <><em>Vous vous sentez comme "éteint" ou en alerte constante après une agression </em><br />  Votre corps est resté bloqué dans la peur ou la sidération après avoir subi des violences (sexuelles, physiques ou conjugales). Vous cherchez un espace protégé pour sortir de cet état de survie, retrouver votre dignité et vous sentir à nouveau en sécurité dans votre propre corps.</>,
  <><em>Vous utilisez des "béquilles" pour ne plus souffrir</em><br />L'alcool, la nourriture (boulimie, hyperphagie) ou d'autres compulsions sont devenus vos seuls moyens de calmer une angoisse ou un vide intérieur que vous ne parvenez plus à maîtriser.</>,
  <><em>Votre couple est devenu un terrain de tensions </em><br /> Les disputes se répètent, le dialogue est rompu et vous sentez que vos histoires personnelles s'invitent dans votre relation, vous empêchant de retrouver la sécurité et la complicité à deux.</>
]

export default function Problems() {
  return (
    <section className="problems">
      <div className="problems__container">
        <p className="problems__label reveal">
          Vous reconnaissez-vous ?
        </p>

        <h2 className="problems__title reveal">
          Mettre des mots sur votre vécu pour sortir de l'impasse
        </h2>

        <p className="problems__intro">
          Le traumatisme n'est pas seulement ce qui s'est passé, c'est ce qui continue de vivre en vous. Cela crée des impasses dans votre vie actuelle, sous des formes parfois inattendues{"\u00A0"}:
        </p>

        <div className="problems__flow reveal">
          {symptoms.map((s, i) => (
            <p key={i} className="problems__item">
              {s}
            </p>
          ))}
        </div>

        <div className="problems__closing reveal">
          <span className="problems__closing-icon" aria-hidden>◎</span>
          <p>
            Ces réactions ne sont pas un signe de faiblesse — elles sont souvent la conséquence d'événements
            qui ont dépassé vos capacités d'adaptation à un moment de votre vie.
          </p>
        </div>

        <a href="/traumas" className="problems__link">
          Comprendre ses traumas
          <span className="problems__link-arrow" aria-hidden>→</span>
        </a>
      </div>
    </section>
  )
}
