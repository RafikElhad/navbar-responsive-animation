import React, { useEffect, useRef } from 'react';
import '../css/Galerie.css';
import photo from '../assets/facebook_share.png';
import coverPhoto from '../assets/cover_photo.png';

function Galerie() {
  const imagesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    imagesRef.current.forEach((image) => {
      if (image) {
        observer.observe(image);
      }
    });

    return () => {
      imagesRef.current.forEach((image) => {
        if (image) {
          observer.unobserve(image);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="cover">
        <img src={coverPhoto} alt="Cover" className="cover-photo" />
        <h1 className="cover-title">Gallery</h1>
      </div>
      <div className="gallery">
        <div className="row">
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[0] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[1] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[2] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[3] = el)}
          />
        </div>
        <div className="row">
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[4] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[5] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[6] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[7] = el)}
          />
        </div>
        <div className="row">
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[8] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[9] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[10] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[11] = el)}
          />
        </div>
        <div className="row">
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[12] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[13] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[14] = el)}
          />
          <img
            src={photo}
            alt="facebook"
            className="fade-slide-up"
            ref={(el) => (imagesRef.current[15] = el)}
          />
        </div>
      </div>
    </>
  );
}

export default Galerie;
