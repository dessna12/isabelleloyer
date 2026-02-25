import Hero from '../components/home/Hero/Hero'
import Problems from '../components/home/Problems/Problems'
import About from '../components/home/About/About'
import Approach from '../components/home/Approach/Approach'
import Training from '../components/home/Training/Training'
import Services from '../components/home/Services/Services'
import Location from '../components/home/Location/Location'

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
