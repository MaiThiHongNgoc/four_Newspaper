import React, {useState} from 'react'
import { dataProduct } from './Data/Data'
import './Product.scss'
import { Link, Outlet } from 'react-router-dom';
 

const Product = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
     <div className='product1'>
      <div className='product'>
      <h2>OUR BEST SELLER</h2>
      <div className="produc-gc">
      <p>__________________</p>
      </div>
      </div>
      <div className="product-link">
        <Link to="/newarrivals" className={activeLink === 'newarrivals' ? 'product-link1 hover' : 'product-link1'} onClick={() => handleLinkClick('newarrivals')}> New Arrivals</Link>
        <Link to="/best-sellers" className={activeLink === 'bestsellers' ? 'product-link2 hover' : 'product-link2'} onClick={() => handleLinkClick('bestsellers')}>Best Sellers</Link>
        <Link to="/top-rates" className={activeLink === 'toprates' ? 'product-link3 hover' : 'product-link3'} onClick={() => handleLinkClick('toprates')}>Top Rate</Link>
      </div>
   <Outlet/>
    </div>
  );
}

export default Product