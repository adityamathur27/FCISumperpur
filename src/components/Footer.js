import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Info & Socials */}
        <div className="footer-col footer-info-col">
          <h3>FCI Sumerpur</h3>
          <p className="footer-desc">
            Food Craft Institute, Sumerpur is a premier hospitality training institution established by the Department of Tourism, Government of Rajasthan.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/fci.sumerpur/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/fcisumerpur" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@fcisumerpur1837" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links-list">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Institute</Link></li>
            <li><Link to="/courses">Courses Offered</Link></li>
            <li><Link to="/gallery">Photo Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Portals */}
        <div className="footer-col footer-contact-col">
          <h3>Contact Info</h3>
          <div className="contact-info-item">
            <FaMapMarkerAlt className="contact-info-icon" />
            <span>Opp. 132 KV GSS, National Highway Bypass, Jakha Nagar, Sumerpur, Pali, Rajasthan - 306902</span>
          </div>
          <div className="contact-info-item">
            <FaEnvelope className="contact-info-icon" />
            <a href="mailto:fcisumerpur@gmail.com">fcisumerpur@gmail.com</a>
          </div>
          <div className="contact-info-item">
            <FaPhone className="contact-info-icon" />
            <span>02933-255030, +91 9413592614</span>
          </div>

          <div className="footer-portals">
            <h4>Important Portals</h4>
            <div className="portal-links">
              <a href="http://nchm.gov.in/" target="_blank" rel="noopener noreferrer">NCHMCT</a>
              <a href="https://tourism.gov.in/" target="_blank" rel="noopener noreferrer">Ministry of Tourism</a>
              <a href="http://www.thims.gov.in/" target="_blank" rel="noopener noreferrer">THIMS Login</a>
            </div>
          </div>
        </div>

        {/* Column 4: Maps Embed */}
        <div className="footer-col footer-map-col">
          <h3>Locate Us</h3>
          <div className="footer-map-wrapper">
            <iframe
              title="Food Craft Institute Sumerpur Map"
              src="https://maps.google.com/maps?q=Food%20Craft%20Institute%20Sumerpur%20Pali%20Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="160"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Food Craft Institute Sumerpur. All Rights Reserved.</p>
          <p className="gov-tag">A Government of Rajasthan Initiative | Affiliated to NCHMCT</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
