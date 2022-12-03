import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
          <Route exact path="/" component={AboutPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
        </div>
      </Router>
    </>
  );
};

export default Navbar;
