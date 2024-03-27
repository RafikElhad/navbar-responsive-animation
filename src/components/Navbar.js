import React, { useState } from 'react' 
import '../css/Navbar.css';
import logo from '../assets/logo-menuiserie.png' 
const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false) 
  return (
    <> 
       <div className="Navbar">
         <div className="nav-logo"> 
         <img src={logo} alt="Menuiserie"/>   
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
    </>
  )
}

export default Navbar