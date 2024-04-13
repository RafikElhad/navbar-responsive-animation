// import React, { useState } from 'react' 
// import '../css/Navbar.css';
// import logo from '../assets/logo-menuiserie.png' 
// import { Link } from 'react-router-dom'; 
// const Navbar = () => {

//     const[isOpen, setIsOpen] = useState(false) 
//   return (
//     <> 
//        <div className="Navbar">
//          <div className="nav-logo"> 
//           <Link to="/"> 
//            <img src={logo} alt="Menuiserie"/>  
//           </Link>
             
//          </div>
//          <div className={`nav-items ${isOpen && "open"}`}> 
//             <a href="/">Home</a>
//             <a href="/service">Service</a>
//             <a href="/about">About</a>
//             <a href="/contact">Contact</a> 
//             <a href="/galerie">Galerie</a> 
//          </div>
//          <div
//         className={`nav-toggle ${isOpen && "open"}`}
//         onClick={() => setIsOpen(!isOpen)}
//         >
//         <div className="bar"></div>
//       </div>
//        </div>
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/logo-menuiserie.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogoClick = () => {
        // Vérifier si nous sommes déjà sur la page d'accueil
        if (window.location.pathname === '/') {
            // Actualiser la page
            window.location.reload();
        } else {
            // Rediriger vers la page d'accueil
            window.location.href = '/';
        }
    };

    return (
        <div className="Navbar">
            <div className="nav-logo"> 

                <Link to="/" onClick={handleLogoClick}>
                     <img src={logo} alt="Menuiserie"/> 
                     
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
    );
}

export default Navbar;
