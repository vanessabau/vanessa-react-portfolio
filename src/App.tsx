import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/index";
import Footer from "./components/footer/index";
import AboutPage from "./pages/about-page/index";
import PortfolioPage from "./pages/portfolio-page/index";
import ContactPage from "./pages/contact-page/index";

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
        <main id="main-content">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
