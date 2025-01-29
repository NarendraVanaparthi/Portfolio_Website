import React, { useEffect } from "react";
import { FaLaptopCode, FaUserTie, FaCogs, FaChartLine } from "react-icons/fa";
import "./Experience.css"; // Create this CSS file for styling

const Experience = () => {
  const experiences = [
    {
      company: "Tata Consultancy Services",
      role: "System Engineer",
      duration: "Sep 2024 - Present · 5 mos",
      location: "Hyderabad, Telangana, India · On-site",
      icon: <FaLaptopCode className="experience-icon" />,
      responsibilities: [
        "Full-Stack Development: Worked as a full-stack developer for Microsoft, integrating C# (backend) with TypeScript and React.js (frontend), enhancing performance and ensuring seamless functionality across both layers.",
        "ICM Monitoring & Solutions: Monitored multiple Interactive Configuration Models (ICM) and provided solutions to customers, improving system performance and real-time monitoring by 30%.",
        "Multi-Language Support & Issue Resolution: Resolved a critical language update issue in D365 Sales, ensuring seamless product addition across 50+ languages and improving the user experience globally.",
      ],
    },
    {
      company: "Infosys",
      role: "Senior Systems Associate",
      duration: "Apr 2023 - Apr 2024 · 1 yr 1 mo",
      location: "Hyderabad, Telangana, India · On-site",
      icon: <FaUserTie className="experience-icon" />,
      responsibilities: [
        "Full-Stack Development: Worked as a full-stack developer, integrating Java (backend) with JavaScript and React.js (frontend), optimizing web application performance and ensuring seamless functionality across both layers.",
        "Optimized Web Application: Streamlined field trial processing and report generation, cutting processing time by 20%.",
        "Feature Development & Documentation: Developed 10+ core features per project specifications, ensuring compliance with industry standards and reducing bug reports by 15%.",
        "Performance Optimization & UX: Enhanced application performance by 25% through React best practices, including code splitting and lazy loading, while boosting user satisfaction by incorporating 30+ user feedback improvements.",
      ],
    },
    {
      company: "Infosys",
      role: "Systems Associate",
      duration: "Jan 2023 - Mar 2023 · 3 mos",
      location: "Hyderabad, Telangana, India · On-site",
      icon: <FaCogs className="experience-icon" />,
      responsibilities: [
        "Backend Development: Developed and maintained microservices using Java and Spring Boot, ensuring efficient API integration and scalability for enterprise applications.",
        "Feature Implementation: Delivered 5+ backend features within tight deadlines, enhancing system functionality and aligning with client requirements.",
        "Code Optimization: Improved service response times by 15% through code refactoring and performance tuning, adhering to best practices in Spring Boot.",
      ],
    },
    {
      company: "Infosys",
      role: "Operations Executive",
      duration: "Nov 2021 - Dec 2022 · 1 yr 2 mos",
      location: "Hyderabad, Telangana, India · On-site",
      icon: <FaChartLine className="experience-icon" />,
      responsibilities: [
        "Monitored 100% of transaction payloads in SAP PI/PO and SAP CPI systems for Harley-Davidson, ensuring seamless data flow and preventing disruptions in critical operations.",
        "Collaborated directly with clients to report and resolve system failures, improving transaction reliability by 25% and enhancing operational efficiency.",
        "Identified and resolved high-priority integration issues, saving over 95% of failed transactions and maintaining real-time system performance through proactive monitoring.",
      ],
    },
    {
      company: "Infosys",
      role: "Operations Executive Trainee",
      duration: "Jun 2021 - Oct 2022 · 5 mos",
      location: "Hyderabad, Telangana, India · Hybrid",
      icon: <FaLaptopCode className="experience-icon" />,
      responsibilities: [
        "Robust grasp of Full-Stack Development: Successfully completed Infosys stream training program, mastering fundamental full-stack development technologies such as SQL, Java, Spring Boot, HTML5, CSS3, Bootstrap, JavaScript and React.",
        "Adaptable and Rapid Learner: Proven capability to swiftly grasp and implement new technologies, evidenced by successful completion of the Infosys stream training program.",
        "Prepared to Contribute to Web Development Projects: Armed with a comprehensive skill set acquired from Infosys stream training, poised to make meaningful contributions to web development projects encompassing both front-end and back-end domains.",
      ],
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".experience-card");
    const timeline = document.querySelector(".timeline-line");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title-experience">Experience</h2>
      <div className="timeline">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="experience-card">
              <div className="experience-header">
                {exp.icon}
                <div className="experience-info">
                  <h3>{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                  <p className="location">{exp.location}</p>
                </div>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;