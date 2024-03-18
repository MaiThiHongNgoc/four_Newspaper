import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../helpers/common';
import { useShoppingContext } from '../../Context/ShoppingContext';
import './CartIcon.scss';

function CartIcon() {
    const { cartQty, cartItems, totalPrice } = useShoppingContext();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

    useEffect(() => {
        // Update UI if needed when cartItems change
    }, [cartItems, cartQty, totalPrice]);

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
                                    <p className="cart-item-quantity">Quantity: {item.qty}</p>
                                    <p className="cart-item-price">Price: {formatCurrency(item.price)}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                    <div className="cart-total">
                        <strong>Total: {formatCurrency(totalPrice)}</strong>
                    </div>
                    <Link to="/ViewCart" className="btn1 btn-primary1 checkout-button1">
                        View Cart
                    </Link>
                    <Link to="/CheckOut" className="btn1 btn-primary1 checkout-button1">
                        Check Out
                    </Link>
                </div>
            )}
        </div>
    );
}

export default CartIcon;
