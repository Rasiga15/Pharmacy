import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import "./homebanner.css";
import { Link, useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    const category = e.target.category.value; 
    navigate(`/search?query=${searchTerm}&category=${category}`);
  };

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
          <Link to="Product" className="shop-link">
            Start Shopping <MdAddShoppingCart className="home-cart-icon" />
          </Link>
        </button>
      </div>

      <form className="search-bar" onSubmit={handleSearch}>
        <select name="category" className="category-select">
          <option value="" disabled selected>All Category</option>
          <option value="medicine">Womens Care</option>
          <option value="health-products">Baby Care</option>
          <option value="health-products">Personal Care</option>
        </select>
        <input name="search" type="text" placeholder="Search medicine, medical products" />
        <button type="submit" className="search-icon">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default HomeBanner;