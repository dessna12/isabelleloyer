import './Trauma.css'
import TraumaHero from '../components/trauma/TraumaHero/TraumaHero'
import SectionCard, { type Section } from '../components/trauma/SectionCard/SectionCard'

const sections: Section[] = [
  {
    number: '01',
    title: "L'emprise et les blessures relationnelles",
    target: "Les personnes sous emprise ou en relation toxique",
    intro:
      "Vous doutez peut-être en permanence de vous-même, vous sentant confuse, coupable ou épuisée psychiquement. L'emprise est un mécanisme puissant où l'identité est attaquée, vous laissant parfois dans l'incapacité de prendre une décision seule ou de réussir à partir.",
    lived:
      "Le sentiment d'être \"trop sensible\", d'inventer les choses ou d'être le seul problème dans la relation.",
    support:
      "Je vous aide à décoder les mécanismes de l'emprise et de la violence psychologique pour vous aider à reprendre confiance et à vous dégager de ce lien, à votre rythme.",
  },
  {
    number: '02',
    title: "Les racines de l'enfance : du climat \"incestuel\" à l'absence de limites",
    target: "Les adultes marqués par leur passé familial",
    intro:
      "Certains malaises diffus à l'âge adulte prennent racine dans une enfance marquée par une confusion des rôles, une absence de limites ou un climat familial insécurisant. Vous vous effacez peut-être, vous sur-adaptez en permanence, ou vivez avec une peur profonde de l'abandon.",
    lived:
      "Une difficulté à dire non, un sentiment d'illégitimité et l'impression de ne jamais être tout à fait à votre place.",
    support:
      "Il ne s'agit pas de forcer les souvenirs, mais de mettre du sens sur votre histoire pour réparer votre identité et vous sentir enfin \"normale\".",
  },
  {
    number: '03',
    title: "Quand le corps cherche à s'apaiser (Compulsions & Addictions)",
    target: "Les personnes souffrant de troubles alimentaires ou de dépendances",
    intro:
      "Parfois, le trauma se manifeste par un besoin irrépressible de calmer une angoisse ou un vide intérieur par la nourriture ou l'alcool. Ces comportements ne sont pas des manques de volonté, mais des tentatives de survie face à une tension interne trop forte.",
    lived:
      "Une perte de contrôle suivie d'une honte profonde, d'une culpabilité ou d'un dégoût de soi.",
    support:
      "Au-delà du symptôme, nous explorons ensemble la régulation émotionnelle et la sécurité intérieure pour sortir de ce cycle de dépendance.",
  },
  {
    number: '04',
    title: "Le trauma au cœur du couple",
    target: "Les couples en crise ou impactés par des blessures anciennes",
    intro:
      "Les blessures anciennes s'invitent souvent dans la relation de couple, provoquant des disputes répétitives ou une jalousie excessive. Un attachement insécure ou des peurs enfouies peuvent transformer l'amour en un sentiment d'insécurité permanent.",
    lived:
      "L'impression de tourner en rond, une fatigue émotionnelle ou la peur de revivre les mêmes schémas relationnels toxiques.",
    support:
      "Nous travaillons à restaurer un sentiment de sécurité dans la relation en comprenant comment vos histoires personnelles influencent vos réactions mutuelles.",
  },
]

export default function Trauma() {
  return (
    <main className="trauma-main">

      <TraumaHero />

      <section className="trauma-sections">
        {sections.map(s => <SectionCard key={s.number} s={s} />)}
      </section>


    </main>
  )
}
