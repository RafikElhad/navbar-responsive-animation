import React from 'react';
import '../css/SocialMediaButtons.css';  

export default function SocialMediaButtons() {
  return (
    <>
      <div className="social-media-container">
        retrouvez nous!
        <div className="social-media-buttons"> 
          {/* Facebook */}
          <a style={{ color: '#3b5998' }} href="#!" role="button">
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>

          {/* Twitter */}
          <a style={{ color: '#55acee' }} href="#!" role="button">
            <i className="fab fa-twitter fa-lg"></i>
          </a>

          {/* Google */}
          <a style={{ color: '#dd4b39' }} href="#!" role="button">
            <i className="fab fa-google fa-lg"></i>
          </a>

          {/* Instagram */}
          <a style={{ color: '#ac2bac' }} href="#!" role="button">
            <i className="fab fa-instagram fa-lg"></i>
          </a>

          {/* YouTube */}
          <a style={{ color: '#ff0000' }} href="https://www.youtube.com/@parolierdukarthala2747" target="_blank" rel="noopener noreferrer" role="button">
            <i className="fab fa-youtube fa-lg"></i>
          </a> 
        </div>
      </div>
    </>
  );
}
