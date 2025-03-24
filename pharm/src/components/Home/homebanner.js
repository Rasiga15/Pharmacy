import React from "react";
import { FaSearch} from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import "./homebanner.css";

const HomeBanner = () => {
  return (
    <div className="hero-section">
      <img src="/images/homebanner.jpg" alt="homebanner" className="hero-image" />

      <div className="hero-content">
        <h1>Your Prescription for <br /> Affordable Health Solutions!</h1>
        <p>
          Elevate your health journey with exclusive discounts and unparalleled convenience.
          Your path to well-being starts here, where every purchase is a prescription for savings.
        </p>
        <button className="shop-btn">
        Start Shopping    <MdAddShoppingCart className="cart-icon" />
        </button>
      </div>

 
<div className="search-bar">
<select className="category-select">
  <option value="" disabled selected>All Category</option>
  <option value="medicine">Medicine</option>
  <option value="health-products">Health Products</option>
</select>

  <input type="text" placeholder="Search medicine, medical products" />
  <button className="search-icon">
    <FaSearch />
  </button>
</div>

    </div>
  
  );
};

export default HomeBanner;








