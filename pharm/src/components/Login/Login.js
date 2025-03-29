import React from 'react';
import '../Login/Login.css';

const Login = () => {
    return (
        <div className="log-form-container"> 
            <h2>Login</h2>
            <form>
                <div className="log-form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        required
                    />
                </div>
                <div className="log-form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        required
                    />
                </div>
                <button className="log-button" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;