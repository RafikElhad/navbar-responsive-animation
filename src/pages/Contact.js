import React from 'react'
import '../css/Contact.css' 
import ContactForm from '../components/ContactForm'


function Contact() {
  return (
    <>  
    <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.980808407475!2d43.25509737374698!3d-11.695771635462279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1898fdb2f6f294d7%3A0xb054066c5ae31729!2sMosquee%20Hadoudja!5e0!3m2!1sfr!2ssn!4v1718964451074!5m2!1sfr!2ssn" width="100%" height="450" style={{ border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> 
      <div className="contact">
        <div className="contact-info"> 
          <div className="contact-us"> 
            <h2>Contactez Nous</h2> 
            <p>
            Vous avez des questions, besoin d'aide ou prêt à discuter de votre projet ? Nous sommes là pour vous aider ! N'hésitez pas à contacter Atelier Elhad Ahamada. en utilisant les coordonnées fournies ci-dessous. Nous sommes impatients de vous entendre et de vous aider avec vos besoins en matière de rénovation domiciliaire.
            </p>
            <h3>Contact informations</h3> 
              <p><i className="fas fa-phone"></i>+269 333 46 47</p> 
              <p><i className="fas fa-envelope"></i>elhadahamada269@gmail.com</p> 
              <p><i className="fas fa-map-marker-alt"></i>Moroni, Hadoudja</p>
          </div>
          <ContactForm/> 
        </div> 
    </div>
      
    </>
  )
}
 

export default Contact