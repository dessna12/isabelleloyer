import './AProposApproche.css'

const methodes = [
  {
    title: 'La Somatic Experiencing®',
    text: "Cette méthode permet de libérer en douceur les tensions et les énergies de survie (sidération, fuite, lutte) restées bloquées dans le système nerveux. On ne travaille pas seulement sur l'histoire racontée, mais sur la sensation physique pour restaurer un sentiment de sécurité profonde.",
  },
  {
    title: "L'ICV (Intégration du Cycle de la Vie)",
    text: "Un outil précieux pour relier les fragments du passé et « prouver » à votre système émotionnel que le temps a passé et que vous êtes enfin en sécurité aujourd'hui.",
  },
]

export default function AProposApproche() {
  return (
    <section className="apropos-approche">
      <div className="apropos-approche__inner reveal">
        <p className="apropos-approche__label">Mon approche</p>
        <h2 className="apropos-approche__title">Pourquoi la psychotraumatologie ?</h2>
        <div className="apropos-approche__intro">
          <p>
            On me demande souvent pourquoi j'ai choisi de me spécialiser dans des sujets aussi
            délicats que l'emprise, les violences ou les blessures d'enfance. La réponse est
            simple : parce que ce sont des douleurs qui isolent et qui s'inscrivent dans la biologie.
          </p>
          <p>
            Trop souvent, le trauma est mal compris. On pense qu'il faut un événement
            « catastrophique » pour souffrir, alors que le trauma se niche parfois dans le silence
            d'une enfance sans limites ou dans le contrôle invisible d'un conjoint. Ces vécus
            laissent des traces que la parole seule ne suffit pas toujours à effacer. C'est
            pourquoi j'intègre des approches psycho-corporelles majeures à ma pratique.
          </p>
        </div>
        <div className="apropos-approche__methodes">
          {methodes.map(({ title, text }) => (
            <div key={title} className="apropos-approche__methode">
              <h3 className="apropos-approche__methode-title">{title}</h3>
              <p className="apropos-approche__methode-text">{text}</p>
            </div>
          ))}
        </div>
        <p className="apropos-approche__closing">
          Dans mon cabinet, j'ai à cœur de proposer une thérapie qui ne se contente pas d'analyser
          le passé, mais qui rééquilibre votre système nerveux et répare votre présent.
        </p>
      </div>
    </section>
  )
}
