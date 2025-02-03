import React from 'react';
import './Hero.css';
import googlePlay from '../../assets/google-play.png'; // Replace with actual Google Play image path
import appleStore from '../../assets/apple-store.png'; // Replace with actual Apple Store image path
import heroRightImage from '../../assets/hero-img.png'; // Replace with actual hero image path

function Hero() {
  return (
    <section className="hero">
      {/* Left Section */}
      <div className="hero__left">
        <h1>
          Set Your <span className="highlight">Price,</span><br />
          Take The <span className="highlight">Call</span>
        </h1>
        <p>
          Transform every call into an earning <br />
          opportunity — you set the rates, we <br />
          handle the rest.
        </p>
        <div className="hero__images">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src={googlePlay} alt="Google Play Store" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={appleStore} alt="Apple Store" />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="hero__right">
        <img src={heroRightImage} alt="Hero Right" />
      </div>
    </section>
  );
}

export default Hero;
