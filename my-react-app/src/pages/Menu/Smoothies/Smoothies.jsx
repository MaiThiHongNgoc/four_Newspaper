import React,{useState} from 'react'
import { dataProduct4 } from '../../../Data/DataSt'
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
      
      <div className="contect-title">
          <div className="contect-name">
            <h2 className="contect-h2">Products</h2>
          </div>
        </div>

      <div className=' Smoothies-navbar'>
      <Link to="/VegetableJuice" className={activeLink === 'vegatablejuice' ? 'Smoothies-navbar1 hover' : 'Smoothies-navbar1'} onClick={() => handleLinkClick('vegatablejuice')}> Vegatable Juice</Link>
        <Link to="/Juice" className={activeLink === 'juice' ? 'Smoothies-navbar2 hover' : 'Smoothies-navbar2'} onClick={() => handleLinkClick('juice')}>Juice</Link>
        <Link to="/Protein" className={activeLink === 'protein' ? 'Smoothies-navbar3 hover' : 'Smoothies-navbar3'} onClick={() => handleLinkClick('protein')}>Protein</Link>
        <Link to="/Smoothies" className={activeLink === 'smoothies ' ? 'Smoothies-navbar4 hover' : 'Smoothies-navbar4'} onClick={() => handleLinkClick('smoothies')}>Smoothies</Link>
      </div>

      
    
    <div className=" Smoothies-list">
    {dataProduct4.map(product4 => (
        <div key={product4.id} className=" Smoothies-card">
          <img src={product4.img} alt={product4.title} className=" Smoothies-image" />
          <div className=" Smoothies-details">
            <h2 className=" Smoothies-name">{product4.title}</h2>
            <p className=" Smoothies-description">{product4.description}</p>
            <p className=" Smoothies-price">${product4.price}</p>
            <button className="add-to-cart-button-Smoothies" onClick={() => addCartItem(product4)}>Add to Cart</button>
            <Link className="link-smoothies" to={`/ProductDetails/${product4.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Smoothies