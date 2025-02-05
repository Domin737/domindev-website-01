import React from "react";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2>O DominDev</h2>
      <p>
        Jesteśmy zespołem doświadczonych programistów specjalizujących się w
        tworzeniu nowoczesnych stron internetowych i aplikacji webowych.
      </p>
      <div className="services-icons">
        <div className="service-icon">
          <i className="fas fa-code"></i>
          <span>Szybka realizacja</span>
        </div>
        <div className="service-icon">
          <i className="fas fa-mobile-alt"></i>
          <span>Responsywny design</span>
        </div>
        <div className="service-icon">
          <i className="fas fa-search"></i>
          <span>Optymalizacja SEO</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
