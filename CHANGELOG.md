# Changelog

All notable changes to this project will be documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

---

## [Step 6] - 2026-03-12 — React 18 → 19

### Changed
- `react` 18.3.1 → 19.x
- `react-dom` 18.3.1 → 19.x

---

## [Step 5] - 2026-03-12 — Migrate CRA → Vite

### Added
- `vite`, `@vitejs/plugin-react`, `vitest`, `jsdom` as devDependencies
- `vite.config.js` with React plugin and Vitest config
- `index.html` at project root (Vite entry point)

### Changed
- All JSX-containing `.js` source files renamed to `.jsx` (Vite/OXC standard)
- `package.json` scripts: replaced `react-scripts` commands with `vite`, `vite build`, `vite preview`, `vitest run`
- Dev server now runs on `localhost:5173` (Vite default)
- README updated to reflect new port and Node 18+ requirement

### Removed
- `react-scripts` 5.0.1 — CRA is unmaintained; vulnerability count dropped from 57 → 1

---

## [Step 4] - 2026-03-12 — react-router-dom 5 → 7

### Changed
- `react-router-dom` 5.3.4 → 7.x
- `src/components/navbar/index.js`: added `Routes` import, wrapped `<Route>` entries in `<Routes>`, replaced `component={X}` with `element={<X />}`, removed `exact` (default in v6+)

---

## [Step 3] - 2026-03-12 — @testing-library major updates

### Changed
- `@testing-library/react` 13.4.0 → 16.x
- `@testing-library/user-event` 13.5.0 → 14.x
- `@testing-library/jest-dom` 5.17.0 → 6.x
- `src/App.test.js`: replaced stale CRA default test with a real smoke test checking nav links

---

## [Step 2] - 2026-03-12 — web-vitals 2 → 5

### Changed
- `web-vitals` 2.1.4 → 5.x
- `src/reportWebVitals.js`: replaced removed `getFID` with `getINP` (Interaction to Next Paint)

---

## [Step 1] - 2026-03-12 — Safe minor bumps

### Changed
- `react` 18.2.0 → 18.3.1
- `react-dom` 18.2.0 → 18.3.1
- `@testing-library/jest-dom` 5.16.5 → 5.17.0

---

<!-- Add new entries above this line -->
