import React, { createContext, useContext, useState, useEffect } from 'react';

// Tạo Context
const ShoppingContext = createContext({});

// Custom hook để sử dụng context
export const useShoppingContext = () => {
    return useContext(ShoppingContext);
};

// Component Provider
export const ShoppingContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const jsonCartData = localStorage.getItem('shopping_cart');
        return jsonCartData ? JSON.parse(jsonCartData) : [];
    });

    useEffect(() => {
        // Lưu trữ dữ liệu vào localStorage mỗi khi cartItems thay đổi
        localStorage.setItem('shopping_cart', JSON.stringify(cartItems));

        // Thêm sự kiện để lưu trữ sản phẩm khi người dùng thoát trang
        const handleBeforeUnload = () => {
            localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
        };
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup handler khi component bị unmount
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [cartItems]);

    const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    const increaseQty = (id) => {
        const currentCartItem = cartItems.find(item => item.id === id);
        if (currentCartItem) {
            const newItems = cartItems.map(item => {
                if (item.id === id) {
                    return { ...item, qty: item.qty + 1 };
                } else {
                    return item;
                }
            });
            setCartItems(newItems);
        }
    };

    const decreaseQty = (id) => {
        const currentCartItem = cartItems.find(item => item.id === id);
        if (currentCartItem) {
            if (currentCartItem.qty === 1) {
                removeCartItem(id);
            } else {
                const newItems = cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, qty: item.qty - 1 };
                    } else {
                        return item;
                    }
                });
                setCartItems(newItems);
            }
        }
    };

    const addCartItem = (product) => {
        if (product) {
            const currentCartItem = cartItems.find(item => item.id === product.id);
            if (currentCartItem) {
                const newItems = cartItems.map(item => {
                    if (item.id === product.id) {
                        return { ...item, qty: item.qty + 1 };
                    } else {
                        return item;
                    }
                });
                setCartItems(newItems);
            } else {
                const newItem = { ...product, qty: 1 };
                setCartItems([...cartItems, newItem]);
            }
        }
    };

    const removeCartItem = (id) => {
        const newItems = cartItems.filter(item => item.id !== id);
        setCartItems(newItems);
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
                clearCart
            }}
        >
            {children}
        </ShoppingContext.Provider>
    );
};

export default ShoppingContext;
