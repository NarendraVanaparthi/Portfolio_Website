import React from "react";
import { Fade } from "react-awesome-reveal";
import "./TechnicalSkills.css";

// Skill data with logo URLs
const skills = [
  { name: "SQL", logo: "https://img.icons8.com/color/48/000000/sql.png" },
  { name: "Java", logo: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" },
  { name: "Python", logo: "https://img.icons8.com/color/48/000000/python.png" },
  { name: "C#", logo: "https://img.icons8.com/color/48/000000/c-sharp-logo.png" },
  { name: "Data Structures", logo: "https://img.icons8.com/ios/50/000000/data-configuration.png" },
  { name: "Algorithms", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103793.png" },
  { name: "HTML", logo: "https://img.icons8.com/color/48/000000/html-5.png" },
  { name: "CSS", logo: "https://img.icons8.com/color/48/000000/css3.png" },
  { name: "Bootstrap", logo: "https://img.icons8.com/color/48/000000/bootstrap.png" },
  { name: "JavaScript", logo: "https://img.icons8.com/color/48/000000/javascript.png" },
  { name: "TypeScript", logo: "https://img.icons8.com/color/48/000000/typescript.png" },
  { name: "jQuery", logo: "https://img.icons8.com/ios-filled/50/000000/jquery.png" },
  { name: "Node.js", logo: "https://img.icons8.com/color/48/000000/nodejs.png" },
  { name: "React.js", logo: "https://img.icons8.com/color/48/000000/react-native.png" },
  { name: "Eclipse IDE", logo: "https://img.icons8.com/color/48/000000/eclipse.png" },
  { name: "PyCharm", logo: "https://img.icons8.com/color/48/000000/pycharm.png" },
  { name: "GIT", logo: "https://img.icons8.com/color/48/000000/git.png" },
  { name: "Visual Studio Code", logo: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" },
  { name: "JIRA", logo: "https://img.icons8.com/color/48/000000/jira.png" },
  { name: "Postman", logo: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png" },
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="technical-skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Fade key={index} direction="up">
            <div className="skill-box">
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <span className="skill-name">{skill.name}</span>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;