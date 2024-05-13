import React, { useState, useEffect } from 'react';
import '../css/Footer.css';
 
import { Link, useLocation } from 'react-router-dom';
import SocialMediaButtons from './SocialMediaButtons';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Mettre à jour l'état isVisible lorsque l'URL change
    setIsVisible(false);
  }, [location]);

  
  useEffect(() => {
    const contentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    setIsVisible(contentHeight > windowHeight); 
  }, []);
  

  return (
    <footer className={`footer ${isVisible ? 'show' : ''}`}>
      <div className="footer-content"> 
        {/* Utilisation de Link pour créer un lien vers la page de contact */}
        <Link to="/contact" className="footer-link">Nous Contacter</Link> 
        <SocialMediaButtons /> 
        <h1>Travel Agency<span class="orange">.</span></h1>  
		  	<div class="copyright">Copyright © 2021 Tous droits réservés.</div>
      </div>
    </footer>
  );
};

export default Footer;

