import React from 'react'
import '../css/Contact.css' 


function Contact() {
  return (
    <> 
      <div className="contact">
        <h1>Nous Contacter</h1>
        <div className="contact-info"> 
          <div>
            <h2>Nos Réseaux Sociaux</h2>
            <div className="social-icons">
              <a href="lien_facebook"><i className="fab fa-facebook"></i></a>
              <a href="lien_instagram"><i className="fab fa-instagram"></i></a>
              <a href="lien_twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div> 
            <h2>Coordonnées</h2> 
            <p><i className="fas fa-phone"></i> +123456789</p>
            <p><i className="fas fa-envelope"></i> contact@example.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Adresse de l'entreprise</p>
          </div>
        </div>
        <div className="additional-info">
          <h2>Informations Supplémentaires</h2>
          
          <p>Ceci est un paragraphe d'informations supplémentaires sur l'entreprise et comment nous contacter.</p>
        </div>
         
    </div>
    </>
  )
}

export default Contact