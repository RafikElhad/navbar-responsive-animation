import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import '../css/About.css' 
import facebook from '../assets/facebook_share.png';

const About = () => {
  // Initialiser les animations AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Bannière de l'entreprise */}
      <div className="about-hero">
        <img
          src="/assets/cover_photo.png" // Remplacez par l'image de l'entreprise
          alt="Menuiserie Elhad Ahamada"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Menuiserie Elhad Ahamada</h1>
          <p className="hero-subtitle">
            Artisanat de qualité. Créations uniques. Passion et innovation.
          </p>
        </div>
      </div>

      {/* Section About */}
      <section className="about-section container">
        {/* Introduction */}
        <div className="row align-items-center mb-5">
          <div
            className="col-md-6 about-text"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className="section-title">À propos de nous</h2>
            <p>
              Bienvenue chez <strong>Menuiserie Elhad Ahamada</strong>, où
              l'artisanat rencontre l'innovation. Depuis notre fondation, nous
              sommes dédiés à créer des solutions sur mesure en bois, alliant
              qualité et durabilité.
            </p>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <img
              src={facebook} // Remplacez par une image de l'atelier
              alt="Atelier"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        {/* Mission et vision */}
        <div className="row align-items-center mb-5 flex-column-reverse flex-md-row">
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/example_video_id" // URL vidéo
                title="Présentation entreprise"
                className="video-frame shadow-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div
            className="col-md-6 about-text"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h3 className="section-subtitle">Notre mission et vision</h3>
            <p>
              Offrir des produits d’exception en bois tout en respectant
              l’environnement et en garantissant la satisfaction de nos
              clients.
            </p>
          </div>
        </div>

        {/* Équipe */}
        <div className="team-section text-center mb-5">
          <h3 className="section-subtitle" data-aos="fade-up">
            Rencontrez notre équipe
          </h3>
          <div className="row">
            {/* Chef d'entreprise */}
            <div className="col-md-4 col-sm-6" data-aos="zoom-in">
              <img
                src={facebook} // Photo chef d'entreprise
                alt="Chef d'entreprise"
                className="team-photo rounded-circle shadow-lg"
              />
              <h5>Chef d'Entreprise</h5>
              <p>Elhad Ahamada</p>
            </div>
            {/* Membre d'équipe */}
            <div className="col-md-4 col-sm-6" data-aos="zoom-in">
              <img
                src={facebook} // Photo membre équipe
                alt="Membre équipe"
                className="team-photo rounded-circle shadow-lg"
              />
              <h5>Responsable Atelier</h5>
              <p>Nom du membre</p>
            </div>
            {/* Autre membre */}
            <div className="col-md-4 col-sm-6" data-aos="zoom-in">
              <img
                src={facebook} // Autre photo membre équipe
                alt="Membre équipe"
                className="team-photo rounded-circle shadow-lg"
              />
              <h5>Designer</h5>
              <p>Nom du membre</p>
            </div>
          </div>
        </div>
        {/* Carousel */}
      <div className="project-carousel container mt-5" data-aos="fade-up">
        <h3 className="section-subtitle text-center mb-4">Projets en Action</h3>
        <div id="carouselProjects" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src={facebook} // Remplacez avec une image
                className="d-block w-100 rounded shadow-lg"
                alt="Projet en cours"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Projet de menuiserie</h5>
                <p>Réalisation d'une table en bois massif.</p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src={facebook} // Remplacez avec une image
                className="d-block w-100 rounded shadow-lg"
                alt="Équipe au travail"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Notre équipe à l'œuvre</h5>
                <p>Processus de fabrication avec nos machines modernes.</p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <img
                src={facebook} // Remplacez avec une image
                className="d-block w-100 rounded shadow-lg"
                alt="Machines utilisées"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Nos outils en action</h5>
                <p>Des machines précises pour un travail de qualité.</p>
              </div>
            </div>
          </div>

          {/* Contrôles du carousel */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselProjects"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Précédent</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselProjects"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </div>

      </section>
    </div>
  );
};

export default About;
