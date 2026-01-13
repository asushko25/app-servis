import React from 'react';
import './Hero.scss';
import plumberImage from '../../assets/1.jpg';

const Hero: React.FC = () => {
  const handlePhoneCall = (): void => {
    window.location.href = 'tel:123-456-7890';
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="water-splash"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Reliable Plumbing Services</h1>
          <p className="hero-subtitle">Your Trusted Local Plumber</p>
          
          <div className="hero-buttons">
            <button onClick={handlePhoneCall} className="btn-primary">REQUEST SERVICE</button>
            <button onClick={handlePhoneCall} className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="btn-phone-icon">
                <path d="M18.3333 14.075V16.575C18.3333 17.1083 18.125 17.6167 17.75 17.9917C17.375 18.3667 16.8667 18.575 16.3333 18.575C11.8083 18.575 7.45833 16.6667 4.16667 13.375C0.875 10.0833 -1.03333 5.73333 -1.03333 1.20833C-1.03333 0.675 -0.825 0.166667 -0.45 -0.208333C-0.075 -0.583333 0.433333 -0.791667 0.966667 -0.791667H3.46667C4.10833 -0.791667 4.69167 -0.45 4.95 0.125L6.58333 4.20833C6.80833 4.70833 6.80833 5.28333 6.58333 5.78333L4.75 8.28333C5.83333 10.6667 7.83333 12.6667 10.2167 13.75L12.7167 11.9167C13.2167 11.6917 13.7917 11.6917 14.2917 11.9167L18.375 13.55C18.95 13.8083 19.2917 14.3917 19.2917 15.0333L18.3333 14.075Z" fill="white"/>
              </svg>
              <div className="btn-phone-text">
                <span className="btn-call-now">CALL NOW</span>
                <span className="btn-phone-number">123-456-7890</span>
              </div>
            </button>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <img src={plumberImage} alt="Professional Plumber" className="plumber-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

