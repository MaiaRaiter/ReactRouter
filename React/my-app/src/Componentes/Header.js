import React from 'react';
import { Link } from "react-router-dom";


function Header() {
  return (
   
      <div id="header-wrap">
        <nav className="secondary-nav border-bottom">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-4 header-contact">
               
              </div>
              <div className="col-md-4 shipping-purchase text-center">
               
              </div>
              <div className="col-md-4 col-sm-12 user-items">
                <ul className="d-flex justify-content-end list-unstyled">

                  <li>
                      <i className="icon icon-user"></i>
                  </li>

                  <li>
                      <Link to="/Checkout"   className="item-anchor active"> <i className="icon icon-shopping-cart"> <div className="cart-badge"></div> </i> </Link>                    
                  </li>

                  <li>                  
                      <i className="icon icon-heart"></i>                    
                  </li>

                  <li className="user-items search-item pe-3">                    
                      <i className="icon icon-search"></i>                   
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

                  <div id="main-nav" className="stellarnav d-flex justify-content-start desktop menu-toggle bars"> 
                    <ul className="menu-list">
                     <li><Link to="/"  className="item-anchor active"> Home  </Link></li>
                     <li><Link to="/Productos"   className="item-anchor active"> Productos  </Link>    </li>
                     <li><Link to="/Contacto"   className="item-anchor active"> Contacto </Link>    </li>

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