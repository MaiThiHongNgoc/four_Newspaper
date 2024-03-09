import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import 'react-icons'
import { CiHeart } from "react-icons/ci";
import CartItem from '../../CartItem/CartItem';
import { useShoppingContext } from '../../Context/ShoppingContext';
import { formatCurrency } from '../../helpers/common';
import CartIcon from './CartIcon';
import Search from '../../pages/Search/Search';
import Register from '../../pages/Register/Register';
import { LuLogOut } from "react-icons/lu";
const Header = () => {
    const { cartItems, cartQty, totalPrice } = useShoppingContext()
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('');
    const [currentProduct, setCurrentProduct] = useState([]);
    const products = {
        Juice: [ {name:'- Vegetable Juice', path:'/VegetableJuice' },
        {name: "- Juice", path:'/Juice'}], // Bạn có thể thêm một số sản phẩm mẫu vào đây để kiểm tra
        Protein: [{path:'/Protein'}],
        Smoothies: [{path:'/Smoothies'}],
    };

    const handleMouseEnter = (category) => {
        setCurrentCategory(category);
        setCurrentProduct(products[category]);
        setIsMenuVisible(true);
      };
    
      const handleMouseLeave = () => {
        setIsMenuVisible(false);
      };
    
      const handleMenuItemClick = (product) => {
        // Xử lý hành động khi người dùng chọn nước uống, ví dụ: chuyển hướng đến trang chi tiết sản phẩm
        console.log('Selected product:', product);
      };
    return (
        <div className='header-container'>
            <div className="logo-header">
                <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657783401" alt="" />
            </div>
            <div className="navbar-header">
                <div className="navbar-header-home"> <Link to="/">HOME</Link></div>
                <div className="navbar-header-menu">
          <Link to="/Menu" onMouseEnter={() => setIsMenuVisible(true)} onMouseLeave={() => setIsMenuVisible(false)}>MENU</Link>
          {isMenuVisible && (
            <div className="dropdown-content" onMouseEnter={() => setIsMenuVisible(true)} onMouseLeave={() => setIsMenuVisible(false)}>
              {Object.entries(products).map(([category, items], index) => (
                <div key={category} className="menu-category">
                  <strong>{category}</strong>
                  <ul>
                    {items.map((item, idx) => (
                      <li key={item.name} >
                          <Link to={item.path} onClick={() => setIsMenuVisible(false)}>{item.name}</Link>
                        </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
                <div className="navbar-header-shop"> <Link to="/AboutUs">ABOUT</Link></div>
                <div className="navbar-header-pages"> <Link to="/Pages">CONTACT</Link></div>
                <div className="navbar-header-blogs"> <Link to="/Blogs">BLOGS</Link></div>
            </div>
            <div className="components-header">
                <div className="icon-search"><Search/></div>
                <div className="icon-login"><Register/> </div>
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


export default Header;
