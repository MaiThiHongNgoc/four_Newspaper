import React, {useState} from 'react'
import { dataProduct } from './Data/Data'
import './Product.scss'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom';

const Product = () => {
  const [hoveredImg, setHoveredImg] = useState(null); // Sử dụng state để lưu trữ đường dẫn của ảnh khi hover

  return (
    <div>
    {/* <BestSellers/> */}
    <div className='product'>
      <h2>OUR BEST SELLER</h2>
      <p>__________________</p>
      <div className="product-link">
        <ul>
          <li className='product-link1'><a href="">NEW ARRIVALS</a></li>
          <li className='product-link2'><Link to="/best-sellers">BEST SELLERS</Link ></li>
          <li className='product-link2'><Link to="/top-rates">TOP RATES</Link></li>
        </ul>
      </div>
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
                  <div className="icon">
                  <IoIosSearch/>
                  </div>
                  <div className="icon">
                  <CiHeart/>
                  </div>
                  <div className="icon">
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
    </div>
  );
}

export default Product