import React from "react";
import { Link } from "react-router-dom";
import "./ServicesOverview.scss";

const ServicesOverview = () => {
  const services = [
    {
      title: "Tworzenie stron na gotowych motywach",
      description:
        "Szybkie i efektywne rozwiązania oparte na popularnych systemach CMS.",
      icon: "fas fa-paint-brush",
    },
    {
      title: "Optymalizacja szybkości",
      description: "Poprawa wydajności i czasu ładowania Twojej strony.",
      icon: "fas fa-tachometer-alt",
    },
    {
      title: "SEO i marketing",
      description: "Zwiększ widoczność swojej strony w wynikach wyszukiwania.",
      icon: "fas fa-chart-line",
    },
  ];

  return (
    <section className="services-overview">
      <h2>Nasze Usługi</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to="/uslugi" className="learn-more">
              Dowiedz się więcej
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
