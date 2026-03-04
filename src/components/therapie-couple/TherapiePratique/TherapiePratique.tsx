import './TherapiePratique.css'

export default function TherapiePratique() {
  return (
    <section className="therapie-pratique">
      <div className="therapie-pratique__inner">

        <div className="therapie-pratique__deroulement reveal">
          <p className="therapie-pratique__label">Comment ça se passe ?</p>
          <h2 className="therapie-pratique__title">Le déroulement de l'accompagnement</h2>
          <div className="therapie-pratique__points">
            <div className="therapie-pratique__point">
              <span className="therapie-pratique__dot" />
              <div>
                <strong className="therapie-pratique__point-title">Un espace de parole équitable</strong>
                <p className="therapie-pratique__point-text">
                  Je veille à ce que chacun dispose du même temps et de la même écoute,
                  sans interruption ni jugement.
                </p>
              </div>
            </div>
            <div className="therapie-pratique__point">
              <span className="therapie-pratique__dot" />
              <div>
                <strong className="therapie-pratique__point-title">Une vision globale</strong>
                <p className="therapie-pratique__point-text">
                  Nous regardons le couple, mais aussi l'histoire de chacun, car on ne vient
                  jamais dans une relation « les mains vides ».
                </p>
              </div>
            </div>
            <div className="therapie-pratique__point">
              <span className="therapie-pratique__dot" />
              <div>
                <strong className="therapie-pratique__point-title">Un objectif clair</strong>
                <p className="therapie-pratique__point-text">
                  Le but n'est pas de maintenir un couple à tout prix, mais de retrouver de la
                  clarté. Si le chemin mène à une décision de séparation, je vous accompagne
                  pour que cette transition se fasse dans la dignité et la compréhension.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="therapie-pratique__conjoint reveal">
          <p className="therapie-pratique__conjoint-question">
            Et si mon conjoint refuse de venir ?
          </p>
          <p className="therapie-pratique__conjoint-answer">
            C'est une situation fréquente. Il est possible de commencer un travail individuel
            pour comprendre votre place dans la relation. Souvent, lorsque l'un des deux change
            sa manière de réagir et s'apaise, la dynamique globale du couple s'en trouve modifiée.
          </p>
        </div>

      </div>
    </section>
  )
}
