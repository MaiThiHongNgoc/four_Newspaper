import React, { Component } from "react";
import { Route, Link, Routes, BrowserRouter, Router } from 'react-router-dom';


import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
//import Search from "./pages/Search";

function App() {


  return (
    <div>
      <BrowserRouter>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About </Link></li>
          <li><Link to="/Product">Product</Link></li>
          <li><Link to="/Register">Register</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Register' element={<Register />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}


export default App;

