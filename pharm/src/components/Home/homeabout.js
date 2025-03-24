import React from "react";
import "./homeabout.css";

const HomeAbout = () => {
  return (
    <>
  
      <section className="about-section">
        <div className="about-container">
          <div className="a-image-container">
            <img
              src="/images/homeabout1.png"
              alt="Happy couple"
              className="about-image"
            />
          
          </div>
          <div className="a-content">
            <h4>ABOUT EVE PHARMACY</h4>
            <h2>Supercharge Your Health</h2>
            <p>
              Adjacent to the Eden Health Center, Eve's Pharmacy brings you the best in 
              medicines and healthcare products at an accessible location - with a wide range 
              of choices including products made right here in Qatar!
            </p>
            <p>
              When you shop at Eve Pharmacy, you can trust in our quality - we apply the highest 
              levels of quality checks on all our medical and non-medical products. Visit our 
              pharmacy today for all healthcare needs!
            </p>
            <p className="about-c-p">
              We offer choice, reliability, and value. That’s what makes us better.
            </p>
            <button className="about-btn">ABOUT US</button>
          </div>
        </div>
      </section>

      {/* Special Service Section */}
      <section className="special-service">
        <div className="service-container">
          <div className="service-text">
            <h4>SPECIAL SERVICE</h4>
            <h2>Feel Better Or Your Money Back</h2>
            <p >
              With our commitment to providing safe and effective medical and healthcare
              products, you can rest assured when you buy from Eve Pharmacy.
            </p>
            <p className="e-b">
              <strong>A full 60 days money-back guarantee, no questions asked.</strong>
            </p>
            <button className="explore-btn">EXPLORE NOW</button>
          </div>
          <div className="service-image-container">
           
            <img
              src="/images/homeabout2.png"
              alt="Doctor"
              className="doctor-image"
            />
          </div>
        </div>
      </section>

    
      <section className="offer-section">
        <div className="offer-container">
         
          <div className="offer-image-container">
            <div className="offer-bg-shape"></div>
            <img
              src="/images/homeabout3.png"
              alt="Probiotics Bottle"
              className="offer-image"
            />
          </div>

       
          <div className="offer-content">
            <h5 className="offer-subtitle">BEST OFFERS</h5>
            <h2 className="offer-title">Start Feeling Better</h2>
            <p className="offer-description">
              Don’t wait – get the right medicine at the right time. Our shelves are stocked
              and ready to fulfill your needs so that you can start feeling better today!
            </p>
            <button className="offer-btn">BUY NOW</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
