import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/index";
import Footer from "./components/footer/index";
import ErrorBoundary from "./components/error-boundary/index";

const AboutPage = lazy(() => import("./pages/about-page/index"));
const PortfolioPage = lazy(() => import("./pages/portfolio-page/index"));
const ContactPage = lazy(() => import("./pages/contact-page/index"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <header>
          <Navbar />
        </header>
        <ErrorBoundary>
          <main id="main-content">
            <Suspense fallback={<p>Loading…</p>}>
              <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
        </ErrorBoundary>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
