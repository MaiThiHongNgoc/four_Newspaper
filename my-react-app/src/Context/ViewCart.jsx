import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShoppingContext } from './ShoppingContext';
import { formatCurrency } from '../helpers/common';
import './ViewCart.scss'
import { FaRegTrashCan } from "react-icons/fa6";
import Header from '../Component/Header/Header1';
import Footer from '../Component/Footer/Footer';

const ViewCart = () => {
    const navigate = useNavigate();
    const { cartItems, totalPrice, increaseQty, decreaseQty, removeCartItem, clearCart } = useShoppingContext();

    // Kiểm tra cartItems trước khi sử dụng map()
    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
        return (
            <div>
                <Header/>
                <div><h3 className='Cart-shopping'>Your cart is empty</h3>
                <Link to="/" className='Cart-shopping-to'>Go back to shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <div>
        <Header/>
        <div className="row">
            <h3>Checkout</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.img} className="img-fluid rounded" alt={item.title} /></td>
                            <td>{item.title}</td>
                            <td>{formatCurrency(item.price)}</td>
                            <td>
                                <button type="button" className="btn btn-sm btn-primary ms-3 me-1" onClick={() => decreaseQty(item.id)}><strong>-</strong></button>
                                {item.qty}
                                <button type="button" className="btn btn-sm btn-primary" onClick={() => increaseQty(item.id)}><strong>+</strong></button>
                            </td>
                            <td>{formatCurrency(item.price * item.qty)}</td>
                            <td>
                                <button className="btn btn-sm btn-danger btn-remove" onClick={() => removeCartItem(item.id)}>
                                    <FaRegTrashCan />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="col-md-12">
                <span className="float-end me-2"><strong>Total: {formatCurrency(totalPrice)}</strong></span>
            </div>
            <div className="col-md-12 mt-5">
                <Link to="/Shop" className="btn btn-sm btn-primary float-start">Continue shopping</Link>
                <button className="btn btn-sm btn-success float-end me-2 d-block" onClick={() => {
                    clearCart();
                    navigate('/');
                }}>Place Order</button>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default ViewCart;
