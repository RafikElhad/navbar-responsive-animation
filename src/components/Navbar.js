// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../css/Navbar.css';
// import logo from '../assets/logo-menuiserie.png';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [currentDate, setCurrentDate] = useState("");

//     // Fonction pour formater la date
//     const getFormattedDate = () => {
//         const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
//         return new Date().toLocaleDateString("fr-FR", options);
//     };

//     // Mettre à jour la date au chargement du composant
//     useEffect(() => {
//         setCurrentDate(getFormattedDate());
//     }, []);

//     const handleLogoClick = () => {
//         if (window.location.pathname === '/') {
//             window.location.reload();
//         } else {
//             window.location.href = '/';
//         }
//     };

//     return (
//         <div>
//             {/* Barre supérieure pour la date */}
//             <div className="navbar-top-bar">
//                 <span className="navbar-date">{currentDate}</span>
//             </div>

//             {/* Contenu principal du navbar */}
//             <div className="Navbar">
//                 <div className="nav-logo">
//                     <Link to="/" onClick={handleLogoClick}>
//                         <img src={logo} alt="Menuiserie" />
//                     </Link>
//                 </div>
//                 <div className={`nav-items ${isOpen && "open"}`}>
//                     <a href="/">Home</a>
//                     <a href="/service">Service</a>
//                     <a href="/about">About</a>
//                     <a href="/contact">Contact</a>
//                     <a href="/galerie">Galerie</a>
//                 </div>
//                 <div
//                     className={`nav-toggle ${isOpen && "open"}`}
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     <div className="bar"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/logo-menuiserie.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogoClick = () => {
        if (window.location.pathname === '/') {
            window.location.reload();
        } else {
            window.location.href = '/';
        }
    };

    return (
        <div>
            {/* Contenu principal du navbar */}
            <div className="Navbar">
                <div className="nav-logo">
                    <Link to="/" onClick={handleLogoClick}>
                        <img src={logo} alt="Menuiserie" />
                    </Link>
                </div>
                <div className={`nav-items ${isOpen && "open"}`}>
                    <a href="/">Home</a>
                    <a href="/service">Service</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/galerie">Galerie</a>
                </div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
