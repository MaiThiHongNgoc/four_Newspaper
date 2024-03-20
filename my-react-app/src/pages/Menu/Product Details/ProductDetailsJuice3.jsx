import React, { useState } from 'react';
import './ProductDetails.scss';
import { useShoppingContext } from '../../../Context/ShoppingContext';
import { dataProduct } from '../../../Data/DataSt';
import { useNavigate } from 'react-router-dom'; // Import useNavigate từ react-router-dom

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [largeImage, setLargeImage] = useState("https://hc.com.vn/i/ecommerce/media/ckeditor_3197317.jpg");
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
            title: "Pomegranate Juice",
            price: 63.00,
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
                        <p>Home-<span>Pomegranate juice</span></p>
                    </div>
                </div>
                <div className="productdetails-all">
                    <div className="productdetails-img">
                        <div className="productdetails-imgmax">
                            <img src={largeImage} alt="" />
                        </div>
                        <div className="productdetails-imgmin">
                            <img 
                                className={activeImg === "https://hc.com.vn/i/ecommerce/media/ckeditor_3197317.jpg" ? "productdetails-imgmin1 hover" : "productdetails-imgmin1"}
                                src="https://hc.com.vn/i/ecommerce/media/ckeditor_3197317.jpg"
                                alt=""
                                onClick={() => handleImageClick("https://hc.com.vn/i/ecommerce/media/ckeditor_3197317.jpg")}
                            />
                            <img 
                                className={activeImg === "https://truejuice.vn/articles/wp-content/uploads/2021/04/nuoc-ep-le-dao-thai-doc-to.jpg" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://truejuice.vn/articles/wp-content/uploads/2021/04/nuoc-ep-le-dao-thai-doc-to.jpg"
                                alt=""
                                onClick={() => handleImageClick("https://truejuice.vn/articles/wp-content/uploads/2021/04/nuoc-ep-le-dao-thai-doc-to.jpg")}
                            />
                             <img 
                                className={activeImg === "https://blog.ptlvina.com/wp-content/uploads/2021/02/nuoc-ep-nho-2.jpg" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://blog.ptlvina.com/wp-content/uploads/2021/02/nuoc-ep-nho-2.jpg"
                                alt=""
                                onClick={() => handleImageClick("https://blog.ptlvina.com/wp-content/uploads/2021/02/nuoc-ep-nho-2.jpg")}
                            />
                             <img 
                                className={activeImg === "https://quangon.vn/resources/2020/05/07/nuoc-ep-dau-tay-9.jpg" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://quangon.vn/resources/2020/05/07/nuoc-ep-dau-tay-9.jpg"
                                alt=""
                                onClick={() => handleImageClick("https://quangon.vn/resources/2020/05/07/nuoc-ep-dau-tay-9.jpg")}
                            />
                            {/* Tương tự cho các ảnh còn lại */}
                        </div>
                    </div>
                    <div className="productdetails-info">
                        <div className="productdetails-gach">
                        <div className="productdetails-size">
                                <span>Size</span>
                                <p className={activeLink === 'sizes' ? 'productdetails-size1 hover' : 'productdetails-size1'} onClick={() => handleLinkClick('sizes')}>S</p>
                                <h3 className={activeLink === 'sizem' ? 'productdetails-size2 hover' : 'productdetails-size2'} onClick={() => handleLinkClick('sizem')}>M</h3>
                            </div>
                            <div className="productdetails-title">
                                <h2>Pomegranate juice</h2>
                            </div>
                            <div className="productdetails-price">
                                <h3>$63.00 USD</h3>
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
