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
        // Kiểm tra nếu addWishlistItem không phải là một function
        if (typeof addWishlistItem !== 'function') {
            console.error('addWishlistItem không phải là một function');
            return; // Không làm gì nếu không phải là một function
        }

        const existingItem = wishlistItems.find(item => item.id === product.id);
        if (existingItem) {
            setWishlistItems(wishlistItems.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            setWishlistItems([...wishlistItems, { ...product, qty: 1 }]);
        }
    };

    const removeWishlistItem = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    const increasetQty = (id) => {
        setWishlistItems(wishlistItems.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
    };

    const decreasetQty = (id) => {
        setWishlistItems(wishlistItems.map(item => {
            if (item.id === id) {
                return item.qty > 1 ? { ...item, qty: item.qty - 1 } : item;
            }
            return item;
        }).filter(item => item.qty !== 0));
    };

    const clearWishlist = () => {
        setWishlistItems([]);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems, // Add this line to provide the wishlist items to the context
                increasetQty,
                decreasetQty,
                addWishlistItem,
                removeWishlistItem,
                clearWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContext;
