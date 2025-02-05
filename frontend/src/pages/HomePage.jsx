import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ServicesOverview from "../components/Home/ServicesOverview";
import ProjectList from "../components/Projects/ProjectList";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CtaSection from "../components/Home/CtaSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>DominDev - Profesjonalne Tworzenie Stron Internetowych</title>
        <meta
          name="description"
          content="DominDev oferuje profesjonalne usługi tworzenia stron internetowych, aplikacji webowych i optymalizacji SEO. Przekształcamy Twoje wizje w działające strony."
        />
        <link rel="canonical" href="https://domindev.pl" />
      </Helmet>
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
