import React,{useState} from 'react'
import { dataProduct } from '../../../Data/DataRc'
import {Link} from 'react-router-dom'
import './VegetableJuice.scss'
import { useShoppingContext } from '../../../Context/ShoppingContext'

const VegetableJuice = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  const { addCartItem } = useShoppingContext();
  return (
    <div className="VegetableJuice-page">
      <div className="Contect-header">
             <div className="imgContectContainer">
                 <img className='imgContect' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
              </div>
        </div>
      <div className='VegetableJuice-navbar'>
      <Link to="/VegetableJuice" className={activeLink === 'vegatablejuice' ? 'VegetableJuice-navbar1 hover' : 'VegetableJuice-navbar1'} onClick={() => handleLinkClick('vegatablejuice')}> Vegatable Juice</Link>
        <Link to="/Juice" className={activeLink === 'juice' ? 'VegetableJuice-navbar2 hover' : 'VegetableJuice-navbar2'} onClick={() => handleLinkClick('juice')}>Juice</Link>
        <Link to="/Protein" className={activeLink === 'protein' ? 'VegetableJuice-navbar3 hover' : 'VegetableJuice-navbar3'} onClick={() => handleLinkClick('protein')}>Protein</Link>
        <Link to="/Smoothies" className={activeLink === 'smoothies ' ? 'VegetableJuice-navbar4 hover' : 'VegetableJuice-navbar4'} onClick={() => handleLinkClick('smoothies')}>Smoothies</Link>
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