import React, { useState } from 'react';
import './CheckOut.scss';
import { useShoppingContext } from './ShoppingContext.jsx';
import { formatCurrency } from '../helpers/common.js';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import BillPage from '../Bill/Bill.jsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CheckOut() {
    const { cartItems, totalPrice, placeOrder, setOrderStatus} = useShoppingContext();
    const [contactInfo, setContactInfo] = useState({
        emailOrPhone: '',
        emailOffers: false
    });
    const [deliveryInfo, setDeliveryInfo] = useState({
        country: 'US',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        saveInfo: false
    });
    const [paymentInfo, setPaymentInfo] = useState({
        paymentMethod: 'paypal'
    });
    const navigate = useNavigate();

    const handleContactChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setContactInfo(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const handleDeliveryChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setDeliveryInfo(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const {updateCustomerInfo} = useShoppingContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic khi người dùng nhấn nút "Submit" ở đây

        //tiến hành thanh toán dựa trên phương thức được chọn
        updateCustomerInfo({
            name: deliveryInfo.firstName + ' ' + deliveryInfo.lastName, // Ví dụ, tùy chỉnh theo cấu trúc của bạn
            email: contactInfo.emailOrPhone, // Giả sử emailOrPhone chứa email
            address: deliveryInfo.address + ', ' + deliveryInfo.city + ', ' + deliveryInfo.zipCode
        });
        
        if (paymentInfo.paymentMethod === 'cod') {
            // Ví dụ: Lưu thông tin đơn hàng vào cơ sở dữ liệu (nếu cần)
            // Sau đó chuyển hướng đến trang Hóa đơn/Thank You Page
            const orderDetails = {
                contactInfo,
                deliveryInfo,
                cartItems,
                totalPrice,
            };
            // Lưu orderDetails vào cơ sở dữ liệu hoặc state quản lý (tùy thuộc vào yêu cầu)
            // Giả định chúng ta đã lưu và có id của đơn hàng là '12345'
            //cập nhập trạng thái đơn hàng
            setOrderStatus("Pending");
            // tiến hành đặt hàng
            placeOrder();

            navigate('/Bill', { state: { orderDetails } }); // Chuyển hướng người dùng cùng với chi tiết đơn hàng
            //clearCart(); // Xóa giỏ hàng sau khi chuyển hướng
        }
    };

    return (
        <div className='checkoutpay'>
            <form onSubmit={handleSubmit} className='Formcheckout'>
                <h2>Contact </h2>
                <input
                    type="text"
                    name="emailOrPhone" className='CheckoutMail'
                    placeholder="Email or mobile phone number"
                    value={contactInfo.emailOrPhone}
                    onChange={handleContactChange}
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        name="emailOffers"
                        checked={contactInfo.emailOffers}
                        onChange={handleContactChange}
                    />
                    Email me with news and offers
                </label>

                <h2>Delivery</h2>
                <select
                    name="country" className='CheckoutUs'
                    value={deliveryInfo.country}
                    onChange={handleDeliveryChange}
                    required
                >
                    <option value="US" >United States</option>
                    {/* Thêm các quốc gia khác nếu cần */}
                </select>
                <input
                    type="text"
                    name="firstName" className='CheckoutLast'
                    placeholder="First name (optional)"
                    value={deliveryInfo.firstName}
                    onChange={handleDeliveryChange}
                />
                <input
                    type="text"
                    name="lastName" className='CheckoutFist'
                    placeholder="Last name"
                    value={deliveryInfo.lastName}
                    onChange={handleDeliveryChange}
                    required
                />
                <input
                    type="text"
                    name="address" className='CheckoutAddress'
                    placeholder="Address"
                    value={deliveryInfo.address}
                    onChange={handleDeliveryChange}
                    required
                />
                <input
                    type="text"
                    name="city" className='CheckoutCity'
                    placeholder="City"
                    value={deliveryInfo.city}
                    onChange={handleDeliveryChange}
                    required
                />
                <input
                    type="text"
                    name="zipCode" className='CheckoutZip'
                    placeholder="ZIP code"
                    value={deliveryInfo.zipCode}
                    onChange={handleDeliveryChange}
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        name="saveInfo"
                        checked={deliveryInfo.saveInfo}
                        onChange={handleDeliveryChange}
                    />
                    Save this information for next time
                </label>

                <h2>Payment</h2>
                <p className='Checkoutp1'>All transactions are secure and encrypted.</p>
                {/* Thêm phương thức thanh toán tại đây khi có thể */}
                 
                 <div className='payment-methods'>
                    <label>
                    <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={paymentInfo.paymentMethod === 'paypal'}
                            onChange={handlePaymentChange}
                        />
                        PayPal
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={paymentInfo.paymentMethod === 'cod'}
                            onChange={handlePaymentChange}
                        />
                        Thanh toán khi nhận hàng
                    </label>
                 </div>


                <PayPalScriptProvider options={{ "client-id": "AaBnf2BFQfhk9WnYPWUKaRwhZ7mhD-tIyoETQ_MGfW7Wp2rELB9L75eGu5QHigGTUTyMAVZ3BQxlvtww" }}>
                <div className="App-checkout">
    <h1>Thanh toán bằng PayPal</h1>
    <PayPalButtons
      style={{ layout: 'vertical' }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: `${totalPrice}`, // Sử dụng giá trị totalPrice từ context
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          alert(`Transaction completed by ${details.payer.name.given_name}!`);
        });
      }}
    />
  </div>
    </PayPalScriptProvider>
                <div className='checkout-bill'>
                    <button type="submit" className="Submit-bill">Submit</button>
                </div>
            </form>
            <div className="order-summary1">
                {cartItems.map(item => (
                    <div key={item.id} className="productCheckout">
                        <img src={item.img} alt={item.title} style={{ width: '100px', height: '100px', marginRight: '10px', border: '1px solid #ccc' }} />
                        <div className='CheckoutConten'>
                            <p className='CheckoutTitle' style={{ marginBottom: '0'}}>{item.title}</p>
                            <p className='CheckoutQty' style={{ marginBottom: '0'}}>Qty:{item.qty}</p>
                            <p className='CheckoutPrice' style={{ marginBottom: '0'}}>Price: {formatCurrency(item.price)}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className='totalCheckOut1'>
                <strong className='totalCheckOut12'>Total: {formatCurrency(totalPrice)}</strong>
            </div>
            
        </div>
    );
}
// checkout file 1235678923234234
export default CheckOut;

