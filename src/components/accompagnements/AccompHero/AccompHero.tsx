import './AccompHero.css'

export default function AccompHero() {
  return (
    <div className="accomp-hero">
      <div className="accomp-hero__image-wrap">
        <div className="accomp-hero__image-bg" />
        <div className="accomp-hero__image-overlay" />
      </div>
      <div className="accomp-hero__text">
        <p className="accomp-hero__label">Accompagnements</p>
        <h1 className="accomp-hero__title">Se reconnaître pour commencer à guérir</h1>
        <p className="accomp-hero__intro">
          Au-delà des techniques, je vous offre une présence réelle et une écoute qui ne juge rien. C’est dans cet espace de confiance que votre corps peut enfin lâcher prise.
        </p>
        <p className="accomp-hero__sub">
          Le trauma et l'emprise ne se soignent pas par la seule volonté. Ils demandent
          une approche qui parle à vos émotions et à votre corps.
        </p>
      </div>
    </div>
  )
}
