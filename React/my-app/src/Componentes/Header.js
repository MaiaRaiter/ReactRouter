import React from 'react';

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
        <nav className="primary-nav padding-small">
          <div className="container">
            <div className="row d-flex align-items-center">
           
              <div className="col-lg-10 col-md-10">
                <div className="navbar">

                  <div id="main-nav" className="stellarnav d-flex justify-content-end right">
                    <ul className="menu-list">

                      <li><a href="index.html" className="item-anchor active">Home</a></li>                      
                      <li><a href="shop.html" className="item-anchor" data-effect="Contact">Productos</a></li>
                      <li><a href="contact.html" className="item-anchor" data-effect="Contact">Contacto</a></li>

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