import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <strong>Food Craft Institute Sumerpur</strong> &copy; {new Date().getFullYear()} | All Rights Reserved
        </div>
        <div className="footer-links">
          <a href="/home">Home</a>
          <a href="/courses">Courses</a>          
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-contact">
          <p><b>Address:</b>Opp. 132 kv GSS, National Highway Bypass, Jakha Nagar, Sumerpur, Pali, Rajasthan.</p>
          <p><b>Email:</b> fcisumerpur@gmail.com</p>
          <p><b>Phone:</b> 02933-255030, 9413592614, 9694994586, 9680675153</p>
        </div>
        <div className="footer-external">
          <a href="http://nchm.gov.in/" target="_blank" rel="noopener noreferrer">NCHMCT</a> |
          <a href="https://tourism.gov.in/" target="_blank" rel="noopener noreferrer">Ministry of Tourism</a> |
          <a href="http://www.thims.gov.in/" target="_blank" rel="noopener noreferrer">THIMS Login</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
