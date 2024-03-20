  import React, { useState } from "react";
  import { Route, Link, Routes, BrowserRouter, Router } from 'react-router-dom';
  import './App.css'
  import axios from "axios";


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

  import ProductDetails1 from "./pages/Menu/Product Details/ProductDetailsVegatable1.jsx";
  import ProductDetails2 from "./pages/Menu/Product Details/ProductDetailsVegatable2.jsx";
  import ProductDetails3 from "./pages/Menu/Product Details/ProductDetailsVegatable3.jsx";
  import ProductDetails4 from "./pages/Menu/Product Details/ProductDetailsVegatable4.jsx";
  import ProductDetails5 from "./pages/Menu/Product Details/ProductDetailsVegatable5.jsx";
  import ProductDetails13 from "./pages/Menu/Product Details/ProductDetailsJuice1.jsx";
  import ProductDetails14 from "./pages/Menu/Product Details/ProductDetailsJuice2.jsx";
  import ProductDetails15 from "./pages/Menu/Product Details/ProductDetailsJuice3.jsx";
  import ProductDetails16 from "./pages/Menu/Product Details/ProductDetailsJuice4.jsx";
  import ProductDetails17 from "./pages/Menu/Product Details/ProductDetailsJuice5.jsx";
  import ProductDetails28 from "./pages/Menu/Product Details/ProductDetailsProtein1.jsx";
  import ProductDetails29 from "./pages/Menu/Product Details/ProductDetailsProtein2.jsx";
  import ProductDetails30 from "./pages/Menu/Product Details/ProductDetailsProtein3.jsx";
  import ProductDetails31 from "./pages/Menu/Product Details/ProductDetailsProtein4.jsx";
  import ProductDetails32 from "./pages/Menu/Product Details/ProductDetailsProtein5.jsx";

  import ProductDetails45 from "./pages/Menu/Product Details/ProductDetailsSmoothies5.jsx";
  import ProductDetails44 from "./pages/Menu/Product Details/ProductDetailsSmoothies4.jsx";
  import ProductDetails43 from "./pages/Menu/Product Details/ProductDetailsSmoothies3.jsx";
  import ProductDetails42 from "./pages/Menu/Product Details/ProductDetailsSmoothies2.jsx";
  import ProductDetails41 from "./pages/Menu/Product Details/ProductDetailsSmoothies1.jsx";
  import ProductDetails40 from "./pages/Menu/Product Details/ProductDetails.jsx";
  //import { WishlistContextProvider } from "./Wishlist/WishlistContext.jsx";
  // import Register from "./pageis/Register/Register";
  function App() {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = async (email, password, onLogin, navigate) => {
      if (!email.trim() || !password.trim()) {
          setErrorMessage('Please enter both email and password.');
          return;
      }
  
      try {
          const response = await axios.post('http://localhost:3000/admin/server/login.php', { email, password });
          
          if (response.data.status === 'success') {
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('userType', response.data.userType); // Save the user type
              onLogin(email, response.data.userType); // Update login state with email and user type
              // Redirect based on the user type
              navigate(response.data.userType === 'admin' ? '/Admin' : '/');
          } else {
              setErrorMessage(response.data.message);
          }
      } catch (error) {
          console.error('Login error:', error);
          setErrorMessage('An error occurred during login. Please try again later.');
      }
    };
  



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
            <Route path='/Login' element={<LoginPage onLogin={handleLogin} />} />
            <Route path='/Admin' element={<Admin />} />
          


            <Route path='/Smoothies' element={<Smoothies />} />
            <Route path='/Juice' element={<Juice />} />
            <Route path='/Protein' element={<Protein />} />
            <Route path='/VegetableJuice' element={<VegetableJuice />} />
            <Route path='/ProductDetails/1' element={<ProductDetails1/>} />
            <Route path='/ProductDetails/2' element={<ProductDetails2/>} />
            <Route path='/ProductDetails/3' element={<ProductDetails3/>} />
            <Route path='/ProductDetails/4' element={<ProductDetails4/>} />
            <Route path='/ProductDetails/5' element={<ProductDetails5/>} />
            <Route path='/ProductDetails/13' element={<ProductDetails13/>} />
            <Route path='/ProductDetails/14' element={<ProductDetails14/>} />
            <Route path='/ProductDetails/15' element={<ProductDetails15/>} />
            <Route path='/ProductDetails/16' element={<ProductDetails16/>} />
            <Route path='/ProductDetails/17' element={<ProductDetails17/>} />
            <Route path='/ProductDetails/28' element={<ProductDetails28/>} />
            <Route path='/ProductDetails/29' element={<ProductDetails29/>} />
            <Route path='/ProductDetails/30' element={<ProductDetails30/>} />
            <Route path='/ProductDetails/31' element={<ProductDetails31/>} />
            <Route path='/ProductDetails/32' element={<ProductDetails32/>} />

            <Route path='/ProductDetails/40' element={<ProductDetails40/>} />
            <Route path='/ProductDetails/41' element={<ProductDetails41/>} />
            <Route path='/ProductDetails/42' element={<ProductDetails42/>} />
            <Route path='/ProductDetails/43' element={<ProductDetails43/>} />
            <Route path='/ProductDetails/44' element={<ProductDetails44/>} />
            <Route path='/ProductDetails/45' element={<ProductDetails45/>} />



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

