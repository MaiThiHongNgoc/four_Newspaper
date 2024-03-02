import React from 'react'
import Slide from './Slide/Slide'
import Banner from './Banner/Banner'
import Product from './Product/Product'
import OurBlogs from './OurBlogs/OurBlogs'
import Product2 from './Product-2/Product2'
//import Section from '../../../Section/Section'
import Register from '../../Register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Conten = () => {
  return (
    <div>
        <Slide/>
        <Banner/>
        <Product/>
             
               <OurBlogs/>
               {/* <Section/> */}
        <Product2/>
        <Register/>
    </div>
  )
}

export default Conten