import React from 'react'
import Slide from './Slide/Slide'
import Banner from './Banner/Banner'
import Product from './Product/Product'
import OurBlogs from './OurBlogs/OurBlogs'
import BestSeller from './Product/BestSellers/BestSeller'
import TopRate from './Product/TopRates/TopRate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Conten = () => {
  return (
    <div>
        <Slide/>
        <Banner/>
        <Product/>
      
      <Routes>
        
        <Route path="/best-sellers" element={<BestSeller />} />
        <Route path="/top-rates" element={<TopRate />} />
        
      </Routes>
    
        <OurBlogs/>

    </div>
  )
}

export default Conten