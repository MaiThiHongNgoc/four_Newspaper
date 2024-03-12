import React,{useState} from 'react'
import { dataProduct } from '../../../Data/DataHq'
import {Link} from 'react-router-dom'
import './Juice.scss'
import { useShoppingContext } from '../../../Context/ShoppingContext'

const Juice = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  const { addCartItem } = useShoppingContext();
  return (
    <div className="juice-page">
      <div className="Contect-header">
             <div className="imgContectContainer">
                 <img className='imgContect' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
              </div>
        </div>
      <div className='juice-navbar'>
      <Link to="/VegetableJuice" className={activeLink === 'vegatablejuice' ? 'juice-navbar1 hover' : 'juice-navbar1'} onClick={() => handleLinkClick('vegatablejuice')}> Vegatable Juice</Link>
        <Link to="/Juice" className={activeLink === 'juice' ? 'juice-navbar2 hover' : 'juice-navbar2'} onClick={() => handleLinkClick('juice')}>Juice</Link>
        <Link to="/Protein" className={activeLink === 'protein' ? 'juice-navbar3 hover' : 'juice-navbar3'} onClick={() => handleLinkClick('protein')}>Protein</Link>
        <Link to="/Smoothies" className={activeLink === 'smoothies ' ? 'juice-navbar4 hover' : 'juice-navbar4'} onClick={() => handleLinkClick('smoothies')}>Smoothies</Link>
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