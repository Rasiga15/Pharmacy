import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiArrowNarrowRight, HiShoppingCart } from "react-icons/hi"; // Import the shopping cart icon
import "./navbar.css";

const Navbar = () => {
    const location = useLocation();
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarStyle = {
        background: location.pathname === "/" && !scrolling ? "none" : "#142257",
        transition: "background 0.3s ease-in-out",
    };

    return (
        <nav className="nav-container" style={navbarStyle}>
            <div className="nav-content">
                <div className="logo">
                    <img src="/images/logo.png" alt="Logo" />
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="cart-emergency-container">
                    <div className="addcart-icon">
                        <Link to="/Cart" aria-label="Add to Cart">
                            <HiShoppingCart size={24} className="addcart-icon-icon" />
                        </Link>
                    </div>
                    <div className="emergency">
                        <span className="emergency-text">
                            Emergency <HiArrowNarrowRight className="arrow-icon" />
                        </span>
                        <a href="tel:+919876543210" className="call-btn">
                            Call Us +91 9876543210
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;