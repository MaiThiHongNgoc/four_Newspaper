import React, { useState } from 'react';
import './Banner.scss';

const Banner = ({ alt }) => {
  // Sử dụng một object để lưu trạng thái zoom cho từng ảnh
  const [zoomed, setZoomed] = useState({});

  // Hàm xử lý di chuột vào - cập nhật trạng thái zoom cho ảnh cụ thể
  const handleMouseEnter = (id) => {
    setZoomed({ ...zoomed, [id]: true });
  };

  // Hàm xử lý di chuột ra - xóa trạng thái zoom cho ảnh cụ thể
  const handleMouseLeave = (id) => {
    setZoomed({ ...zoomed, [id]: false });
  };

  // Mảng các ảnh để hiển thị
  const images = [
    { id: 1, src: "https://desero-store-demo.myshopify.com/cdn/shop/files/bn1.3.png?v=1657868808", title: "Kiwi Juice" },
    { id: 2, src: "https://desero-store-demo.myshopify.com/cdn/shop/files/bn1.4.png?v=1657868808", title: "Orange Juice" }
  ];

  return (
    <div className="banner">
      {images.map((image) => (
        <div key={image.id} className="banner-item">
          <div
            className={`banner-img ${zoomed[image.id] ? 'zoomed' : ''}`}
            onMouseEnter={() => handleMouseEnter(image.id)}
            onMouseLeave={() => handleMouseLeave(image.id)}
          >
            <img src={image.src} alt={alt || 'Zoomable Image'} />
            <div className="banner-info">
              <p>SALE UP TO 30%</p>
              <h3>{image.title}</h3>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;







