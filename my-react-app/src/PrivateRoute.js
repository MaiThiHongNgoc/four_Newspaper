// PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Sử dụng thông tin từ localStorage
    const location = useLocation();
  
    if (!isLoggedIn) {
      // Chuyển hướng đến trang Login, không phải CheckOut
      return <Navigate to="/Register2" state={{ from: location }} replace />;
    }
  
    return children;
  };

export default PrivateRoute;
