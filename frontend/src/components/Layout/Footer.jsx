import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>DominDev</h3>
          <p>
            Profesjonalne tworzenie stron internetowych i aplikacji webowych.
          </p>
        </div>
        <div className="footer-section">
          <h3>Szybkie linki</h3>
          <ul>
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
              <Link to="/o-nas">O nas</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Email: kontakt@domindev.pl</p>
          <p>Telefon: +48 123 456 789</p>
          <p>Adres: ul. Przykładowa 1, 00-000 Warszawa</p>
        </div>
        <div className="footer-section">
          <h3>Śledź nas</h3>
          <div className="social-links">
            <a
              href="https://facebook.com/domindev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com/company/domindev"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/domindev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 DominDev. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
