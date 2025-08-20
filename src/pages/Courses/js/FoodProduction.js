
import React from 'react';
// import './DiplomaDetail.css';
import FoodProductionPDF from '../../../assets/pdfs/Diploma-Food-Production.pdf';

function FoodProduction() {
  return (
    <section className="diploma-detail" style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'80vh',background:'#f8fafc'}}>
      <div style={{background:'#fff',borderRadius:'16px',boxShadow:'0 4px 24px rgba(20,55,90,0.10)',padding:'2.5rem 2rem',maxWidth:900,width:'100%',margin:'2rem 0'}}>
        <h2 style={{textAlign:'center',color:'#14375a',marginBottom:'1.5rem'}}>Diploma in Food Production</h2>
        <p style={{fontFamily:'-moz-initial',color:'red' , textAlign: 'center' , fontWeight:'bold' , fontSize:'1rem'}}>SEPARATE BATCH FOR VEGETARIAN OPTION IS AVAILABLE </p>
        <p style={{fontSize:'1.1rem',marginBottom:'1.2rem',color:'#333'}}>The <b>Diploma in Food Production</b> is a 1.5-year, industry-oriented program for aspiring chefs and culinary professionals. This course, affiliated with the National Council for Hotel Management (NCHMCT), Noida, offers a blend of hands-on kitchen training, food science, and management skills to prepare you for a rewarding career in the culinary world.</p>
        <div style={{marginBottom:'1.2rem'}}>
          <h3 style={{color:'#1976d2'}}>What You'll Learn</h3>
          <ul style={{marginLeft:'1.2rem',marginBottom:0}}>
            <li>Fundamentals of cookery, bakery, and confectionery</li>
            <li>Kitchen organization, hygiene, and food safety</li>
            <li>Menu planning, costing, and kitchen management</li>
            <li>Continental, Indian, and international cuisines</li>
            <li>Practical training in modern, well-equipped kitchens</li>
          </ul>
        </div>
        <div style={{marginBottom:'1.2rem'}}>
          <h3 style={{color:'#1976d2'}}>Eligibility & Duration</h3>
          <ul style={{marginLeft:'1.2rem',marginBottom:0}}>
            <li>12th Pass (Art/Commerce/Science)</li>
            <li>Age: No Age Bar</li>
            <li>Duration: 1.5 years (full-time)</li>
            <li>4 Seats are Reserved in each trade for ST candidates of TSP area </li>
          </ul>
        </div>
        <div style={{marginBottom:'1.2rem'}}>
          <h3 style={{color:'#1976d2'}}>Why Choose This Course?</h3>
          <ul style={{marginLeft:'1.2rem',marginBottom:0}}>
            <li>Can be pursued alongside regular graduation</li>
            <li>Strong industry connections and placement support</li>
            <li>Modern training kitchens and experienced chef faculty</li>
            <li>Focus on practical learning and real-world skills</li>
          </ul>
        </div>
        <div style={{marginBottom:'1.2rem'}}>
          <h3 style={{color:'#1976d2'}}>Career Opportunities</h3>
          <ul style={{marginLeft:'1.2rem',marginBottom:0}}>
            <li>Chef or cook in hotels, restaurants, cruise lines, railways, and catering businesses</li>
            <li>Entrepreneur in food startups or catering</li>
            <li>Opportunities in India and abroad</li>
          </ul>
        </div>
        <div style={{textAlign:'center',marginTop:'2rem'}}>
          <a href={FoodProductionPDF} target="_blank"
                        rel="noopener noreferrer" className="read-more-link" style={{fontWeight:600,fontSize:'1.1rem',color:'#1976d2'}}>Download Syllabus</a>
        </div>
      </div>
    </section>
  );
}

export default FoodProduction;
