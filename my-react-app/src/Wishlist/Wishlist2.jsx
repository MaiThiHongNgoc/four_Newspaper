import React from 'react';
import { useWishlistContext } from './WishlistContext';
import Header2 from '../Component/Header/Header2/Header2';
import { FaRegTrashCan } from "react-icons/fa6";
import { formatCurrency } from '../helpers/common';
//import Footer from '../Component/Footer/Footer';
import './Wishlist2.scss';
import './Wishlist.scss';

const Wishlist2 = () => {
    const { wishlistItems, removeWishlistItem, clearWishlist } = useWishlistContext();

    // Kiểm tra nếu wishlistItems không được định nghĩa hoặc là một mảng rỗng
    if (!wishlistItems || !Array.isArray(wishlistItems) || wishlistItems.length === 0) {
        return (
            <div>
                <Header2 />
                <div className="slide-wishlist">
                    <div className="imgWishlistContainer">
                        <img className='imgWishlist' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
                        <p className='text-wishlist'>Wishlist</p>
                        <h2 className='home-wishlist'>Home-Wishlist</h2>
                    </div>
                </div>
                <p>No items in wishlist.</p>
            </div>
        );
    }

    return (
        <div>
            <Header2 />
            <div className="slide-wishlist">
                <div className="imgWishlistContainer">
                    <img className='imgWishlist' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
                    <p className='text-wishlist'>Wishlist</p>
                    <h2 className='home-wishlist'>Home-Wishlist</h2>
                </div>
            </div>
            <table className="wishlist-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {wishlistItems.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.img} className="img-wishlist" alt={item.title} /></td>
                            <td>{item.name}</td>
                            <td>{formatCurrency(item.price)}</td>
                            <td>
                                <button onClick={() => removeWishlistItem(item.id)}> <FaRegTrashCan />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Wishlist2;

