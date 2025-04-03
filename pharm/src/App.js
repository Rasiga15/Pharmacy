import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; 
import Footer from "./components/footer";
import "./App.css";
import HomeBanner from "./components/Home/homebanner";
import HomeFeature from "./components/Home/homefeature";
import HomeHealth from "./components/Home/homehealth";
import HomeArrivals from "./components/Home/homearrivals";
import HomeNews from "./components/Home/homenews";
import HomeAbout from "./components/Home/homeabout";
import AboutBanner from "./components/About/aboutbanner";
import AboutDetail from "./components/About/aboutdetail";
import AboutTestimonial from "./components/About/abouttestimonial";
import AboutContact from "./components/About/aboutcontact";
import ContactBanner from "./components/Contact/contactbanner";
import ContactMap from "./components/Contact/contactmap";
import ServiceBanner from "./components/Service/servicebanner";
import ServiceList from "./components/Service/servicedetail";
import ProductBanner from "./components/Products/productbanner";
import ProductDetail from "./components/Products/productdetail";
import ProductArrivals from "./components/Products/productarrival";
import Cart from "./components/Cart/Cart";
import ProductDetailView from "./components/Products/ProductDetailView";
import Wishlist from "./components/Whislist/Whislist";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Scroll from "./components/Scroll/Scroll"; 
import Checkout from "./components/Checkout/Checkout";
import Order from "./components/Order/Order";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    alert(`${product.name} added to cart!`);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<><HomeBanner/><HomeFeature/><HomeHealth /><HomeArrivals/><HomeAbout/><HomeNews/></>} />
          <Route path="about" element={<><AboutBanner/><AboutDetail/><AboutTestimonial/><AboutContact/></>} />
          <Route path="contact" element={<><ContactBanner/><ContactMap/><AboutContact/></>} />
          <Route path="service" element={<><ServiceBanner/><ServiceList/><AboutContact/></>} />
          <Route path="product" element={<><ProductBanner/><ProductDetail/><ProductArrivals/></>} />
          <Route path="/product/:id" element={<ProductDetailView addToCart={addToCart} />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} /> {/* Fixed: Use element prop */}
        </Routes>
        <Scroll /> 
      </div>
      <Footer />
    </Router>
  );
}

export default App;