import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
    <div className="navigation">
        <div>
        <img className="addtocart1"src="resources/name2.png" alt="no image" />
        </div>
        <p id="home">Home</p>
        <p id='categary'><Link to="/product">Category</Link></p>
        <p id="categary">About Us</p>
        <p id='categary'>Contact Us</p>
        <img className="addtocart"src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-logo-137280611.jpg" alt="no image" />
    </div>
    )

}

export default Navbar;



