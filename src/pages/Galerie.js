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
     
    </div>
    </> 
  )
}

export default Galerie