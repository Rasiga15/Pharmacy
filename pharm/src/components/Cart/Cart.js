import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import "../Cart/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [deletingItemId, setDeletingItemId] = useState(null);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (id) => {
    setDeletingItemId(id);
    setTimeout(() => {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setDeletingItemId(null);
    }, 200);
  };

  const updateQuantity = (id, increment) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = increment ? item.quantity + 1 : item.quantity - 1;
        return {
          ...item,
          quantity: Math.min(Math.max(newQty, 1), 10),
        };
      }
      return item;
    });

    if (JSON.stringify(updatedCart) !== JSON.stringify(cartItems)) {
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("₹", "")) * item.quantity,
    0
  );

  const deliveryFee = 15; 
  const total = subtotal + deliveryFee; 

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-h2">Your Cart</h2>
        <div className="cart-layout">
         
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p className="cart-items-p">No Items In Cart.</p>
            ) : (
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className={`cart-item ${deletingItemId === item.id ? 'removing' : ''}`}>
                      <td>
                        <div className="cart-item-info">
                          <img src={item.img} alt={item.name} />
                          <span className="item-name">{item.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className="quantity-controls">
                          <button onClick={() => updateQuantity(item.id, false)} disabled={deletingItemId === item.id}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, true)} disabled={deletingItemId === item.id}>+</button>
                        </div>
                      </td>
                      <td><span className="item-price">₹{(parseFloat(item.price.replace("₹", "")) * item.quantity).toFixed(2)}</span></td>
                      <td>
                        <button className="remove-btn" onClick={() => removeFromCart(item.id)} disabled={deletingItemId === item.id}>
                          {deletingItemId === item.id ? "Removing..." : <FaTrash />}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="order-summary">
              <h3 className="summary-title">Order Summary</h3>
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td><span className="item-name">{item.name}</span></td>
                      <td>{item.quantity}</td>
                      <td><span className="item-price">₹{(parseFloat(item.price.replace("₹", "")) * item.quantity).toFixed(2)}</span></td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={2} className="subtotal-label">Subtotal</td>
                    <td><span className="item-price">₹{subtotal.toFixed(2)}</span></td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="delivery-label">Delivery Fee</td>
                    <td><span className="item-price">₹{deliveryFee.toFixed(2)}</span></td>
                  </tr>
                  <tr>
                    <td colSpan={2}><strong className="total-label">Total</strong></td>
                    <td><strong className="total-price">₹{total.toFixed(2)}</strong></td>
                  </tr>
                </tbody>
              </table>
              <button className="checkout-btn">Go to Checkout →</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;