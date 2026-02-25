import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import './Approach.css'

const goals = [
  {
    icon: '◎',
    title: 'L\'IFS (Internal Family Systems)',
    text: 'Pour mieux comprendre ses fonctionnements internes et apaiser les conflits intérieurs.',
  },
  {
    icon: '◎',
    title: 'La régulation du système nerveux',
    text: 'Pour aider le corps à sortir de l\'état d\'alerte, réduire l\'anxiété et retrouver un sentiment de sécurité.',
  },
  {
    icon: '◎',
    title: 'L\'approche psychocorporelle (Expérience Somatique)',
    text: 'Pour prendre en compte les tensions, les sensations corporelles et les réactions automatiques, et s\'en libérer.',
  },
  {
    icon: '◎',
    title: 'Stimulations bilatérales (proches de l\'EMDR)',
    text: 'Lorsque cela est pertinent, j\'intègre des stimulations bilatérales alternées (SBA), inspirées de l\'EMDR, pour aider certaines mémoires à se retraiter sans revivre les événements, et toujours dans le respect de vos limites.',
  }
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
            Les traumas ne sont pas seulement des souvenirs douloureux — ils s'inscrivent
            dans le corps et le système nerveux. Mon accompagnement s'appuie sur des approches
            validées par la recherche, travaillées à votre rythme et dans un cadre bienveillant.
          </p>
        </div>

        <div ref={cardsRef as React.RefObject<HTMLDivElement>} className="approach__grid reveal">
          {goals.map((g, i) => (
            <div key={i} className="approach__card">
              <div className="approach__card-header">
                <span className="approach__card-icon">{g.icon}</span>
                <h3 className="approach__card-title">{g.title}</h3>
              </div>
              <p className="approach__card-text">{g.text}</p>
            </div>
          ))}
        </div>

        <div className="approach__profile">
          <p className="approach__profile-quote">
            "Un espace sûr pour explorer ce que les mots ont du mal à atteindre."
          </p>
          <Link to="/accompagnements" className="approach__link">
            En savoir plus sur mes approches
            <span className="approach__link-arrow" aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
