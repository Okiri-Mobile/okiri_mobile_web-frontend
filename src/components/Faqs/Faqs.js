import React, { useState, useRef } from 'react';
import './Faqs.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const faqs = [
    { question: "How do I earn money with OKIRI?", answer: "You can earn money by setting rates for your calls and managing them through OKIRI’s platform." },
    { question: "Is my data and communication secure on OKIRI?", answer: "Yes, OKIRI uses advanced encryption to ensure your data and communications are secure." },
    { question: "Are there any subscription fees for using OKIRI?", answer: "OKIRI offers both free and premium plans. Check our pricing page for more details." },
    { question: "What happens if I miss a call on OKIRI?", answer: "Missed calls are logged in your account, and you can follow up at your convenience." },
    { question: "Can I use OKIRI for international calls?", answer: "Yes, OKIRI supports international calls with flexible rates." },
    { question: "How do I manage calls from different social media platforms on OKIRI?", answer: "OKIRI allows you to centralize and manage calls from various platforms in one app." },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      {/* Header */}
      <div className="faqs__header">
        <h1>Got Questions About OKIRI?</h1>
        <p>
          Here are some frequently asked questions.{' '}
          <span className="highlight">Send an<br /> email</span> and our team would reach out soon.
        </p>
      </div>

      {/* Accordion */}
      <div className="faqs__accordion">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="faqs__item">
              <div
                className="faqs__question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <FaChevronUp className="faqs__icon" />
                ) : (
                  <FaChevronDown className="faqs__icon" />
                )}
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="faqs__answer"
                style={{
                  height: isOpen
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
                  overflow: "hidden",
                  transition: "height 0.3s ease",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faqs;
