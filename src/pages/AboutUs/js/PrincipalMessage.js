import React from 'react';
import principalImg from '../../../assets/staff/principal.webp';
import { FaQuoteLeft } from 'react-icons/fa';
import '../css/PrincipalMessage.css';

function PrincipalMessage() {
  return (
    <section className="principal-message-container">
      <h2>Principal’s Message</h2>
      
      <div className="principal-grid">
        
        {/* Left Column: Equal-Height Card with 60% Image and 40% Info */}
        <div className="principal-profile-card">
          <div className="profile-img-wrapper-full">
            <img src={principalImg} alt="Principal Sohan Singh Meena" className="principal-img-full" />
          </div>
          <div className="profile-info-block">
            <h3 className="principal-name">Sohan Singh Meena</h3>
            <p className="principal-designation">Principal</p>
            <p className="principal-institution">Food Craft Institute, Sumerpur</p>
          </div>
        </div>

        {/* Right Column: Message Content */}
        <div className="principal-message-content">
          <div className="message-quote-block">
            <span className="quote-mark-icon"><FaQuoteLeft /></span>
            <p className="quote-text">
              "Training is a strong part of student’s professional development and this complements our high quality academic programme. Students learn a rich portfolio of skills in Service, Bar, Kitchen, Housekeeping, Front Office, Management, Teamwork, and Personal Development. Our experience is that it develops a strong professional attitude in students, which is valued by future employers."
            </p>
          </div>
          
          <div className="message-body-text">
            <p>
              We have always been endeavoring to help to meet the goals by imparting quality hospitality education. The student caring faculty members in every discipline are innovative in their teaching approach and expose the students to cutting edge thinking and hands on experiences. The bewitching and tranquil surroundings are very conducive for teaching and learning process.
            </p>
            <p>
              I always encourage the students to take fullest advantage of the opportunities provided to them through various academic and extracurricular programmes to develop their career in the most prestigious and challenging hospitality industry in future.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PrincipalMessage;
