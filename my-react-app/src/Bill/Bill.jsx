import React from 'react';
import { useShoppingContext } from '../Context/ShoppingContext';
import { formatCurrency } from '../helpers/common';
import './Bill.scss'

const BillPage = () => {
  const { cartItems, totalPrice, customerInfo, orders } = useShoppingContext();
  console.log(orders);

  // Lấy đơn hàng cuối cùng từ danh sách đơn hàng
  const currentOrder = orders[orders.length - 1];

  // Kiểm tra xem có đơn hàng hiện tại không và hiển thị chi tiết nếu có
  const renderOrderDetails = () => {
    if (currentOrder) {
      return (
        <div className='bill-conten'>
          <h2 className='bill-h2'>Order Details</h2>
          <p className='bill-p'>Order ID: {currentOrder.id}</p>
          <p className='bill-p'>Order Date: {new Date(currentOrder.date).toLocaleString()}</p>
          <p className='bill-p'>Order Status: {currentOrder.status}</p>
          <h3 className='bill-h3'>Customer Information</h3>
          <p className='bill-p'>Name: {currentOrder.customer.name}</p>
          <p className='bill-p'>Email: {currentOrder.customer.email}</p>
          <p className='bill-p'>Address: {currentOrder.customer.address}</p>
          <h3 className='bill-h3'>Items Purchased</h3>
          {currentOrder.items.map((item, index) => (
            <div key={index} className='item-bill'>
              <p  className='bill-p'>{item.title} (Qty: {item.qty}) - {formatCurrency(item.price * item.qty)}</p>
            </div>
          ))}
          <div className='total-price-bill'>
            <h3 className='bill-price'>Total Price</h3>
            <p className='bill-p-price'>{formatCurrency(currentOrder.total)}</p>
          </div>
        </div>
      );
    } else {
      return <p  className='bill-p-fail'>No order found.</p>;
    }
  };

  return (
    <div className='Bill'>
       <div className='shipping-status'>
        <h2 className='Bill-title'>Shipping Status</h2>
        {/* Hiển thị trạng thái của đơn hàng hiện tại */}
        <p className='shipping-status-text'>{currentOrder ? currentOrder.status : 'No order found'}</p>
      </div>
      
      {/* Hiển thị chi tiết đơn hàng */}
      {renderOrderDetails()}
    </div>
  );
};

export default BillPage;


