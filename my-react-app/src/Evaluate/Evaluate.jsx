import React, {useState} from "react";
import { FaRegStar } from "react-icons/fa";
import './Evaluate.scss'
import { Link } from "react-router-dom";

function Evaluate() {
    return (
        <div className="evaluate">
        <div className="evaluate-none">
            <div className="evaluate-content">
                <div className="evaluate-sao">
                    <div className="evaluate-top">
                        <div className="evaluate-pri">
                        <a href="" className="evaluate-demo">
                            <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" className="evaluate-img" />
                        </a>
                        </div>
                        <h2 className="evaluate-tab">Product reviews and comments section!</h2>
                        <form className="evaluate-true">
                            <div className="evaluate-sanpham">

                                <div className="evaluate-p-4">
                                    <div className="evaluate-duct">
                                        <a className="evaluate-find">
                                            <img src="https://desero-store-demo.myshopify.com/cdn/shop/products/9.1.png?v=1656908805"className="evaluate-nuoc"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="evaluate-div">
                                    <div className="evaluate-in">
                                        <h4 className="evaluate-des">Strawberry smoothie</h4>
                                        <span className="evaluate-spr">
                                            <span className="evaluate-badgw">
                                                <i className="evaluate-icon"><FaRegStar /></i>
                                                <i className="evaluate-icon"><FaRegStar /></i>
                                                <i className="evaluate-icon"><FaRegStar /></i>
                                                <i className="evaluate-icon"><FaRegStar /></i>
                                                <i className="evaluate-icon"><FaRegStar /></i>
                                            </span>
                                        </span>
                                        <div className="evaluate-price">
                                            <span className="evaluate-bad">$55.00</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="evaluate-shipper">

                                <div className="evaluate-per">
                                    <a href="" className="evaluate-ship">
                                        <img className="evaluate-non" src="https://www.nhanshiphang.vn/wp-content/uploads/2015/11/shipper.png" alt=""/>
                                    </a>
                                </div>

                                <div className="evaluate-eng">
                                <div className="evaluate-in">
                                        <h4 className="evaluate-des">shipping reviews</h4>
                                        <span className="evaluate-spr">
                                            <span className="evaluate-badgw">
                                                <i className="evaluate-icon"><FaRegStar /></i>
                                                <i className="evaluate-icon"><FaRegStar /></i>
                                                <i className="evaluate-icon"><FaRegStar /></i>
                                                <i className="evaluate-icon"><FaRegStar /></i>
                                                <i className="evaluate-icon"><FaRegStar /></i>
                                            </span>
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <h2 className="evaluate-nx">Comments and suggestions!</h2>
                            <input className="evaluate-nhanset" placeholder="Enter your messeage..." required></input>
                            <button className="evaluate-btn" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
             <Link to="/" className='evaluate-link2'>On the homepage</Link>
        </div>
      
    </div>
    )
}
export default Evaluate;
