import React from 'react';
import 'react-icons'
import './Footer.scss' ;
import { FaPaperPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return ( 
        <footer className='footer_v2'>
          <div className="top-footer">
            <div className="footer">
                    <div className="logo-top">
                        <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt="Desero - Organic Fruit & Juice Responsive Shopify Theme" className="img-fluid" />
                    </div>
                    <p className="conten">Subscribe our newsletter and get <br/> discount 30% off</p>
                   
                    <div className="newletter_email">
                        <div className="form-group">
                          <input type="email" name="EMAIL" className="form-control" placeholder="Your email address..." required/>
                        </div>
                        <button className="btn" type="submit">
                        <FaPaperPlane />
                        </button>
                    </div>

                    <div className="list-icon">
                      <ul className="list-unstyled">
                        <li className="list-inline-item">
                          <a  className="social-item">
                          <i className="twitter"><FaTwitter /></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="social-item">
                          <i className="dribbble"><FaDribbble /></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a  className="social-item">
                          <i className="dribbble"><FaBehance /></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a  className="social-item">
                          <i className="instagram"><FaInstagram /></i>
                          </a>
                        </li>      
                      </ul>
                    </div>
                    </div>
                    <div className="footer-columns">
                        <div className="info_footer1">
                        <div className="title_footer1">
                           <h4>Customer Case</h4>
                         </div>
                        <ul className="list-unstyled1">
                          <li><a href="">Delivery</a></li>
                          <li><a href="">Legal Notice</a></li>
                          <li><a href="">Documentation</a></li>
                          <li><a href="">Secure payment</a></li>
                          <li><a href="">Stores</a></li>
                        </ul>
                      </div>

                      <div className="info_footer2">
                        <div className="title_footer2">
                        <h4>Quick Shop</h4>
                         </div>
                         <ul className="list-unstyled2">
                         <li><a href="">Pagination</a></li>
                         <li><a href="">Terms & Condition</a></li>
                         <li><a href="">Contact</a></li>
                         <li><a href="">Home page</a></li>
                         <li><a href="">Term of us</a></li>
                         </ul>
                         </div>

                         <div className="info_footer3">
                         <div className="title_footer3">
                           <h4>Company</h4>
                           </div>
                         <ul className="list-unstyled3">
                         <li><a href="">Help Center</a></li>
                         <li><a href="">Address Store</a></li>
                         <li><a href="">Privacy Policy</a></li>
                         <li><a href="">Receivers & Amplifiers</a></li>
                        
                        </ul>
                        </div>
                  </div>
          </div>
          <div className="copyright">
            <div className="container">
                  <div className="text-copyright">
                     © Copyright 2022 | 
                    <a href="https://shopilaunch.com/" className="underline_hover-link">Desero by</a>
                    <a href="https://shopilaunch.com/" className="underline_hover-link">ShopiLaunch.</a>
                    <a href="https://www.shopify.com/?ref=shopifycenter" className="underline_hover-link">Powered by Shoppify.</a>
                  </div>
                <div className="cart">
                  <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/payment.png?v=1656983820" alt="" />
                </div>
            </div>
          </div>
        </footer>    
  )
}

export default Footer

