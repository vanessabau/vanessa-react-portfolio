import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavTabs from "../nav-tabs/index";
import AboutPage from "../../pages/about-page/index";
import PortfolioPage from "../../pages/portfolio-page/index";
import ContactPage from "../../pages/contact-page/index";

const Navbar = () => {
  return (
    <>
      <Router>
        <div>
          <NavTabs />
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default Navbar;
