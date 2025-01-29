import React, { useState, useEffect } from "react";
import profileImage from "../Images/profile.PNG"; // Ensure the path is correct
import "./ImageSection.css";

const ImageSection = ({ darkMode }) => {
  const [isEngineer, setIsEngineer] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Toggle between "Engineer" and "Developer" every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsEngineer((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! I'll contact you soon.`);
    setFormData({ name: "", email: "", phone: "" });
    setShowForm(false);
  };

  // Animated text component
  const AnimatedText = ({ text }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Speed of letter-by-letter animation
      return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
  };

  return (
    <section id="image-section" className={`image-section ${darkMode ? "dark-mode" : ""}`}>
      {/* Left Side - Text Content */}
      <div className="text-content">
        <p className="hi-there">Hi there, I'm</p>
        <h1 className="name">Narendra Vanaparthi</h1>
        <div className="separator"></div>
        <p className="role">
          Software{" "}
          <span className="role-animation">
            {isEngineer ? (
              <AnimatedText text="Engineer!" />
            ) : (
              <AnimatedText text="Developer!" />
            )}
          </span>
        </p>
        <button className="contact-button" onClick={() => setShowForm(true)}>
          Contact Me
        </button>
      </div>

      {/* Right Side - Circular Image */}
      <div className="image-container">
        <img src={profileImage} alt="Narendra Vanaparthi" className="profile-image" />
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="form-modal">
          <div className="form-content">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Submit</button>
              <button
                type="button"
                className="close-button"
                onClick={() => setShowForm(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageSection;