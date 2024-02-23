import React from 'react';
import 'react-icons'
import { FaPaperPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
       <div>
        <footer className='footer_v2'>
          <div className="top-footer">
            <div className="container container-v1">
              <div className="row">
                <div className="col-lg-3 col-md-12">
                  <div className="info_footer end">
                    <div className="logo-top">
                      <a href="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" className="logo">
                        <img src="//desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt="Desero - Organic Fruit & Juice Responsive Shopify Theme" className="img-fluid" />
                      </a>
                    </div>
                    <p className="mb-0 content_footer">
                      Subscribe our newsletter and get
                    </p>
                    <br></br>
                    <p className="mb-0 content_footer">discount 30% off</p>
                    <div className="newletter_email">
                      <form action="#" method="post" className="needs-validation form-inline">
                        <div className="form-group">
                          <input type="email" name="EMAIL" className="form-control" placeholder="Your email address..." required/>
                        </div>
                        <button className="btn" type="submit">
                        <FaPaperPlane />
                        </button>
                      </form>
                    </div>
                    <div className="list-icon">
                      <ul className="list-inline list-unstyled mb-0">
                        <li className="list-inline-item">
                          <a href title target="_blank" className="social-item">
                          <i className="twitter"><FaTwitter /></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href title target="_blank" className="social-item">
                          <i className="dribbble"><FaDribbble /></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href title target="_blank" className="social-item">
                          <i className="dribbble"><FaBehance /></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href title target="_blank" className="social-item">
                          <i className="dribbble"><FaInstagram /></i>
                          </a>
                        </li>      
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 border-ft">
                  <div className="info_footer">
                    <div className="title_footer">
                      <h4 className="mb-0 title_border">Customer Case</h4>
                    </div>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#" title="delivery ">Delivery</a>
                      </li>
                      <li>
                        <a href="#" title="legal notice ">Legal Notice</a>
                      </li>
                      <li>
                        <a href="#" title="documentation ">Documentation</a>
                      </li>
                      <li>
                        <a href="#" title="secure payment ">Secure payment</a>
                      </li>
                      <li>
                        <a href="#" title="stores ">Stores</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 border-ft">
                  <div className="info_footer">
                    <div className="title_footer">
                      <h4 className="mb-0 title_border">Quick Shop</h4>
                    </div>
                    <ul className="list-unstyled mb-0">
                    <li>
                        <a href="#" title="pagination ">Delivery</a>
                      </li>
                      <li>
                        <a href="#" title="terms & condition ">Terms & Condition</a>
                      </li>
                      <li>
                        <a href="#" title="contact ">Contact</a>
                      </li>
                      <li>
                        <a href="#" title="home page ">Home page</a>
                      </li>
                      <li>
                        <a href="#" title="term to us ">Term of us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 border-ft">
                  <div className="info_footer">
                    <div className="title_footer">
                      <h4 className="mb-0 title_border">Company</h4>
                    </div>
                    <ul className="list-unstyled mb-0">
                    <li>
                        <a href="#" title="help center ">Help Center</a>
                      </li>
                      <li>
                        <a href="#" title="address store ">Address Store</a>
                      </li>
                      <li>
                        <a href="#" title="privacy policy ">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#" title="receivers & amplifiers ">Receivers & Amplifiers</a>
                      </li>
                      <li>
                        <a href="#" title="clothings ">Clothings</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container container-v1">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 text-lg-left text-md-left">
                  <p className="text-copyright mb-0"></p>
                  <div className="text-copyright mb-0">
                    " © Copyright 2022 | "
                    <a href="https://shopilaunch.com/" className="underline_hover bold">Desero</a>
                    <p>By</p>
                    <a href="https://shopilaunch.com/" className="underline_hover link">ShopiLaunch.</a>
                    <a href="https://www.shopify.com/?ref=shopifycenter" className="underline_hover link">Powered by Shoppify.</a>
                  </div>
                  <p></p>
                </div>
                <div className="col-lg-6 col-md-6 text-lg-right text-md-right ">
                  <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/payment.png?v=1656983820" alt="" />
                </div>
              </div>
            </div>
          </div>
        </footer>
       </div>
  )
}

export default Footer

