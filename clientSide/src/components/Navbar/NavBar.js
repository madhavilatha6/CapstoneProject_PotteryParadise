import './Navbar.css';
import React from 'react';

function Navbar(){
    return(
    <div className="navigation">
         <p id="home">Home</p>
        <p id='categary'>Category</p>
        <p id="categary">About Us</p>
        <p id='categary'>Contact Us</p>
        <img className="addtocart"src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-logo-137280611.jpg" alt="" />
    </div>
    )

}

export default Navbar;