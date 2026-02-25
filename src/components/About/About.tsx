import { useReveal } from '../../hooks/useReveal'
import './About.css'

const specializations = [
  "Traumatismes dans l'enfance",
  "Blessures d'abandon, de rejet ou d'humiliation",
  'Agressions sexuelles ou harcèlement',
  'Burn-out ou épuisement professionnel',
  'Violences conjugales ou psychologiques',
  'Accident, agression ou événement marquant',
  'Stress post-traumatique',
]

export default function About() {
  const imgRef = useReveal(0.1)
  const textRef = useReveal(0.1)

  return (
    <section id="about" className="about">
      <div className="about__grid">
        <div ref={imgRef as React.RefObject<HTMLDivElement>} className="about__image-wrapper reveal">
          <div className="about__image-bg" />
          <img
            src="/images/isabelle-laughing.webp"
            alt="Isabelle Loyer, thérapeute"
            className="about__image"
          />
        </div>

        <div ref={textRef as React.RefObject<HTMLDivElement>} className="about__text reveal">
          <p className="about__label">Isabelle Loyer</p>

          <h2 className="about__title">
            Un accompagnement spécialisé dans les traumas et les épreuves de vie
          </h2>

          <p className="about__intro">
            Je vous accompagne lorsque votre histoire personnelle ou relationnelle a laissé
            des blessures émotionnelles durables. Mon approche s'adresse notamment aux
            personnes ayant vécu :
          </p>

          <ul className="about__list">
            {specializations.map((item, i) => (
              <li key={i} className="about__list-item">
                <span className="about__list-dot">●</span>
                {item}
              </li>
            ))}
          </ul>

          <blockquote className="about__quote">
            <p>
              L'objectif est de vous aider à retrouver un sentiment de sécurité intérieure,
              à comprendre vos réactions et à sortir des schémas qui vous font souffrir.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
