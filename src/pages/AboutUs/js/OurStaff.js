import React from "react";
import "../css/OurStaff.css";

import BHAGWAT from "../../../assets/staff/Bhagwat Singh.webp";
import YUVRAJ from "../../../assets/staff/Yuvraj.webp";
import RINA from "../../../assets/staff/Rina Gour.webp";
import ALPESH from "../../../assets/staff/Alpesh Kumar.webp";
import BHARAT from "../../../assets/staff/Bharat Kumar.webp";

const staffMembers = [
  {
    name: "BHAGWAT SINGH DEORA",
    role: "Assistant Lecturer",
    qualification: "3 Year Diploma in Hotel Management",
    experience: "30+ years",
    image: BHAGWAT
  },
  {
    name: "YUVRAJ SINGH PADIYAR",
    role: "Assistant Lecturer",
    qualification: "B. Sc in (H&HA), M. Sc",
    experience: "12+ years",
    image: YUVRAJ
  },
  {
    name: "RINA GAUR",
    role: "Guest Faculty",
    qualification: "B.Com, M.Com, B.Ed",
    experience: "5+ years",
    image: RINA
  },
  {
    name: "ALPESH KUMAR",
    role: "Accountant",
    qualification: "BA, PGDCA, RSCIT",
    experience: "10+ years",
    image: ALPESH
  },
  {
    name: "BHARAT KUMAR MEENA",
    role: "LDC",
    qualification: "BCA, M.Sc. (Computer)",
    experience: "10+ years",
    image: BHARAT
  }
];

export default function OurStaff() {
  return (
    <div className="our-staff-container">
      <h1 className="page-title">Meet Our Staff</h1>
      <p className="page-subtitle">
        A team of highly qualified professionals dedicated to shaping future hospitality leaders.
      </p>
      <div className="staff-grid">
        {staffMembers.map((member, index) => (
          <div className="staff-card" key={index}>
            <div className="staff-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="staff-info">
              <h2>{member.name}</h2>
              <p className="role">{member.role}</p>
              <p className="qualification">{member.qualification}</p>
              <p className="experience">Experience: {member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
