import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';
import './Login.scss';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            setErrorMessage('Please enter both email and password.');
            return;
        }

        try {
            // Adjust the URL to your backend endpoint
            const response = await axios.post('http://localhost:3000/admin/server/login.php', JSON.stringify({ email, password }), {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              
            if (response.data.status === 'success') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userType', response.data.userType); // Save the user type
                onLogin(email, response.data.userType); // Update login state with email and user type
                // Redirect based on the user type
                navigate(response.data.userType === 'admin' ? '/Admin' : '/');
            } else {
                setErrorMessage(response.data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('An error occurred during login. Please try again later.');
        }
    };

    // Toggle visibility of password
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-page">
            <h1 className='login-page-h2'>Login</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="login-form">
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        className='login-mail'
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className='login-pass'
                        required
                    />
                    <button onClick={toggleShowPassword} className="show-password-button">
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                </div>
                <button onClick={handleLogin} className="login-button">Log In</button>
                <p className='register-pp'>Don't have an account? <Link to="/Register2">Register here</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;
