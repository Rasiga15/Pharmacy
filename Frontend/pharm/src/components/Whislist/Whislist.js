import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from "react-icons/fa"; 

import '../Whislist/Whislist.css';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWishlist = () => {
            const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            setWishlist(storedWishlist);
        };

        fetchWishlist();

     
        window.addEventListener('storage', fetchWishlist);

        return () => {
            window.removeEventListener('storage', fetchWishlist);
        };
    }, []);

    const removeFromWishlist = (id) => {
        const updatedWishlist = wishlist.filter((item) => item.id !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

       
        window.dispatchEvent(new Event("storage"));
    };

    return (
        <div className="wishlist-page">
            <div className='whislist-container'>
            <h2 className="wishlist-title">Wishlist</h2>
            {wishlist.length > 0 ? (
                <table className="wishlist-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map((product) => (
                            <tr key={product.id} className="wishlist-product">
                                <td>
                                    <img src={product.img} alt={product.name} className="wishlist-item-img" />
                                </td>
                                <td className="wishlist-item-name">{product.name}</td>
                                <td className="wishlist-item-price">{product.price}</td>
                                <td>
                                    <button className="whislist-remove-btn" onClick={() => removeFromWishlist(product.id)}>
                                        <FaTrash /> 
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-items-message">No products found in wishlist.</p>
            )}
        </div>
        </div>
    );
};

export default Wishlist;
