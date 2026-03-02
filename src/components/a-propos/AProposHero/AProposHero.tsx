import './AProposHero.css'

export default function AProposHero() {
  return (
    <section className="apropos-hero">
      <div className="apropos-hero__content">
        <div className="apropos-hero__text reveal">
          <p className="apropos-hero__label">À propos</p>
          <h1 className="apropos-hero__title">Isabelle Loyer</h1>
          <p className="apropos-hero__quote">
            « Libérer les empreintes du passé pour retrouver l'équilibre du corps et de l'esprit. »
          </p>
          <p className="apropos-hero__intro">
            Je suis Isabelle Loyer, thérapeute spécialisée en psychotraumatismes et dans
            l'accompagnement des difficultés relationnelles.
          </p>
          <p className="apropos-hero__body">
            Mon parcours ne s'est pas construit uniquement sur des diplômes, mais sur une conviction
            profonde : personne ne devrait rester prisonnier de son passé ou d'une relation qui
            l'étouffe. Ce qui m'anime chaque jour, c'est de voir une personne retrouver son étincelle,
            sa capacité à dire « non » et son droit d'exister pleinement.
          </p>
        </div>

        <div className="apropos-hero__photo-wrap reveal">
          <img
            className="apropos-hero__photo"
            src="/images/photo-principale-isabelle-loyer.jpeg"
            alt="Isabelle Loyer, thérapeute"
          />
        </div>
      </div>
    </section>
  )
}
