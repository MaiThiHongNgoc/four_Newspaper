import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';
import './Register2.scss'

const Register2 = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/admin/server/register.php', JSON.stringify ({
          email: email,
          password: password,
          username: username,
          confirmPassword: confirmPassword
      }), {
          headers: {
              'Content-Type': 'application/json'
          }
      });

      console.log(response.data);
      onRegister(email);
      navigate('/dashboard'); // Adjust as needed
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-container1">
      <h2 className='register-h2'>Sing In</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <input type="text" className="form_control" value={username} onChange={handleUsernameChange} placeholder="Username" required />
        </div>
        <div className="form-group">
          <input type="email" className="form_control" value={email} onChange={handleEmailChange} placeholder="Email address" required />
        </div>
        <div className="form-group">
          <input type={showPassword ? 'text' : 'password'} className="form_control" value={password} onChange={handlePasswordChange} placeholder="Password" required />
          <div onClick={toggleShowPassword} className="password-toggle">
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        </div>
        <div className="form-group">
          <input type="password" className="form_control" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password" required />
          <div onClick={toggleShowPassword} className="password-toggle">
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="btn-register">Register</button>
        <p className='register-pp'>Already have an account? <Link to="/Login">Login here</Link></p>
      </form>
    </div>
  );
};


export default Register2;