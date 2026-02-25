import { useReveal } from '../../../hooks/useReveal'
import './Location.css'

export default function Location() {
  const leftRef = useReveal()
  const rightRef = useReveal(0.1)

  return (
    <section id="contact" className="location">
      <div className="location__grid">
        <div ref={leftRef as React.RefObject<HTMLDivElement>} className="reveal">
          <p className="location__label">Consultation</p>
          <h2 className="location__title">Au Cannet ou en visioconférence</h2>
          <p className="location__intro">
            Je vous reçois en cabinet au Cannet pour des séances de thérapie individuelle ou de couple.
            Des consultations en visioconférence sont également possibles, partout en France.
          </p>

          <div className="location__items">
            <div className="location__item">
              <div className="location__item-icon">◎</div>
              <div>
                <p className="location__item-label">Cabinet</p>
                <p className="location__item-text">
                  190 Rue Saint-Sauveur<br />
                  06110 Le Cannet (Alpes-Maritimes)
                </p>
              </div>
            </div>

            <div className="location__item">
              <div className="location__item-icon">◎</div>
              <div>
                <p className="location__item-label">Horaires</p>
                <p className="location__item-text">
                  Lundi – Vendredi : 9h – 20h<br />
                  Samedi : 9h – 13h30
                </p>
              </div>
            </div>

            <div className="location__item">
              <div className="location__item-icon">◎</div>
              <div>
                <p className="location__item-label">Contact</p>
                <p className="location__item-text">
                  <a href="tel:0683695125" className="location__item-link">06 83 69 51 25</a><br />
                  <a href="mailto:iloyer.psychotherapie@gmail.com" className="location__item-link">
                    iloyer.psychotherapie@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref={rightRef as React.RefObject<HTMLDivElement>} className="location__media reveal">
          <img
            src="/images/cabinet de consultation.webp"
            alt="Cabinet de consultation Isabelle Loyer"
            className="location__photo"
          />
          <a href="#contact" className="location__cta">Prendre rendez-vous</a>
        </div>
      </div>
    </section>
  )
}
