import { Link } from 'react-router-dom'
import './Footer.css'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Comprendre ses traumas', to: '/traumas' },
  { label: 'Accompagnements', to: '/accompagnements' },
  { label: 'Thérapie de couple', to: '/therapie-de-couple' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Blog', to: '/blog' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <img src="/images/logo.png" alt="Isabelle Loyer" className="footer__logo" />
            <p className="footer__tagline">
              Thérapeute spécialisée dans les traumas et les épreuves de vie. Le Cannet, Alpes-Maritimes.
            </p>
          </div>

          <div>
            <p className="footer__section-title">Navigation</p>
            <div className="footer__links">
              {navLinks.map(link => (
                <Link key={link.to} to={link.to} className="footer__link">{link.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="footer__section-title">Contact</p>
            <div className="footer__contact-items">
              <p className="footer__contact-text">190 Rue Saint-Sauveur, 06110 Le Cannet</p>
              <a href="tel:0683695125" className="footer__link">06 83 69 51 25</a>
              <a href="mailto:iloyer.psychotherapie@gmail.com" className="footer__link">
                iloyer.psychotherapie@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Isabelle Loyer — Tous droits réservés
          </p>
          <a href="#" className="footer__legal">Mentions légales</a>
        </div>
      </div>
    </footer>
  )
}
