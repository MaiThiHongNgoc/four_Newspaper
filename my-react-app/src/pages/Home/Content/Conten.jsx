import React from 'react'
import Slide from './Slide/Slide'
import Banner from './Banner/Banner'
import Product from './Product/Product'
import OurBlogs from './OurBlogs/OurBlogs'
import Product2 from './Product-2/Product2'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Conten = () => {
  return (
    <div>
        <Slide/>
        <Banner/>
        <Product/>
             
               <OurBlogs/>
        <Product2/>
       

    </div>
  )
}

export default Conten