import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Register/Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateUsername = (username) => /^[A-Za-z]+$/.test(username);
    const validateEmail = (email) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    const validatePassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validateUsername(username)) {
            newErrors.username = 'Username must only contain letters.';
        }
        if (!validateEmail(email)) {
            newErrors.email = 'Email is not valid.';
        }
        if (!validatePassword(password)) {
            newErrors.password = 'Password must be at least 8 characters long and contain letters, numbers, and special characters.';
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

       
        localStorage.setItem('userData', JSON.stringify({ username, email, password }));
        alert('Registration successful!');
        
       
        navigate('/login');
    };

   
    return (
        <div className="reg-form-container">
            <h2 className='reg-h2'>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="reg-form-group"> 
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    {errors.username && <span className="reg-error-message">{errors.username}</span>}
                </div>
                <div className="reg-form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && <span className="reg-error-message">{errors.email}</span>}
                </div>
                <div className="reg-form-group"> 
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errors.password && <span className="reg-error-message">{errors.password}</span>}
                </div>
                <div className="reg-form-group"> 
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {errors.confirmPassword && <span className="reg-error-message">{errors.confirmPassword}</span>}
                </div>
                <button className="reg-button" type="submit">Register</button>
            </form>
            <div className="register-link-container">
                <p>Already have an account? <Link to="/login">Login</Link></p> 
            </div>
        </div>
    );
};

export default Register;