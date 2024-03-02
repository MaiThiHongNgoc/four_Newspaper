import React, { useState } from 'react';
import './CheckOut.scss';
import { useShoppingContext } from './ShoppingContext';
import { formatCurrency } from '../helpers/common';

function CheckOut() {
    const { cartItems, totalPrice} = useShoppingContext();
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
        paymentMethod: ''
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic khi người dùng nhấn nút "Submit" ở đây
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

export default CheckOut;

