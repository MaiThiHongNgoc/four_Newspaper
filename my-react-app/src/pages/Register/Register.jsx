import React, {useState} from 'react'
import { VscAccount } from "react-icons/vsc";
import { FaTimes } from "react-icons/fa";

import "./Register.scss"
const Register = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
    const closeDropdown = () => setIsDropdownVisible(false); // Hàm để ẩn bảng search
    return (
        

        <div className="login-destop">
            <VscAccount onClick={toggleDropdown}/>
            {/* <div className='modal-overlay'> */}
            <div className={`modal-overlay ${isDropdownVisible ? 'active' : ''}`}>
            </div>
            
                <div className="login-conten">

                    <div className="login-img">
                    <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt=""/>
                    </div>
                    <h2 className="title-login">Great to have your back!</h2>
                    <div className="mailrrr">
                        <form>
                            <div className="form-group">
                            <input type="email" className="form_control" name="customer[email]" placeholder="Email adress" required />
                            </div>

                            <div className="form-group">
                            <input type="password" className="form_control"  placeholder="Password" name="customer[password]" required />
                            </div>

                            <div className="form-check">
                                <a className="recoverpassword">Forgot your password?</a>
                            </div>
                            <button type="submit" className="btn-login" value="Log In">Log In</button>
                        </form>

                    </div>
                    <div className="creat-my">
                        <div className="box-register">
                            <span className="register">Don’t have an account?</span>
                            <a href="" className="create-account">Register now </a>
                        </div>
                    </div>
                    <div className="drawer-back">
                    <button className="close" onClick={closeDropdown}><FaTimes /></button>
                </div>
               </div>
            </div>

  )
}


export default Register