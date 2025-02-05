import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Przekształcamy wizje w działające strony</h1>
        <p>
          Specjalizujemy się w tworzeniu nowoczesnych stron internetowych,
          optymalizacji WordPress i skutecznym marketingu online.
        </p>
        <Link to="/kontakt" className="cta-button">
          Rozpocznij projekt
        </Link>
      </div>
      <div className="hero-image">
        {/* Tu możesz dodać obrazek lub animację */}
      </div>
    </section>
  );
};

export default HeroSection;
