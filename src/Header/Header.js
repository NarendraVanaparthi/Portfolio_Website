import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  // Dark mode is enabled by default
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  // Toggle dark mode functionality
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode); // Add or remove dark-mode class on body
  };

  // Handle section click and smooth scroll
  const handleSectionClick = (section) => {
    setActiveSection(section);
    document.getElementById(section.toLowerCase()).scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to top and reset active section
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection(""); // Reset active section when scrolling to top
  };

  // Ensure dark mode is applied on page load
  useEffect(() => {
    document.body.classList.add("dark-mode"); // Set dark mode on page load
  }, []);

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "About",
    "Skills",
    "Experience",
    "Education",
    "Achievements",
    "Contact",
  ];

  return (
    <header className={darkMode ? "dark-mode" : ""}>
      <div className="header-container">
        <div className="tech-illustration" onClick={scrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
            <path
              d="M50 10L20 40V80H80V40L50 10ZM50 30L70 50V70H30V50L50 30Z"
              fill={darkMode ? "#ffffff" : "#000000"} // White in dark mode, black in light mode
            />
            <circle cx="50" cy="50" r="10" fill="#007bff" />
          </svg>
        </div>

        <nav className="nav-links">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={activeSection === item.toLowerCase() ? "active" : ""}
                  onClick={() => handleSectionClick(item.toLowerCase())}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? (
            <span role="img" aria-label="moon-icon" style={{ color: "white" }}>
              🌙
            </span>
          ) : (
            <span role="img" aria-label="sun-icon" style={{ color: "black" }}>
              ☀️
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
