import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../Component/Header/Header2/Header2';
//import Footer from '../Component/Footer/Footer';
import './Wishlist.scss';

const Wishlist = () => {

  return (
    <div className='Wishlist'>
      <Header2 />
      <div className="slide-wishlist">
        <div className="imgWishlistContainer">
          <img className='imgWishlist' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
          <p className='text-wishlist'>Wishlist</p>
          <h2 className='home-wishlist'>Home-Wishlist</h2>
        </div>
      </div>
      <div className="bread-crumb">
        <div className="loginnow">
            <span>Please login:</span>
            <div className="login-link">
           <span className="wishlist-link"> <Link to="/Register2">Login-Register now?</Link></span>
            </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Wishlist;




