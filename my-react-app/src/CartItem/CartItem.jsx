import React from 'react'
import { useShoppingContext } from '../Context/ShoppingContext'
import { formatCurrency } from '../helpers/common'
import { FaRegTrashCan } from "react-icons/fa6";

const CartItem = ({ id, title, price, qty, img }) => {
    const { increaseQty, decreaseQty, removeCartItem } = useShoppingContext();


    return (
        <tr>
            <td><img src={img} className="img-fluid rounded" alt="Product 1" /></td>
            <td><span className="item-name">{title}</span></td>
            <td><span className="item-quantity">{formatCurrency(price)} <i className="fa-solid fa-xmark"></i> {qty}</span>
                <button type="button" className="btn btn-sm btn-primary ms-4 me-1" onClick={() => decreaseQty(id)}><strong>-</strong></button>
                <button type="button" className="btn btn-sm btn-primary" onClick={() => increaseQty(id)}><strong>+</strong></button>
            </td>
            <td><span className="item-price">{formatCurrency(qty * price)}</span></td>
            <td>
                <button className="btn btn-sm btn-danger btn-remove" onClick={() => removeCartItem(id)}> <FaRegTrashCan /></button>
            </td>
        </tr>
    )
}

export default CartItem