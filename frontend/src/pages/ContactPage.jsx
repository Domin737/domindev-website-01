import React from "react";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Skontaktuj się z nami</h1>
      <form className="contact-form">
        <input type="text" placeholder="Imię i nazwisko" required />
        <input type="email" placeholder="Adres e-mail" required />
        <textarea placeholder="Twoja wiadomość" required></textarea>
        <button type="submit">Wyślij</button>
      </form>
      <div className="contact-info">
        <h2>Dane kontaktowe</h2>
        <p>Email: kontakt@domindev.pl</p>
        <p>Telefon: +48 123 456 789</p>
        <p>Adres: ul. Przykładowa 1, 00-000 Warszawa</p>
      </div>
    </div>
  );
};

export default ContactPage;
