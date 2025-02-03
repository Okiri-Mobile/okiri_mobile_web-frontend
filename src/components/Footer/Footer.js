import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'; // Replace with the actual logo image path
import { FaEnvelope } from 'react-icons/fa'; // For the envelope icon

function Footer() {
  return (
    <footer className="footer">
      {/* Footer Columns */}
      <div className="footer__columns">
        {/* First Column */}
        <div className="footer__column">
          <img src={logo} alt="OKIRI Logo" className="footer__logo" />
          <p className="footer__text">
            Transform Your Communication<br /> Experience with OKIRI
          </p>
          <div className="footer__contact">
            <FaEnvelope className="footer__icon" />
            <span>support@okiri.com</span>
          </div>
        </div>

        {/* Second Column */}
        <div className="footer__column">
          <h4>App</h4>
          <ul>
            <li>Features</li>
            <li>How it works</li>
            <li>Plans</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="footer__column">
          <h4>Socials</h4>
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="footer__column">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <hr />
        <p>2024 OKIRI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
