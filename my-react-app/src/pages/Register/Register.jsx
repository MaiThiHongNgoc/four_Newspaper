import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
// import { FaTimes } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import "./Register.scss";

const Register = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
    const closeDropdown = () => setIsDropdownVisible(false);

    return (
            <div className="login-desktop" onClick={toggleDropdown}>
                <VscAccount />
            {isDropdownVisible && (
                <div className={`modal-overlay`}>
                    <div className="login-conten">
                        <div className="login-img">
                            <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt="" />
                        </div>
                        <h2 className="title-login">Great to have you back!</h2>
                        <div className="mailrrr">
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form_control" name="customer[email]" placeholder="Email address" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form_control" placeholder="Password" name="customer[password]" required />
                                </div>
                                <div className="form-check">
                                    <a href="/recoverpassword" className="recoverpassword">Forgot your password?</a>
                                </div>
                                <button type="submit" className="btn-login">Log In</button>
                            </form>
                        </div>
                        <div className="creat-my">
                            <div className="box-register">
                                <span className="register">Don’t have an account?</span>
                                <a href="/register" className="create-account"> Register now</a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <a className="fill-white" onClick={closeDropdown}><FaXmark /></a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Register;

