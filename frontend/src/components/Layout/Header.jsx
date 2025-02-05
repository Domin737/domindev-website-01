import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <nav>
        <div className="logo">DominDev</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="sr-only">Menu</span>
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Strona główna
            </Link>
          </li>
          <li>
            <Link to="/uslugi" onClick={() => setIsMenuOpen(false)}>
              Usługi
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/o-nas" onClick={() => setIsMenuOpen(false)}>
              O nas
            </Link>
          </li>
          <li>
            <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
