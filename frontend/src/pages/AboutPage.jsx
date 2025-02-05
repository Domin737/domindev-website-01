import React from "react";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>O DominDev</h1>
      <section className="about-section">
        <h2>Nasza misja</h2>
        <p>
          W DominDev naszą misją jest tworzenie innowacyjnych, wydajnych i
          estetycznych rozwiązań webowych, które pomagają naszym klientom
          osiągać ich cele biznesowe.
        </p>
      </section>
      <section className="team-section">
        <h2>Nasz zespół</h2>
        <div className="team-member">
          <img src="/path/to/team-member-image.jpg" alt="Imię Nazwisko" />
          <h3>Imię Nazwisko</h3>
          <p>Założyciel & Główny Developer</p>
          <p>Specjalizacja: WordPress, React, Node.js</p>
          <a
            href="https://linkedin.com/in/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        {/* Dodaj więcej członków zespołu w podobny sposób */}
      </section>
      <section className="timeline-section">
        <h2>Nasza historia</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2018</div>
            <div className="timeline-content">
              <h3>Powstanie DominDev</h3>
              <p>
                Rozpoczęliśmy naszą działalność, skupiając się na tworzeniu
                stron WordPress.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2020</div>
            <div className="timeline-content">
              <h3>Rozszerzenie oferty</h3>
              <p>
                Dodaliśmy do naszej oferty tworzenie aplikacji webowych w React
                i Node.js.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3>100 zadowolonych klientów</h3>
              <p>
                Osiągnęliśmy kamień milowy 100 zrealizowanych projektów dla
                zadowolonych klientów.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
