import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegTrashCan } from "react-icons/fa6";
import { formatCurrency } from '../helpers/common';
import { Link } from 'react-router-dom';
import './Wishlist.scss';

const Wishlist2 = ({ wishlistItems, removeFromData }) => {
    const location = useLocation();
    const product = location.state?.product;

    // Sử dụng state để lưu trữ danh sách mong muốn
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        // Cập nhật state wishlist khi wishlistItems thay đổi
        setWishlist(wishlistItems);
    }, [wishlistItems]);

    const handleRemoveItem = (id) => {
        // Kiểm tra nếu wishlist không phải là undefined
        if (wishlist !== undefined) {
            // Xóa mục khỏi danh sách mong muốn
            const updatedWishlist = wishlist.reduce((acc, item) => {
                if (item.id !== id) {
                    acc.push(item);
                }
                return acc;
            }, []);
            setWishlist(updatedWishlist);
            // Gọi hàm xóa từ component cha
            removeFromData(id);
        }
    };

    if (!product) {
        // Xử lý trường hợp không có dữ liệu sản phẩm
        return (
            <div>
                <p>Không có dữ liệu sản phẩm.</p>
            </div>
        );
    }

    return (
        <div className='Wishlist'>
            <div className="slide-wishlist">
                <div className="imgWishlistContainer">
                    <img className='imgWishlist' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
                    <p className='text-wishlist'>Wishlist</p>
                    <h2 className='home-wishlist'>Home-Wishlist</h2>
                </div>
            </div>
            <table className='wishlist-table'>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='wishlist-item'>
                        <td><img className='wishlist-image' src={product.img} alt={product.title} /></td>
                        <td>{product.title}</td>
                        <
                        td>{formatCurrency(product.price)}</td>
                        {/* Sử dụng hàm handleRemoveItem khi bấm nút */}
                        <td><button onClick={() => handleRemoveItem(product.id)}><FaRegTrashCan /></button></td>
                    </tr>
                </tbody>
            </table>
            <div className="wishlist-shopping">
            <Link to="/Shop" className="btn2 btn-sm btn-primary float-start">Continue shopping</Link>
            </div>
        </div>
    );
};

export default Wishlist2;
export const dataShop = [
    // Dữ liệu sản phẩm
];
