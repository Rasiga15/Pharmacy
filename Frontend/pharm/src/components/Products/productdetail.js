import React, { useState, useEffect } from "react";
import "./productdetail.css";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  { id: 5, name: "LACTOGEN 2 REFILL 400GM", price: "₹485.00", img: "/images/babycare8.webp", category: "babycare" },
  { id: 6, name: "NAN PRO 2 REFILL 400GM", price: "₹485.00", img: "/images/babycare9.webp", category: "babycare" },
  { id: 7, name: "CERELAC 400GM", price: "₹485.00", img: "/images/babycare3.webp", category: "babycare" },
  { id: 8, name: "MULTIVITAMINS", price: "₹300.00", img: "/images/womencare5.webp", category: "womencare" },
  { id: 9, name: "MULTIVITAMINS", price: "₹300.00", img: "/images/personalcare5.webp", category: "personalcare" },
  { id: 10, name: "MULTIVITAMINS", price: "₹300.00", img: "/images/personalcare2.webp", category: "personalcare" },
  { id: 11, name: "MULTIVITAMINS", price: "₹300.00", img: "/images/womencare7.webp", category: "womencare" },
  { id: 12, name: "MULTIVITAMINS", price: "₹300.00", img: "/images/womencare2.webp", category: "womencare" },
  { id: 13, name: "LACTOGEN 2 REFILL 400GM", price: "₹485.00", img: "/images/babycare4.webp", category: "babycare" },
  { id: 14, name: "NAN PRO 2 REFILL 400GM", price: "₹485.00", img: "/images/babycare5.webp", category: "babycare" },
  { id: 15, name: "CERELAC 400GM", price: "₹485.00", img: "/images/babycare6.webp", category: "babycare" },
  { id: 16, name: "MULTIVITAMINS", price: "₹300.00", img: "/images/womencare6.webp", category: "womencare" },
  { id: 17, name: "MULTIVITAMINS", price: "₹300.00", img: "/images/personalcare3.webp", category: "personalcare" },
  { id: 18, name: "MULTIVITAMINS", price: "₹300.00", img: "/images/personalcare4.webp", category: "personalcare" },
  { id: 19, name: "MULTIVITAMINS", price: "₹300.00", img: "/images/womencare3.webp", category: "womencare" },
  { id: 20, name: "MULTIVITAMINS", price: "₹300.00", img: "/images/womencare4.webp", category: "womencare" },
];

const ProductDetail = () => {
  const [filter, setFilter] = useState("all");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [quantities, setQuantities] = useState({});
  
  const navigate = useNavigate();


  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
      const initialQuantities = storedCart.reduce((acc, item) => {
        acc[item.id] = item.quantity;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    }
  }, []);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const addToCart = (product, event) => {
    event.stopPropagation();

    if (!loggedInUser) {
      alert("Please log in to add items to the cart.");
      navigate('/login'); 
      return;
    }

    const newCart = [...cart];
    const existingItem = newCart.find((item) => item.id === product.id);

    if ((quantities[product.id] || 0) < 10) {
      if (existingItem) {
        existingItem.quantity = Math.min(existingItem.quantity + 1, 10); 
      } else {
        newCart.push({ ...product, quantity: 1 });
      }

      setCart(newCart);
      const newQuantities = { ...quantities, [product.id]: (quantities[product.id] || 0) + 1 };
      setQuantities(newQuantities);
      localStorage.setItem('cart', JSON.stringify(newCart));

      alert(`${product.name} added to cart!`);
    } else {
      alert("You cannot add more than 10 of this product.");
    }
  };

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);
  
  const toggleWishlist = (product, event) => {
    event.stopPropagation();

    if (!loggedInUser) {
      alert("Please log in to add items to your wishlist.");
      navigate('/login'); 
      return;
    }

    let updatedWishlist = [...wishlist];

    const exists = updatedWishlist.find((item) => item.id === product.id);

    if (!exists) {
      updatedWishlist.push(product);
      setWishlist(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      alert(`${product.name} added to wishlist!`);
    } else {
      alert("This product is already in the wishlist!");
    }
                                                                                                             
    navigate('/wishlist'); 
  };

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

      <div className="filters">
        <button onClick={() => handleFilterChange("all")}>All Products</button>
        <button onClick={() => handleFilterChange("babycare")}>Baby Care</button>
        <button onClick={() => handleFilterChange("womencare")}>Women's Care</button>
        <button onClick={() => handleFilterChange("personalcare")}>Personal Care</button>
      </div>

      <div className="product-pophealth-section">
        <h3 className="product-pop-h3">OUR PRODUCTS</h3>
        <div className="product-pop-grid">
          {products
            .filter((product) => filter === "all" || product.category === filter)
            .map((product) => (
              <div className="product-pop-item" key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                <img src={product.img} alt={product.name} />
                <div className="p-product-icons">
                  <FaRegHeart
                    className={`product-heart-icon ${wishlist.some((item) => item.id === product.id) ? "active" : ""}`}
                    onClick={(event) => toggleWishlist(product, event)}
                  />
                  <FaShoppingCart className="product-cart-icon" onClick={(event) => addToCart(product, event)} />
                </div>
                <div className="product-pop-price">
                  <p className="product-pop-p">{product.name}</p>
                  <h5 className="product-pop-h5">{product.price}</h5>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;