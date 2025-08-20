
import React from 'react';
import '../css/AboutUs.css';

function About() {
  return (
    <section className="about" id="about">
      <h2>Brief Note of Food Craft Institute, Sumerpur (Pali)</h2>
      <h3>About the Institute:</h3>
      <p>Food Craft Institute, Sumerpur is an institute under Department of Tourism, Govt. of Rajasthan, set up with the objective to provide training in all the Craft and skills, both theoretical and practical, and necessary organizational and management techniques required for the efficient functioning of Hotel and Catering establishments. Food Craft Institute was established on 7th Feb 2012, where after it was formally inaugurated on April 23rd 2018.</p>
      <h3>Courses:</h3>
      <p>The institute is affiliated to National Council for Hotel Management and Catering Technology, Noida, MOT, Govt. of India and runs the following courses:</p>
      <table style={{width:'100%',borderCollapse:'collapse',marginBottom:'1rem'}} border="1">
        <thead>
          <tr style={{background:'#f5f5f5'}}>
            <th>S. No.</th>
            <th>Courses</th>
            <th>Duration</th>
            <th>Intake Seats</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Diploma in Food Production</td><td>1-1/2 years</td><td>30</td></tr>
          <tr><td>2</td><td>Diploma in Food and Beverage Service</td><td>1-1/2 years</td><td>30</td></tr>
          <tr><td>3</td><td>Diploma in Front Office</td><td>1-1/2 years</td><td>30</td></tr>
        </tbody>
      </table>
      <p>The institute additionally runs Skill Development Programs sponsored by Central Govt. such as Skill Testing Certification Course, Hunar Se Rozgar Tak Programme (Multi-cuisine cook), Hunar Se Rozgar Tak Programme (F&B Steward).</p>
      <h3>Training Infrastructure at Institute:</h3>
      <p>The Institute is equipped with the following infrastructure to provide quality training in the field of Hospitality:- Basic and Quantity Training Kitchens, Training Restaurant, Larder, Front Office Lab, Mock Bar, Library, Computer Lab, and 3 furnished classrooms with projector.</p>
    </section>
  );
}

export default About;
