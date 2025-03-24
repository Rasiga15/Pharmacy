import React, { useState } from "react";
import "./homehealth.css";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

const healthConditions = [
  { title: "PAIN", subtitle: "RELIEF", img: "/images/pain.png", className: "subtitle-relief" },
  { title: "HEART", subtitle: "HEALTH", img: "/images/heart.png", className: "subtitle-heart" },
  { title: "COUGH", subtitle: "& COLD", img: "/images/cough.png", className: "subtitle-cold" },
  { title: "DIABETES", subtitle: "CARE", img: "/images/diabetes.png", className: "subtitle-care" },
];

const categories = [
  { title: "BABY", subtitle: "CARE", img: "/images/baby.png", className: "subtitle-baby" },
  { title: "FITNESS &", subtitle: "WELLNESS", img: "/images/fitness.png", className: "subtitle-wellness" },
  { title: "FAMILY", subtitle: "CARE", img: "/images/family.png", className: "subtitle-family" },
  { title: "ALTERNATE", subtitle: "MEDICINES", img: "/images/alternate.png", className: "subtitle-medicines" },
];

const products = [
  { id: 1, name: "LACTOGEN 2 REFILL 400GM", price: "₹485.00", img: "/images/health5.png" },
  { id: 2, name: "NAN PRO 2 REFILL 400GM", price: "₹485.00", img: "/images/health6.png" },
  { id: 3, name: "CERELAC 400GM", price: "₹485.00", img: "/images/health7.png" },
  { id: 4, name: "CERELAC 400GM", price: "₹485.00", img: "/images/health8.png" },
];

const HomeHealth = () => {
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 0; 
      return acc;
    }, {})
  );

  const updateQuantity = (id, increment) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] + (increment ? 1 : -1), 0), 
    }));
  };

  return (
    <div className="health-care-container">
      <h4 className="health-h4">OUR PRODUCTS</h4>
      <h2 className="health-h2">Browse Medicines & Health Product</h2>

      <div className="health-section">
        <h3 className="health-h3">Health Condition</h3>
        <div className="health-grid-container">
          {healthConditions.map((item, index) => (
            <div className="health-grid-item" key={index} style={{ backgroundImage: `url(${item.img})` }}>
              <div className="health-overlay">
                <h4 className="health-grid-h4">{item.title}</h4>
                <p className={`health-grid-p ${item.className}`}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="health-section">
        <h3 className="health-h3">Categories</h3>
        <div className="health-grid-container">
          {categories.map((item, index) => (
            <div className="health-grid-item" key={index} style={{ backgroundImage: `url(${item.img})` }}>
              <div className="health-overlay">
                <h4 className="health-grid-h4">{item.title}</h4>
                <p className={`health-grid-p ${item.className}`}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products */}
      <div className="pophealth-section">
        <h3 className="pop-h3">Popular Products</h3>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <div className="product-image">
                <img src={product.img} alt={product.name} />
                <div className="product-icons">
                  <FaRegHeart className='p-heart-icon' />
                  <FaShoppingCart className="p-cart-icon" />
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(product.id, false)} disabled={quantities[product.id] <= 0}>-</button>
                  <span>{quantities[product.id]}</span>
                  <button onClick={() => updateQuantity(product.id, true)}>+</button>
                </div>
              </div>
              <div className="pop-price">
                <p className="pop-p">{product.name}</p>
                <h5 className="pop-h5">{product.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHealth;
