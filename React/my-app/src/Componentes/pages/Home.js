import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import  Carousel  from '../Carrusel'
import Producto from '../Producto'

export default function Home() {
  return (
    <>
      <body>

        < Header />

        <Carousel/>

        <section id="featured-products" className="product-store padding-large">
          <div className="container">
            <div className="section-header flex-wrap align-items-center justify-content-between">
              <h2 className="section-title">Los mejores 6 Productos</h2>


              <div className='row d-flex flex-wrap'>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products1.jpg" alt="Books" className="product-image"/>
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
                            <i className="icon icon-screen-full"></i>
                            <span className="tooltip-text">Quick view</span>
                          </button>
                          <button type="button" className="wishlist-btn">
                            <i className="icon icon-heart"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-detail">
                        <h3 className="product-title">
                          <a href="single-product.html">Half sleeve T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>
                    
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products1.jpg" alt="Books" className="product-image"/>
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
                            <i className="icon icon-screen-full"></i>
                            <span className="tooltip-text">Quick view</span>
                          </button>
                          <button type="button" className="wishlist-btn">
                            <i className="icon icon-heart"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-detail">
                        <h3 className="product-title">
                          <a href="single-product.html">Half sleeve T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>

                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products1.jpg" alt="Books" className="product-image"/>
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
                            <i className="icon icon-screen-full"></i>
                            <span className="tooltip-text">Quick view</span>
                          </button>
                          <button type="button" className="wishlist-btn">
                            <i className="icon icon-heart"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-detail">
                        <h3 className="product-title">
                          <a href="single-product.html">Half sleeve T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>

                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products1.jpg" alt="Books" className="product-image"/>
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
                            <i className="icon icon-screen-full"></i>
                            <span className="tooltip-text">Quick view</span>
                          </button>
                          <button type="button" className="wishlist-btn">
                            <i className="icon icon-heart"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-detail">
                        <h3 className="product-title">
                          <a href="single-product.html">Half sleeve T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>

                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products1.jpg" alt="Books" className="product-image"/>
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
                            <i className="icon icon-screen-full"></i>
                            <span className="tooltip-text">Quick view</span>
                          </button>
                          <button type="button" className="wishlist-btn">
                            <i className="icon icon-heart"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-detail">
                        <h3 className="product-title">
                          <a href="single-product.html">Half sleeve T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>

                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products1.jpg" alt="Books" className="product-image"/>
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
                            <i className="icon icon-screen-full"></i>
                            <span className="tooltip-text">Quick view</span>
                          </button>
                          <button type="button" className="wishlist-btn">
                            <i className="icon icon-heart"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-detail">
                        <h3 className="product-title">
                          <a href="single-product.html">Half sleeve T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>
              </div>
            </div>
            
          </div>
        </section>

        < Footer />

      </body>
    </>
  )
}
