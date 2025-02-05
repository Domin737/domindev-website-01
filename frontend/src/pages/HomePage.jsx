import React from "react";
import HeroSection from "../components/Home/HeroSection";
import ProjectList from "../components/Projects/ProjectList";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ProjectList />
    </div>
  );
};

export default HomePage;
