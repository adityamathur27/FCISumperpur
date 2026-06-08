import React from 'react';
import { FaQuoteLeft, FaGraduationCap, FaHotel } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rajesh Kumawat',
    course: 'Diploma in Food Production',
    batch: 'Batch 2018-19',
    placement: 'Commis Chef, Taj Lake Palace, Udaipur',
    initials: 'RK',
    text: 'The professional training kitchens and faculty guidance at FCI Sumerpur gave me the foundational skills required to work in a luxury kitchen. The practical classes are world-class.'
  },
  {
    name: 'Ananya Vyas',
    course: 'Diploma in Front Office Operations',
    batch: 'Batch 2020-21',
    placement: 'Front Office Executive, The Oberoi, New Delhi',
    initials: 'AV',
    text: 'FCI Sumerpur grooms you for the real hospitality world. The mock drills, communication sessions, and focus on details helped me clear my campus interview for Oberoi Hotels.'
  },
  {
    name: 'Vikram Choudhary',
    course: 'Diploma in Food & Beverage Service',
    batch: 'Batch 2019-20',
    placement: 'F&B Supervisor, JW Marriott, Mumbai',
    initials: 'VC',
    text: 'FCI Sumerpur stands out because of its focus on absolute practical mastery. From training in dummy restaurants to learning bar operations, it made me job-ready from day one.'
  },
  {
    name: 'Meenakshi Solanki',
    course: 'Diploma in Food Production',
    batch: 'Batch 2021-22',
    placement: 'Pastry Chef, Radisson Blu, Jaipur',
    initials: 'MS',
    text: 'I will always be grateful for the placement support at FCI. The campus interviews and specialized baking workshops gave me the expertise to start my bakery career successfully.'
  },
  {
    name: 'Siddharth Bhati',
    course: 'Diploma in Food & Beverage Service',
    batch: 'Batch 2018-19',
    placement: 'F&B Associate, Hyatt Regency, Pune',
    initials: 'SB',
    text: 'The discipline, grooming standards, and teacher-guardian mentorship scheme helped me grow both personally and professionally. FCI Sumerpur is the best place to launch a hospitality career.'
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Our Alumni Say</h2>
        <p className="testimonials-subtitle">
          Real stories of success and growth from our graduates working with elite global hospitality brands.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="card-quote-icon">
              <FaQuoteLeft />
            </div>

            <p className="testimonial-text">"{t.text}"</p>

            <div className="testimonial-divider"></div>

            <div className="testimonial-profile">
              <div className="profile-avatar-badge">
                {t.initials}
              </div>
              <div className="profile-details">
                <h4>{t.name}</h4>
                <div className="placement-row">
                  <FaHotel className="placement-icon" />
                  <span className="placement-text">{t.placement}</span>
                </div>
                <div className="course-row">
                  <FaGraduationCap className="course-icon" />
                  <span className="course-text">{t.course} ({t.batch})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
