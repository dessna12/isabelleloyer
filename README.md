# Site web — Isabelle Loyer, Thérapeute

Site vitrine d'Isabelle Loyer, thérapeute spécialisée en psychotraumatismes et difficultés relationnelles, basée au Cannet (Alpes-Maritimes).

---

## Stack

| Outil | Rôle |
|-------|------|
| [Astro 5](https://astro.build/) | Framework principal (SSR + routing) |
| [React](https://react.dev/) | Composants interactifs (islands) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utilitaires CSS via `@tailwindcss/vite` |
| [TypeScript](https://www.typescriptlang.org/) | Typage |
| [react-icons](https://react-icons.github.io/react-icons/) | Icônes (collection `pi`) |

---

## Commandes

```bash
npm run dev       # Serveur de développement (localhost:4321)
npm run build     # Build de production
npm run preview   # Prévisualiser le build
```

---

## Structure du projet

```
src/
├── components/
│   ├── a-propos/           # Composants page À propos
│   │   ├── AProposHero/
│   │   ├── AProposApproche/
│   │   ├── AProposEthique/
│   │   └── AProposFormations/
│   ├── accompagnements/    # Composants page Accompagnements
│   │   ├── AccompHero/
│   │   ├── AccompCard/     # Accordéon (situation / aide)
│   │   ├── AccompSigns/
│   │   ├── AccompMethod/
│   │   └── AccompFAQ/      # Accordéon FAQ
│   ├── home/               # Composants page d'accueil
│   │   ├── Hero/
│   │   ├── Problems/
│   │   ├── About/
│   │   ├── Approach/
│   │   ├── Services/
│   │   ├── Training/
│   │   ├── Location/
│   │   └── Testimonials/
│   ├── trauma/             # Composants page Traumas
│   │   ├── TraumaHero/
│   │   ├── SectionCard/
│   │   └── TraumaQuote/
│   ├── shared/             # Composants réutilisables
│   │   └── Echange/        # Section "Premier échange" (home + à propos)
│   ├── Nav/
│   └── Footer/
├── layouts/
│   └── Layout.astro        # Layout principal (Nav + Footer + script reveal)
├── pages/
│   ├── index.astro
│   ├── traumas.astro
│   ├── accompagnements.astro
│   ├── therapie-de-couple.astro
│   ├── a-propos.astro
│   └── blog.astro
├── pages-styles/           # CSS spécifique à chaque page
│   ├── trauma.css
│   ├── accompagnements.css
│   └── a-propos.css
├── styles/
│   └── global.css          # Variables CSS, thème, animations reveal
└── public/
    └── images/             # Images du site
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — hero, problématiques, à propos, échange, contact |
| `/traumas` | Ressources sur les traumas — 5 sections, citation |
| `/accompagnements` | Accompagnements proposés — 5 cards accordéon, méthode, FAQ |
| `/therapie-de-couple` | Page dédiée à la thérapie de couple |
| `/a-propos` | Parcours, approche, éthique, formations, échange, CTA |
| `/blog` | Blog (en construction) |

---

## Conventions

### Animations au scroll
Les éléments avec la classe `reveal` sont animés à l'entrée dans le viewport via un `IntersectionObserver` global défini dans `Layout.astro`. L'observer ajoute la classe `visible` qui déclenche la transition CSS.

**Important :** ne jamais mettre `reveal` directement sur un composant React avec du state — le re-render efface la classe `visible`. Encapsuler dans un `<div className="reveal">` parent.

### Navigation
- Liens internes : balises `<a href="/path">` simples (pas de router)
- Page active dans la nav : détectée via `window.location.pathname` dans `Nav.tsx`

### Composants React
Tous les composants React sont hydratés avec `client:load` dans les pages Astro.

---

## Thème couleurs

```css
--color-cream:    #FAF8F5
--color-linen:    #F2EDE6
--color-stone:    #E8DDD2
--color-taupe:    #C4A882
--color-forest:   #2C4A3C
--color-text:     #2A1F1A
--color-text-muted: #6B5448
```

**Polices :** Playfair Display (titres) · DM Sans (corps)
