  import React, { useState } from "react";
  import { Route, Link, Routes, BrowserRouter, Router } from 'react-router-dom';
  import './App.css'


  import Home from "./pages/Home/Home";
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
  import Wishlist2 from "./Wishlist/Wishlist2.jsx";
  import Header from "./Component/Header/Header1";
  import Footer from "./Component/Footer/Footer";
  import Blogs2 from "./pages/Blogs/Blog2";
  import Blogs3 from "./pages/Blogs/Blog3";
  import Register2 from "./pages/Registernow/Register2";
  import Bill from "./Bill/Bill.jsx";
  import PrivateRoute from "./PrivateRoute.js";
  import Logout from "./Logout.js";
  import Smoothies from "./pages/Menu/Smoothies/Smoothies.jsx"
  import Juice from "./pages/Menu/Juice/Juice.jsx"
  import Protein from "./pages/Menu/Protein/Protein.jsx"
  import VegetableJuice from "./pages/Menu/Vegetable Juice/VegetableJuice.jsx"
  import Blogs4 from "./pages/Blogs/Blog4";
  import Blogs5 from "./pages/Blogs/Blog5";
  import Blogs6 from "./pages/Blogs/Blog6";
  import LoginPage from "./pages/Register/Login.jsx";
  import Admin from "./Admin/Admin.jsx";
  import Evaluate from "./Evaluate/Evaluate.jsx";

  import ProductDetails40 from "./pages/Menu/Product Details/ProductDetails.jsx";
  //import { WishlistContextProvider } from "./Wishlist/WishlistContext.jsx";
  // import Register from "./pageis/Register/Register";
  function App() {


    return (
      <div>
        <BrowserRouter>
  {/* <WishlistContextProvider> */}
          <Header/> 
          <Routes>
            <Route path='/' element={<Home />} >
              <Route index path="newarrivals" element={<NewArrivals/>}/>
              <Route path="newarrivals" element={<NewArrivals/>}/>
              <Route path='best-sellers' element={<BestSeller />} />
              <Route path='top-rates' element={<TopRate />} />
              
            </Route>
            
            <Route path='/Register2' element={<Register2 />} />
            <Route path='/Login' element={<LoginPage />} />
            <Route path='/Admin' element={<Admin />} />
          


            <Route path='/Smoothies' element={<Smoothies />} />
            <Route path='/Juice' element={<Juice />} />
            <Route path='/Protein' element={<Protein />} />
            <Route path='/VegetableJuice' element={<VegetableJuice />} />
            <Route path='/ProductDetails/40' element={<ProductDetails40/>} />


            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/Pages' element={<Pages />}>
            </Route>
            


            <Route path='Blogs/blog6' element={<Blogs6/>} />
            <Route path='Blogs/blog5' element={<Blogs5 />} />
            <Route path='Blogs/blog4' element={<Blogs4 />} />
            <Route path='Blogs/blog3' element={<Blogs3 />} />
            <Route path='Blogs/blog2' element={<Blogs2 />} />
            <Route path='/Blogs' element={<Blogs />} > 

            </Route>


            <Route path='/ViewCart' element={<ViewCart />} />
            <Route path='/CheckOut' element={<PrivateRoute> <CheckOut /></PrivateRoute>} />
            <Route path='/Wishlist' element={<Wishlist />}/>
          
            <Route path='/Wishlist/wishlist2' element={<Wishlist2 />} />
            <Route path="/Bill" element={<Bill/>}/>
            <Route path="/Evaluate" element={<Evaluate/>}/>
            <Route path="/Logout" element={<Logout/>} />
            {/* <Route path='/Register' element={<Register />} /> */}
          </Routes>
          
          <Footer/>
          {/* </WishlistContextProvider> */}
        </BrowserRouter>
      </div>
    );
  }

  export default App;

