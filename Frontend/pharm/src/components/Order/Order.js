import React from "react";
import { useLocation } from "react-router-dom"; 
import '../Order/Order.css';

const Order = () => {
  const location = useLocation();
  const { billingDetails, paymentDetails, cartItems, total } = location.state; // Removed subtotal and deliveryFee

  return (
    <div className="order-page">
      <h2 className="order-p-h2">Your Order Details</h2>

      <div className="order-confirmation-message">
        <p className="confirmation-text">Your order has been placed successfully!</p>
      </div>

      <div className="order-content">
        <div className="order-billing-section">
          <h3 className="order-p-h3">Billing Details</h3>
          <table className="order-table">
            <tbody>
              <tr>
                <td className="order-table-label"><strong>Name:</strong></td>
                <td>{billingDetails.name}</td>
              </tr>
              <tr>
                <td className="order-table-label"><strong>Email:</strong></td>
                <td>{billingDetails.email}</td>
              </tr>
              <tr>
                <td className="order-table-label"><strong>Address:</strong></td>
                <td>{billingDetails.address}</td>
              </tr>
              <tr>
                <td className="order-table-label"><strong>City:</strong></td>
                <td>{billingDetails.city}</td>
              </tr>
              <tr>
                <td className="order-table-label"><strong>Zip:</strong></td>
                <td>{billingDetails.zip}</td>
              </tr>
              <tr>
                <td className="order-table-label"><strong>Country:</strong></td>
                <td>{billingDetails.country}</td>
              </tr>
              <tr>
                <td className="order-table-label"><strong>Phone:</strong></td>
                <td>{billingDetails.phone}</td>
              </tr>
            </tbody>
          </table>

          <div className="order-main-pay">
            <h3 className="order-p-pay">Payment Method</h3>
            <p className="order-payment-method">{paymentDetails.paymentMethod === "onlinePayment" ? "Online Payment" : "Cash on Delivery"}</p>
          </div>
        </div>

        <div className="order-product-section">
          <h3 className="order-p-h3-p">Order Product Details</h3>
          <table className="order-table">
            <thead>
              <tr>
                <th className="o-table-header">Image</th>
                <th className="o-table-header">Product</th>
                <th className="o-table-header">Quantity</th>
                <th className="o-table-header">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="o-table-row">
                  <td className="o-product-image">
                    <img src={item.img} alt={item.name} className="order-product-image" />
                  </td>
                  <td className="o-product-name">{item.name}</td>
                  <td className="o-product-quantity">{item.quantity}</td>
                  <td className="o-product-price">₹{(parseFloat(item.price.replace("₹", "")) * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td className="o-total-label" colSpan={3}><strong>Total</strong></td>
                <td className="o-total-amount"><strong>₹{total.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;