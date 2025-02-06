import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./ContactPage.scss";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj dodaj logikę wysyłania formularza, np. wywołanie API
    console.log("Formularz wysłany:", formData);
    // Zresetuj formularz po wysłaniu
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Kontakt - DominDev | Skontaktuj się z nami</title>
        <meta
          name="description"
          content="Skontaktuj się z DominDev. Jesteśmy gotowi pomóc Ci w realizacji Twojego projektu webowego. Napisz do nas lub zadzwoń!"
        />
        <link rel="canonical" href="https://domindev.pl/kontakt" />
      </Helmet>
      <h1>Skontaktuj się z nami</h1>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Imię i nazwisko</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adres e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Twoja wiadomość</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Wyślij
          </button>
        </form>
        <div className="contact-info">
          <h2>Dane kontaktowe</h2>
          <p>Email: kontakt@domindev.pl</p>
          <p>Telefon: +48 123 456 789</p>
          <p>Adres: ul. Przykładowa 1, 00-000 Warszawa</p>
          <div className="social-media">
            <a
              href="https://facebook.com/domindev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com/company/domindev"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/domindev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
