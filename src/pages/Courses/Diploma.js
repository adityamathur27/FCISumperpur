

import React from 'react';
import { Link } from 'react-router-dom';
import './Diploma.css';

function Diploma() {
  return (
    <section className="course-detail">
      
      <h2 style={{textAlign:'center'}}>Diploma Courses</h2>
      <div style={{maxWidth:700,margin:'1rem auto 2rem auto',textAlign:'center',fontSize:'1.1rem',color:'#333',background:'#f4f8fb',padding:'1.5rem 1.2rem',borderRadius:'8px',boxShadow:'0 1px 8px rgba(20,55,90,0.06)'}}>
        <b>Professional Pathways in Hospitality:</b><br/><br/>
        The diploma programs at Food Craft Institute Sumerpur are meticulously crafted to bridge the gap between academic learning and industry requirements. Each diploma is a gateway to a rewarding career in hospitality, offering a blend of rigorous practical training, theoretical foundation, and personal development. Our students benefit from modern infrastructure, experienced faculty, and a curriculum that evolves with the latest trends in the hospitality sector.<br/><br/>
        We emphasize hands-on learning, industry exposure, and soft skills, ensuring that graduates are not only technically proficient but also confident, adaptable, and ready to excel in diverse hospitality environments. Whether you aspire to be a chef, a service professional, or a front office expert, our diploma courses provide the skills, knowledge, and network to launch your career with confidence.
      </div>
      <div className="diploma-cards" style={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:'center',marginTop:'2rem'}}>
        <div className="diploma-card" onClick={()=>window.location='/diploma/FoodProduction'} tabIndex={0} onKeyPress={e=>{if(e.key==='Enter'){window.location='/diploma/FoodProduction'}}}>
          <h3>Diploma in Food Production</h3>
          <p><b>Duration:</b> 1.5 Year<br/><b>Eligibility:</b> 12th Pass<br/><br/>This program immerses students in the world of culinary arts, covering everything from basic kitchen skills to advanced food production techniques. With a focus on hygiene, nutrition, and international cuisines, graduates are prepared for roles as chefs, kitchen supervisors, and culinary entrepreneurs.</p>
          <Link to="/diploma/FoodProduction" className="read-more-link">Read more</Link>
        </div>
        <div className="diploma-card" onClick={()=>window.location='/diploma/FoodBeverageService'} tabIndex={0} onKeyPress={e=>{if(e.key==='Enter'){window.location='/diploma/FoodBeverageService'}}}>
          <h3>Diploma in Food and Beverage</h3>
          <p><b>Duration:</b> 1.5 Year<br/><b>Eligibility:</b> 12th Pass<br/><br/>This course develops expertise in restaurant, bar, and banquet service. Students learn about menu planning, customer service, beverage management, and event operations, opening doors to careers in hotels, airlines, cruise lines, and catering companies.</p>
          <Link to="/diploma/FoodBeverageService" className="read-more-link">Read more</Link>
        </div>
        <div className="diploma-card" onClick={()=>window.location='/diploma/FrontOffice'} tabIndex={0} onKeyPress={e=>{if(e.key==='Enter'){window.location='/diploma/FrontOffice'}}}>
          <h3>Diploma in Front Office</h3>
          <p><b>Duration:</b> 1.5 Year<br/><b>Eligibility:</b> 12th Pass<br/><br/>This diploma focuses on guest relations, front desk operations, reservations, and customer care. Students gain practical experience in communication, problem-solving, and hospitality software, preparing them for roles in hotels, resorts, and event management companies.</p>
          <Link to="/diploma/FrontOffice" className="read-more-link">Read more</Link>
        </div>
      </div>
    </section>
  );
}

export default Diploma;
