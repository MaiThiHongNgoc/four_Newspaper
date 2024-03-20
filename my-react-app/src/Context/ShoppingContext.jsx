import React, { createContext, useContext, useState, useEffect } from 'react';

// Tạo Context
const ShoppingContext = createContext({});

// Custom hook để sử dụng context
export const useShoppingContext = () => useContext(ShoppingContext);

// Component Provider
export const ShoppingContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const jsonCartData = localStorage.getItem('shopping_cart');
        return jsonCartData ? JSON.parse(jsonCartData) : [];
    });

    const [customerInfo, setCustomerInfo] = useState({ name: 'hongngoc', email: 'hongngoc200509@gmail.com', address: 'ninh binh' });
    const [orders, setOrders] = useState([]);
    const [orderStatus, setOrderStatus] = useState(""); // Thêm state để lưu trạng thái đơn hàng
     
    useEffect(() => {
        localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const cartQty = cartItems.reduce((qty, item) =>  qty + item.qty, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

    const updateCustomerInfo = (info) => {
        setCustomerInfo(info);
    };

    const placeOrder = () => {
        const deliveryTime = new Date(); // Lấy thời gian hiện tại
        deliveryTime.setMinutes(deliveryTime.getMinutes() + 60); // Thêm 60 phút để tính toán thời gian giao hàng

        const newOrder = {
            id: orders.length + 1,
            items: cartItems,
            customer: customerInfo,
            total: totalPrice,
            date: new Date().toISOString(),
            status:orderStatus,
            deliveryTime: deliveryTime.toISOString() // Thêm thời gian giao hàng dự kiến vào đơn hàng
        };
        setOrders([...orders, newOrder]);
        // Xóa giỏ hàng sau khi đặt hàng
        setCartItems([]);
    };

    const updateOrderStatus = (orderId, newStatus) => {
        setOrders(orders.map(order => {
            if (order.id === orderId) {
                return { ...order, status: newStatus };
            }
            return order;
        }));
    };

    const addCartItem = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    const removeCartItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const increaseQty = (id) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
    };

    const decreaseQty = (id) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                return item.qty > 1 ? { ...item, qty: item.qty - 1 } : item;
            }
            return item;
        }).filter(item => item.qty !== 0));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <ShoppingContext.Provider
            value={{
                cartItems,
                cartQty,
                totalPrice,
                increaseQty,
                decreaseQty,
                addCartItem,
                removeCartItem,
                clearCart,
                updateCustomerInfo,
                placeOrder,
                updateOrderStatus,
                orders,
                orderStatus,
                setOrderStatus
            }}
        >
            {children}
        </ShoppingContext.Provider>
    );
};

export default ShoppingContext;
