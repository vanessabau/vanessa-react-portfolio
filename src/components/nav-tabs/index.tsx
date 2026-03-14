import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const NavTabs = () => {
  const { pathname } = useLocation();
  const navLink = (path: string) => clsx("nav-link", { active: pathname === path });

  return (
    <div className="nav-wrapper">
      <Link to="/" className="nav-brand">VB</Link>
      <ul className="nav nav-tabs" id="navigation" role="list">
        <li className="nav-item">
          <Link
            to="/"
            className={navLink("/")}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={navLink("/portfolio")}
            aria-current={pathname === "/portfolio" ? "page" : undefined}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={navLink("/contact")}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavTabs;
