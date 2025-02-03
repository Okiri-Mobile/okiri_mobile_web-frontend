import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './Features.css';

import feature1 from '../../assets/logo.png'; // Replace with actual image paths
import feature2 from '../../assets/logo.png';
import feature3 from '../../assets/logo.png';
import feature4 from '../../assets/logo.png';
import feature5 from '../../assets/logo.png';

function Features() {
  const features = [
    {
      img: feature1,
      title: 'Multi-Platform Integration',
      description:
        'Centralize all your calls, including those from social media platforms, into one seamless app for easy management.',
    },
    {
      img: feature2,
      title: 'Advanced Analytics',
      description: 'Track your call performance and earnings with real-time analytics and detailed insights.',
    },
    {
      img: feature3,
      title: 'Customizable Pricing',
      description: 'Set your own rates for calls, giving you full control over your earning potential.',
    },
    {
      img: feature4,
      title: 'Call Recording',
      description: 'Automatically record calls to review later and ensure quality and compliance.',
    },
    {
      img: feature5,
      title: 'User-Friendly Interface',
      description: 'Enjoy a sleek and intuitive design that makes managing calls effortless.',
    },
  ];

  return (
    <section className="features">
      <div className="features__header">
        <h1>
          Why Use <span className="highlight">OKIRI</span>?
        </h1>
        <p>
          Features That Put You In Control. Empowering you to connect, earn, and<br /> manage calls like never before.
        </p>
      </div>

      <Swiper
  modules={[Navigation, EffectCoverflow, Autoplay]}
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto"
  loop={true} /* Enables infinite looping */
  autoplay={{
    delay: 3000, /* No delay between slides */
    disableOnInteraction: false, /* Keeps autoplay running even after interaction */
  }}
  speed={1000} /* Adjust speed for a continuous sliding effect */
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  navigation
  className="features__slider"
>
  {features.map((feature, index) => (
    <SwiperSlide key={index} className="features__card">
      <img src={feature.img} alt={feature.title} />
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
}

export default Features;
