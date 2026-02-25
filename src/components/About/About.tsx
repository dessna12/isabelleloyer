import { useReveal } from '../../hooks/useReveal'
import './About.css'

const pillars = [
  {
    title: "Le respect de votre rythme",
    desc: "Nous ne forçons pas les souvenirs. Nous travaillons sur ce qui est présent pour vous, ici et maintenant, en douceur."
  },
  {
    title: "L'approche globale",
    desc: "Un travail qui prend en compte le corps, les émotions et le système relationnel pour apaiser la peur, la sidération ou la honte."
  },
  {
    title: "L'intégration durable",
    desc: "Utiliser des outils comme l'ICV pour « prouver » à votre système nerveux que le passé est enfin terminé et restaurer votre sécurité."
  }
]

const results = [
  "Retrouver de la clarté et ne plus douter de vous-même.",
  "Apaiser les tensions corporelles et les réactions émotionnelles disproportionnées.",
  "Se sentir enfin légitime et à sa place dans vos relations intérieure."
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
            Un cadre sécurisant pour une reconstruction en douceur
          </h2>

          <p className="about__intro">
            Au sein de mon cabinet au Cannet ou en visioconférence, je vous propose un espace de soin sans jugement basé sur{"\u00A0"}:
          </p>

          <ul className="about__list">
            {pillars.map((item, i) => (
              <li key={i} className="about__list-item">
                <span className="about__list-dot">●</span>
                <span>
                  <strong className="about__list-title">{item.title}</strong> : {item.desc}
                </span>
              </li>
            ))}
          </ul>

          <div className="about__results">
            <p className="about__results-label">Les résultats vers lesquels nous tendons</p>
            <ul className="about__results-list">
              {results.map((r, i) => (
                <li key={i} className="about__results-item">
                  <span className="about__list-dot">●</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
