import React, { useEffect, useState } from "react";
import "../css/Home.css";
import bannerImage from "../assets/facebook_share.png";
import serviceIcon1 from "../assets/facebook_share.png";
import serviceIcon2 from "../assets/facebook_share.png";
import galleryImage1 from "../assets/facebook_share.png";
import galleryImage2 from "../assets/facebook_share.png";

const testimonials = [
  {
    message: "Des produits de qualité avec un excellent service client.",
    name: "Mohamed Rafiou",
  },
  {
    message: "Le mobilier est superbe et parfaitement adapté à notre bureau.",
    name: "Moina Djawahir",
  },
  {
    message: "Une équipe professionnelle et des résultats au-delà de mes attentes.",
    name: "Rabouanta Elhad",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Changement automatique du témoignage
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Changer toutes les 5 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Bannière */}
      <div className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="banner-text">
          <h1>Bienvenue chez Menuiserie Moderne</h1>
          <p>Votre expert en portes, fenêtres et mobilier sur mesure.</p>
          <a href="/about">
           <button className="banner-button">En savoir plus</button>
          </a>
          
        </div>
      </div>

      {/* À propos */}
      <section className="about-section">
        <div className="about-text">
          <h2>À propos de nous</h2>
          <p>
            Avec des années d'expérience, notre entreprise est spécialisée dans
            la fabrication de portes, fenêtres, bureaux et chaises modernes.
            Nous allions esthétique et durabilité pour répondre à vos besoins.
          </p>
        </div>
        <div className="about-image">
          <img src={galleryImage1} alt="À propos" />
        </div>
      </section>

      {/* Services clés */}
      <section className="services-section">
        <h2>Nos services</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src={serviceIcon1} alt="Service 1" />
            <h3>Portes sur mesure</h3>
            <p>Des portes modernes et personnalisées selon vos envies.</p>
          </div>
          <div className="service-item">
            <img src={serviceIcon2} alt="Service 2" />
            <h3>Mobilier élégant</h3>
            <p>Bureaux et chaises qui allient style et confort.</p>
          </div>
        </div>
      </section>

      {/* Galerie */}
<section className="gallery-section">
  <h2>Nos réalisations</h2>
  <div className="gallery">
    <img src={galleryImage1} alt="Galerie 1" />
    <img src={galleryImage2} alt="Galerie 2" />
    <img src={galleryImage1} alt="Galerie 3" /> {/* Ajoute une troisième image */}
  </div>
</section> 

      {/* Témoignages */}
      <section className="testimonials-section">
        <h2>Ce que disent nos clients</h2>
        <div className="carousel">
          <p className="testimonial-message">
            {testimonials[currentIndex].message}
          </p>
          <p className="testimonial-author">
            — {testimonials[currentIndex].name}
          </p>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="contact-section">
        <h2>Besoin d'aide ?</h2>
        <p>
          Contactez-nous dès aujourd'hui pour discuter de votre prochain projet.
        </p>
        <a href="/contact">
  <button className="contact-button">Contactez-nous</button>
</a>
      </section>
    </div>
  );
};

export default Home;
