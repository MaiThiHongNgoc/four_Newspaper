import React, { useState } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../helpers/common';
import { useShoppingContext } from '../../Context/ShoppingContext';
import './CartIcon.scss';

function CartIcon({ cartItems, totalPrice }) {
    const { cartQty } = useShoppingContext();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

    return (
        <div className="icon-cart" onClick={toggleDropdown}>
            <MdOutlineShoppingBag />
            {cartQty > 0 && <span className="cart-quantity">{cartQty}</span>}
            {isDropdownVisible && (
                <div className="cart-dropdown">
                    {cartItems && Array.isArray(cartItems) && cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.img} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <p className="cart-item-name">{item.title}</p>
                                    <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                    <p className="cart-item-price">Price: {formatCurrency(item.price)}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                    <div className="cart-total">
                        <span>Quantity: {cartQty}</span>
                        <strong>Total: {formatCurrency(totalPrice)}</strong>
                    </div>
                    <Link to="/checkout" className="btn btn-primary checkout-button">
                        Checkout
                    </Link>
                </div>
            )}
        </div>
    );
}

export default CartIcon;


// function CartIcon({ cartItems, totalPrice }) {
//     const {  cartQty,  } = useShoppingContext();
//     // Trạng thái để kiểm soát việc hiển thị của dropdown
//     const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//     // Xử lý click để toggle dropdown
//     const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

//     return (
//         <div className="icon-cart" onClick={toggleDropdown}>
//             <MdOutlineShoppingBag />
//             {cartQty > 0 && <span className="cart-quantity">{cartQty}</span>}
//             {isDropdownVisible && (
//                 <div className="cart-dropdown">
//                     {cartItems && Array.isArray(cartItems) && cartItems.length > 0 ? (
//                         cartItems.map(item => (
//                             <CartItem key={item.id} item={item} />
                            
//                         ))
//                     ) : (
//                     //     <div key={item.id} className="cart-item">
//                     //     <img src={item.image} alt={item.name} className="cart-item-image" />
//                     //     <div className="cart-item-details">
//                     //         <p className="cart-item-name">{item.name}</p>
//                     //         <p className="cart-item-quantity">Quantity: {item.quantity}</p>
//                     //         <p className="cart-item-price">Price: {formatCurrency(item.price)}</p>
//                     //     </div>
//                     // </div>
//                     <p>Your cart is empty.</p>
//                     )}
//                     <span> Quantity: {cartQty}</span>
//                     <div className="cart-total">
//                         <strong>Total: {formatCurrency(totalPrice)}</strong>
//                     </div>
//                     <Link to="/checkout" className="btn btn-primary checkout-button">
//                         Checkout
//                     </Link>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default CartIcon;
