import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS for animations

const Contact = () => {
  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animations happen only once
    });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Get in Touch
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Feel free to reach out to me for collaborations, opportunities, or just a friendly chat!
        </p>

        <div className="contact-info">
          {/* LinkedIn */}
          <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
            <a
              href="https://www.linkedin.com/in/narendravanaparthi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact-icon" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* GitHub */}
          <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
            <a
              href="https://github.com/NarendraVanaparthi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="contact-icon" />
              <span>GitHub</span>
            </a>
          </div>

          {/* LeetCode */}
          <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
            <a
              href="https://leetcode.com/u/narendra__vanaparthi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="contact-icon" />
              <span>LeetCode</span>
            </a>
          </div>

          {/* YouTube */}
          <div className="contact-item" data-aos="fade-up" data-aos-delay="500">
            <a
              href="https://www.youtube.com/@bapatlabullodu9072"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="contact-icon" />
              <span>YouTube</span>
            </a>
          </div>

          {/* Gmail */}
          <div className="contact-item" data-aos="fade-up" data-aos-delay="600">
            <a href="mailto:narendravanaparthi23@gmail.com">
              <FaEnvelope className="contact-icon" />
              <span>Gmail</span>
            </a>
          </div>

          {/* Mobile Number */}
          <div className="contact-item" data-aos="fade-up" data-aos-delay="700">
            <a href="tel:+919133811795">
              <FaPhone className="contact-icon" />
              <span>+91 9133811795</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;