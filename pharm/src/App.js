import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; 
import Footer from "./components/footer";
import "./App.css";
import HomeBanner from "./components/Home/homebanner";
import HomeFeature from "./components/Home/homefeature"
import HomeHealth from "./components/Home/homehealth"
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



function App() {
  return (
    <Router>      <div>
        <Navbar />
    <Routes>

    <Route path='/' element={<><HomeBanner/><HomeFeature/><HomeHealth /><HomeArrivals/><HomeAbout/><HomeNews/></>} />
    <Route path="about" element={<><AboutBanner/><AboutDetail/><AboutTestimonial/><AboutContact/></>}/>
    <Route path="contact"element={<><ContactBanner/><ContactMap/><AboutContact/></>}/>
    <Route path="service"element={<><ServiceBanner/><ServiceList/><AboutContact/></>}/>
    <Route path="product"element={<><ProductBanner/><ProductDetail/><ProductArrivals/></>}/>
    <Route path="Cart"element={<><Cart/></>}/>
    
     
       

    </Routes>
      </div>
    <Footer/>
    </Router>
  );
}

export default App;
