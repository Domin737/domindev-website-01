import React from "react";
import "./ServicesPage.scss";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1>Nasze Usługi</h1>
      <div className="services-list">
        <div className="service-item">
          <h2>Tworzenie Stron Internetowych</h2>
          <p>
            Projektujemy i budujemy responsywne strony internetowe dostosowane
            do Twoich potrzeb.
          </p>
        </div>
        <div className="service-item">
          <h2>Aplikacje Webowe</h2>
          <p>
            Tworzymy zaawansowane aplikacje webowe z wykorzystaniem najnowszych
            technologii.
          </p>
        </div>
        <div className="service-item">
          <h2>Optymalizacja SEO</h2>
          <p>
            Pomagamy zwiększyć widoczność Twojej strony w wynikach wyszukiwania.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
