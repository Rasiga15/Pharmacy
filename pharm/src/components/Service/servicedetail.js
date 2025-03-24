import React from "react";
import "./servicedetail.css";

const services = [
  {
    title: "Free Health Checkup",
    description:
      "Get a free basic health checkup, including blood pressure and sugar level tests.",
    image: "/images/servicedetail.png",
    isHighlighted: true,
  },
  {
    title: "24/7 Medicine Availability",
    description:
      "We ensure essential medicines are available around the clock for emergencies.",
    image: "/images/servicedetail.png",
    isHighlighted: false,
  },
  {
    title: "Home Delivery",
    description:
      "Order your medicines online and get them delivered to your doorstep.",
    image: "/images/servicedetail.png",
    isHighlighted: false,
  },
  {
    title: "Doctor Consultation",
    description:
      "Book an appointment with our expert doctors for personalized guidance.",
    image: "/images/servicedetail.png",
    isHighlighted: false,
  },
  {
    title: "Vaccination Services",
    description:
      "We offer flu shots, COVID-19 vaccines, and other essential vaccinations.",
    image: "/images/servicedetail.png",
    isHighlighted: false,
  },
  {
    title: "Lab Test Assistance",
    description:
      "Get assistance for lab tests like blood tests, urine tests, and more at our pharmacy.",
    image: "/images/servicedetail.png",
    isHighlighted: false,
  },
];

const ServiceCard = ({ title, description, image, isHighlighted }) => {
  return (
    <div className="service-card">
      <div className="service-image-container">
        <img src={image} alt={title} />
        {isHighlighted && (
          <div className="service-overlay">
            <span className="plus-icon">+</span>
          </div>
        )}
      </div>
      <div className='service-card-detail'>
      <h3 className="s-c-h3">{title}</h3>
      <p className="s-c-p">{description}</p>
      <a href="#" className="s-learn-more">
        Learn More <span className="s-c-arrow">→</span>
      </a>
      <div className="floating-icon">+</div>
      </div>
    </div>
  );
};

const ServiceList = () => {
  return (
    <div className="service-list">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServiceList;
