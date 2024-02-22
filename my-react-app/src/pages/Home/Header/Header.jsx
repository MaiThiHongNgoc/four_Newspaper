import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
// import "@fortawesome/react-fontawesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <div className="icon-search"><FontAwesomeIcon icon="fas fa-search" /></div>
                <div className="icon-login"><FontAwesomeIcon icon="fas fa-user-alt" /></div>
                <div className="icon-tym"><FontAwesomeIcon icon="far fa-heart" /></div>
               

                <div>
                    <FontAwesomeIcon icon="check-square" />
                    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
                </div>
            </div>
        </div>
    );
}


export default Header;
