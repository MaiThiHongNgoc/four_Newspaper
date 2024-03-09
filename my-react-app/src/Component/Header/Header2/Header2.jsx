import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header2.scss'
import 'react-icons'
import { CiHeart } from "react-icons/ci";
import CartItem from '../../../CartItem/CartItem';
import { useShoppingContext } from '../../../Context/ShoppingContext';
import { formatCurrency } from '../../../helpers/common';
import CartIcon from '../CartIcon';
import Search from '../../../pages/Search/Search';
import Register from '../../../pages/Register/Register';
import { LuLogOut } from "react-icons/lu";
const Header2 = () => {
    const { cartItems, cartQty, totalPrice } = useShoppingContext()
    // const [isMenuVisible, setIsMenuVisible] = useState(false);
    // const [currentCategory, setCurrentCategory] = useState('');
    // const [currentProduct, setCurrentProduct] = useState([]);
    // const products = {
    //     Juice: ["Orange Juice", "Apple Juice"], // Bạn có thể thêm một số sản phẩm mẫu vào đây để kiểm tra
    //     Protein: ["Whey Protein", "Plant Protein"],
    //     VegetableJuice: ["Carrot Juice", "Beet Juice"],
    //     Smoothies: ["Berry Smoothie", "Green Smoothie"],
    // };

    // const handleMouseEnter = (category) => {
    //     setCurrentCategory(category);
    //     setCurrentProduct(products[category]);
    //     setIsMenuVisible(true);
    //   };
    
    //   const handleMouseLeave = () => {
    //     setIsMenuVisible(false);
    //   };
    
    //   const handleMenuItemClick = (product) => {
    //     // Xử lý hành động khi người dùng chọn nước uống, ví dụ: chuyển hướng đến trang chi tiết sản phẩm
    //     console.log('Selected product:', product);
    //   };

    return (
        <div className='header-container'>
           
            <div className="navbar-header">
                <div className="navbar-header-home"> <Link to="/">HOME</Link></div>
                <div className="navbar-header-menu">
          <Link to="/Menu" >MENU</Link>
          {/* {isMenuVisible && (
            <div className="dropdown-content" onMouseEnter={() => setIsMenuVisible(true)} onMouseLeave={() => setIsMenuVisible(false)}>
              {Object.entries(products).map(([category, items], index) => (
                <div key={index} className="menu-category">
                  <strong>{category}</strong>
                  <ul>
                    {items.map((item, idx) => (
                      <li key={idx} onClick={() => handleMenuItemClick(item)}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )} */}
        </div>
                <div className="navbar-header-shop"> <Link to="/AboutUs">ABOUT</Link></div>
                <div className="navbar-header-pages"> <Link to="/Pages">CONTACT</Link></div>
                <div className="navbar-header-blogs"> <Link to="/Blogs">BLOGS</Link></div>

            </div> 
            <div className="logo-header">
                <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt="" />
            </div>
            <div className="components-header">
                <div className="icon-search"><Search /></div>
                <div className="icon-login"><Register /></div>
                <div className="icon-tym"><Link to="/Wishlist"><CiHeart className='icon-tym' /></Link></div>
                <div className="icon-cart">
                    <CartIcon/>
                    {/* <span>{cartQty} items</span> */}
                </div>
                <div className='icon-out'> <Link to="/Logout"><LuLogOut /></Link></div>
                </div>
        </div>
    );
}


export default Header2;