import React, { useState, useRef } from 'react';
import { FaTimes } from "react-icons/fa";
import axios from 'axios'; 
import "./Register.scss";
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Register = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Đã đổi từ username sang name
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
    const closeDropdown = () => {
        setIsDropdownVisible(false);
        setError('');
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleNameChange = (e) => { // Đã đổi từ handleUsernameChange sang handleNameChange
        setName(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        // Kiểm tra xác nhận mật khẩu
        if (password !== confirmPassword) {
            setError("Password confirmation doesn't match.");
            return;
        }

        // Kiểm tra nếu email, mật khẩu hoặc tên trống
        if (!email || !password || !name) { // Đã đổi từ username sang name
            setError("Please fill in all fields.");
            return;
        }

        // Gửi dữ liệu đăng ký đến server bằng Axios
        try {
            const response = await axios.post('http://localhost:3000/admin/server/register.php', JSON.stringify ({
                email: email,
                password: password,
                name: name, // Đã đổi từ username sang name
                confirmPassword: confirmPassword,
                // user_type: 'admin' // Đặt giá trị user_type là 'admin' cho đăng ký người dùng admin
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Xử lý phản hồi từ server ở đây
            console.log(response.data);
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu đăng ký:', error);
        }
    };

    const handleDropdownClick = (e) => {
        e.stopPropagation(); // Ngăn chặn sự kiện onClick từ việc lan ra và đóng form
    };

    const handleCloseDropdown = () => {
        closeDropdown();
    };

    return (
        <div className="register-desktop" onClick={toggleDropdown}>
            <div className="register-Rx"><RxAvatar /></div>
            {isDropdownVisible && (
                <div className={`modal-overlay`} ref={dropdownRef} onClick={closeDropdown}>
                    <div className="register-content" onClick={handleDropdownClick}>
                    <div className="login-img">
                            <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt="" />
                    </div>
                        <h2 className="title-register">Create an account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form_control" value={name} onChange={handleNameChange} placeholder="Name" required /> 
                            </div>
                            <div className="form-group">
                                <input type="email" className="form_control" value={email} onChange={handleEmailChange} placeholder="Email address" required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form_control" value={password} onChange={handlePasswordChange} placeholder="Password" required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form_control" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password" required />
                            </div>
                            {error && <div className="error">{error}</div>}
                            <button type="submit" className="btn-register" >Register</button>
                            <p className='register-pp'>Already have an account? <Link to="/Login" onClick={handleCloseDropdown}>Login here</Link></p>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Register;
