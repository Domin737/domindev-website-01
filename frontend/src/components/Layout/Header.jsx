import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <nav>
        <div className="logo">DominDev</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/uslugi">Usługi</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
