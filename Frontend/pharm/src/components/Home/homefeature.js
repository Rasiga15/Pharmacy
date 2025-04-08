import React from "react";

import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { FiGift } from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";
import "./homefeature.css"; 

const features = [
  { icon: <TbTruckDelivery />, title: "Free Shipping", subtitle: "Order Over $600" },
  { icon: <HiOutlineCreditCard />, title: "Quick Payment", subtitle: "100% Secure" },
  { icon: <FiGift />, title: "Big Cashback", subtitle: "Over 50% Cashback" },
  { icon: <MdSupportAgent />, title: "24/7 Support", subtitle: "Ready for You" },
  ];


const HomeFeature = () => {
  return (
    <div className="feature-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-box">
          <span className="feature-icon">{feature.icon}</span>
          <div className="feature-text">
            <h3>{feature.title}</h3>
            <p>{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFeature;
