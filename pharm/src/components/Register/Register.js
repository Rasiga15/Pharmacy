import React from 'react';
import '../Register/Register.css';

const Register = () => {
    return (
        <div className="reg-form-container">
            <h2>Register</h2>
            <form>
                <div className="reg-form-group"> 
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" required />
                </div>
                <div className="reg-form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div className="reg-form-group"> 
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />
                </div>
                <div className="reg-form-group"> 
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" required />
                </div>
                <button  className="reg-button" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;