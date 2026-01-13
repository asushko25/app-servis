import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  const handlePhoneCall = (): void => {
    window.location.href = 'tel:123-456-7890';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              {/* Water drop */}
              <path d="M20 8C20 8 12 14 12 22C12 28 16 32 20 32C24 32 28 28 28 22C28 14 20 8 20 8Z" fill="#4A9EFF" opacity="0.9"/>
              {/* Wrench inside */}
              <path d="M18 18L22 22M22 18L18 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="20" r="2" fill="white"/>
            </svg>
          </div>
          <span className="logo-text">
            <span className="logo-text-bold">PLUMBING</span> <span className="logo-text-normal">SERVICES</span>
          </span>
        </div>
        
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </nav>
        
        <div className="header-right">
          <div onClick={handlePhoneCall} className="emergency-call">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="phone-icon">
              <path d="M18.3333 14.075V16.575C18.3333 17.1083 18.125 17.6167 17.75 17.9917C17.375 18.3667 16.8667 18.575 16.3333 18.575C11.8083 18.575 7.45833 16.6667 4.16667 13.375C0.875 10.0833 -1.03333 5.73333 -1.03333 1.20833C-1.03333 0.675 -0.825 0.166667 -0.45 -0.208333C-0.075 -0.583333 0.433333 -0.791667 0.966667 -0.791667H3.46667C4.10833 -0.791667 4.69167 -0.45 4.95 0.125L6.58333 4.20833C6.80833 4.70833 6.80833 5.28333 6.58333 5.78333L4.75 8.28333C5.83333 10.6667 7.83333 12.6667 10.2167 13.75L12.7167 11.9167C13.2167 11.6917 13.7917 11.6917 14.2917 11.9167L18.375 13.55C18.95 13.8083 19.2917 14.3917 19.2917 15.0333L18.3333 14.075Z" fill="white"/>
            </svg>
            <div className="emergency-text">
              <span className="emergency-label">24/7 Emergency Call</span>
              <span className="phone-number">123-456-7890</span>
            </div>
          </div>
          <button onClick={handlePhoneCall} className="cta-button">GET A QUOTE</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

