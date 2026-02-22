import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Trauma from './pages/Trauma'
import Therapy from './pages/Therapy'
import CoupleTherapy from './pages/CoupleTherapy'
import About from './pages/About'
import Blog from './pages/Blog'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/traumas" element={<Trauma />} />
        <Route path="/accompagnements" element={<Therapy />} />
        <Route path="/therapie-de-couple" element={<CoupleTherapy />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
