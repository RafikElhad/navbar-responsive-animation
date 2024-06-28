import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/ContactForm.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_45yw8jq', // Remplacez par votre Service ID
      'template_0gxnj3q', // Remplacez par votre Template ID
      formData,
      'olfg_meJthuuU9b7M' // Remplacez par public key
    ).then((result) => {
        console.log(result.text);
        alert('Message envoyé avec succès !');
      }, (error) => {
        console.log(error.text);
        alert('Une erreur est survenue, veuillez réessayer.');
      });

    setFormData({
      nom: '',
      telephone: '',
      email: '',
      message: ''
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Nom</label>
      <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
      
      {/* <label>Prénom</label>
      <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required /> */}
      
      <label>Téléphone</label>
      <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} required />
      
      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      
      <label>Message</label>
      <textarea name="message" value={formData.message} onChange={handleChange} required />
      
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
