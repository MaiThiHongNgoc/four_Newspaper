import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import 'react-icons'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingBag } from "react-icons/md";
import CartItem from '../../CartItem/CartItem';
import { useShoppingContext } from '../../Context/ShoppingContext';
import { formatCurrency } from '../../helpers/common';
import CartIcon from './CartIcon';

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
                <div className="navbar-header-shop"> <Link to="/Shop">SHOP</Link></div>
                <div className="navbar-header-pages"> <Link to="/Pages">PAGES</Link></div>
                <div className="navbar-header-blogs"> <Link to="/Blogs">BLOGS</Link></div>

            </div>
            <div className="components-header">
                <div className="icon-search"><IoIosSearch /></div>
                <div className="icon-login"><VscAccount /></div>
                <div className="icon-tym"><CiHeart /></div>
                <div className="icon-cart">
                    {/* <MdOutlineShoppingBag /> */}
                    {/* {cartQty > 0 && (
                        <span className="cart-quantity">{cartQty}</span>
                    )}
                    <div className="cart-dropdown">
                        {cartItems && Array.isArray(cartItems) && cartItems.length > 0 ? (
                            cartItems.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                        <div className="cart-total">
                            <strong>Total: {formatCurrency(totalPrice)}</strong>
                        </div>
                        <Link to="/checkout" className="btn btn-primary checkout-button">
                            Checkout
                        </Link>
                    </div> */}
                    <CartIcon/>
                </div>
            </div>
        </div>
    );
}


export default Header;
