import React, {useState} from 'react';
import Header2 from '../../Component/Header/Header2/Header2';
import "./Register2.scss";
import { useLocation, useNavigate } from 'react-router';
const Register2 = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Xử lý logic đăng ký, ví dụ lưu vào localStorage
    localStorage.setItem(email, password);
    // Gọi hàm callback khi đăng ký thành công
    onRegister(email);
  };

  return (
    <div className="register-abc">
      <Header2/>
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
                    <input type="password" className="register-jsx" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  required/>
                  </div>
                </div>
                <div className="register-center">
                  <button className="register-dark" value="register"  onClick={handleRegister}>Register</button>
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
        
    </div>
  )
}


const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedPassword = localStorage.getItem(email);
    if (storedPassword === password) {
      localStorage.setItem('isLoggedIn', 'true'); // Cập nhật trạng thái đăng nhập trong localStorage
      onLogin(email);
      navigate('/CheckOut');
    } else {
      alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tên người dùng và mật khẩu!');
      navigate('/');
    }
  };
  
return(
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
                      <input type="password" className="register-jsx" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
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
  </div>

);
};



const App2 = () => {
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
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Xin chào, {currentUser}!</h1>
          <button onClick={handleLogout}>Đăng Xuất</button>
        </div>
      ) : (
        <div>
          <Register2 onRegister={handleRegister} />
          <LoginPage onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};


export default App2
