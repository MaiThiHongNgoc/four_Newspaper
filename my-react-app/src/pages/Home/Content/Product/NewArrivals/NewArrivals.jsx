import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { useWishlistContext } from '../../../../../Wishlist/WishlistContext'; // Import WishlistContext
import { MdOutlineShoppingBag } from "react-icons/md";
import { useShoppingContext } from '../../../../../Context/ShoppingContext';
import { dataProduct } from '../Data/Data';
import { useNavigate } from 'react-router-dom';

const NewArrivals = () => {  
    const navigate = useNavigate();
    const [hoveredImg, setHoveredImg] = useState(null);
    const { addCartItem } = useShoppingContext();
    const { addWishlistItem } = useWishlistContext(); // Sử dụng WishlistContext

    const handleAddToWishlist = (product) => {
      // Chuyển hướng đến Wishlist2 với dữ liệu sản phẩm
      navigate('/Wishlist/wishlist2', { state: { product: product } });
  };

    return (
        <div>
            <div className="product-container">
                {dataProduct.map(product => (
                    <div key={product.id} className="product-item" onMouseEnter={() => setHoveredImg(product.id)} onMouseLeave={() => setHoveredImg(null)}>
                        <div className="product-image">
                            <img
                                src={hoveredImg === product.id ? product.hoverImg : product.img}
                                alt={product.title}
                            />
                            {hoveredImg === product.id && (
                                <div className="search-icon">
                                    <div className="icon1">
                                        <IoIosSearch/>
                                    </div>
                                    <div className="icon2" onClick={() => handleAddToWishlist(product)}>
                                        <CiHeart/>
                                    </div>
                                    <div className="icon3" onClick={() => addCartItem(product)}>
                                        <MdOutlineShoppingBag/>
                                    </div>
                                </div>
                            )}
                        </div>
                        <h4>{product.title}</h4>
                        <p className='productP'>${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewArrivals;
