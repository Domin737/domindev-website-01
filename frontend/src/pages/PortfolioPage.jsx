import React from "react";
import { Helmet } from "react-helmet-async";
import ProjectList from "../components/Projects/ProjectList";
import "./PortfolioPage.scss";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <Helmet>
        <title>Portfolio DominDev - Nasze Realizacje i Projekty</title>
        <meta
          name="description"
          content="Zobacz nasze najlepsze realizacje stron internetowych i aplikacji webowych. Przekonaj się, jak możemy pomóc Twojemu biznesowi w rozwoju online."
        />
        <link rel="canonical" href="https://domindev.pl/portfolio" />
      </Helmet>
      <h1>Nasze Portfolio</h1>
      <div className="portfolio-filters">
        <button className="filter-button active">Wszystkie</button>
        <button className="filter-button">Strony WWW</button>
        <button className="filter-button">Aplikacje Webowe</button>
        <button className="filter-button">E-commerce</button>
      </div>
      <ProjectList />
    </div>
  );
};

export default PortfolioPage;
