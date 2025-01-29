import React from "react";
import "./Education.css";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title-education">Education</h2>
      <div className="education-container">
        {/* BITS Pilani */}
        <div className="education-card">
          <div className="education-icon">
            <FaUniversity className="icon" />
          </div>
          <div className="education-details">
            <h3>BITS Pilani | WILP</h3>
            <p>M.Sc in Information Systems</p>
            <p>Currently Pursuing | Hyderabad</p>
          </div>
        </div>

        {/* Acharya Nagarjuna University */}
        <div className="education-card">
          <div className="education-icon">
            <FaGraduationCap className="icon" />
          </div>
          <div className="education-details">
            <h3>Acharya Nagarjuna University</h3>
            <p>B.Sc in Computer Science</p>
            <p>April 2020 | Bapatla</p>
            <p>Percentage: 85%</p>
          </div>
        </div>

        {/* The Bapatla College of Arts and Sciences */}
        <div className="education-card">
          <div className="education-icon">
            <FaSchool className="icon" />
          </div>
          <div className="education-details">
            <h3>The Bapatla College of Arts and Sciences</h3>
            <p>Intermediate | BIEAP</p>
            <p>April 2017 | Bapatla</p>
            <p>CGPA: 901/1000</p>
          </div>
        </div>

        {/* Municipal High School */}
        <div className="education-card">
          <div className="education-icon">
            <FaSchool className="icon" />
          </div>
          <div className="education-details">
            <h3>Municipal High School</h3>
            <p>SSC | BSEAP</p>
            <p>April 2015 | Bapatla</p>
            <p>CGPA: 9.0/10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;