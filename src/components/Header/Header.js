import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import logoWhite from '../../assets/1.jpeg'; // Add your white logo here
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__logo">
        <img src={isScrolled ? logoWhite : logo} alt="Logo" />
      </div>
      <div
        className={`header__hamburger ${isMenuOpen ? 'header__hamburger--open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <div className="header__center-links">
          <a href="#overview" onClick={() => setIsMenuOpen(false)}>Overview</a>
          <a href="#plans" onClick={() => setIsMenuOpen(false)}>Plans</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </div>
        <a
          href="#download"
          className="header__download-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Download
        </a>
      </nav>
    </header>
  );
}

export default Header;
