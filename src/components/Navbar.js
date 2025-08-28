import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import FoodProduction from '../assets/pdfs/Diploma-Food-Production.pdf';
import FoodBeverageService from '../assets/pdfs/Diploma-Food-Beverage-Service.pdf';
import FrontOffice from '../assets/pdfs/Diploma-Front-Office-Operations.pdf';
import FeeStructure from '../assets/pdfs/Fee structure 2025-26.pdf';
import AntiRagging from '../assets/pdfs/NCHM-Anti-Ragging-Regulations.pdf'; 
import AdmissionForm from '../assets/pdfs/Admission_Form.pdf';
import MedicalFitnessCertificate from '../assets/pdfs/Medical Fitness Certificate.pdf';

import logo from '../assets/images/fci_logo_cropped.ico';
import rightLogo from '../assets/images/right_image.jpg'; // <--- Your second logo

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (name) => setOpenDropdown(name);
  const closeDropdown = () => setOpenDropdown(null);

  return (
    <div className="navbar-container">
      {/* TOP HEADER */}
      <div className="header-top">
        <img src={logo} alt="FCI Logo" className="header-logo" />
        <div>
          <Link to="/home" className="brand-name">FOOD CRAFT INSTITUTE, SUMERPUR</Link>
          <p class = "brand-name-caption">(Department of Tourism, Govt. of Rajasthan)</p>
        </div>
        
        <img src={rightLogo} alt="Right Logo" className="header-logo" />
      </div>

      {/* NAVBAR MENU */}
      <nav className="navbar-menu">
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>

          {/* ABOUT US */}
          <li className="dropdown" onMouseEnter={() => handleDropdown('about')} onMouseLeave={closeDropdown}>
            <span>About Us ▾</span>
            {openDropdown === 'about' && (
              <ul className="dropdown-menu">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/principalMessage">Principal Message</Link></li>
                <li><Link to="/whyUs">Why Us</Link></li>
                <li><Link to="/overviewHistory">Overview & History</Link></li>
                <li><Link to="/VisionObjective">Vision & Objective</Link></li>
                <li><Link to="/ourStaff">Our Staff</Link></li>
              </ul>
            )}
          </li>

          {/* STUDENT SECTION */}
          <li className="dropdown" onMouseEnter={() => handleDropdown('student')} onMouseLeave={() => {
              if (openDropdown !== 'syllabus') closeDropdown();
            }}>
            <span>Student Section ▾</span>
            {(openDropdown === 'student' || openDropdown === 'syllabus') && (
              <ul className="dropdown-menu">
                <li className="dropdown"
                  onMouseEnter={() => handleDropdown('syllabus')}
                  onMouseLeave={() => handleDropdown('student')}
                >
                  <span style={{color: '#14375a'}}>Syllabus ▾</span>
                  {openDropdown === 'syllabus' && (
                    <ul className="dropdown-menu">
                      <li><a href={FoodProduction} target="_blank" rel="noopener noreferrer">Diploma in Food Production</a></li>
                      <li><a href={FoodBeverageService} target="_blank" rel="noopener noreferrer">Diploma in Food and Beverage Service</a></li>
                      <li><a href={FrontOffice} target="_blank" rel="noopener noreferrer">Diploma in Front Office</a></li>
                    </ul>
                  )}
                </li>
                <li><a href={FeeStructure} target="_blank" rel="noopener noreferrer">Fee Structure</a></li>
                <li><Link to="/general-rules">General Rules</Link></li>
                <li><a href={AntiRagging} target="_blank" rel="noopener noreferrer">Anti Ragging Regulations</a></li>
              </ul>
            )}
          </li>

          {/* ADMISSIONS */}
          <li className="dropdown" onMouseEnter={() => handleDropdown('admissions')} onMouseLeave={closeDropdown}>
            <span>Admissions ▾</span>
            {openDropdown === 'admissions' && (
              <ul className="dropdown-menu">
                <li><a href={FeeStructure} target="_blank" rel="noopener noreferrer">Fee Structure</a></li>
                <li><a href={AdmissionForm} target="_blank" rel="noopener noreferrer">Admission Form</a></li>
                <li><a href={MedicalFitnessCertificate} target="_blank" rel="noopener noreferrer">Medical Fitness Certificate</a></li>
              </ul>
            )}
          </li>

          {/* COURSES */}
          <li className="dropdown" onMouseEnter={() => handleDropdown('courses')} onMouseLeave={closeDropdown}>
            <span>Courses ▾</span>
            {openDropdown === 'courses' && (
              <ul className="dropdown-menu">
                <li><Link to="/diploma/FoodProduction">Diploma in Food Production</Link></li>
                <li><Link to="/diploma/FoodBeverageService">Diploma in Food & Beverage Service</Link></li>
                <li><Link to="/diploma/FrontOffice">Diploma in Front Office</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
