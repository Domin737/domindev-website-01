import React from "react";
import { Link } from "react-router-dom";
import "./CtaSection.scss";

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Chcesz stworzyć stronę, która wyróżni Cię na rynku?</h2>
        <p>Skontaktuj się z nami i przekształć swoją wizję w rzeczywistość!</p>
        <Link to="/kontakt" className="cta-button">
          Skontaktuj się
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
