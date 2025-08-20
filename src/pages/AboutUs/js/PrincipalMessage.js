import React from 'react';
import principalImg from '../../../assets/staff/principal.webp';
import '../css/PrincipalMessage.css';

function PrincipalMessage() {
  return (
    <section className="principal-message" id="principal">
      <h2>Principal’s Message</h2>
      <div className="principal-content">
        <img src={principalImg} alt="Principal" className="principal-img" />
        <div>
          <p>
            "Training is a strong part of student’s professional development and this complements our high quality academic programme. Students learn a rich portfolio of skills in Service, Bar, Kitchen, Housekeeping, Front Office, Management, Teamwork, and Personal Development. Our experience is that it develops a strong professional attitude in students, which is valued by future employers."
          </p>
          <p>
            We have always been endeavoring to help to meet the goals by imparting quality hospitality education. The student caring faculty members in every discipline are innovative in their teaching approach and expose the students to cutting edge thinking and hands on experiences. The bewitching and tranquil surroundings are very conducive for teaching and learning process. I always encourage the students to take fullest advantage of the opportunities provided to them through various academic and extracurricular programmes to develop their career in the most prestigious and challenging hospitality industry in future.
          </p>
          <pre className="principal-name">
            – Sohan Singh Meena
            <span className="principal-title"> (Principal)</span>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default PrincipalMessage;
