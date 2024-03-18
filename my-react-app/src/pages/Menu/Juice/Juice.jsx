import React,{useState} from 'react'
import { dataProduct2} from '../../../Data/DataHq'
import {Link} from 'react-router-dom'
import './Juice.scss'
import { useShoppingContext } from '../../../Context/ShoppingContext'
import Product2 from '../../Home/Content/Product-2/Product2'

const Juice = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  const { addCartItem } = useShoppingContext();
  return (
    <div className="juice-page">

        <div className="contect-title">
          <div className="contect-name">
            <h2 className="contect-h2">Products</h2>
          </div>
        </div>
      
      <div className='juice-navbar'>
      <Link to="/VegetableJuice" className={activeLink === 'vegatablejuice' ? 'juice-navbar1 hover' : 'juice-navbar1'} onClick={() => handleLinkClick('vegatablejuice')}> Vegatable Juice</Link>
        <Link to="/Juice" className={activeLink === 'juice' ? 'juice-navbar2 hover' : 'juice-navbar2'} onClick={() => handleLinkClick('juice')}>Juice</Link>
        <Link to="/Protein" className={activeLink === 'protein' ? 'juice-navbar3 hover' : 'juice-navbar3'} onClick={() => handleLinkClick('protein')}>Protein</Link>
        <Link to="/Smoothies" className={activeLink === 'smoothies ' ? 'juice-navbar4 hover' : 'juice-navbar4'} onClick={() => handleLinkClick('smoothies')}>Smoothies</Link>
      </div>

      
    
    <div className="juice-list">
    {dataProduct2.map(product2 => (
        <div key={product2.id} className="juice-card">
          <img src={product2.img} alt={product2.title} className="juice-image" />
          <div className="juice-details">
            <h2 className="juice-name">{product2.title}</h2>
            <p className="juice-description">{product2.description}</p>
            <p className="juice-price">${product2.price}</p>
            <button className="add-to-cart-button-juice" onClick={() => addCartItem(product2)}>Add to Cart</button>
            <Link className="link-smoothies" to={`/ProductDetails/${product2.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Juice