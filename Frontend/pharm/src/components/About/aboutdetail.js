import React from "react";
import "./aboutdetail.css";


const AboutDetail = () => {
  return (
    <div className="about-d-container">
      <div className="a-d-image-section">
        <img src='/images/aboutdetail.png' alt="Doctor" />
      </div>
      <div className="a-d-text-section">
        <h4 className="welcome-text">WELCOME TO KITECARE</h4>
        <h2 className="a-d-title">Best Care for Your Good Health</h2>
        <div className="a-d-features">
          <div className="a-d-feature-list">
            <ul>
              <li>A Passion for Healing</li>
              <li>All our best</li>
              <li> Always Caring</li>
            </ul>
          </div>
          <div className="a-d-feature-list">
            <ul>
              <li> 5-Star Care</li>
              <li> Believe in Us</li>
              <li> A Legacy of Excellence</li>
            </ul>
          </div>
        </div>
        <p className="a-d-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Quisque placerat
          scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
          Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
        </p>
        <p className="a-d-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque. Convallis felis vitae tortor augue. Velit
          nascetur proin massa in.
        </p>
      </div>
    </div>
  );
};

export default AboutDetail;