import React from 'react';
import './Pricing.css';
import leftImage from '../../assets/Frame-1.png'; // Replace with actual image paths
import rightImage from '../../assets/Frame-2.png'; // Replace with actual image paths

function Pricing() {
  return (
    <section className="pricing">
      {/* Header */}
      <div className="pricing__header">
        <h1>
          Choose the <span className="highlight">Plan</span> That Fits Your <span className="highlight">Needs</span>
        </h1>
        <p>Flexible options to help you connect, manage, and earn from your calls<br /> seamlessly.</p>
      </div>

      {/* Images */}
      <div className="pricing__images">
        <img src={leftImage} alt="Left Illustration" className="pricing__image pricing__image--left" />
        <img src={rightImage} alt="Right Illustration" className="pricing__image pricing__image--right" />
      </div>
    </section>
  );
}

export default Pricing;
