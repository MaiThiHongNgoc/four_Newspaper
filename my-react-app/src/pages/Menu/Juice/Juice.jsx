import React from 'react'
import { dataProduct } from '../../../Data/DataHq'
import {Link} from 'react-router-dom'
import './Juice.scss'
import { useShoppingContext } from '../../../Context/ShoppingContext'

const Juice = () => {
  const { addCartItem } = useShoppingContext();
  return (
    <div className="juice-page">
      <div className="Contect-header">
             <div className="imgContectContainer">
                 <img className='imgContect' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
              </div>
        </div>
      <div className='juice-navbar'>
        <div className='juice-link-to'><Link to="/VegetableJuice">Vegetable Juice</Link></div>
        <div className='juice-link-to'><Link to="/Juice">Juice</Link></div>
        <div className='juice-link-to'><Link to="/Protein">Protein</Link></div>
        <div className='juice-link-to'><Link to="/Smoothies">Smoothies</Link></div>
      </div>
    
    <div className="juice-list">
    {dataProduct.map(product => (
        <div key={product.id} className="juice-card">
          <img src={product.img} alt={product.title} className="juice-image" />
          <div className="juice-details">
            <h2 className="juice-name">{product.title}</h2>
            <p className="juice-description">{product.description}</p>
            <p className="juice-price">${product.price}</p>
            <button className="add-to-cart-button-juice" onClick={() => addCartItem(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Juice