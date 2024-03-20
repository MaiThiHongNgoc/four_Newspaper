// Trong tệp WishlistContext.js

import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext({});
export const useWishlistContext = () => useContext(WishlistContext);

export const WishlistContextProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const jsonWishlistData = localStorage.getItem('wishlist_item');
        return jsonWishlistData ? JSON.parse(jsonWishlistData) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlist_item', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addWishlistItem = (product) => {
        const existingItem = wishlistItems.find(item => item.id === product.id);
        if (!existingItem) {
            setWishlistItems([...wishlistItems, { ...product }]);
        }
    };

    const removeWishlistItem = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    const clearWishlist = () => {
        setWishlistItems([]);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                addWishlistItem,
                removeWishlistItem,
                clearWishlist // Đảm bảo rằng removeWishlistItem được truyền vào Provider
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};
