import React from 'react'
import { dataProduct } from './Data/Data'
import './Product.scss'

const Product = () => {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-container">
        {dataProduct.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product