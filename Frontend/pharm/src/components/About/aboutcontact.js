import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "./aboutcontact.css";

const AboutContact = () => {
  return (
    <div className="a-contact-container">
      <h2 className="a-contact-title">Contact</h2>
      <p className="a-contact-subtitle">GET IN TOUCH</p>
      <div className="a-contact-grid">
        <div className="a-contact-box">
          <FaPhoneAlt className="a-contact-icon" />
          <h3 className="a-contact-heading">EMERGENCY</h3>
          <p className="a-contact-text">(237) 681-812-255</p>
          <p className="a-contact-text">(237) 666-331-894</p>
        </div>
        <div className="a-contact-box active">
          <FaMapMarkerAlt className="a-contact-icon" />
          <h3 className="a-contact-heading-l">LOCATION</h3>
          <p className="a-contact-text-t">0123 Some place</p>
          <p className="a-contact-text-t">9876 Some country</p>
        </div>
        <div className="a-contact-box">
          <FaEnvelope className="a-contact-icon" />
          <h3 className="a-contact-heading">EMAIL</h3>
          <p className="a-contact-text">fildineesoe@gmail.com</p>
          <p className="a-contact-text">myebustudios@gmail.com</p>
        </div>
        <div className="a-contact-box">
          <FaClock className="a-contact-icon" />
          <h3 className="a-contact-heading">WORKING HOURS</h3>
          <p className="a-contact-text">Mon-Sat 09:00-20:00</p>
          <p className="a-contact-text">Sunday Emergency only</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
