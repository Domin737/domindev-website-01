import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ServicesOverview from "../components/Home/ServicesOverview";
import ProjectList from "../components/Projects/ProjectList";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CtaSection from "../components/Home/CtaSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <ProjectList limit={3} />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
