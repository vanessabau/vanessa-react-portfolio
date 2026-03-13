# Vanessa Bautista React Portfolio

React Portfolio featuring web development work by Vanessa Bautista.

![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)

**Live site:** https://vanessa-react-portfolio.vercel.app/

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vanessabau/vanessa-react-portfolio.git
   ```

2. Navigate into the project directory:
   ```bash
   cd vanessa-react-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

```bash
npm start
```

Once running, open your browser and go to [http://localhost:5173](http://localhost:5173) to view the app.

### Running Tests

```bash
npm test
```

46 tests across 11 files using Vitest + React Testing Library.

---

## Stack

| Layer | Technology |
|---|---|
| UI | React 19 |
| Routing | React Router 7 (`BrowserRouter`) |
| Language | TypeScript 5 (strict mode) |
| Build tool | Vite 8 |
| Test runner | Vitest 4 + React Testing Library |
| Styles | CSS Modules + Bootstrap 4.3 (CDN) + clsx |
| Deployment | Vercel (Node 20, output: `dist`) |

---

## Technical Notes

### CSS Modules

Component-specific styles use CSS Modules (`*.module.css`) so class names are scoped and can't leak across components. Bootstrap utility classes from the CDN are applied as plain strings. `clsx` is used whenever both need to be combined:

```tsx
// Custom module style alongside Bootstrap class
<div className={clsx(styles.cardWrapper, "card")}>

// Conditional active state in NavTabs
className={clsx("nav-link", { active: pathname === path })}
```

Global styles (CSS variables, typography, layout helpers like `.s1`, `.s2`, `.greeting-wrapper`) live in `src/default.css`, imported once in `App.tsx` and processed by Vite.

### Adding a New Project

1. Add the screenshot to `src/assets/images/`
2. Open `src/data/projects.ts`
3. Import the image and add an entry to the array:

```ts
import myProject from "../assets/images/myProject.png";

{
  id: 16,
  name: "My Project",
  image: myProject,
  description: "What it does",
  tech: "React, Node, etc.",
  href: "https://deployed-url.com",
  github: "https://github.com/vanessabau/repo"
}
```

Portfolio tests are data-driven — new entries are automatically covered.

### TypeScript — strict mode throughout

The entire codebase is TypeScript with `strict: true` and `moduleResolution: bundler`. Portfolio data is typed via a `Project` interface in `src/types/index.ts` and consumed from `src/data/projects.ts`. All project images are imported directly in that file so Vite can resolve, hash, and bundle them at build time.

### Accessibility (WCAG)

- **Landmark structure:** `<header>`, `<main id="main-content">`, `<footer>`, `<nav aria-label="Main navigation">` — all major sections are reachable by screen reader navigation
- **Skip link:** `Skip to main content` anchors keyboard users directly to `#main-content`, bypassing repeated nav on every page
- **Active route indicator:** `aria-current="page"` is set on the active nav link, communicated to assistive technology without relying on colour alone
- **Semantic headings:** Each page has a single `<h1>` with a logical heading hierarchy beneath it
- **Descriptive link text and alt text:** Portfolio card links use `aria-label` with project name context (e.g. `View deployed app for Budget Tracker`); all images have meaningful alt text or `alt=""` for decorative images
- **Link contrast:** Navigation and body links use `#0c6b78` (teal), which passes WCAG AA contrast (4.5:1) against both white and the `#eaeaea` background

### Code splitting and bundle size

Routes are lazy-loaded via `React.lazy` + `Suspense`. Vite splits each page into its own chunk at build time:

```
about-page.js       4.27 kB
contact-page.js     1.68 kB
portfolio-page.js   5.97 kB   ← only fetched when visiting /portfolio
index.js          232.53 kB   ← React + router + shared runtime
```

A visitor landing on `/contact` never downloads the portfolio page JS. All portfolio card images use `loading="lazy"` so only visible images are fetched on page load.

### Error boundary

A class-based `ErrorBoundary` (`src/components/error-boundary/`) wraps `<main>` in `App.tsx`. If any route throws a render error, the nav and footer remain intact and a fallback with a return-home link is shown in place of the broken page. The fallback renders `<main id="main-content">` so the skip link target is never lost.

### Testing strategy

Tests are colocated with their components (e.g. `PortfolioCard.test.tsx` next to `PortfolioCard/index.tsx`). Coverage priorities:

- **Accessibility attributes** — `aria-current`, `aria-label`, landmark roles — not just visual output
- **Data-driven rendering** — the PortfolioPage tests iterate over the live `projects.ts` data, so adding a new project automatically extends test coverage
- **Error boundary** — a `ThrowError` component verifies the fallback renders and the `main` landmark is preserved
- **Route active state** — NavTabs is tested across all three `MemoryRouter` paths to verify `aria-current` is applied correctly

---

## Contact

- **GitHub:** [vanessabau](https://github.com/vanessabau)
- **Email:** vanessawebdev@gmail.com
