import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../Component/Header/Header2/Header2';
import { Link, Outlet } from 'react-router-dom';
import ContectUs from './ContectUs/ContectUs';
//import AboutUs from './AboutUs/AboutUs'

const Pages = () => {
  
  return (
    <div>
        <Header2/>
        <ContectUs/>
        {/* <AboutUs/> */}
        {/* <Link to="contact-us"  onClick={() => handleLinkClick('contact-us')}>Contact Us</Link>
        <Link to="about-us"  onClick={() => handleLinkClick('about-us')}>About Us</Link> */}
    </div>
  );
}

export default Pages;
