import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Comprendre ses traumas', to: '/traumas' },
  { label: 'Accompagnements', to: '/accompagnements' },
  { label: 'Thérapie de couple', to: '/therapie-de-couple' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Blog', to: '/blog' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/images/logo.png" alt="Isabelle Loyer" />
        </Link>

        <nav className="nav__links">
          {links.map(link => (
            <NavLink key={link.to} to={link.to} className="nav__link" end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/#contact" className="nav__cta">
            Prendre rendez-vous
          </Link>
        </nav>

        <button
          className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__mobile${menuOpen ? ' nav__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className="nav__mobile-link"
            onClick={() => setMenuOpen(false)}
            end={link.to === '/'}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/#contact" className="nav__mobile-cta" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
          Prendre rendez-vous
        </Link>
      </div>
    </header>
  )
}
