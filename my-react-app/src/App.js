import React, { Component } from "react";
import { Route, Link, Routes, BrowserRouter, Router } from 'react-router-dom';


import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Shop from "./pages/Shop/Shop";
import Pages from "./pages/Pages/Pages";
import Blogs from "./pages/Blogs/Blogs";
//import Search from "./pages/Search";

function App() {


  return (
    <div>
      <BrowserRouter>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Menu">Menu </Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/Pages">Pages</Link></li>
          <li><Link to="/Blogs">Blogs</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
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

