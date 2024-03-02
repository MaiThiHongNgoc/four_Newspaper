import React from 'react'
import "./Register.scss"
const Register = () => {
    
    return (
        

        <div className="login-destop">
            <div className="modal-overlay"></div>
            
                <div className="login-conten">

                    <div className="login-img">
                    <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt=""/>
                    </div>
                    <h2 className="title-login">Great to have your back!</h2>
                    <div className="mailrrr">
                        <form>
                            <div className="form-group">
                            <input type="email" className="form-control" name="customer[email]" placeholder="Email adress" required />
                            </div>

                            <div className="form-group">
                            <input type="password" className="form-control"  placeholder="Password" name="customer[password]" required />
                            </div>

                            <div className="form-check">
                                <a className="recoverpassword">Forgot your password?</a>
                            </div>
                            <button type="submit" className="btn" value="Log In">Log In</button>
                        </form>

                    </div>
                    <div className="creat-my">
                        <div className="box-register">
                            <span className="register">Don’t have an account?</span>
                            <a href="" className="create-account">Register now </a>
                        </div>
                    </div>
               </div>
            </div>

  )
}


export default Register