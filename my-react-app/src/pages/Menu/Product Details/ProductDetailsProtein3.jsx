import React, { useState } from 'react';
import './ProductDetails.scss';
import { useShoppingContext } from '../../../Context/ShoppingContext';
import { dataProduct } from '../../../Data/DataSt';
import { useNavigate } from 'react-router-dom'; // Import useNavigate từ react-router-dom

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [largeImage, setLargeImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4K7x2eocmleB30pyPnU4nUu9QxKsaquZZg&usqp=CAU");
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
            title: "Banoffee Protein",
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
                                className={activeImg === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4K7x2eocmleB30pyPnU4nUu9QxKsaquZZg&usqp=CAU" ? "productdetails-imgmin1 hover" : "productdetails-imgmin1"}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4K7x2eocmleB30pyPnU4nUu9QxKsaquZZg&usqp=CAU"
                                alt=""
                                onClick={() => handleImageClick("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4K7x2eocmleB30pyPnU4nUu9QxKsaquZZg&usqp=CAU")}
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
