import { useReveal } from '../../../hooks/useReveal'
import './Services.css'

const individualItems = [
  'Traumas et blessures émotionnelles',
  "Anxiété, crises d'angoisse",
  'Stress ou épuisement',
  'Difficultés relationnelles',
  'Périodes de transition ou de crise',
]

const coupleItems = [
  'Sortir des conflits répétitifs',
  'Mieux se comprendre et communiquer',
  'Traverser une crise ou un événement difficile',
  'Retrouver de la sécurité et de la confiance dans la relation',
]

export default function Services() {
  const headRef = useReveal()
  const cardsRef = useReveal(0.1)

  return (
    <section id="services" className="services">
      <div className="services__container">
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="services__header reveal">
          <p className="services__label">Accompagnement</p>
          <h2 className="services__title">
            Thérapie individuelle et thérapie de couple
          </h2>
        </div>

        <div ref={cardsRef as React.RefObject<HTMLDivElement>} className="services__grid reveal">
          <div className="services__card services__card--dark">
            <p className="services__card-label">Thérapie individuelle</p>
            <h3 className="services__card-title">Pour avancer à votre rythme</h3>
            <ul className="services__list">
              {individualItems.map((item, i) => (
                <li key={i} className="services__list-item">
                  <span className="services__list-dot">●</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="services__cta">Prendre rendez-vous</a>
          </div>

          <div className="services__card services__card--light">
            <p className="services__card-label">Thérapie de couple</p>
            <h3 className="services__card-title">Retrouver la confiance à deux</h3>
            <ul className="services__list">
              {coupleItems.map((item, i) => (
                <li key={i} className="services__list-item">
                  <span className="services__list-dot">●</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="services__cta">Prendre rendez-vous</a>
          </div>
        </div>
      </div>
    </section>
  )
}
