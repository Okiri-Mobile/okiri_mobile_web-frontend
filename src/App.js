import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Testimonial from './components/Testimonial/Testimonial';
import Faqs from './components/Faqs/Faqs';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonial />
      <Faqs />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
