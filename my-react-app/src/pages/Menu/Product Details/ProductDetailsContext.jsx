import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  return (
    <div>
      {/* Các phần tử khác trong trang sản phẩm */}
      <ProductQuantity
        quantity={quantity}
        onDecrease={decreaseQuantity}
        onIncrease={increaseQuantity}
      />
    </div>
  );
}

export default ProductDetails;
