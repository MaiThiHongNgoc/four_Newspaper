import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import { dataProduct } from '../Data/Data3';
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const TopRate = () => {
  const [hoveredImg, setHoveredImg] = useState(null); // Sử dụng state để lưu trữ đường dẫn của ảnh khi hover
  return (
    <div>
      <div className="product-container">
        {dataProduct.map(product => (
          <div key={product.id} className="product-item" onMouseEnter={() => setHoveredImg(product.id)} onMouseLeave={() => setHoveredImg(null)}>
            <div className="product-image">
              <img
                src={hoveredImg === product.id ? product.hoverImg : product.img} // Sử dụng conditional rendering để chọn ảnh
                alt={product.title}
              />
              {hoveredImg === product.id && ( // Hiển thị icon search chỉ khi hover vào sản phẩm
                <div className="search-icon">
                  <div className="icon1">
                  <IoIosSearch/>
                  </div>
                  <div className="icon2">
                  <CiHeart/>
                  </div>
                  <div className="icon3">
                  <MdOutlineShoppingBag/>
                  </div>
                </div>
              )}
            </div>
            <h4>{product.title}</h4>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopRate