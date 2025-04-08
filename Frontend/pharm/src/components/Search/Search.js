import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import "../Products/productdetail.css";
import '../Search/Search.css'

const products = [
  { id: 5, name: "LACTOGEN 2 REFILL 400GM", price: "₹485.00", img: "/images/babycare8.webp", category: "babycare" },
  { id: 6, name: "NAN PRO 2 REFILL 400GM", price: "₹485.00", img: "/images/babycare9.webp", category: "babycare" },
  { id: 7, name: "CERELAC 400GM", price: "₹485.00", img: "/images/babycare3.webp", category: "babycare" },
  { id: 8, name: "MULTIVITAMINS (WOMEN)", price: "₹300.00", img: "/images/womencare5.webp", category: "womencare" },
  { id: 9, name: "MULTIVITAMINS (BASIC)", price: "₹300.00", img: "/images/personalcare5.webp", category: "personalcare" },
  { id: 10, name: "MULTIVITAMINS FOR PERSONAL CARE", price: "₹300.00", img: "/images/personalcare2.webp", category: "personalcare" },
  { id: 11, name: "MULTIVITAMINS (WOMEN)", price: "₹300.00", img: "/images/womencare7.webp", category: "womencare" },
  { id: 12, name: "MULTIVITAMINS (WOMEN)", price: "₹300.00", img: "/images/womencare2.webp", category: "womencare" },
  { id: 13, name: "LACTOGEN 2 REFILL 400GM", price: "₹485.00", img: "/images/babycare4.webp", category: "babycare" },
  { id: 14, name: "NAN PRO 2 REFILL 400GM", price: "₹485.00", img: "/images/babycare5.webp", category: "babycare" },
  { id: 15, name: "CERELAC (WHEAT)", price: "₹485.00", img: "/images/babycare6.webp", category: "babycare" },
  { id: 16, name: "MULTIVITAMINS FOR WOMEN", price: "₹300.00", img: "/images/womencare6.webp", category: "womencare" },
  { id: 17, name: "MULTIVITAMINS (PERSONAL)", price: "₹300.00", img: "/images/personalcare3.webp", category: "personalcare" },
  { id: 18, name: "MULTIVITAMINS FOR HEALTH", price: "₹300.00", img: "/images/personalcare4.webp", category: "personalcare" },
  { id: 19, name: "MULTIVITAMINS (WOMEN)", price: "₹300.00", img: "/images/womencare3.webp", category: "womencare" },
  { id: 20, name: "MULTIVITAMINS (WOMEN)", price: "₹300.00", img: "/images/womencare4.webp", category: "womencare" },
];

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  
  const query = new URLSearchParams(location.search).get("query") || "";
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setWishlist(storedWishlist);
    setCart(storedCart);

    const lowerCaseQuery = query.toLowerCase();
    const results = products.filter(product =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );
    
    setSearchResults(results);
  }, [query]);

  const addToCart = (product, event) => {
    event.stopPropagation();

    if (!loggedInUser) {
      alert("Please log in to add items to the cart.");
      navigate("/login");
      return;
    }

    const newCart = [...cart];
    const existingItem = newCart.find(item => item.id === product.id);

    if (existingItem) {
      alert("Product already in cart");
    } else {
      newCart.push({ ...product, quantity: 1 });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      alert(`${product.name} added to cart!`);
    }
  };

  const toggleWishlist = (product, event) => {
    event.stopPropagation();

    if (!loggedInUser) {
      alert("Please log in to add items to your wishlist.");
      navigate("/login");
      return;
    }

    const exists = wishlist.find(item => item.id === product.id);

    if (exists) {
      alert("Already in wishlist");
    } else {
      const newWishlist = [...wishlist, product];
      setWishlist(newWishlist);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      alert(`${product.name} added to wishlist!`);
    }
  };

  return (
    <div className="search-product-pophealth-section">
      <h3 className="search-product-pop-h3">Search Results for: "{query}"</h3>
      <div className="product-pop-grid">
        {searchResults.length === 0 ? (
        <div className="Search-not-found">
          <p className="search-not-found-p">No products found.</p>
          </div>
        ) : (
          searchResults.map((product) => (
            <div
              className="product-pop-item"
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.img} alt={product.name} />
              <div className="p-product-icons">
                <FaRegHeart
                  className={`product-heart-icon ${
                    wishlist.some((item) => item.id === product.id) ? "active" : ""
                  }`}
                  onClick={(event) => toggleWishlist(product, event)}
                />
                <FaShoppingCart
                  className="product-cart-icon"
                  onClick={(event) => addToCart(product, event)}
                />
              </div>
              <div className="product-pop-price">
                <p className="product-pop-p">{product.name}</p>
                <h5 className="product-pop-h5">{product.price}</h5>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;