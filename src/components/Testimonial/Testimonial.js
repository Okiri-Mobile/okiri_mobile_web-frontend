import React from 'react';
import './Testimonial.css';
import userImage1 from '../../assets/1.jpeg'; // Replace with actual image paths
import userImage2 from '../../assets/1.jpeg';
import userImage3 from '../../assets/1.jpeg';
import userImage4 from '../../assets/1.jpeg';
import userImage5 from '../../assets/1.jpeg';

function Testimonials() {
  const testimonials = [
    {
      text: "OKIRI has completely transformed the way I handle my calls. It's seamless and efficient!",
      name: "Jane Doe",
      role: "Product Designer",
      image: userImage1,
    },
    {
      text: "I love how flexible and easy-to-use OKIRI is. It’s a game-changer!",
      name: "John Smith",
      role: "Software Engineer",
      image: userImage2,
    },
    {
      text: "The best tool I've used for managing my calls and communication. Highly recommend!",
      name: "Sara Lee",
      role: "Freelancer",
      image: userImage3,
    },
    {
      text: "Superb features and excellent functionality. OKIRI exceeded my expectations!",
      name: "Mike Johnson",
      role: "Marketing Manager",
      image: userImage4,
    },
    {
      text: "OKIRI is just amazing! It makes communication so much easier and efficient.",
      name: "Emily Davis",
      role: "Entrepreneur",
      image: userImage5,
    },
  ];

  return (
    <section className="testimonials">
      {/* Header Section */}
      <div className="testimonials__header">
        <h1>What Our Early<br /> Users Say</h1>
        <p>
          Find answers to common questions about<br /> OKIRI’s features, functionality, and how it can<br /> enhance your
          communication experience.
        </p>
      </div>

      {/* Testimonials Frames */}
      <div className="testimonials__frames">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial__frame" key={index}>
            <span className="testimonial__quote">“</span>
            <p className="testimonial__text">{testimonial.text}</p>
            <div className="testimonial__footer">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className="testimonial__image"
              />
              <div>
                <h3 className="testimonial__name">{testimonial.name}</h3>
                <p className="testimonial__role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
