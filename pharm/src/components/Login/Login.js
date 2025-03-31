import React from 'react';
import '../Login/Login.css';

const Login = () => {
  
    return (
        <div className="log-form-container"> 
            <h2 className='log-h2'>Login</h2>
            <form>

                <div className="log-form-group">
                    <label For="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                       
                        required
                    />
                </div>
                <div className="log-form-group">
                    <label For="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                     
                        required
                    />
                </div>
               
                <button className="log-button" type="submit">Login</button>
            </form>
            <div className="forgot-password">
                <a href="/forgot-password">Forgot Password?</a>
                <span> | </span>
                <a href="/register">Sign Up</a>
            </div>
        </div>
    );
};

export default Login;