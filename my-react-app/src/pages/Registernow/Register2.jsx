import React from 'react';
import Header2 from '../../Component/Header/Header2/Header2';
import "./Register2.scss";
const Register2 = () => {
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
                    <input type="email" name="customer[email]" className="register-jsx" placeholder="Email address" required/>
                  </div>
                </div>
                <div className="register-group">
                  <label htmlFor="inputPassword" className="register-group-col">Password</label>
                  <div className="register-label">
                    <input type="password" className="register-jsx" name="customer[password]" placeholder="Password" required/>
                  </div>
                </div>
                <div className="register-center">
                  <button className="register-dark" value="register">Register</button>
                </div>
              </form>

              <div className="register-forgot">
                <a href="" className="register-app">Return to Store</a>
              </div>
            </div>

            <div className="regiter-nav"></div>

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
                      <input type="emailaddress" className="register-jsx" name="customer[email]" placeholder="Email address" required/>
                    </div>
                  </div>
                  <div className="register-group">
                    <label htmlFor="inputPassword" className="register-group-col">Password</label>
                    <div className="register-label">
                      <input type="password" className="register-jsx" name="customer[password]" placeholder="Password" required/>
                    </div>
                  </div>
                  <div className="register-center">
                    <button className="register-dark" value="Log In">Log In</button>
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
            </div>
        </div>
        
    </div>
  )
}

export default Register2
