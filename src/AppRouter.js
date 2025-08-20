import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/AboutUs/js/AboutUs';
import PrincipalMessage from './pages/AboutUs/js/PrincipalMessage';
import WhyUs from './pages/AboutUs/js/WhyUs';
import OverviewHistory from './pages/AboutUs/js/OverviewHistory';
import VisionObjective from './pages/AboutUs/js/Vision&Objective';
import OurStaff from './pages/AboutUs/js/OurStaff';
import GeneralRules  from './pages/StudentSection/js/GeneralRules';
import CoursesPage from './pages/Courses/js/AllCourses';
import ContactPage from './pages/ContactPage';
import Gallery from './pages/Gallery';
import Diploma from './pages/Courses/Diploma';
import FoodProduction from './pages/Courses/js/FoodProduction';
import FoodBeverageService from './pages/Courses/js/FoodBeverageService';
import FrontOffice from './pages/Courses/js/FrontOffice';
import SkillDevelopment from './pages/Courses/js/SkillDevelopment';
import AdmissionButton  from './components/AdmissionButton';
import WhatsappIcon from './components/WhatsAppIcon';


function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/admissions" element={<AdmissionButton />} />
        <Route path="/principalMessage" element={<PrincipalMessage />} />
        <Route path="/whyUs" element={<WhyUs/>}/>
        <Route path='/overviewHistory' element={<OverviewHistory />} />
        <Route path="/visionObjective" element={<VisionObjective />} />
        <Route path="/ourStaff" element={<OurStaff />} /> {/* Done till now*/}
        <Route path="/general-rules" element={<GeneralRules />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/courses/diploma" element={<Diploma />} />
        <Route path="/diploma/FoodProduction" element={<FoodProduction />} />
        <Route path="/diploma/FoodBeverageService" element={<FoodBeverageService />} />
        <Route path="/diploma/FrontOffice" element={<FrontOffice />} />
        <Route path="/courses/skill-development" element={<SkillDevelopment />} />        
      </Routes>
      <WhatsappIcon />
      <Footer />
    </Router>
  );
}

export default AppRouter;
