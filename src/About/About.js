import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <p className="about-description">
            I am a passionate and results-driven Full-Stack Developer with over three years of professional experience in delivering high-performance web applications and seamless user experiences. My expertise lies in integrating robust backend solutions with dynamic and responsive frontend interfaces, utilizing a diverse stack of technologies such as <strong>C#</strong>, <strong>Java</strong>, <strong>React.js</strong>, <strong>TypeScript</strong>, and <strong>JavaScript</strong>.
          </p>
          <p className="about-description">
            Currently, I work as a <strong>Systems Engineer</strong> at <strong>Tata Consultancy Services</strong>, where I excel in developing scalable solutions, resolving complex system issues, and ensuring global user satisfaction. Previously, at <strong>Infosys</strong>, I contributed to optimizing web application performance, streamlining processes, and enhancing user-centric features for leading clients.
          </p>
          <div className="key-highlights">
            <h3 className="highlights-title">Key Highlights</h3>
            <ul className="highlights-list">
              <li>
                Developed and optimized full-stack applications, integrating <strong>C#</strong> and <strong>Java</strong> backends with <strong>React.js</strong> and <strong>TypeScript</strong> frontends.
              </li>
              <li>
                Designed and implemented over <strong>10+ core features</strong> across projects while reducing bug reports by <strong>15%</strong> and improving processing times by <strong>20%</strong>.
              </li>
              <li>
                Delivered critical solutions, including multi-language support and performance optimizations, leading to a <strong>30% improvement</strong> in monitoring efficiency and a <strong>25% boost</strong> in user satisfaction.
              </li>
            </ul>
          </div>
          <p className="about-description">
            I am also pursuing an <strong>M.Sc. in Information Systems</strong> from <strong>BITS Pilani (WILP)</strong> to further enhance my technical foundation. My academic background in <strong>Computer Science</strong> has always fueled my enthusiasm for solving challenging problems with innovative solutions.
          </p>
          <p className="about-description">
            Let’s connect and collaborate to create cutting-edge solutions that drive business success and deliver exceptional user experiences!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;