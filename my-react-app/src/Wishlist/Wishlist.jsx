import React from 'react';
import Header from '../Component/Header/Header1';
import Footer from '../Component/Footer/Footer';
import './Wishlist.scss';

const Wishlist = () => {

  return (
    <div>
      <Header />
      <div className="slide-wishlist">
        <div className="imgWishlistContainer">
          <img className='imgWishlist' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
          <p className='text-wishlist'>Wishlist</p>
          <h2 className='home-wishlist'>Home-Wishlist</h2>
        </div>
      </div>
      <div className="bread-crumb">
        <div className="loginnow">
            <span>Please login: Login-Register now?</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;




