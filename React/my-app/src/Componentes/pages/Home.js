import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Carrusel } from '../Carrusel'
import Producto from '../Producto'

export default function Home() {
  return (
    <>
      <body>
        <div className="search-popup">
          <div className="search-popup-container">

            <form role="search" method="get" className="search-form" action="">
              <input type="search" id="search-form" className="search-field" placeholder="Type and press enter" value="" name="s" />
              <button type="submit" className="search-submit"><a href="#"><i className="icon icon-search"></i></a></button>
            </form>

            <h5 className="cat-list-title">Browse Categories</h5>

            <ul className="cat-list">
              <li className="cat-list-item">
                <a href="shop.html" title="Men Jackets">Men Jackets</a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Fashion">Fashion</a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Casual Wears">Casual Wears</a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Women">Women</a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Trending">Trending</a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Hoodie">Hoodie</a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Kids">Kids</a>
              </li>
            </ul>
          </div>
        </div>

        < Header />

        <section id="billboard" className="overflow-hidden">

          <button className="button-prev">
            <i className="icon icon-chevron-left"></i>
          </button>
          <button className="button-next">
            <i className="icon icon-chevron-right"></i>
          </button>
          <div className="swiper main-swiper">
          
            <div className="swiper-wrapper">
            
              <div className="swiper-slide Banner1" >
              <img src="images/banner1.jpg"  className="product-image"/>
                <div className="banner-content">
                
                  <div className="container">
                  
                    <div className="row">
                      <div className="col-md-6">
                      <div className="image-holder">
                        
                      </div>
                        <h2 className="banner-title">Summer Collection</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide Banner2" >

                <div className="banner-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h2 className="banner-title">Casual Collection</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

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
