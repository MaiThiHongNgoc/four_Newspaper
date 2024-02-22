import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import 'react-icons'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo-header">
                <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt="" />
            </div>
            <div className="navbar-header">
                <div className="navbar-header-home"> <Link to="/">Home</Link></div>
                <div className="navbar-header-menu"> <Link to="/Menu">Menu</Link></div>
                <div className="navbar-header-shop"> <Link to="/Shop">Shop</Link></div>
                <div className="navbar-header-pages"> <Link to="/Pages">Pages</Link></div>
                <div className="navbar-header-blogs"> <Link to="/Blogs">Blogs</Link></div>

            </div>
            <div className="components-header">
                <div className="icon-search"><IoIosSearch /></div>
                <div className="icon-login"><VscAccount /></div>
                <div className="icon-tym"><CiHeart /></div>
                <div className="icon-cart"><MdOutlineShoppingBag /></div>
            </div>
        </div>
    );
}


export default Header;
