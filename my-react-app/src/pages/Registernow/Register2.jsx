import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Register2.scss'

const Register2 = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/admin/server/register.php', JSON.stringify ({
          email: email,
          password: password,
          name: name,
          user_type: 'user', // Add user_type here
          confirmPassword: confirmPassword
      }), {
          headers: {
              'Content-Type': 'application/json'
          }
      });
      console.log(response.data);
      if (onRegister) {
        onRegister(email);
      }
      navigate('/Login'); // Điều chỉnh tùy theo đường dẫn bạn muốn điều hướng
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
      <h2 className='register-h2'>Sign In</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <input type="text" className="form_control" value={name} onChange={handleNameChange} placeholder="Name" required />
        </div>
        <div className="form-group">
          <input type="email" className="form_control" value={email} onChange={handleEmailChange} placeholder="Email address" required />
        </div>
        <div className="form-group">
          <input type={showPassword ? 'text' : 'password'} className="form_control" value={password} onChange={handlePasswordChange} placeholder="Password" required />
        </div>
        <div className="form-group">
          <input type="password" className="form_control" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password" required />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="btn-register">Register</button>
        <p className='register-pp'>Already have an account? <Link to="/Login">Login here</Link></p>
      </form>
    </div>
  );
};

export default Register2;
