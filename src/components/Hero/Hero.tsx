import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__inner">
          <p className="hero__eyebrow">Thérapeute · Le Cannet · Alpes-Maritimes</p>

          <h1 className="hero__title">
            Retrouver la sérénité,<br />
            <em>à votre rythme</em>
          </h1>

          <p className="hero__subtitle">
            Un accompagnement pour apaiser votre système nerveux et gagner en sérénité.
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

      <div className="hero__fade" />
    </section>
  )
}
