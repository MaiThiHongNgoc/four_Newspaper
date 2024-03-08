// LogoutPage.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Xử lý logic đăng xuất
    localStorage.removeItem('isLoggedIn');
    // Chuyển hướng người dùng về trang đăng nhập sau khi đăng xuất
    navigate('/Register2');
  }, [navigate]);

  return (
    <div>
      <h2>Đăng Xuất</h2>
      {/* Bạn có thể thêm thông báo hoặc giao diện khác tùy ý */}
    </div>
  );
};

export default Logout;
