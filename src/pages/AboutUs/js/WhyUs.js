import React from 'react';
import { FaMapMarkedAlt, FaBuilding, FaGraduationCap, FaUserTie, FaBookReader, FaShieldAlt } from 'react-icons/fa';
import '../css/WhyUs.css';

const WhyUs = () => {
  return (
    <div className="why-us-container">
      <h2>Why Food Craft Institute Sumerpur?</h2>
      <p className="why-us-subtitle">
        We strive to inculcate discipline, practical mastery, and industry exposure to prepare our students for global hospitality careers.
      </p>
      
      <div className="why-us-grid">
        
        <div className="why-card">
          <div className="why-icon-box"><FaMapMarkedAlt /></div>
          <h3>Strategic Location</h3>
          <p>
            Rajasthan is the premier tourism hub of India. Studying here provides massive regional exposure and direct connections to a flourishing hospitality and tourism network.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon-box"><FaBuilding /></div>
          <h3>State-of-Art Infrastructure</h3>
          <p>
            Equipped with spacious training labs, fully furnished classrooms, a library, Mock Bar, and a 24x7 Wi-Fi and CCTV-monitored secure campus environment.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon-box"><FaGraduationCap /></div>
          <h3>100% Placement Record</h3>
          <p>
            Strong industry tie-ups with leading 5-star hotel chains, cruise lines, and catering groups ensure our alumni occupy elite positions worldwide.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon-box"><FaUserTie /></div>
          <h3>Personal Mentorship</h3>
          <p>
            Our unique Teacher-Guardian scheme matches 15-20 students to a faculty mentor for close counseling, extracurricular support, and holistic development.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon-box"><FaBookReader /></div>
          <h3>Experienced Faculty</h3>
          <p>
            Instructors hold a powerful blend of academic expertise and direct hospitality industry background, utilizing modern technologies and specialized hands-on modules.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon-box"><FaShieldAlt /></div>
          <h3>Safety & Inclusion</h3>
          <p>
            Strict compliance with government safety and hygiene protocols. Active anti-ragging and anti-harassment cells provide a supportive, inclusive campus life.
          </p>
        </div>

      </div>

      <div className="why-us-highlights">
        <div className="highlight-pill">Separate Vegetarian Batch Available</div>
        <div className="highlight-pill">One-to-One Grooming Sessions</div>
        <div className="highlight-pill">NCHMCT & Ministry of Tourism Standards</div>
      </div>
    </div>
  );
};

export default WhyUs;