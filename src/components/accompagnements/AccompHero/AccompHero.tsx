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
        <h1 className="accomp-hero__title">Comment je vous aide ?</h1>
        <p className="accomp-hero__intro">
          Je ne vous propose pas simplement des outils, mais une présence pour vous aider
          à sortir de l'impasse et remettre la vie en mouvement là où elle s'était figée.
          Mon rôle est de vous offrir un espace où votre vécu est enfin reconnu et où
          votre système nerveux peut apprendre à s'apaiser.
        </p>
        <p className="accomp-hero__sub">
          Le trauma et l'emprise ne se soignent pas par la seule volonté. Ils demandent
          une approche qui parle à vos émotions et à votre corps.
        </p>
      </div>
    </div>
  )
}
