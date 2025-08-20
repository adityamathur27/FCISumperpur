import React from 'react';
import './Courses.css';

function Courses() {
  return (
    <section className="courses" id="courses">
      <h2>Courses Offered</h2>
      <div style={{maxWidth:'900px',margin:'0 auto 2rem auto',fontSize:'1.08rem',color:'#222',lineHeight:'1.7',background:'#f4f8fb',padding:'1.5rem 1.2rem',borderRadius:'8px',boxShadow:'0 1px 8px rgba(20,55,90,0.06)'}}>
        <b>Insight into Teaching & Learning at Food Craft Institute Sumerpur:</b><br/><br/>
        At Food Craft Institute Sumerpur, our teaching philosophy is rooted in a blend of practical exposure, industry-driven curriculum, and holistic student development. We believe that hospitality education is not just about acquiring technical skills, but also about nurturing the right attitude, communication, and adaptability required in the dynamic world of hospitality and tourism. <br/><br/>
        Our faculty comprises seasoned professionals and passionate educators who bring real-world experience into the classroom. Each course is meticulously designed to balance theoretical knowledge with hands-on training. Students spend significant time in state-of-the-art kitchens, training restaurants, front office labs, and housekeeping suites, simulating real hotel environments. This immersive approach ensures that our graduates are job-ready from day one.<br/><br/>
        Soft skills, personality development, and communication are integral parts of our teaching. We conduct regular sessions on grooming, etiquette, teamwork, and leadership, preparing students for both national and international hospitality careers. Our placement cell works tirelessly to connect students with leading hotels, resorts, airlines, and cruise lines, ensuring excellent job opportunities upon graduation.<br/><br/>
        The learning environment at FCI Sumerpur is inclusive, supportive, and vibrant. We celebrate diversity and foster a culture of respect, discipline, and innovation. Our faculty mentors guide students not only academically but also in personal growth, career planning, and entrepreneurship. <br/><br/>
        In summary, teaching at Food Craft Institute Sumerpur is a transformative journey that equips students with technical expertise, professional values, and a global outlook. We take pride in shaping future leaders of the hospitality industry who are competent, compassionate, and ready to excel in any setting.<br/><br/>
        <i>(This insight reflects our commitment to delivering quality education and preparing students for rewarding careers in hospitality and allied sectors.)</i>
      </div>
      <div className="courses-list">
        <div className="course-card">
          <a href="/courses/diploma" className="course-link">
            <h3>Diploma Courses</h3>
          </a>
          <p>Short-term, industry-focused diploma programs in Food Production, Food & Beverage Service, and Front Office. <a href="/courses/diploma" className="read-more-link">Read more</a></p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
