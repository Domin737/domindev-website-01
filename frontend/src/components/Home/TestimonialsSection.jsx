import React, { useState, useEffect } from "react";
import "./TestimonialsSection.scss";

const testimonials = [
  {
    id: 1,
    text: "DominDev pomógł nam stworzyć niezwykłą stronę internetową, która znacznie zwiększyła naszą obecność online.",
    author: "Anna Kowalska",
    company: "KowalskiSoft",
  },
  {
    id: 2,
    text: "Jesteśmy zachwyceni profesjonalizmem i kreatywnością zespołu DominDev. Nasza nowa strona internetowa przekroczyła nasze oczekiwania!",
    author: "Jan Nowak",
    company: "NowakTech",
  },
  {
    id: 3,
    text: "Dzięki DominDev nasza wydajność SEO znacznie wzrosła. Polecamy ich usługi każdemu, kto chce poprawić swoją obecność w sieci.",
    author: "Maria Wiśniewska",
    company: "WiśniewskaMarketing",
  },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <h2>Co mówią o nas klienci</h2>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial ${
              index === currentTestimonial ? "active" : ""
            }`}
          >
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">{testimonial.author}</p>
            <p className="testimonial-company">{testimonial.company}</p>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentTestimonial ? "active" : ""}`}
            onClick={() => setCurrentTestimonial(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
