import React from 'react'
import { dataProduct } from '../../../Data/DataPr.js'
import {Link} from 'react-router-dom'
import './Protein.scss'
import { useShoppingContext } from '../../../Context/ShoppingContext'

const Protein = () => {
  const { addCartItem } = useShoppingContext();
  return (
    <div className="Protein-page">
      <div className="Contect-header">
             <div className="imgContectContainer">
                 <img className='imgContect' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
              </div>
        </div>
      <div className='Protein-navbar'>
        <div className='Protein-link-to'><Link to="/VegetableJuice">Vegetable Juice</Link></div>
        <div className='Protein-link-to'><Link to="/Juice">Juice</Link></div>
        <div className='Protein-link-to'><Link to="/Protein">Protein</Link></div>
        <div className='Protein-link-to'><Link to="/Smoothies">Smoothies</Link></div>
      </div>

      
    
    <div className="Protein-list">
    {dataProduct.map(product => (
        <div key={product.id} className="Protein-card">
          <img src={product.img} alt={product.title} className="Protein-image" />
          <div className="Protein-details">
            <h2 className="Protein-name">{product.title}</h2>
            <p className="Protein-description">{product.description}</p>
            <p className="Protein-price">${product.price}</p>
            <button className="add-to-cart-button-Protein" onClick={() => addCartItem(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Protein