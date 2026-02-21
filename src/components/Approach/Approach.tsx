import { useReveal } from '../../hooks/useReveal'
import './Approach.css'

const goals = [
  {
    icon: '◎',
    title: 'Apaiser le système nerveux',
    text: "Réduire les réactions de stress, d'hypervigilance et les déclencheurs automatiques.",
  },
  {
    icon: '◎',
    title: 'Retrouver des émotions stables',
    text: 'Mieux ressentir, nommer et réguler vos états émotionnels au quotidien.',
  },
  {
    icon: '◎',
    title: 'Développer la sécurité intérieure',
    text: 'Construire un rapport à vous-même plus ancré, plus confiant et moins réactif.',
  },
  {
    icon: '◎',
    title: 'Des relations plus sereines',
    text: 'Transformer les schémas relationnels répétitifs pour créer des liens plus nourrissants.',
  },
]

export default function Approach() {
  const headRef = useReveal()
  const cardsRef = useReveal(0.1)

  return (
    <section id="approach" className="approach">
      <div className="approach__container">
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="approach__header reveal">
          <p className="approach__label">Mon approche</p>
          <h2 className="approach__title">
            Une thérapie centrée sur le système nerveux et la sécurité intérieure
          </h2>
          <p className="approach__intro">
            Les traumas ne sont pas seulement des souvenirs douloureux — ils s'inscrivent dans
            le corps et le système nerveux. Le travail se fait à votre rythme, dans un cadre
            bienveillant, respectueux et confidentiel.
          </p>
        </div>

        <div ref={cardsRef as React.RefObject<HTMLDivElement>} className="approach__grid reveal">
          {goals.map((g, i) => (
            <div key={i} className="approach__card">
              <div className="approach__card-icon">{g.icon}</div>
              <h3 className="approach__card-title">{g.title}</h3>
              <p className="approach__card-text">{g.text}</p>
            </div>
          ))}
        </div>

        <div className="approach__profile">
          <img
            src="/images/isabelle-laughing.jpeg"
            alt="Isabelle Loyer"
            className="approach__profile-img"
          />
          <div>
            <p className="approach__profile-quote">
              "Un espace sûr pour explorer ce que les mots ont du mal à atteindre."
            </p>
            <p className="approach__profile-text">
              Mon accompagnement s'appuie sur des approches validées par la recherche :
              la thérapie des systèmes familiaux internes (IFS), la régulation du
              système nerveux et l'expérience somatique — pour que le changement se
              ressente autant dans le corps que dans la pensée.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
