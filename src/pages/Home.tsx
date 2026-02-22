import Hero from '../components/Hero/Hero'
import Problems from '../components/Problems/Problems'
import About from '../components/About/About'
import Approach from '../components/Approach/Approach'
import Training from '../components/Training/Training'
import Services from '../components/Services/Services'
import Location from '../components/Location/Location'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <About />
      <Approach />
      <Services />
      <Training />
      <Location />
    </main>
  )
}
