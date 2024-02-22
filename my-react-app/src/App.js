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

