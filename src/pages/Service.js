import React from "react";
import "../css/Service.css";
import doorImage from "../assets/facebook_share.png";
// import windowImage from "../assets/window.jpg";
// import deskImage from "../assets/desk.jpg";
// import chairImage from "../assets/chair.jpg";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-header">
        <h1>Nos Services</h1>
        <p>Découvrez ce que nous fabriquons avec passion et expertise.</p>
      </div>

      <div className="service-section">
        <div className="service-card">
          <img src={doorImage} alt="Portes" />
          <h2>Portes</h2>
          <p>
            Des portes solides, élégantes et personnalisables pour vos besoins
            résidentiels et commerciaux.
          </p>
        </div>

        <div className="service-card">
          <img src={doorImage} alt="Fenêtres" />
          <h2>Fenêtres</h2>
          <p>
            Fenêtres modernes et isolantes, adaptées à tous types d’intérieurs.
          </p>
        </div>

        <div className="service-card">
          <img src={doorImage} alt="Bureaux" />
          <h2>Bureaux</h2>
          <p>
            Mobilier professionnel conçu pour allier esthétique et
            fonctionnalité.
          </p>
        </div>

        <div className="service-card">
          <img src={doorImage} alt="Chaises" />
          <h2>Chaises</h2>
          <p>
            Des chaises ergonomiques, parfaites pour la maison et le bureau.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
