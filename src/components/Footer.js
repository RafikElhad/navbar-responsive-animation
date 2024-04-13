// import React, { useState, useEffect } from 'react';
// import '../css/Footer.css';
// import Share from './Share'; 
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.body.clientHeight;

//       if (documentHeight - scrollTop <= windowHeight) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <footer className={`footer ${isVisible ? 'show' : ''}`}>
//       <div className="footer-content"> 
//        {/* Utilisation de Link pour créer un lien vers la page de contact */}
//        <Link to="/contact" className="footer-link">Nous Contacter</Link> 
//         <p>Ceci est le contenu du footer.</p> 
//         <Share />
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useState, useEffect } from 'react';
// import '../css/Footer.css';
// import Share from './Share'; 
// import { Link, useLocation } from 'react-router-dom';

// const Footer = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     // Mettre à jour l'état isVisible lorsque l'URL change
//     setIsVisible(false);
//   }, [location]);

//   // Afficher le footer uniquement si l'URL actuelle n'est pas celle de la page de contact
//   useEffect(() => {
//     setIsVisible(location.pathname !== '/contact');
//   }, [location]);

//   return (
//     <footer className={`footer ${isVisible ? 'show' : ''}`}>
//       <div className="footer-content"> 
//         {/* Utilisation de Link pour créer un lien vers la page de contact */}
//         <Link to="/contact" className="footer-link">Nous Contacter</Link> 
//         <p>Ceci est le contenu du footer.</p> 
//         <Share />
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState, useEffect } from 'react';
import '../css/Footer.css';
import Share from './Share'; 
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Mettre à jour l'état isVisible lorsque l'URL change
    setIsVisible(false);
  }, [location]);

  // Vérifier si la page de contact nécessite un défilement pour afficher le footer
  // useEffect(() => {
  //   const contentHeight = document.body.scrollHeight;
  //   const windowHeight = window.innerHeight;
  //   setIsVisible(location.pathname !== '/contact' || contentHeight > windowHeight);
  // }, [location]);
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
        <Share /> 
        <h1>Travel Agency<span class="orange">.</span></h1>  
		  	<div class="copyright">Copyright © 2021 Tous droits réservés.</div>
      </div>
    </footer>
  );
};

export default Footer;

