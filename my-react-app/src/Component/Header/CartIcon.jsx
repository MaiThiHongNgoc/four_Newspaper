import React, { useState } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';
import CartItem from '../../CartItem/CartItem'; 
import { formatCurrency } from '../../helpers/common';
import { useShoppingContext } from '../../Context/ShoppingContext';
import './CartIcon.scss'

function CartIcon({ cartItems, totalPrice }) {
    const {  cartQty,  } = useShoppingContext();
    // Trạng thái để kiểm soát việc hiển thị của dropdown
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Xử lý click để toggle dropdown
    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

    return (
        <div className="icon-cart" onClick={toggleDropdown}>
            <MdOutlineShoppingBag />
            {cartQty > 0 && <span className="cart-quantity">{cartQty}</span>}
            {isDropdownVisible && (
                <div className="cart-dropdown">
                    {cartItems && Array.isArray(cartItems) && cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                    <div className="cart-total">
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
