# Project Context — Vanessa Bautista React Portfolio

## Overview
Personal portfolio site for Vanessa Bautista (web developer). Displays an About page, a Portfolio page with project cards, and a Contact page. Deployed on Vercel.

- **Live URL:** https://vanessa-react-portfolio.vercel.app/
- **Repo:** https://github.com/vanessabau/vanessa-react-portfolio
- **Branch strategy:** feature branches off `main`

---

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| UI | React | 19.x |
| Routing | react-router-dom | 7.x |
| Build tool | Vite | 8.x |
| Test runner | Vitest | 4.x |
| DOM testing | @testing-library/react | 16.x |
| Styling | Bootstrap 4.3 (CDN) + custom CSS | — |
| Fonts | Google Fonts (Russo One, Roboto Mono) | CDN |
| Deployment | Vercel | Node 20.x |

---

## Project Structure

```
vanessa-react-portfolio/
├── index.html                  # Vite entry point (root level, NOT public/)
├── vite.config.js              # Vite + Vitest config
├── vercel.json                 # Vercel build/output config
├── .nvmrc                      # Node version pin (20)
├── public/
│   └── index.html              # Old CRA file — NOT used by Vite
├── src/
│   ├── index.jsx               # App entry, ReactDOM.createRoot
│   ├── App.jsx                 # Root component: <Navbar> + <Footer>
│   ├── App.test.js             # Vitest smoke test (checks nav links render)
│   ├── reportWebVitals.js      # Web vitals (getCLS/getINP/getFCP/getLCP/getTTFB)
│   ├── setupTests.js           # Imports @testing-library/jest-dom
│   ├── index.css
│   ├── assets/images/          # 26 image assets
│   ├── components/
│   │   ├── navbar/index.js     # BrowserRouter + Routes/Route definitions
│   │   ├── nav-tabs/index.js   # Link + useLocation for active nav state
│   │   ├── footer/index.js
│   │   ├── about-text/index.js
│   │   ├── bio-pic/index.js
│   │   └── portfolio-card/index.js
│   ├── pages/
│   │   ├── about-page/         # Bio, skills, YouTube link
│   │   ├── portfolio-page/     # Class component, reads props.json
│   │   └── contact-page/       # Links to resume, GitHub, LinkedIn, etc.
│   └── data/
│       └── props.json          # 15 portfolio project entries
```

---

## Key Architecture Notes

- **Routing lives in `src/components/navbar/index.js`** — not in `App.jsx`. The `<BrowserRouter>`, `<Routes>`, and all three `<Route>` entries are defined there.
- **Routes:** `/` → AboutPage, `/portfolio` → PortfolioPage, `/contact` → ContactPage
- **Active nav state** is driven by `useLocation()` in `nav-tabs/index.js`
- **Portfolio data** is in `src/data/props.json` — 15 projects with `id`, `name`, `image`, `description`, `tech`, `href`, `github`
- **PortfolioPage** is a class component (others are functional)
- **Bootstrap** is loaded via CDN in `index.html`, not npm

---

## Deployment (Vercel)

- **Node version:** 20.x (set in Vercel dashboard AND `engines` field in `package.json`)
- **Build command:** `npm run build` (runs `vite build`)
- **Output directory:** `dist` (configured in `vercel.json` — Vite default, not CRA's `build/`)
- **Dev server:** `npm start` → `http://localhost:5173`

---

## Recent Migration History (March 2026)

Migrated from a stale Create React App setup to a modern stack. See `CHANGELOG.md` for full details.

| What | From | To |
|---|---|---|
| Build tool | react-scripts (CRA) | Vite 8 |
| React | 18.2 | 19.x |
| Routing | react-router-dom 5 | react-router-dom 7 |
| Testing | Jest (CRA bundled) | Vitest |
| Web vitals | 2.x (`getFID`) | 5.x (`getINP`) |
| Vulnerabilities | 57 | 1 |

**Router API change:** v5 used `<Route component={X}>` with no required wrapper. v7 uses `<Route element={<X />}>` inside `<Routes>`.

---

## Known Lint Warnings (non-breaking)
- `target="_blank"` without `rel="noreferrer"` in `src/pages/about-page/index.js` (lines 54, 86, 97) and `src/pages/contact-page/index.js` (line 43)

---

## Contact
- **GitHub:** vanessabau
- **Email:** vanessawebdev@gmail.com
