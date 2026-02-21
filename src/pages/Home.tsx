import Hero from '../components/Hero/Hero'
import Problems from '../components/Problems/Problems'
import About from '../components/About/About'
import Approach from '../components/Approach/Approach'
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
      <Location />
    </main>
  )
}
