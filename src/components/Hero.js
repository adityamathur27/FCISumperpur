import React from 'react';
import logo from '../assets/images/FCI Logo.jpg';
import './Hero.css';

function Hero() {
  return (
    <>
      <section className="about-hero-info" style={{background:'#f5f5f5',padding:'2rem 0 1rem 0',marginBottom:'-1rem'}}>
        <div style={{maxWidth:800,margin:'0 auto',padding:'0 1rem'}}>
          <h2 style={{color:'#14375a',marginBottom:'0.5rem'}}>About Food Craft Institute Sumerpur</h2>
          <p style={{fontWeight:500,marginBottom:'1rem'}}>FCI, Sumerpur is a premier institution dedicated to excellence in hospitality education and training. Affiliated with the National Council for Hotel Management & Catering Technology (NCHMCT), the institute offers world-class infrastructure, experienced faculty, and a vibrant campus life.</p>
          <ul style={{marginBottom:'1rem',paddingLeft:'1.2rem'}}>
            <li>Modern classrooms, well-equipped kitchens, and training restaurants</li>
            <li>Strong industry connections and placement support</li>
            <li>Focus on practical learning and holistic development</li>
            <li>Courses designed to meet global hospitality standards</li>
            <li>Active student life with events, workshops, and competitions</li>
          </ul>
          <p style={{marginBottom:0}}>Our mission is to nurture future leaders of the hospitality industry by providing a blend of academic rigor, hands-on experience, and industry exposure. Join us to embark on a rewarding career in hospitality!</p>
        </div>
      </section>
      <section className="hero" id="home">
        <img src={logo} alt="Food Craft Institute Sumerpur Logo" className="hero-logo" />
        <h1>Welcome to Food Craft Institute Sumerpur</h1>
        <p>FCI, Sumerpur</p>
      </section>
    </>
  );
}

export default Hero;
