import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Amit Sharma',
    text: 'Food Craft Institute Sumerpur gave me the skills and confidence to excel in the hospitality industry. The faculty and facilities are top-notch!'
  },
  {
    name: 'Priya Singh',
    text: 'The placement support and hands-on training at Food Craft Institute Sumerpur helped me land my dream job at a 5-star hotel.'
  }
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <p>"{t.text}"</p>
            <span>- {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
