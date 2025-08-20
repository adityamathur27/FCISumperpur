import React from 'react';

import FrontOfficePDF from '../../../assets/pdfs/Diploma-Front-Office-Operations.pdf';
function FrontOffice() {
  return (
    <section className="diploma-detail" style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'80vh',background:'#f8fafc'}}>
      <div style={{background:'#fff',borderRadius:'16px',boxShadow:'0 4px 24px rgba(20,55,90,0.10)',padding:'2.5rem 2rem',maxWidth:900,width:'100%',margin:'2rem 0'}}>
        <h2 style={{textAlign:'center',color:'#14375a',marginBottom:'1.5rem'}}>Diploma in Front Office</h2>
        <p style={{fontSize:'1.1rem',marginBottom:'1.2rem',color:'#333'}}>The <b>Diploma in Front Office</b> is a 1.5-year program focused on developing professional skills in guest relations, front desk operations, and hospitality management. Affiliated with the National Council for Hotel Management (NCHMCT), Noida, this course is perfect for those who enjoy interacting with people and aspire to work in hotels, event management, or customer care.</p>
        <div style={{marginBottom:'1.2rem'}}>
          <h3 style={{color:'#1976d2'}}>What You'll Learn</h3>
          <ul style={{marginLeft:'1.2rem',marginBottom:0}}>
            <li>Front desk operations and guest handling</li>
            <li>Reservation, registration, and cashiering procedures</li>
            <li>Communication, grooming, and professional etiquette</li>
            <li>Event management and sales basics</li>
            <li>Practical training in simulated hotel environments</li>
          </ul>
        </div>
        <div style={{marginBottom:'1.2rem'}}>
          <h3 style={{color:'#1976d2'}}>Eligibility & Duration</h3>
          <ul style={{marginLeft:'1.2rem',marginBottom:0}}>
            <li>12th Pass (Art/Commerce/Science)</li>
            <li>Age: No Age Bar</li>
            <li>Duration: 1.5 years (full-time)</li>
            <li>4 Seats are Reserved in each trade for ST candidates of TSP area</li>
          </ul>
        </div>
        <div style={{marginBottom:'1.2rem'}}>
          <h3 style={{color:'#1976d2'}}>Why Choose This Course?</h3>
          <ul style={{marginLeft:'1.2rem',marginBottom:0}}>
            <li>Can be pursued alongside regular graduation</li>
            <li>Prepares for a wide range of hospitality and service roles</li>
            <li>Modern front office labs and experienced faculty</li>
            <li>Focus on communication and customer service</li>
          </ul>
        </div>
        <div style={{marginBottom:'1.2rem'}}>
          <h3 style={{color:'#1976d2'}}>Career Opportunities</h3>
          <ul style={{marginLeft:'1.2rem',marginBottom:0}}>
            <li>Receptionist, front desk executive, lobby manager, event management, sales & marketing, call center, customer care</li>
            <li>Opportunities in hotels, resorts, event companies, and corporate offices</li>
          </ul>
        </div>
        <div style={{textAlign:'center',marginTop:'2rem'}}>
          <a href= {FrontOfficePDF} target="_blank"
                        rel="noopener noreferrer"className="read-more-link" style={{fontWeight:600,fontSize:'1.1rem',color:'#1976d2'}}>Download Syllabus</a>
        </div>
      </div>
    </section>
  );
}

export default FrontOffice;
