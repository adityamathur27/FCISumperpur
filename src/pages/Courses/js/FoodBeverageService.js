import React from 'react';


import FoodBeverageServicePDF from '../../../assets/pdfs/Diploma-Food-Beverage-Service.pdf';

function FoodBeverageService() {
  return (
    <section className="diploma-detail" style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'80vh',background:'#f8fafc'}}>
      <div style={{background:'#fff',borderRadius:'16px',boxShadow:'0 4px 24px rgba(20,55,90,0.10)',padding:'2.5rem 2rem',maxWidth:900,width:'100%',margin:'2rem 0'}}>
        <h2 style={{textAlign:'center',color:'#14375a',marginBottom:'1.5rem'}}>Diploma in Food and Beverage Service</h2>
        <p style={{fontSize:'1.1rem',marginBottom:'1.2rem',color:'#333'}}>The <b>Diploma in Food and Beverage Service</b> is a 1.5-year program designed for those who want to master the art of restaurant, bar, and banquet service. Affiliated with the National Council for Hotel Management (NCHMCT), Noida, this course combines practical training with customer service and hospitality management skills.</p>
        <div style={{marginBottom:'1.2rem'}}>
          <h3 style={{color:'#1976d2'}}>What You'll Learn</h3>
          <ul style={{marginLeft:'1.2rem',marginBottom:0}}>
            <li>Restaurant and bar service techniques</li>
            <li>Banqueting and event service</li>
            <li>Guest interaction and customer care</li>
            <li>Food and beverage controls, billing, and sales</li>
            <li>Practical training in simulated restaurant environments</li>
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
            <li>Opportunities for international placements</li>
            <li>Modern training restaurant and bar labs</li>
            <li>Focus on practical learning and guest service</li>
          </ul>
        </div>
        <div style={{marginBottom:'1.2rem'}}>
          <h3 style={{color:'#1976d2'}}>Career Opportunities</h3>
          <ul style={{marginLeft:'1.2rem',marginBottom:0}}>
            <li>Flight steward, restaurant/bar manager, cruise staff, catering business, banqueting, and more</li>
            <li>Opportunities in hotels, airlines, cruise lines, and event management</li>
          </ul>
        </div>
        <div style={{textAlign:'center',marginTop:'2rem'}}>
          <a href= {FoodBeverageServicePDF} target="_blank"
                        rel="noopener noreferrer"className="read-more-link" style={{fontWeight:600,fontSize:'1.1rem',color:'#1976d2'}}>Download Syllabus</a>
        </div>
      </div>
    </section>
  );
}

export default FoodBeverageService;
