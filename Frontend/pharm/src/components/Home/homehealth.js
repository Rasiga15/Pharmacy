import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
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
  { id: 1, name: "LACTOGEN 2 REFILL 400GM", price: "₹485.00", img: "/images/babycare1.webp" },
  { id: 2, name: "NAN PRO 2 REFILL 400GM", price: "₹485.00", img: "/images/womencare1.webp" },
  { id: 3, name: "CERELAC 400GM", price: "₹485.00", img: "/images/personalcare1.webp" },
  { id: 4, name: "CERELAC 400GM", price: "₹485.00", img: "/images/babycare2.webp" },
];

const HomeHealth = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [wishlist, setWishlist] = useState([]);


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

    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const addToCart = (product, event) => {
    event.stopPropagation();

    if (!loggedInUser) {
      alert("Please log in to add items to the cart.");
      navigate('/login'); 
      return;
    }

    if (quantities[product.id] < 10 || quantities[product.id] === undefined) {
      const newCart = [...cart];
      const existingItem = newCart.find((item) => item.id === product.id);

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

  const goToWishlist = (product, event) => {
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

  const updateQuantity = (id, increment, event) => {
    event.stopPropagation();
    const newQuantities = { ...quantities };
    const newQty = increment ? Math.min(newQuantities[id] + 1, 10) : Math.max(newQuantities[id] - 1, 0);
    newQuantities[id] = newQty;
    setQuantities(newQuantities);

    const newCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0);
    
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div className="health-care-container">
      <h4 className="health-h4">OUR PRODUCTS</h4>
      <h2 className="health-h2">Browse Medicines & Health Products</h2>

      {/* Health Conditions */}
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
            <div
              className="product-item"
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="product-image">
                <img src={product.img} alt={product.name} />
                <div className="product-icons">
                  <FaRegHeart 
                  className="p-heart-icon" 
                  onClick={(event) => goToWishlist(product, event)} />
                  <FaShoppingCart
                    className="p-cart-icon"
                    onClick={(event) => addToCart(product, event)}
                  />
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