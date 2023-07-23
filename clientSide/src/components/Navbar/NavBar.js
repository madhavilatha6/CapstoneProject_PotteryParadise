import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
    <div className="navigation">
        <img className="addtocart"src="res" alt="no image" />
        <p id="home">Home</p>
        <p id='categary'><Link to="/product">Category</Link></p>
        <p id="categary">About Us</p>
        <p id='categary'>Contact Us</p>
        <img className="addtocart"src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-logo-137280611.jpg" alt="no image" />
    </div>
    )

}

export default Navbar;



