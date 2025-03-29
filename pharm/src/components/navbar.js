import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiShoppingCart, HiHeart, HiUser } from "react-icons/hi"; 
import "./navbar.css";

const Navbar = () => {
    const location = useLocation();
    const [scrolling, setScrolling] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
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
                <div className="icon-container">
                    <div className="cart-icon"> 
                        <Link to="/cart" aria-label="Add to Cart">
                            <HiShoppingCart size={24} className="icon" />
                        </Link>
                    </div>
                    <div className="wishlist-icon"> 
                        <Link to="/wishlist" aria-label="Wishlist">
                            <HiHeart size={24} className="icon" />
                        </Link>
                    </div>
                    <div className="profile-icon" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                        <HiUser size={24} className="icon" />
                    </div>
                    {showProfileMenu && (
                        <div className="profile-menu">
                            <Link to="/login" onClick={() => setShowProfileMenu(false)}>Login</Link>
                            <Link to="/register" onClick={() => setShowProfileMenu(false)}>Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;