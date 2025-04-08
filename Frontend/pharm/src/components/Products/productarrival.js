import React from "react";
import "./productarrival.css";

const products = [
  {
    id: 1,
    name: "Voluptas assumenda est",
    image: "/images/health1.png",
    discount: "27%",
  },
  {
    id: 2,
    name: "Pamol Film Coated Tablet",
    image: "/images/health2.png",
    discount: "45%",
  },
  {
    id: 3,
    name: "Maca Root Capsules",
    image: "/images/health3.png",
    discount: null,
  },
  {
    id: 4,
    name: "Diclofenac OalFarm Tablet",
    image: "/images/health4.png",
    discount: "15%",
  },
];

const ProductArrivals = () => {
  return (
    <div className="P-new-arrivals">
      <h3 className="P-section-title">NEW PRODUCTS</h3>
      <h2 className="P-main-title">New Arrivals</h2>
      <div className="P-product-container">
        {products.map((product) => (
          <div className="P-product-card" key={product.id}>
            <div className="P-image-wrapper">
              <img src={product.image} alt={product.name} />
              {product.discount && <span className="P-discount">{product.discount}</span>}
            </div>
            <span className="P-star-icon">⭐</span>
            <p className="P-product-name">{product.name}</p>
            
          </div>
        ))}
      </div>
      <a href="#" className="P-see-more">SEE MORE</a>
    </div>
  );
};

export default ProductArrivals;
