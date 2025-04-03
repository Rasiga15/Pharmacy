import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import "../Checkout/Checkout.css"; 

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    phone: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    paymentMethod: "cashOnDelivery", 
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("₹", "")) * item.quantity,
    0
  );

  const deliveryFee = 15;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: value,
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      paymentMethod: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Billing details submitted:', billingDetails);
    console.log('Payment details submitted:', paymentDetails);

   
    navigate('/order', { state: { billingDetails, paymentDetails, cartItems, subtotal, deliveryFee, total } });
  };

  return (
    <div className="check-checkout-page">
      <h2 className="check-checkout-title">Your Checkout</h2>
      {cartItems.length === 0 ? (
        <p className="check-cart-items-p">No items in your cart to checkout.</p>
      ) : (
        <div className="check-checkout-layout">
          <div className="check-billing-section">
            <h3 className="check-billing-title">Billing Details</h3>
            <form onSubmit={handleSubmit} className="check-billing-form">
              <div className="check-form-group">
                <label htmlFor="name">Full Name:</label>
                <input type="text" name="name" value={billingDetails.name} onChange={handleChange} required />
              </div>
              <div className="check-form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={billingDetails.email} onChange={handleChange} required />
              </div>
              <div className="check-form-group">
                <label htmlFor="address">Address:</label>
                <textarea name="address" value={billingDetails.address} onChange={handleChange} required />
              </div>
              <div className="check-form-group">
                <label htmlFor="city">City:</label>
                <input type="text" name="city" value={billingDetails.city} onChange={handleChange} required />
              </div>
              <div className="check-form-group">
                <label htmlFor="zip">Zip/Postal Code:</label>
                <input type="text" name="zip" value={billingDetails.zip} onChange={handleChange} required />
              </div>
              <div className="check-form-group">
                <label htmlFor="country">Country:</label>
                <input type="text" name="country" value={billingDetails.country} onChange={handleChange} required />
              </div>
              <div className="check-form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" name="phone" value={billingDetails.phone} onChange={handleChange} required />
              </div>
              <h3 className="check-payment-title">Payment Options</h3>
              <div className="check-pay-form-group">
                <label className="check-payment-radio">
                  <input
                    type="radio"
                    value="onlinePayment"
                    checked={paymentDetails.paymentMethod === "onlinePayment"}
                    onChange={handlePaymentChange}
                  />
                  <span>Online Payment</span>
                </label>
              </div>
              <div className="check-pay-form-group">
                <label className="check-payment-radio">
                  <input
                    type="radio"
                    value="cashOnDelivery"
                    checked={paymentDetails.paymentMethod === "cashOnDelivery"}
                    onChange={handlePaymentChange}
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>
              <button type="submit" className="check-submit-btn">Place Order</button>
            </form>
          </div>

          <div className="check-summary-section">
            <h3 className="check-summary-title">Order Summary</h3>
            <table className="check-order-summary-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="check-item-name">{item.name}</td>
                    <td>
                      <img src={item.img} alt={item.name} className="check-product-image" />
                    </td>
                    <td>{item.quantity}</td>
                    <td className="check-price">₹{(parseFloat(item.price.replace("₹", "")) * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} className="check-subtotal-label">Subtotal</td>
                  <td></td>
                  <td className="check-price">₹{subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan={2} className="check-delivery-label">Delivery Fee</td>
                  <td></td>
                  <td className="check-price">₹{deliveryFee.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan={2}><strong className="check-total-label">Total</strong></td>
                  <td></td>
                  <td><strong className="check-total-price">₹{total.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;