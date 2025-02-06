import React from "react";
import { Helmet } from "react-helmet-async";
import "./ServicesPage.scss";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>Usługi DominDev - Tworzenie Stron, Aplikacje Webowe, SEO</title>
        <meta
          name="description"
          content="Oferujemy profesjonalne usługi tworzenia stron internetowych, aplikacji webowych, optymalizacji WordPress i SEO. Sprawdź naszą ofertę i wybierz rozwiązanie dla swojego biznesu."
        />
        <link rel="canonical" href="https://domindev.pl/uslugi" />
      </Helmet>
      <h1>Nasze Usługi</h1>
      <div className="services-list">
        <div className="service-item">
          <h2>Tworzenie Stron Internetowych</h2>
          <p>
            Projektujemy i budujemy responsywne strony internetowe dostosowane
            do Twoich potrzeb. Wykorzystujemy najnowsze technologie i trendy w
            designie, aby Twoja strona wyróżniała się na tle konkurencji.
          </p>
          <ul>
            <li>Strony oparte na WordPress</li>
            <li>Strony single-page (SPA) w React</li>
            <li>Sklepy internetowe</li>
          </ul>
        </div>
        <div className="service-item">
          <h2>Aplikacje Webowe</h2>
          <p>
            Tworzymy zaawansowane aplikacje webowe z wykorzystaniem najnowszych
            technologii. Nasze rozwiązania są skalowalne, wydajne i dostosowane
            do indywidualnych potrzeb Twojego biznesu.
          </p>
          <ul>
            <li>Aplikacje w React i Node.js</li>
            <li>Systemy zarządzania treścią (CMS)</li>
            <li>Integracje z API zewnętrznych usług</li>
          </ul>
        </div>
        <div className="service-item">
          <h2>Optymalizacja SEO</h2>
          <p>
            Pomagamy zwiększyć widoczność Twojej strony w wynikach wyszukiwania.
            Nasze kompleksowe podejście do SEO obejmuje zarówno optymalizację
            techniczną, jak i content marketing.
          </p>
          <ul>
            <li>Audyt SEO i optymalizacja on-page</li>
            <li>Optymalizacja prędkości ładowania strony</li>
            <li>Tworzenie treści zorientowanych na SEO</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
