import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiShoppingCart, HiHeart, HiUser } from "react-icons/hi"; 
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";  
import "./navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolling, setScrolling] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser'); 
        alert('Logout successful!'); 
        navigate('/'); 
    };

    const navbarStyle = {
        background: location.pathname === "/" && !scrolling ? "none" : "#142257",
        transition: "background 0.3s ease-in-out",
    };

    return (
        <nav className="nav-container" style={navbarStyle}>
            <div className="nav-content">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/logo.png" alt="Logo" />
                    </Link>
                </div>

                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
                </div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/product" onClick={() => setMenuOpen(false)}>Product</Link></li>
                    <li><Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>

                {/* Icons */}
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
                        {loggedInUser && <span className="username">{loggedInUser.username}</span>} 
                    </div>
                    
                    {showProfileMenu && (
                        <div className="profile-menu">
                            {!loggedInUser ? (
                                <>
                                    <Link to="/login" onClick={() => setShowProfileMenu(false)}>Login</Link>
                                    <Link to="/register" onClick={() => setShowProfileMenu(false)}>Register</Link>
                                </>
                            ) : (
                                <Link to="/" onClick={() => { handleLogout(); setShowProfileMenu(false); }}>Logout</Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;