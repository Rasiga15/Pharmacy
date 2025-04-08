import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Login/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showResetModal, setShowResetModal] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData) {
            if (userData.email === email && userData.password === password) {
                alert('Login successful!');
                localStorage.setItem('loggedInUser', JSON.stringify({ username: userData.username }));
                navigate('/');
            } else {
                setError('Invalid email or password.');
            }
        } else {
            setError('No user found. Please register first.');
        }
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        
        // Normally you'd send the new password to your API for it to be updated
        const userData = JSON.parse(localStorage.getItem('userData'));
        
        if (userData && userData.email === email) {
            // Simulate password change
            userData.password = newPassword;
            localStorage.setItem('userData', JSON.stringify(userData));
            setConfirmationMessage('Your password has been reset successfully!');
            setShowResetModal(false); // Close the modal
        } else {
            setConfirmationMessage('Email not found.');
        }
    };

    return (
        <div className="log-form-container"> 
            <h2 className='log-h2'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="log-form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="log-form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <span className="log-error-message">{error}</span>}  
                <button className="log-button" type="submit">Login</button>
            </form>
            <div className="forgot-password">
                <Link to="#" onClick={() => setShowResetModal(true)}>Forgot Password?</Link>
                <span> | </span>
                <Link to="/register">Sign Up</Link>
            </div>

            {showResetModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3 className='model-h3'>Reset Password</h3>
                        {confirmationMessage && <p>{confirmationMessage}</p>}
                        <form onSubmit={handleResetPassword}>
                            <div className="modal-form-group">
                                <label htmlFor="new-password" className='model-newpassword'>New Password:</label>
                                <input
                                    type="password"
                                    id="new-password"
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="reset-button" type="submit">Reset Password</button>
                            <button className="cancel-button" type="button" onClick={() => setShowResetModal(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;