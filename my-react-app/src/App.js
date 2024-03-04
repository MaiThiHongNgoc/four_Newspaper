import React, { useState } from "react";
import { Route, Link, Routes, BrowserRouter, Router } from 'react-router-dom';
import './App.css'


import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Shop from "./pages/Shop/Shop";
import Pages from "./pages/Pages/Pages";
import Blogs from "./pages/Blogs/Blogs";
import NewArrivals from "./pages/Home/Content/Product/NewArrivals/NewArrivals";
import ContectUs from "./pages/Pages/ContectUs/ContectUs";
import AboutUs from "./pages/Pages/AboutUs/AboutUs";
//import Search from "./pages/Search";
import BestSeller from "./pages/Home/Content/Product/BestSellers/BestSeller";
import TopRate from "./pages/Home/Content/Product/TopRates/TopRate";
import ViewCart from "./Context/ViewCart";
import CheckOut from "./Context/CheckOut";
import Wishlist from "./Wishlist/Wishlist";
import Header from "./Component/Header/Header1";
import Footer from "./Component/Footer/Footer";
// import Register from "./pages/Register/Register";
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
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Pages' element={<PagesWithTooltip />}>
                <Route path="contact-us" element={<ContectUs/>}>Contact Us</Route>
                <Route path="about-us" element={<AboutUs/>}>About Us</Route>
          </Route>
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


function PagesWithTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    // <div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
    <div onMouseEnter={() => { setShowTooltip(true); console.log('Mouse Enter'); }} onMouseLeave={() => { setShowTooltip(false); console.log('Mouse Leave'); }}>

      <Pages />
      {/* {showTooltip && (
            <div className="tooltip">
              <div className={`tooltip-content ${showTooltip ? 'show' : ''}`}>
                <Link to="/Pages/contact-us">Contact Us</Link>
                <Link  to="/Pages/contact-us" >About Us</Link>
              </div>
           </div>
      )} */}
    </div>
  );
}



export default App;

