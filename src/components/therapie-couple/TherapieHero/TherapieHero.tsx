import './TherapieHero.css'

export default function TherapieHero() {
  return (
    <div className="therapie-hero">
      <div className="therapie-hero__image-wrap">
        <div className="therapie-hero__image-bg" />
        <div className="therapie-hero__image-overlay" />
      </div>
      <div className="therapie-hero__text">
        <p className="therapie-hero__label">Thérapie de couple</p>
        <h1 className="therapie-hero__title">Restaurer l'espace de sécurité</h1>
        <p className="therapie-hero__quote">
          On s'aime, mais on ne se comprend plus.
        </p>
        <p className="therapie-hero__intro">
          Le couple est souvent le miroir de nos blessures les plus anciennes. Quand la
          communication se rompt, que les silences s'installent ou que les disputes deviennent
          destructrices, ce n'est pas forcément l'amour qui manque, mais la sécurité relationnelle.
        </p>
        <p className="therapie-hero__sub">
          Mon cabinet est un espace tiers, protégé des tensions du quotidien. Je ne suis ni juge,
          ni avocat : dans cet espace, mon patient, c'est le lien qui vous unit.
        </p>
      </div>
    </div>
  )
}
