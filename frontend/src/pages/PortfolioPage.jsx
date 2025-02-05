import React from "react";
import ProjectList from "../components/Projects/ProjectList";
import "./PortfolioPage.scss";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <h1>Nasze Portfolio</h1>
      <ProjectList />
    </div>
  );
};

export default PortfolioPage;
