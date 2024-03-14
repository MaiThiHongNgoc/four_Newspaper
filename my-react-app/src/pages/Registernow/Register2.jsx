import React, { useState } from 'react';
import "./Register2.scss";
import { useNavigate } from 'react-router';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register2 = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State để kiểm soát việc hiển thị mật khẩu
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Vui lòng nhập đầy đủ email và mật khẩu.');
      return;
    }

    // Xử lý logic đăng ký, ví dụ lưu vào localStorage
    localStorage.setItem(email, password);
    // Gọi hàm callback khi đăng ký thành công
    onRegister(email);
  };

   // Hàm để toggle hiển thị mật khẩu
   const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <div className="register-abc">
      <div className="register-body">
        <div className="register-container">
          <div className="regisrer-2">

            <div className="register-col">
              <h1 className="register-text">
                <i className="register-pencil"></i>
                REGISTER
              </h1>

              <form method="post" action="#" className="regiter-post">
                <input type="hidden" name="form_type" value="create_customer"/>
                <input type="hidden" name="utf8" value="#"/>
                <div className="register-group">
                  <label htmlFor="StaticEmail" className="register-group-col">Email address</label>
                  <div className="register-label">
                    <input type="email"  className="register-jsx"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required/>
                  </div>
                </div>
                <div className="register-group">
                  <label htmlFor="inputPassword" className="register-group-col">Password</label>
                  <div className="register-label">
                    <input  type={showPassword ? 'text' : 'password'} className="register-jsx" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  required/>
                    {/* Nút để kích hoạt việc hiển thị mật khẩu */}
                     <div className="show-password-toggle" onClick={toggleShowPassword}>
                           {showPassword ? <FaRegEyeSlash /> : <FaRegEye />} {showPassword ? 'Hide' : 'Show'} Password
                     </div>
                  </div>
                </div>
                <div className="register-center">
                  <button className="register-dark" value="register" onClick={handleRegister}>Register</button>
                </div>
              </form>

              <div className="register-forgot">
                <a href="" className="register-app">Return to Store</a>
              </div>
            </div>

            <div className="regiter-nav"></div>
          </div>
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State để kiểm soát việc hiển thị mật khẩu
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Vui lòng nhập đầy đủ email và mật khẩu.');
      return;
    }

    const storedPassword = localStorage.getItem(email);
    if (storedPassword === password) {
      localStorage.setItem('isLoggedIn', 'true'); // Cập nhật trạng thái đăng nhập trong localStorage
      onLogin(email);
      navigate('/CheckOut');
    } else {
      setErrorMessage('Đăng nhập thất bại. Vui lòng kiểm tra lại tên người dùng và mật khẩu!');
    }
  };

  // Hàm để toggle hiển thị mật khẩu
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div>
      <div className="regiter-login">
        <div className="register-customer">
          <h1 className="register-title">
            <i className="register-user"></i>
            LOGIN
          </h1>

          <form method="post" action="#" className="register-methos">
            <input type="hidden" name="form_type" value="customer_login" />
            <input type="hidden" name="utf8" value="#"/>
            <div className="register-group">
              <label htmlFor="StaticEmail" className="register-group-col">Email address</label>
              <div className="register-label">
                <input type="emailaddress" className="register-jsx" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required/>
              </div>
            </div>
            <div className="register-group">
              <label htmlFor="inputPassword" className="register-group-col">Password</label>
              <div className="register-label">
                <input type={showPassword ? 'text' : 'password'} className="register-jsx" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required   />
                {/* Nút để kích hoạt việc hiển thị mật khẩu */}
                <div className="show-password-toggle" onClick={toggleShowPassword}>
                           {showPassword ? <FaRegEyeSlash /> : <FaRegEye />} {showPassword ? 'Hide' : 'Show'} Pasword
                     </div>
              </div>
            </div>
            <div className="register-center">
              <button className="register-dark" value="Log In" onClick={handleLogin}>Log In</button>
            </div>
            <div className="register-gost">
              <div className="register-leftx">
                <a href="#" className="register-return">Return to Store</a>
              </div>
              <div className="register-right">
                <a href="#" className="register-cover">Forgot your password?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

const App2 = () => {
  const [isFlipped, setIsFlipped] = useState(false); // Được sử dụng để điều khiển việc hiển thị giữa đăng ký và đăng nhập
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const handleRegister = (email) => {
    setCurrentUser(email);
    setIsLoggedIn(true);
  };

  const handleLogin = (email) => {
    setCurrentUser(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser('');
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Đảm bảo đăng xuất khỏi ứng dụng
  };

  // Điều chỉnh đây để chuyển giữa đăng nhập và đăng ký
  const toggleForm = () => setIsFlipped(!isFlipped);

  if (isLoggedIn) {
    return (
      <div className='app2'>
        <h1 className='app2-h1'>Hello, {currentUser}!</h1>
        <Link to="/CheckOut" className='app2-home'>Continue payment</Link>
      </div>
    );
  }

  return (
    <div className="flip-container">
      {!isFlipped ? (
        <>
          <Register2 onRegister={handleRegister} />
          <button onClick={toggleForm} className="flip-control">Login</button>
        </>
      ) : (
        <>
          <LoginPage onLogin={handleLogin} />
          <button onClick={toggleForm} className="flip-control">Sign</button>
        </>
      )}
    </div>
  );
};

export default App2;