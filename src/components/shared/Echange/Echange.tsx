import './Echange.css'

const reassurances = [
  "Vous n'avez pas besoin d'être certain·e de vouloir commencer une thérapie pour me contacter.",
  "Vous n'avez pas besoin d'aller « très mal » pour demander un échange.",
  "Vous n'êtes pas tenu·e de raconter des éléments difficiles dès le premier contact.",
]

export default function Echange({ freeCall = false }: { freeCall?: boolean }) {
  return (
    <section className="echange reveal">
      <div className="echange__inner">
        <div className="echange__left">
          <p className="echange__label">Premier échange</p>
          <h2 className="echange__title">Avant de commencer</h2>
          <p className="echange__cadre">
            Le cadre proposé respecte toujours votre rythme, vos limites et ce qui est
            possible pour vous à l'instant présent.
          </p>
        </div>

        <div className="echange__right">
          <ul className="echange__list">
            {reassurances.map((r, i) => (
              <li key={i} className="echange__item">
                <span className="echange__icon">◎</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>

          <div className="echange__contact">
            {freeCall ? (
              <div className="echange__freecall">
                <p className="echange__freecall-text">
                  Pour vous aider à faire ce premier pas, je propose un échange téléphonique
                  gratuit de 15 minutes — sans engagement, pour que vous puissiez me poser
                  vos questions et sentir si ce cadre vous correspond.
                </p>
                <a href="#contact" className="echange__freecall-link">
                  Réserver un échange gratuit <span aria-hidden>→</span>
                </a>
              </div>
            ) : (
              <p className="echange__contact-text">
                Je suis joignable par téléphone ou par email, selon ce qui vous convient
                le mieux. Si je ne suis pas disponible, laissez un message vocal — je vous
                rappellerai dès que possible. Je m'efforce de répondre aux emails dans des
                délais raisonnables, en tenant compte de mes temps de consultation.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
