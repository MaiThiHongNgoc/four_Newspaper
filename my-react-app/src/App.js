import React, { useState } from "react";
import { Route, Link, Routes, BrowserRouter, Router } from 'react-router-dom';
import './App.css'


import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import AboutUs from "./pages/Shop/AboutUs";
import Pages from "./pages/Pages/Pages";
import Blogs from "./pages/Blogs/Blogs";
import NewArrivals from "./pages/Home/Content/Product/NewArrivals/NewArrivals";
//import Search from "./pages/Search";
import BestSeller from "./pages/Home/Content/Product/BestSellers/BestSeller";
import TopRate from "./pages/Home/Content/Product/TopRates/TopRate";
import ViewCart from "./Context/ViewCart";
import CheckOut from "./Context/CheckOut";
import Wishlist from "./Wishlist/Wishlist";
import Header from "./Component/Header/Header1";
import Footer from "./Component/Footer/Footer";
import Blogs2 from "./pages/Blogs/Blog2";
import Blogs3 from "./pages/Blogs/Blog3";
// import Register from "./pageis/Register/Register";
function App() {


  return (
    <div>
      <BrowserRouter>

        <Header/>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route index path="newarrivals" element={<NewArrivals/>}/>
            <Route path="newarrivals" element={<NewArrivals/>}/>
            <Route path='best-sellers' element={<BestSeller />} />
            <Route path='top-rates' element={<TopRate />} />
            
          </Route>
          <Route path='/Menu' element={<Menu />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Pages' element={<Pages />}>
          </Route>
          <Route path='/Blogs/blog3' element={<Blogs3 />} />
          <Route path='/Blogs/blog2' element={<Blogs2 />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/ViewCart' element={<ViewCart />} />
          <Route path='/CheckOut' element={<CheckOut />} />
          <Route path='/Wishlist' element={<Wishlist />} />
          {/* <Route path='/Register' element={<Register />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

