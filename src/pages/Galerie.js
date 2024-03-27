import React from 'react'
import '../css/Galerie.css' 
import photo from '../assets/facebook_share.png';
function Galerie() {
  return (
    <>
     <div className="gallery">
        <div className="row">
          <img src={photo} alt="facebook" /> 
          <img src={photo} alt="facebook" />  
          <img src={photo} alt="facebook" /> 
          <img src={photo} alt="facebook" /> 
        </div>
        <div className="row">
        <img src={photo} alt="facebook" /> 
        <img src={photo} alt="facebook" /> 
        <img src={photo} alt="facebook" /> 
        <img src={photo} alt="facebook" />  
        </div>
      {/* Ajoutez d'autres rangées d'images si nécessaire */}
    </div>
    </> 
  )
}

export default Galerie