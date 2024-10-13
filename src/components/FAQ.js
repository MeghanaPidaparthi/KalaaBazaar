import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    { question: "What is KalaBazaar?", answer: "KalaBazaar is a vibrant marketplace for local artisans to showcase and sell handmade crafts." },
    { question: "How can I place an order?", answer: "Simply browse the product catalog, select the items you like, and proceed to checkout." },
    { question: "What payment methods do you accept?", answer: "We accept various payment methods such as credit/debit cards, UPI, and net banking." },
    { question: "Can I track my order?", answer: "Yes, once your order is shipped, you will receive a tracking link via email." },
    { question: "What is your return policy?", answer: "We offer a 7-day return policy for items that are defective or damaged." },
  ];

  return (
    <div style={{ padding: '50px', fontFamily: 'Fraunces', backgroundColor: '#F8F4E3' }}>
      <h1 style={{ fontSize: '40px', color: '#2F3C2D', textAlign: 'center' }}>Frequently Asked Questions</h1>
      
      <div style={{ marginTop: '40px', maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '20px', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
            <div 
              style={{ cursor: 'pointer', fontSize: '20px', color: '#3E4C34', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} 
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p style={{ fontSize: '18px', color: '#6C6F6E', marginTop: '10px' }}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
