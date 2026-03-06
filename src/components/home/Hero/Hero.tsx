import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__inner">

          <p className="hero__name">Isabelle Loyer</p>

          <p className="hero__eyebrow">Thérapie des traumatismes et blessures relationnelles <br /> Le Cannet · Alpes-Maritimes · En ligne</p>


          <h1 className="hero__title">
            Vous portez encore le poids d'un trauma<br />
            <em>ou d'une relation qui vous a blessé·e ?</em>
          </h1>
          <p className="hero__subtitle">
            Retrouvez votre sécurité. Cabinet de thérapie spécialisé dans l’accompagnement des vécus traumatiques et des difficultés relationnelles.
          </p>


          <p className="hero__location">
            {/* Consultations avec Isabelle Loyer au Cannet et en visioconférence partout en France */}
            Je vous aide à mettre des mots sur ce qui se rejoue et à retrouver stabilité et apaisement.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__cta-primary">
              Prendre rendez-vous
            </a>
            <a href="#problems" className="hero__cta-secondary">
              En savoir plus <span>↓</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
