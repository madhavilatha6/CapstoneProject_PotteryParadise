import React from 'react';
import './Routes.css';
import Navbar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import Products from '../Product/Product';
// import { Router } from 'express'

function Routes() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}

export default Routes;
