import './About.css'

const pillars = [
  {
    title: "Le respect de votre rythme",
    desc: "Nous ne forçons pas les souvenirs. Nous travaillons sur ce qui est présent pour vous, ici et maintenant, en douceur."
  },
  {
    title: " Une approche globale",
    desc: "Mon travail prend en compte le corps, les émotions et les relations pour apaiser la peur, la sidération ou la honte."
  },
  {
    title: "Une intégration durable",
    desc: "Grâce à des outils comme l’ICV, nous aidons votre système nerveux à intégrer que le danger est passé et à restaurer un sentiment de sécurité profonde."
  }
]

const results = [
  "Retrouver de la clarté et de la confiance en vous.",
  "Apaiser les tensions corporelles et les réactions émotionnelles intenses.",
  "Vous sentir légitime et à votre place dans vos relations."
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__grid">
        <div className="about__image-wrapper reveal">
          <div className="about__image-bg" />
          <img
            src="/images/isabelle-laughing.webp"
            alt="Isabelle Loyer, thérapeute"
            className="about__image"
          />
        </div>

        <div className="about__text reveal">
          <p className="about__label">Pourquoi cet accompagnement ?</p>

          <h2 className="about__title">
            Un cadre sécurisant pour une reconstruction en douceur
          </h2>

          <p className="about__intro">
            Au sein de mon cabinet au Cannet ou en visioconférence, je vous propose un espace de soin sans jugement. Mon accompagnement repose sur 3 piliers{"\u00A0"}:
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
            <p className="about__results-label">Les changements que vous pouvez attendre</p>
            <ul className="about__results-list">
              {results.map((r, i) => (
                <li key={i} className="about__results-item">
                  <span className="about__list-dot">●</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <a href="/mes-accompagnements-therapeutiques" className="about__internal-link">
            Comment je peux vous aider ?
            <span className="about__internal-arrow" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
