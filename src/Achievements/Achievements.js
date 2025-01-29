import React, { useEffect } from "react";
import "./Achievements.css";

const Achievements = () => {
  useEffect(() => {
    const handleScroll = () => {
      const achievements = document.querySelectorAll(".achievement-item");
      achievements.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;
        if (itemTop < window.innerHeight && itemBottom > 0) {
          item.classList.add("visible");
        } else {
          item.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const achievementsData = [
    {
      icon: "🏆",
      title: "Inspire Award",
      description:
        "Received the 'Inspire Award' from the Andhra Pradesh Government in 2015 for research on 'Formation of Secondary Colours.'",
    },
    {
      icon: "👥",
      title: "State Committee Member",
      description:
        "Served as an Andhra Pradesh State Committee Member of the Progressive Democratic Student Union (PDSU), advocating for student rights and addressing key issues faced by students.",
    },
    {
      icon: "🎭",
      title: "Stage Plays",
      description:
        "Performed in multiple stage plays as a member of the renowned Hyderabad acting club, MANCH, contributing to high-profile theatrical productions.",
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements</h2>
      <div className="achievements-container">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className="achievement-item"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="achievement-icon">{achievement.icon}</div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;