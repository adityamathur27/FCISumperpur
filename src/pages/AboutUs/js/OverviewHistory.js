import React from 'react';
import { FaHistory, FaUniversity, FaBuilding, FaAward, FaMapMarkerAlt, FaUsers, FaGlobe } from 'react-icons/fa';
import '../css/Overview&History.css';

const OverviewHistory = () => {
  return (
    <div className="overview-history-container">
      <h2>Overview & History</h2>
      
      <p className="overview-intro-text">
        Food Craft Institute (FCI), Sumerpur is a premier hospitality training institution established by the Department of Tourism, Government of Rajasthan, and affiliated with the National Council for Hotel Management & Catering Technology (NCHMCT), Noida, under the Ministry of Tourism, Government of India.
      </p>

      {/* Stats Counter Bar */}
      <div className="overview-stats-bar">
        <div className="stat-item">
          <div className="stat-icon-wrapper"><FaBuilding /></div>
          <h3>8+ Acres</h3>
          <p>Sprawling Green Campus</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon-wrapper"><FaGlobe /></div>
          <h3>NCHMCT</h3>
          <p>National Affiliation & Standards</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon-wrapper"><FaUsers /></div>
          <h3>100%</h3>
          <p>Hands-on Training Focus</p>
        </div>
      </div>

      <div className="overview-grid">
        
        {/* Card 1: Overview */}
        <div className="overview-card">
          <div className="overview-icon-box"><FaUniversity /></div>
          <h3>The Institution</h3>
          <p>
            Located at Jakha Nagar, Sumerpur along the Pali-Sirohi National Highway Bypass, FCI Sumerpur boasts world-class infrastructure. The campus is equipped with basic and quantity training kitchens, dummy training restaurants, a mock bar, front office labs, computer centers, and a rich library. All courses prepare students for global careers under NCHMCT guidance.
          </p>
        </div>

        {/* Card 2: Strategic Hub */}
        <div className="overview-card">
          <div className="overview-icon-box"><FaMapMarkerAlt /></div>
          <h3>Regional Tourism Anchor</h3>
          <p>
            Sumerpur was strategically chosen to act as the primary education anchor catering to bordering tourist destinations of Godwar, Marwar, Mewar, Sirohi, and Jalore. The institute actively collaborates with major regional events and festivals, providing top-tier trained hospitality staff.
          </p>
        </div>

      </div>

      <h3 className="history-timeline-title">
        <FaHistory className="title-icon" /> Historical Milestones
      </h3>

      <div className="timeline-container">
        
        <div className="timeline-item">
          <div className="timeline-badge"><FaAward /></div>
          <div className="timeline-content">
            <span className="timeline-date">February 7, 2012</span>
            <h4>Official Establishment</h4>
            <p>Food Craft Institute Sumerpur was officially established by the Department of Tourism, Government of Rajasthan, to meet the regional demand for quality hospitality education.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-badge"><FaAward /></div>
          <div className="timeline-content">
            <span className="timeline-date">September 2013</span>
            <h4>Foundation Stone Laid</h4>
            <p>The foundation stone for the sprawling 8-acre campus was laid by the then Minister of Tourism, Art, and Culture, Bina Kak, marking a strategic milestone for Sirohi and Pali regional tourism.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-badge"><FaAward /></div>
          <div className="timeline-content">
            <span className="timeline-date">April 23, 2018</span>
            <h4>Formal Inauguration</h4>
            <p>Following construction of state-of-art labs, classrooms, and offices, the institute's main campus was formally inaugurated, opening admissions for global standard NCHMCT diplomas.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OverviewHistory;