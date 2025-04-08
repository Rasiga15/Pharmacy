import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import productsData from "../Products/ProductDatas"; 
import './ProductDetailView.css';

const ProductDetailView = ({ addToCart }) => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));
  const navigate = useNavigate(); 

  const [mainImage, setMainImage] = useState(product ? product.img : "");

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleOrderNow = () => {
  
    navigate('/checkout', { state: { product } });
  };

  return (
    <div className="product-detail-container">
      <div className="product-images">
        <img src={mainImage} alt={product.name} className="product-detail-img fade-in" />
        <div className="thumbnail-container">
          {product.thumbnails && product.thumbnails.map((thumb, index) => (
            <img 
              key={index} 
              src={thumb} 
              alt={`Thumbnail ${index + 1}`} 
              className="thumbnail-img" 
              onClick={() => setMainImage(thumb)} 
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h2 className="product-detail-heading">{product.name}</h2>
        <h4 className="product-detail-subheading">{product.subtitle}</h4>
        <p className="product-detail-description">{product.description}</p>
        <h3 className="product-detail-price">{product.price}</h3>
        <div className="product-detail-buttons">
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          <button className="order-now-btn" onClick={handleOrderNow}>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;