import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__inner">
          <p className="hero__eyebrow">Thérapeute · Psy · Le Cannet · Alpes-Maritimes</p>

          <h1 className="hero__title">
            Vous portez encore le poids d'un trauma<br />
            <em>ou d'une relation qui vous a blessé·e ?</em>
          </h1>

          <p className="hero__subtitle">
            Cabinet de thérapie spécialisé dans l’accompagnement des difficultés émotionnelles, relationnelles et des vécus traumatiques
          </p>

          <p className="hero__location">
            Consultations au Cannet et en visioconférence partout en France
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__cta-primary">
              Prendre rendez-vous
            </a>
            <a href="#about" className="hero__cta-secondary">
              En savoir plus <span>↓</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
