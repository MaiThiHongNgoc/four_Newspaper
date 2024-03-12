import React from 'react'
import { dataProduct } from '../../../Data/DataSt'
import {Link} from 'react-router-dom'
import './Smoothies.scss'
import { useShoppingContext } from '../../../Context/ShoppingContext'

const Smoothies = () => {
  const { addCartItem } = useShoppingContext();
  return (
    <div className=" Smoothies-page">
      <div className="Contect-header">
             <div className="imgContectContainer">
                 <img className='imgContect' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
              </div>
        </div>
      <div className=' Smoothies-navbar'>
        <div className=' Smoothies-link-to'><Link to="/VegetableJuice">Vegetable Juice</Link></div>
        <div className=' Smoothies-link-to'><Link to="/Juice">Juice</Link></div>
        <div className=' Smoothies-link-to'><Link to="/Protein">Protein</Link></div>
        <div className=' Smoothies-link-to'><Link to="/Smoothies">Smoothies</Link></div>
      </div>

      
    
    <div className=" Smoothies-list">
    {dataProduct.map(product => (
        <div key={product.id} className=" Smoothies-card">
          <img src={product.img} alt={product.title} className=" Smoothies-image" />
          <div className=" Smoothies-details">
            <h2 className=" Smoothies-name">{product.title}</h2>
            <p className=" Smoothies-description">{product.description}</p>
            <p className=" Smoothies-price">${product.price}</p>
            <button className="add-to-cart-button-Smoothies" onClick={() => addCartItem(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Smoothies