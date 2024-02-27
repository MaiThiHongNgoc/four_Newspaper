import React, { Component } from "react";
import { Route, Link, Routes, BrowserRouter, Router } from 'react-router-dom';


import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Shop from "./pages/Shop/Shop";
import Pages from "./pages/Pages/Pages";
import Blogs from "./pages/Blogs/Blogs";
import NewArrivals from "./pages/Home/Content/Product/NewArrivals/NewArrivals";
//import Search from "./pages/Search";
import BestSeller from "./pages/Home/Content/Product/BestSellers/BestSeller";
import TopRate from "./pages/Home/Content/Product/TopRates/TopRate";
function App() {


  return (
    <div>
      <BrowserRouter>


        <Routes>
          <Route path='/' element={<Home />} >
            <Route index path="newarrivals" element={<NewArrivals/>}/>
            <Route path="newarrivals" element={<NewArrivals/>}/>
            <Route path='best-sellers' element={<BestSeller />} />
            <Route path='top-rates' element={<TopRate />} />
            
          </Route>
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Pages' element={<Pages />} />
          <Route path='/Blogs' element={<Blogs />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}


export default App;

