import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';
import FoodProduction from '../../assets/pdfs/Diploma-Food-Production.pdf';
import FoodBeverageService from '../../assets/pdfs/Diploma-Food-Beverage-Service.pdf';
import FrontOffice from '../../assets/pdfs/Diploma-Front-Office-Operations.pdf';
import FeeStructure from '../../assets/pdfs/Fee structure 2025-26.pdf';
import AntiRagging from '../../assets/pdfs/NCHM-Anti-Ragging-Regulations.pdf'; 
import AdmissionForm from '../../assets/pdfs/Admission_Form.pdf';
import MedicalFitnessCertificate from '../../assets/pdfs/Medical Fitness Certificate.pdf';
import logo from '../../assets/images/fci_logo_cropped.ico';
import rightLogo from '../../assets/images/right_image.jpg';


const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubMenu = (key) => setExpandedMenus(prev => ({ ...prev, [key]: !prev[key] }));

  // Close menu when any link clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
    setExpandedMenus({});
  };

  return (
    <nav className="mobile-navbar">

      <div className="header-top">
        <img src={logo} alt="FCI Logo" className="header-logo" />
        <div>
          <p><Link to="/home" className="brand-name" onClick={handleLinkClick}>FOOD CRAFT INSTITUTE, SUMERPUR</Link></p>
          <p className="brand-name-caption">(Department of Tourism, Govt of Rajasthan)</p>
        </div>
        <img src={rightLogo} alt="Right Logo" className="header-logo" />

        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <ul className="mobile-navbar-menu">

          <li><Link to="/home" className="mobile-nav-link" onClick={handleLinkClick}>Home</Link></li>

          <li>
            <div className="mobile-nav-parent" onClick={() => toggleSubMenu('about')}>
              About Us
              <span className="mobile-icon">{expandedMenus['about'] ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
            </div>
            {expandedMenus['about'] && (
              <ul className="mobile-submenu">
                <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
                <li><Link to="/principalMessage" onClick={handleLinkClick}>Principal Message</Link></li>
                <li><Link to="/whyUs" onClick={handleLinkClick}>Why Us</Link></li>
                <li><Link to="/overviewHistory" onClick={handleLinkClick}>Overview & History</Link></li>
                <li><Link to="/VisionObjective" onClick={handleLinkClick}>Vision & Objective</Link></li>
                <li><Link to="/ourStaff" onClick={handleLinkClick}>Our Staff</Link></li>
              </ul>
            )}
          </li>

          <li>
            <div className="mobile-nav-parent" onClick={() => toggleSubMenu('student')}>
              Student Section
              <span className="mobile-icon">{expandedMenus['student'] ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
            </div>
            {expandedMenus['student'] && (
              <ul className="mobile-submenu">

                <li>
                  <div className="mobile-nav-parent" onClick={() => toggleSubMenu('syllabus')}>
                    Syllabus
                    <span className="mobile-icon">{expandedMenus['syllabus'] ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
                  </div>
                  {expandedMenus['syllabus'] && (
                    <ul className="mobile-submenu">
                      <li>
                        <a href={FoodProduction} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Diploma in Food Production</a>
                      </li>
                      <li>
                        <a href={FoodBeverageService} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Diploma in Food and Beverage Service</a>
                      </li>
                      <li>
                        <a href={FrontOffice} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Diploma in Front Office</a>
                      </li>
                    </ul>
                  )}
                </li>

                <li><a href={FeeStructure} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Fee Structure</a></li>
                <li><Link to="/general-rules" onClick={handleLinkClick}>General Rules</Link></li>
                <li><a href={AntiRagging} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Anti Ragging Regulations</a></li>

              </ul>
            )}
          </li>

          <li>
            <div className="mobile-nav-parent" onClick={() => toggleSubMenu('admissions')}>
              Admissions
              <span className="mobile-icon">{expandedMenus['admissions'] ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
            </div>
            {expandedMenus['admissions'] && (
              <ul className="mobile-submenu">
                <li><a href={FeeStructure} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Fee Structure</a></li>
                <li><a href={AdmissionForm} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Admission Form</a></li>
                <li><a href={MedicalFitnessCertificate} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Medical Fitness Certificate</a></li>
              </ul>
            )}
          </li>

          <li>
            <div className="mobile-nav-parent" onClick={() => toggleSubMenu('courses')}>
              Courses
              <span className="mobile-icon">{expandedMenus['courses'] ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
            </div>
            {expandedMenus['courses'] && (
              <ul className="mobile-submenu">
                <li><Link to="/diploma/FoodProduction" onClick={handleLinkClick}>Diploma in Food Production</Link></li>
                <li><Link to="/diploma/FoodBeverageService" onClick={handleLinkClick}>Diploma in Food & Beverage Service</Link></li>
                <li><Link to="/diploma/FrontOffice" onClick={handleLinkClick}>Diploma in Front Office</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="mobile-nav-link" onClick={handleLinkClick}>Contact</Link></li>

        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
