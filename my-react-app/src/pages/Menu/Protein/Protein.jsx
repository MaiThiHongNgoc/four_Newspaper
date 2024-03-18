import React,{useState} from 'react'
import { dataProduct3 } from '../../../Data/DataPr.js'
import {Link} from 'react-router-dom'
import './Protein.scss'
import { useShoppingContext } from '../../../Context/ShoppingContext'

const Protein = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  const { addCartItem } = useShoppingContext();
  return (
    <div className="Protein-page">
      
        <div className="contect-title">
          <div className="contect-name">
            <h2 className="contect-h2">Products</h2>
          </div>
        </div>
      
      <div className='Protein-navbar'>
        <Link to="/VegetableJuice" className={activeLink === 'vegatablejuice' ? 'Protein-navbar1 hover' : 'Protein-navbar1'} onClick={() => handleLinkClick('vegatablejuice')}> Vegatable Juice</Link>
        <Link to="/Juice" className={activeLink === 'juice' ? 'Protein-navbar2 hover' : 'Protein-navbar2'} onClick={() => handleLinkClick('juice')}>Juice</Link>
        <Link to="/Protein" className={activeLink === 'protein' ? 'Protein-navbar3 hover' : 'Protein-navbar3'} onClick={() => handleLinkClick('protein')}>Protein</Link>
        <Link to="/Smoothies" className={activeLink === 'smoothies ' ? 'Protein-navbar4 hover' : 'Protein-navbar4'} onClick={() => handleLinkClick('smoothies')}>Smoothies</Link>
      </div>

      

    <div className="Protein-list">
    {dataProduct3.map(product3 => (
        <div key={product3.id} className="Protein-card">
          <img src={product3.img} alt={product3.title} className="Protein-image" />
          <div className="Protein-details">
            <h2 className="Protein-name">{product3.title}</h2>
            <p className="Protein-description">{product3.description}</p>
            <p className="Protein-price">${product3.price}</p>
            <button className="add-to-cart-button-Protein" onClick={() => addCartItem(product3)}>Add to Cart</button>
            <Link className="link-smoothies" to={`/ProductDetails/${product3.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Protein