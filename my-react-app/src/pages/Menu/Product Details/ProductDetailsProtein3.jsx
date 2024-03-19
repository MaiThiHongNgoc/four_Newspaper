import React, { useState } from 'react';
import './ProductDetails.scss';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [largeImage, setLargeImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4K7x2eocmleB30pyPnU4nUu9QxKsaquZZg&usqp=CAU");
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
                        <p>Home-<span>Banoffee Protein</span></p>
                    </div>
                </div>
                <div className="productdetails-all">
                    <div className="productdetails-img">
                        <div className="productdetails-imgmax">
                            <img src={largeImage} alt="" />
                        </div>
                        <div className="productdetails-imgmin">
                            <img 
                                className={activeImg === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7LOBbPp11hktnh1aV95aL-t7sChh1aq4rQ&usqp=CAU" ? "productdetails-imgmin1 hover" : "productdetails-imgmin1"}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7LOBbPp11hktnh1aV95aL-t7sChh1aq4rQ&usqp=CAU"
                                alt=""
                                onClick={() => handleImageClick("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7LOBbPp11hktnh1aV95aL-t7sChh1aq4rQ&usqp=CAU")}
                            />
                            <img 
                                className={activeImg === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5s9RH1_qWjHR08vWMER9EU57139Ft7Ng49A&usqp=CAU" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5s9RH1_qWjHR08vWMER9EU57139Ft7Ng49A&usqp=CAU"
                                alt=""
                                onClick={() => handleImageClick("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5s9RH1_qWjHR08vWMER9EU57139Ft7Ng49A&usqp=CAU")}
                            />
                             <img 
                                className={activeImg === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhS9WfFAFWqMHrv7m3YFCBt4UDyvZh7V301w&usqp=CAU" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhS9WfFAFWqMHrv7m3YFCBt4UDyvZh7V301w&usqp=CAU"
                                alt=""
                                onClick={() => handleImageClick("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhS9WfFAFWqMHrv7m3YFCBt4UDyvZh7V301w&usqp=CAU")}
                            />
                             <img 
                                className={activeImg === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6esA9MI9BC9mvlz3MwspSZgvzhpgfAyupNYbMYwhCvfMX21ZmXLtovQ1voHHKszDuZQ&usqp=CAU" ? "productdetails-imgmin2 hover" : "productdetails-imgmin2"}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6esA9MI9BC9mvlz3MwspSZgvzhpgfAyupNYbMYwhCvfMX21ZmXLtovQ1voHHKszDuZQ&usqp=CAU"
                                alt=""
                                onClick={() => handleImageClick("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6esA9MI9BC9mvlz3MwspSZgvzhpgfAyupNYbMYwhCvfMX21ZmXLtovQ1voHHKszDuZQ&usqp=CAU")}
                            />
                            {/* Tương tự cho các ảnh còn lại */}
                        </div>
                    </div>
                    <div className="productdetails-info">
                        <div className="productdetails-gach">
                            <div className="productdetails-title">
                                <h2>Banoffee Protein</h2>
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
