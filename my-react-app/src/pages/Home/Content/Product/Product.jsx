import React, {useState} from 'react'
import { dataProduct } from './Data/Data'
import './Product.scss'
import { Link, Outlet } from 'react-router-dom';
 

const Product = () => {
  return (
     <div className='product1'>
      <div className='product'>
      <h2>OUR BEST SELLER</h2>
      <p>__________________</p>
      </div>
      <div className="product-link">
   <Link to="/newarrivals" className='product-link1'> New Arrivals</Link>
   <Link to="/best-sellers" className='product-link2'>Best Sellers</Link>
   <Link to="/top-rates" className='product-link3'>Top Rate</Link>
   <Outlet/>
    </div>
    </div>
  );
}

export default Product