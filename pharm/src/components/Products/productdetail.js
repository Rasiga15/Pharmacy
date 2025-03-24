import React from "react";
import "./productdetail.css";

const healthConditions = [
  { title: "PAIN", subtitle: "RELIEF", img: "/images/pain.png" },
  { title: "HEART", subtitle: "HEALTH", img: "/images/heart.png" },
  { title: "COUGH", subtitle: "& COLD", img: "/images/cough.png" },
  { title: "DIABETES", subtitle: "CARE", img: "/images/diabetes.png" },
];

const categories = [
  { title: "BABY", subtitle: "CARE", img: "/images/baby.png" },
  { title: "FITNESS &", subtitle: "WELLNESS", img: "/images/fitness.png" },
  { title: "FAMILY", subtitle: "CARE", img: "/images/family.png" },
  { title: "ALTERNATE", subtitle: "MEDICINES", img: "/images/alternate.png" },
];

const products = [
  { name: "LACTOGEN 2 REFILL 400GM", price: "₹485.00", img: "/images/health5.png" },
  { name: "NAN PRO 2 REFILL 400GM", price: "₹485.00", img: "/images/health6.png" },
  { name: "CERELAC 400GM", price: "₹485.00", img: "/images/health7.png" },
  { name: "CERELAC 400GM", price: "₹485.00", img: "/images/health8.png" },
];

const healthproducts = [
    { name: "LACTOGEN 2 REFILL 400GM", price: "₹485.00", img: "/images/health5.png" },
    { name: "NAN PRO 2 REFILL 400GM", price: "₹485.00", img: "/images/health6.png" },
    { name: "CERELAC 400GM", price: "₹485.00", img: "/images/health7.png" },
    { name: "CERELAC 400GM", price: "₹485.00", img: "/images/health8.png" },
  ];

const ProductDetail = () => {
  return (
    <div className="product-health-container">
      <h4 className="product-health-h4">OUR PRODUCTS</h4>
      <h2 className="product-health-h2">Browse Medicines & Health Product</h2>

      <div className="product-health-section">
        <h3 className="product-health-h3">Health Condition</h3>
        <div className="product-health-grid-container">
          {healthConditions.map((item, index) => (
            <div className="product-health-grid-item" key={index} style={{ backgroundImage: `url(${item.img})` }}>
              <div className="product-health-overlay">
                <h4 className="product-health-grid-h4">{item.title}</h4>
                <p className="product-health-grid-p">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="product-health-section">
        <h3 className="product-health-h3">Categories</h3>
        <div className="product-health-grid-container">
          {categories.map((item, index) => (
            <div className="product-health-grid-item" key={index} style={{ backgroundImage: `url(${item.img})` }}>
              <div className="product-health-overlay">
                <h4 className="product-health-grid-h4">{item.title}</h4>
                <p className="product-health-grid-p">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products */}
       <div className="product-pophealth-section">
        <h3 className="product-pop-h3">Popular Products</h3>
        <div className="product-pop-grid">
          {products.map((product, index) => (
            <div className="product-pop-item" key={index}>
              <img src={product.img} alt={product.name} />
              <div className="product-pop-price">
              <p className="product-pop-p">{product.name}</p>
              <h5 className="product-pop-h5">{product.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div> 

  {/* Popular Products */}
      <div className="product-pophealth-section">
       <div className="product-pop-grid">
          {healthproducts.map((healthproduct, index) => (
            <div className="product-pop-item" key={index}>
              <img src={healthproduct.img} alt={healthproduct.name} />
              <div className="product-pop-price">
              <p className="product-pop-p">{healthproduct.name}</p>
              <h5 className="product-pop-h5">{healthproduct.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default ProductDetail;
