import React, { useState } from 'react';
import './ProductDetails.scss';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [largeImage, setLargeImage] = useState("https://desero-store-demo.myshopify.com/cdn/shop/products/13.1.png?v=1656902509");
    const [activeImg, setActiveImg] = useState(null); // State để theo dõi ảnh đang được chọn

    const handleImageClick = (newSrc) => {
        setLargeImage(newSrc); // Cập nhật hình ảnh lớn khi click vào ảnh nhỏ
        setActiveImg(newSrc); // Cập nhật ảnh đang được chọn
    };
    
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    return (
        <div>
            <div className='producthome'>
                <div className='textproduct'>
                    <div className="productdetails-crumb">
                        <p>Home-<span>Synthetic smoothies</span></p>
                    </div>
                </div>
                <div className="productdetails-all">
                    <div className="productdetails-img">
                        <div className="productdetails-imgmax">
                            <img src={largeImage} alt="" />
                        </div>
                        <div className="productdetails-imgmin">
                            <img 
                                className={activeImg === "https://desero-store-demo.myshopify.com/cdn/shop/products/13.4.png?v=1656902509" ? "productdetails-imgmin1 hover" : "productdetails-imgmin1"}
                                src="https://desero-store-demo.myshopify.com/cdn/shop/products/13.4.png?v=1656902509"
                                alt=""
                                onClick={() => handleImageClick("https://desero-store-demo.myshopify.com/cdn/shop/products/13.4.png?v=1656902509")}
                            />
                            <img 
                                className={activeImg === "https://desero-store-demo.myshopify.com/cdn/shop/products/13.3.png?v=1656902509" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://desero-store-demo.myshopify.com/cdn/shop/products/13.3.png?v=1656902509"
                                alt=""
                                onClick={() => handleImageClick("https://desero-store-demo.myshopify.com/cdn/shop/products/13.3.png?v=1656902509")}
                            />
                             <img 
                                className={activeImg === "https://desero-store-demo.myshopify.com/cdn/shop/products/13.2.png?v=1656902509" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://desero-store-demo.myshopify.com/cdn/shop/products/13.2.png?v=1656902509"
                                alt=""
                                onClick={() => handleImageClick("https://desero-store-demo.myshopify.com/cdn/shop/products/13.2.png?v=1656902509")}
                            />
                             <img 
                                className={activeImg === "https://desero-store-demo.myshopify.com/cdn/shop/products/13.1.png?v=1656902509" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://desero-store-demo.myshopify.com/cdn/shop/products/13.1.png?v=1656902509"
                                alt=""
                                onClick={() => handleImageClick("https://desero-store-demo.myshopify.com/cdn/shop/products/13.1.png?v=1656902509")}
                            />
                            {/* Tương tự cho các ảnh còn lại */}
                        </div>
                    </div>
                    <div className="productdetails-info">
                        <div className="productdetails-gach">
                            <div className="productdetails-title">
                                <h2>Synthetic Smoothies</h2>
                            </div>
                            <div className="productdetails-price">
                                <h3>$60.00 USD</h3>
                            </div>
                        </div>
                        <div className="productdetails-text">
                            <p>Add more vitamins Juice is a natural solution containing tissues from fruits or vegetables. Juice is created mechanically by squeezing or squeezing or squeezing fresh fruit or vegetables without the use of heat or solvents. Fruit and vegetable juices are more nutrient-dense and easier to absorb than smoothies. This is...</p>
                        </div>
                        <div className="productdetails-card">
                            <div className="product-quantity">
                                <button className="quantity-button" onClick={decreaseQuantity}>-</button>
                                <span className="quantity">{quantity}</span>
                                <button className="quantity-button" onClick={increaseQuantity}>+</button>
                            </div>
                            <div className="productdetails-addtocard">
                                <span >ADD TO CARD</span>
                            </div>
                            <div className="buynow-gach">
                                <div className="productdetails-buynow">
                                    <span>BUY IT NOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
