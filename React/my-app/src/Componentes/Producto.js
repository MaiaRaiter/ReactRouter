import React from 'react';

export default function Producto() {
  return (
    <div >
        
                    <div class='HACER UN MAP'>
                      <div className="image-holder">
                        <img src="images/product-item1.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                        d-flex">
                           
                            <span className="tooltip-text">Quick view</span>
                          </button>
                          <button type="button" className="wishlist-btn">
                            <i className="icon icon-heart"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-detail">
                        <h3 className="product-title">
                          <a href="single-product.html">Full sleeve cover shirt</a>
                        </h3>
                        <span className="item-price text-primary">$40.00</span>
                      </div>
                    </div>
    </div>
  );
}
