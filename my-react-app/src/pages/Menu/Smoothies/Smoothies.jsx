import React,{useState} from 'react'
import { dataProduct } from '../../../Data/DataSt'
import {Link} from 'react-router-dom'
import './Smoothies.scss'
import { useShoppingContext } from '../../../Context/ShoppingContext'

const Smoothies = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  const { addCartItem } = useShoppingContext();
  return (
    <div className=" Smoothies-page">
      <div className="Contect-header">
             <div className="imgContectContainer">
                 <img className='imgContect' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
              </div>
        </div>
      <div className=' Smoothies-navbar'>
      <Link to="/VegetableJuice" className={activeLink === 'vegatablejuice' ? 'Smoothies-navbar1 hover' : 'Smoothies-navbar1'} onClick={() => handleLinkClick('vegatablejuice')}> Vegatable Juice</Link>
        <Link to="/Juice" className={activeLink === 'juice' ? 'Smoothies-navbar2 hover' : 'Smoothies-navbar2'} onClick={() => handleLinkClick('juice')}>Juice</Link>
        <Link to="/Protein" className={activeLink === 'protein' ? 'Smoothies-navbar3 hover' : 'Smoothies-navbar3'} onClick={() => handleLinkClick('protein')}>Protein</Link>
        <Link to="/Smoothies" className={activeLink === 'smoothies ' ? 'Smoothies-navbar4 hover' : 'Smoothies-navbar4'} onClick={() => handleLinkClick('smoothies')}>Smoothies</Link>
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