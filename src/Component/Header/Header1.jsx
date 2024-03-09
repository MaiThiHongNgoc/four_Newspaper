import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import 'react-icons'
import { CiHeart } from "react-icons/ci";
import CartItem from '../../CartItem/CartItem';
import { useShoppingContext } from '../../Context/ShoppingContext';
import { formatCurrency } from '../../helpers/common';
import CartIcon from './CartIcon';
import Search from '../../pages/Search/Search';
import Register from '../../pages/Register/Register';
import { LuLogOut } from "react-icons/lu";
const Header = () => {
    const { cartItems, cartQty, totalPrice } = useShoppingContext()
    return (
        <div className='header-container'>
            <div className="logo-header">
                <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt="" />
            </div>
            <div className="navbar-header">
                <div className="navbar-header-home"> <Link to="/">HOME</Link></div>
                <div className="navbar-header-menu"> <Link to="/Menu">MENU</Link></div>
                <div className="navbar-header-shop"> <Link to="/AboutUs">ABOUT</Link></div>
                <div className="navbar-header-pages"> <Link to="/Pages">CONTACT</Link></div>
                <div className="navbar-header-blogs"> <Link to="/Blogs">BLOGS</Link></div>
            </div>
            <div className="components-header">
                <div className="icon-search"><Search/></div>
                <div className="icon-login"><Register/> </div>
                <div className="icon-tym"><Link to="/Wishlist"><CiHeart className='icon-tym' /></Link></div>
                <div className="icon-cart">
                    <CartIcon/>
                    {/* <span>{cartQty} items</span> */}
                </div>
               <div className='icon-out'> <Link to="/Logout"><LuLogOut /></Link></div>
                </div>
        </div>
    );
}


export default Header;
