import { useState, useEffect } from 'react'
import './Nav.css'

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Comprendre ses traumas', to: '/traumas' },
  { label: 'Accompagnements', to: '/mes-accompagnements-therapeutiques' },
  { label: 'Thérapie de couple', to: '/therapie-de-couple' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Blog', to: '/blog' },
]

export default function Nav() {
  const [pathname, setPathname] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'

  return (
    <header className={`nav${!isHome || scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="/" className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/images/logo.png" alt="Isabelle Loyer" />
        </a>

        <nav className="nav__links">
          {links.map(link => (
            <a
              key={link.to}
              href={link.to}
              className={`nav__link${pathname === link.to ? ' active' : ''}`}
              aria-current={pathname === link.to ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a href="/#contact" className="nav__cta">
            Prendre rendez-vous
          </a>
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
          <a
            key={link.to}
            href={link.to}
            className={`nav__mobile-link${pathname === link.to ? ' active' : ''}`}
            aria-current={pathname === link.to ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
        <a href="/#contact" className="nav__mobile-cta" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
          Prendre rendez-vous
        </a>
      </div>
    </header>
  )
}
