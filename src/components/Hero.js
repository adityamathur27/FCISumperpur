import React from 'react';
import logo from '../assets/images/FCI Logo.jpg';
import { FaCheckCircle, FaAward, FaBuilding, FaUserGraduate } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-section-container">
      <div className="hero-grid">
        
        {/* Left Side: Welcome and Branding */}
        <div className="hero-brand-card">
          <div className="hero-logo-wrapper">
            <img src={logo} alt="Food Craft Institute Sumerpur Logo" className="hero-logo" />
          </div>
          <h1 className="hero-title">Welcome to Food Craft Institute Sumerpur</h1>
          <p className="hero-subtitle">Affiliated with NCHMCT, Noida, Ministry of Tourism, Govt. of India</p>
          
          <div className="hero-badge-container">
            <div className="hero-badge-item">
              <span className="badge-icon"><FaAward /></span>
              <span>100% Practical learning</span>
            </div>
            <div className="hero-badge-item">
              <span className="badge-icon"><FaBuilding /></span>
              <span>State-of-art Labs</span>
            </div>
            <div className="hero-badge-item">
              <span className="badge-icon"><FaUserGraduate /></span>
              <span>Top Placement Record</span>
            </div>
          </div>
        </div>

        {/* Right Side: Introduction Info */}
        <div className="hero-info-card">
          <span className="info-tag">ABOUT THE INSTITUTE</span>
          <h2 className="info-heading">Pioneering Excellence in Hospitality Education</h2>
          <p className="info-intro">
            FCI Sumerpur (Department of Tourism, Govt. of Rajasthan) is a premier institution dedicated to nurturing future leaders of the hospitality industry.
          </p>
          
          <ul className="info-bullets">
            <li>
              <span className="check-icon"><FaCheckCircle /></span>
              <span>Modern training kitchens, restaurants, and library resources</span>
            </li>
            <li>
              <span className="check-icon"><FaCheckCircle /></span>
              <span>Affiliated to NCHMCT for global hospitality standards</span>
            </li>
            <li>
              <span className="check-icon"><FaCheckCircle /></span>
              <span>Strong industry tie-ups ensuring premium placement support</span>
            </li>
            <li>
              <span className="check-icon"><FaCheckCircle /></span>
              <span>Highly qualified, experienced faculty providing individual focus</span>
            </li>
            <li>
              <span className="check-icon"><FaCheckCircle /></span>
              <span>Practical-first methodology for real-world career readiness</span>
            </li>
          </ul>

          <p className="info-mission">
            Our mission is to empower students with the theoretical depth and practical mastery needed to excel in 5-star establishments globally.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
