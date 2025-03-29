import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 
import "./footer.css"; 
import { HiArrowNarrowRight } from "react-icons/hi"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>
            Kite<span>Care</span>
          </h2>
          <p>
            This free App provides a solution to your health needs by offering you a one-stop
            access to complete information about various medical checkups. This App carries simple
            tips and advice to help you maintain a healthy lifestyle.
          </p>
          <div className="emergency">
            <span className="emergency-text">
              Emergency <HiArrowNarrowRight className="arrow-icon" />
            </span>
            <a href="tel:+919876543210" className="call-btn">
              Call Us +91 9876543210
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Overview</h3>
            <ul>
              <li>Checking Health</li>
              <li>Find Doctor</li>
              <li>Make a Schedule</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Social Media</h3>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;