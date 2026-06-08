import React from 'react';
import { FaEye, FaBullseye, FaGraduationCap, FaUtensils, FaBriefcase, FaLightbulb, FaMapMarkedAlt, FaUniversity } from 'react-icons/fa';
import '../css/Vision&Objective.css';

const VisionObjective = () => {
  return (
    <div className="vision-objective-container">
      <h2>Vision & Objectives</h2>
      <p className="vision-objective-subtitle">
        Guiding principles and key focus areas driving academic excellence and professional competence at Food Craft Institute Sumerpur.
      </p>

      {/* Vision Section */}
      <div className="vision-section">
        <div className="section-title-wrapper">
          <FaEye className="section-title-icon" />
          <h3>Our Vision</h3>
        </div>
        
        <div className="vision-main-card">
          <p className="vision-quote">
            "To be a premier center of hospitality excellence, nurturing future leaders by merging academic rigor with hands-on vocational proficiency, and driving regional tourism growth across Rajasthan."
          </p>
        </div>

        <div className="vision-pillars-grid">
          <div className="vision-pillar-card">
            <h4>Nurture Hospitality Leaders</h4>
            <p>Empowering students with academic clarity, master-craft skill sets, and industry exposure to prepare them for global hospitality careers.</p>
          </div>
          <div className="vision-pillar-card">
            <h4>Bridge the Industry Gap</h4>
            <p>Developing dynamic curricula aligned with NCHMCT parameters, imparting both practical excellence and critical soft skills.</p>
          </div>
          <div className="vision-pillar-card">
            <h4>Promote Holistic Growth</h4>
            <p>Fostering an environment of professionalism, integrity, discipline, and inclusion, ensuring graduates are industry-ready.</p>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="objectives-section">
        <div className="section-title-wrapper">
          <FaBullseye className="section-title-icon" />
          <h3>Core Objectives</h3>
        </div>

        <div className="objectives-grid">
          <div className="objective-card">
            <div className="objective-icon-box"><FaGraduationCap /></div>
            <h3>Skill Development</h3>
            <p>Imparting professional training in various hospitality disciplines, such as Food Production, Food & Beverage Service, and Front Office Operations.</p>
          </div>

          <div className="objective-card">
            <div className="objective-icon-box"><FaUtensils /></div>
            <h3>Practical Training</h3>
            <p>Providing students with access to state-of-the-art facilities—including kitchens, training restaurants, and front office labs—to simulate real-world hotel environments.</p>
          </div>

          <div className="objective-card">
            <div className="objective-icon-box"><FaBriefcase /></div>
            <h3>Employability & Placement</h3>
            <p>Enhancing the career prospects of students through strong industry connections and dedicated placement support with leading hotel chains.</p>
          </div>

          <div className="objective-card">
            <div className="objective-icon-box"><FaLightbulb /></div>
            <h3>Entrepreneurship Support</h3>
            <p>Nurturing administrative competence, strategic planning, and leadership to support future hospitality business owners and innovators.</p>
          </div>

          <div className="objective-card">
            <div className="objective-icon-box"><FaMapMarkedAlt /></div>
            <h3>Regional Growth</h3>
            <p>Strengthening the tourism ecosystem in Rajasthan by producing a skilled workforce that can meet the increasing demand for trained professionals.</p>
          </div>

          <div className="objective-card">
            <div className="objective-icon-box"><FaUniversity /></div>
            <h3>NCHMCT Standards</h3>
            <p>Adhering strictly to standard curricula and quality parameters set by the National Council for Hotel Management & Catering Technology, Noida.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionObjective;