import React from 'react';
import { Link } from "react-router-dom";
import 

function Header() {
  return (
   
      <div id="header-wrap">
        <nav className="secondary-nav border-bottom">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-4 header-contact">
                <p>Let's talk! <strong>+57 444 11 00 35</strong>
                </p>
              </div>
              <div className="col-md-4 shipping-purchase text-center">
                <p>Free shipping on a purchase value of $200</p>
              </div>
              <div className="col-md-4 col-sm-12 user-items">
                <ul className="d-flex justify-content-end list-unstyled">
                  <li>
                    <a href="login.html">
                      <i className="icon icon-user"></i>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <i className="icon icon-shopping-cart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html">
                      <i className="icon icon-heart"></i>
                    </a>
                  </li>
                  <li className="user-items search-item pe-3">
                    <a href="#" className="search-button">
                      <i className="icon icon-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>






<nav class="primary-nav padding-small">
          <div class="container">
            <div class="row d-flex align-items-center">
           
              <div class="col-lg-10 col-md-10">
                <div class="navbar">

                  <div id="main-nav" class="stellarnav d-flex justify-content-end right desktop"><a href="#" class="menu-toggle"><span class="bars"><span></span><span></span><span></span></span> Menu</a>
                    <ul class="menu-list"><a href="#" class="close-menu full"><span class="icon-close"></span>Close</a>

                      <li><a href="index.html" class="item-anchor active">Home</a></li>                      
                      <li><a href="shop.html" class="item-anchor" data-effect="Contact">Productos</a></li>
                      <li><a href="contact.html" class="item-anchor" data-effect="Contact">Contacto</a></li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </nav>







        <nav className="primary-nav padding-small">
          <div className="container">
            <div className="row d-flex align-items-center">
           
              <div className="col-lg-10 col-md-10">
                <div className="navbar">

                  <div id="main-nav" className="stellarnav d-flex justify-content-end right">
                    <ul className="menu-list">

                     <Link to="/">  <li className="item-anchor active"> Home</li>  </Link>                 
                     <Link to="/Productos">  <li className="item-anchor active"> Productos</li>  </Link>    
                     <Link to="/Contacto">  <li className="item-anchor active"> Contacto</li>  </Link>    

                    </ul>
                  </div>

                </div>

            
              </div>
            </div>
          </div>
          
          </nav>
  
      </div>
    
   
  
  );
  
}

export default Header;