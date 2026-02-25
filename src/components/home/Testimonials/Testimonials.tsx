import { useReveal } from '../../../hooks/useReveal'
import './Testimonials.css'

const reviews = [
  {
    text: "Dès mon premier échange avec Isabelle, je me suis sentie écoutée et en confiance. Je la recommande car elle a fait preuve d'une grande bienveillance et d'un vrai sens de l'humain.",
    author: 'Caroline A.',
  },
  {
    text: "De par sa sensibilité et son âme, Isabelle offre un soutien précieux avec ses conseils empreints d'une extrême bienveillance. Également très professionnelle dans l'analyse et les domaines de travail suggérés.",
    author: 'Guillaumi',
  },
  {
    text: "J'ai été accueillie avec chaleur par Isabelle. Elle a su me mettre à l'aise très rapidement. Très à l'écoute. Surtout, elle a envisagé très rapidement des axes de réflexion très intéressants. Que nous investissons ensemble maintenant. Je recommande vivement cette thérapeute, pour son professionnalisme.",
    author: 'Xokuo',
  },
]

export default function Testimonials() {
  const headRef = useReveal()
  const cardsRef = useReveal(0.1)

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="testimonials__header reveal">
          <p className="testimonials__label">Témoignages</p>
          <h2 className="testimonials__title">Ce que disent mes patients</h2>
        </div>

        <div ref={cardsRef as React.RefObject<HTMLDivElement>} className="testimonials__grid reveal">
          {reviews.map((r, i) => (
            <article key={i} className="testimonials__card">
              <div className="testimonials__stars">★★★★★</div>
              <blockquote className="testimonials__text">"{r.text}"</blockquote>
              <footer className="testimonials__author">— {r.author}</footer>
            </article>
          ))}
        </div>

        <div className="testimonials__badge">
          <span className="testimonials__badge-stars">★★★★★</span>
          Avis Google vérifiés
        </div>
      </div>
    </section>
  )
}
