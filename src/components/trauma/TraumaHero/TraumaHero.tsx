import './TraumaHero.css'

export default function TraumaHero() {
  return (
    <div className="trauma-hero">

      <div className="trauma-hero__image-wrap">
        <div className="trauma-hero__image-bg" />
        <div className="trauma-hero__image-overlay" />
        <p className="trauma-hero__quote">
          Le trauma n'est pas une fatalité. C'est une mémoire qui peut être intégrée
          pour cesser de dicter votre présent.
        </p>
      </div>
      <div className="trauma-hero__text">
        <p className="trauma-hero__label">Ressources</p>
        <h1 className="trauma-hero__title">
          Mettre des mots sur l'invisible
        </h1>
        <p className="trauma-hero__intro">
          Le trauma n'est pas toujours un événement spectaculaire ou unique.
          C'est parfois une atmosphère, une relation, ou une blessure ancienne
          qui continue de vibrer en vous, bien après que les faits soient passés.
          Si vous ressentez aujourd'hui un poids, un vide ou une hypervigilance
          constante sans toujours savoir d'où cela vient, sachez que ce que vous
          vivez a un sens.
        </p>
      </div>


    </div>
  )
}
