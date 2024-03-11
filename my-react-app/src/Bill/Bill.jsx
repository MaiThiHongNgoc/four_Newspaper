import React from 'react';
import { useShoppingContext } from '../Context/ShoppingContext';
import { formatCurrency } from '../helpers/common';
import './Bill.scss'
// import { PiArrowFatLinesRightLight } from "react-icons/pi";
import { MdOutlineDownloadDone } from "react-icons/md";
import { PiCookingPotFill } from "react-icons/pi";
import { FaMotorcycle } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

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
          <h2 className='bill-h2'>Order Status: {currentOrder.status}</h2>
          <div className='bill-icon'>
            <div className='load-bill'><MdOutlineDownloadDone className='bill-icon-1'/> <p className='load-bill-p'>The order has been processed.</p></div>
          {/* <PiArrowFatLinesRightLight className='icon-bill-2'/> */}
          <div className='cook-bill'><PiCookingPotFill className='bill-icon-1'/><p className='cook-bill-p'>The seller is preparing.</p></div>
          {/* <PiArrowFatLinesRightLight /> */}
          <div className='bike-bill'><FaMotorcycle className='bill-icon-1'/> <p className='bike-bill-p'>On the way to deliver to you.</p></div>
          {/* <PiArrowFatLinesRightLight /> */}
          <div className='home-bill'><IoHome className='bill-icon-1'/></div>
          </div>
           
          <h2 className='bill-h2'>Order Details</h2>
          <p className='bill-p'>Order ID: {currentOrder.id}</p>
          <p className='bill-p'>Order Date: {new Date(currentOrder.date).toLocaleString()}</p>
          {/* Thêm hiển thị thời gian giao hàng dự kiến */}
          {currentOrder.deliveryTime && (
            <p className='bill-p'>Estimated Delivery Time: {new Date(currentOrder.deliveryTime).toLocaleString()}</p>
          )}
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


