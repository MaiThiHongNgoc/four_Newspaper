import React, { useState } from 'react';
import './ProductDetails.scss';
import { useShoppingContext } from '../../../Context/ShoppingContext';
import { dataProduct } from '../../../Data/DataSt';
import { useNavigate } from 'react-router-dom'; // Import useNavigate từ react-router-dom

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [largeImage, setLargeImage] = useState("https://desero-store-demo.myshopify.com/cdn/shop/products/15.1.png?v=1656902928");
    const [activeImg, setActiveImg] = useState(null);
    const [activeLink, setActiveLink] = useState(null);
    const { addCartItem } = useShoppingContext();
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    const handleImageClick = (newSrc) => {
        setLargeImage(newSrc);
        setActiveImg(newSrc);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        addCartItem({
            id: dataProduct.id,
            title: "Blueberry Smoothies",
            price: 56.00,
            qty: quantity,
            img: largeImage
        });

        // Sau khi thêm sản phẩm vào giỏ hàng, điều hướng đến trang giỏ hàng
        navigate();
    };
    return (
        <div>
            <div className='producthome'>
                <div className='textproduct'>
                    <div className="productdetails-crumb">
                        <p>Home-<span>Blueberry Smoothies</span></p>
                    </div>
                </div>
                <div className="productdetails-all">
                    <div className="productdetails-img">
                        <div className="productdetails-imgmax">
                            <img src={largeImage} alt="" />
                        </div>
                        <div className="productdetails-imgmin">
                            <img 
                                className={activeImg === "https://desero-store-demo.myshopify.com/cdn/shop/products/15.1.png?v=1656902928" ? "productdetails-imgmin1 hover" : "productdetails-imgmin1"}
                                src="https://desero-store-demo.myshopify.com/cdn/shop/products/15.1.png?v=1656902928"
                                alt=""
                                onClick={() => handleImageClick("https://desero-store-demo.myshopify.com/cdn/shop/products/15.1.png?v=1656902928")}
                            />
                            <img 
                                className={activeImg === "https://desero-store-demo.myshopify.com/cdn/shop/products/10.3.png?v=1656903572" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://desero-store-demo.myshopify.com/cdn/shop/products/10.3.png?v=1656903572"
                                alt=""
                                onClick={() => handleImageClick("https://desero-store-demo.myshopify.com/cdn/shop/products/10.3.png?v=1656903572")}
                            />
                             <img 
                                className={activeImg === "https://www.upstateramblings.com/wp-content/uploads/2016/09/apple-smoothie-4-of-6.jpg" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://www.upstateramblings.com/wp-content/uploads/2016/09/apple-smoothie-4-of-6.jpg"
                                alt=""
                                onClick={() => handleImageClick("https://www.upstateramblings.com/wp-content/uploads/2016/09/apple-smoothie-4-of-6.jpg")}
                            />
                             <img 
                                className={activeImg === "https://www.jessicagavin.com/wp-content/uploads/2020/06/mango-smoothie-9-1024x1536.jpg" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://www.jessicagavin.com/wp-content/uploads/2020/06/mango-smoothie-9-1024x1536.jpg"
                                alt=""
                                onClick={() => handleImageClick("https://www.jessicagavin.com/wp-content/uploads/2020/06/mango-smoothie-9-1024x1536.jpg")}
                            />
                            {/* Tương tự cho các ảnh còn lại */}
                        </div>
                    </div>
                    <div className="productdetails-info">
                        <div className="productdetails-gach">
                            <div className="productdetails-title">
                                <h2>Raspberry Smoothies</h2>
                            </div>
                            <div className="productdetails-price">
                                <h3>$56.00 USD</h3>
                            </div>
                        </div>
                        <div className="productdetails-text">
                            <p>Add more vitamins Juice is a natural solution containing tissues from fruits or vegetables. Juice is created mechanically by squeezing or squeezing or squeezing fresh fruit or vegetables without the use of heat or solvents. Fruit and vegetable juices are more nutrient-dense and easier to absorb than smoothies. This is...</p>
                        </div>
                        <div className="productdetails-card">
                        <div className="productdetails-size">
                                <span>Size</span>
                                <p className={activeLink === 'sizes' ? 'productdetails-size1 hover' : 'productdetails-size1'} onClick={() => handleLinkClick('sizes')}>S</p>
                                <h3 className={activeLink === 'sizem' ? 'productdetails-size2 hover' : 'productdetails-size2'} onClick={() => handleLinkClick('sizem')}>M</h3>
                            </div>
                            <div className="product-quantity">
                                <button className="quantity-button" onClick={decreaseQuantity}>-</button>
                                <span className="quantity">{quantity}</span>
                                <button className="quantity-button" onClick={increaseQuantity}>+</button>
                            </div>
                            <div className="productdetails-addtocard" onClick={handleAddToCart}>
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
