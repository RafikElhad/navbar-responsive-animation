import React, { useState, useEffect } from 'react';
import '../css/Footer.css';
import { Link, useLocation } from 'react-router-dom';
import SocialMediaButtons from './SocialMediaButtons';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
    // Check if the content height is greater than the window height
    const contentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    setIsVisible(contentHeight > windowHeight); 
  }, [location]);

  return (
    <footer className={`footer ${isVisible ? 'show' : ''}`}>
      <div className="footer-content"> 
        <Link to="/contact" className="footer-link">Nous Contacter</Link> 
        <SocialMediaButtons /> 
        <h1>la satisfaction du client est notre propriété<span className="orange">.</span></h1>  
        <div className="copyright">© 2024 Ménuiserie Elhad Ahamada.</div> 
      </div>
    </footer>
  );
};

export default Footer; 
