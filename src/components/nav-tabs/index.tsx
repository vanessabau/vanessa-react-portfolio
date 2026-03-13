import { Link, useLocation } from "react-router-dom";

const NavTabs = () => {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs" id="navigation" role="list">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          aria-current={location.pathname === "/" ? "page" : undefined}
        >
          About
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/portfolio"
          className={
            location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
          }
          aria-current={location.pathname === "/portfolio" ? "page" : undefined}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
          aria-current={location.pathname === "/contact" ? "page" : undefined}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavTabs;
