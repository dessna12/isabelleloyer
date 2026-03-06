import { useState } from 'react'
import './AccompFAQ.css'

const faqs = [
  {
    q: "Je n'ai pas de souvenirs précis, puis-je quand même travailler sur mon trauma ?",
    a: "Oui. Mon approche ne nécessite pas de raconter chaque détail. Nous travaillons sur la trace que le passé a laissée dans votre corps et vos émotions aujourd'hui. Votre corps se souvient pour vous, et c'est là que nous intervenons.",
  },
  {
    q: "J'ai peur d'être submergé·e par mes émotions en séance.",
    a: "c'est une crainte légitime. C'est pourquoi, nous cherchons ensemble ce qui, aujourd'hui, vous fait du bien ou vous stabilise (une sensation physique, un souvenir apaisant, une respiration spécifique). Nous créons ainsi vos propres points d'appui pour que vous puissiez traverser vos émotions sans jamais perdre pied. On ne force jamais une porte fermée : nous avançons à votre rythme, en toute sécurité",
  },
  {
    q: "Est-ce que je peux venir si je ne suis pas encore prêt·e à quitter une relation difficile ?",
    a: "Absolument. La thérapie est un espace pour vous retrouver, pas pour vous pousser à agir malgré vous. Le changement extérieur vient naturellement quand la sécurité intérieure est restaurée.",
  },
]

export default function AccompFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="accomp-faq reveal">
      <div className="accomp-faq__inner">
        <p className="accomp-faq__label">Questions fréquentes</p>
        <h2 className="accomp-faq__title">Vos doutes sont normaux</h2>
        <div className="accomp-faq__list">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={`accomp-faq__item${isOpen ? ' accomp-faq__item--open' : ''}`}>
                <button
                  className="accomp-faq__question"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{q}</span>
                  <span className="accomp-faq__icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="accomp-faq__answer-wrap">
                  <p className="accomp-faq__answer">{a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
