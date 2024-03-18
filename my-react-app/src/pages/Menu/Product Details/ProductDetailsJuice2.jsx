import React, { useState } from 'react';
import './ProductDetails.scss';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [largeImage, setLargeImage] = useState("https://bazaarvietnam.vn/wp-content/uploads/2022/03/harper-bazaar-cach-lam-nuoc-ep-dua-hau-2-e1647506440642.jpeg");
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
                        <p>Home-<span>Watermelon juice</span></p>
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
                                className={activeImg === "http://olivo.com.vn/wp-content/uploads/2021/03/nuoc-ep-tao-co-tac-dung-gi-2.png" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="http://olivo.com.vn/wp-content/uploads/2021/03/nuoc-ep-tao-co-tac-dung-gi-2.png"
                                alt=""
                                onClick={() => handleImageClick("http://olivo.com.vn/wp-content/uploads/2021/03/nuoc-ep-tao-co-tac-dung-gi-2.png")}
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
                            {/* Tương tự cho các ảnh còn lại */}
                        </div>
                    </div>
                    <div className="productdetails-info">
                        <div className="productdetails-gach">
                            <div className="productdetails-title">
                                <h2>Watermelon juice</h2>
                            </div>
                            <div className="productdetails-price">
                                <h3>$62.00 USD</h3>
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
