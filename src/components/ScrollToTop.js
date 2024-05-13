import React, { useState, useEffect } from 'react';
import '../css/App.css'; // Assurez-vous d'avoir le style CSS approprié pour l'image de la flèche
import arrowImage from '../assets/fleche-blache-haut.png';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour faire monter la page en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Gérer l'affichage de la flèche lorsque l'utilisateur a fait défiler la page
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <img src={arrowImage} alt="Flèche vers le haut" /> 
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
