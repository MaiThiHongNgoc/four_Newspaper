import React from 'react'
import { dataProduct } from '../../../Data/DataRc'
import {Link} from 'react-router-dom'
import './VegetableJuice.scss'
import { useShoppingContext } from '../../../Context/ShoppingContext'

const VegetableJuice = () => {
  const { addCartItem } = useShoppingContext();
  return (
    <div className="VegetableJuice-page">
      <div className="Contect-header">
             <div className="imgContectContainer">
                 <img className='imgContect' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
              </div>
        </div>
      <div className='VegetableJuice-navbar'>
        <div className='VegetableJuice-link-to'><Link to="/VegetableJuice">Vegetable Juice</Link></div>
        <div className='VegetableJuice-link-to'><Link to="/Juice">Juice</Link></div>
        <div className='VegetableJuice-link-to'><Link to="/Protein">Protein</Link></div>
        <div className='VegetableJuice-link-to'><Link to="/Smoothies">Smoothies</Link></div>
      </div>

      
    
    <div className="VegetableJuice-list">
    {dataProduct.map(product => (
        <div key={product.id} className="VegetableJuice-card">
          <img src={product.img} alt={product.title} className="VegetableJuice-image" />
          <div className="VegetableJuice-details">
            <h2 className="VegetableJuice-name">{product.title}</h2>
            <p className="VegetableJuice-description">{product.description}</p>
            <p className="VegetableJuice-price">${product.price}</p>
            <button className="add-to-cart-button-VegetableJuice" onClick={() => addCartItem(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default VegetableJuice