import React from 'react';
import './CTA.css';
import image1 from '../../assets/google-play-w.png'; // Replace with actual image paths
import image2 from '../../assets/apple-store-w.png'; // Replace with actual image paths
import image3 from '../../assets/iMockup-1.png'; // Replace with actual image paths
import image4 from '../../assets/iMockup-2.png'; // Replace with actual image paths

function CTA() {
  return (
    <section className="cta">
      {/* Left Side */}
      <div className="cta__left">
        <h1>Your First Paid<br /> Call Awaits</h1>
        <p>Start earning from your calls—join<br /> OKIRI and elevate your calling<br /> experience.</p>
        <div className="cta__images--horizontal">
          <img src={image1} alt="Left Image 1" />
          <img src={image2} alt="Left Image 2" />
        </div>
      </div>

      {/* Right Side */}
      <div className="cta__right">
        <div className="cta__images--overlap">
          <img src={image3} alt="Right Image 1" className="cta__image--overlap-left" />
          <img src={image4} alt="Right Image 2" className="cta__image--overlap-right" />
        </div>
      </div>
    </section>
  );
}

export default CTA;
