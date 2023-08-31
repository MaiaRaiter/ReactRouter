import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

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
   
    < Header/>

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
            <div className="banner-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
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
        <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
          <h2 className="section-title">Los mejores 6 Productos</h2>    
        

        <div className="swiper product-swiper overflow-hidden">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="product-item">
                <div className="image-holder">
                  <img src="images/product-item1.jpg" alt="Books" className="product-image"/>
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
                    <a href="single-product.html">Full sleeve cover shirt</a>
                  </h3>
                  <span className="item-price text-primary">$40.00</span>
                </div>
              </div>
            </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <div className="image-holder">
                  <img src="images/product-item2.jpg" alt="Books" className="product-image"/>
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
                    <a href="single-product.html">Volunteer Half blue</a>
                  </h3>
                  <span className="item-price text-primary">$38.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <div className="image-holder">
                  <img src="images/product-item3.jpg" alt="Books" className="product-image"/>
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
                    <a href="single-product.html">Double yellow shirt</a>
                  </h3>
                  <span className="item-price text-primary">$44.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <div className="image-holder">
                  <img src="images/product-item4.jpg" alt="Books" className="product-image"/>
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
                    <a href="single-product.html">Long belly grey pant</a>
                  </h3>
                  <span className="item-price text-primary">$33.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <div className="image-holder">
                  <img src="images/product-item3.jpg" alt="Books" className="product-image"/>
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
                    <a href="single-product.html">Double yellow shirt</a>
                  </h3>
                  <span className="item-price text-primary">$44.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-item">
                <div className="image-holder">
                  <img src="images/product-item4.jpg" alt="Books" className="product-image"/>
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
                    <a href="single-product.html">Long belly grey pant</a>
                  </h3>
                  <span className="item-price text-primary">$33.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
   

   

    <div id="footer-bottom">
      <div className="container">
        <div className="d-flex align-items-center flex-wrap justify-content-between">
          <div className="copyright">
            <p>Freebies by <a href="https://templatesjungle.com/">Templates Jungle</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
            </p>
          </div>
          <div className="payment-method">
            <p>Payment options :</p>
            <div className="card-wrap">
              <img src="images/visa-icon.jpg" alt="visa"/>
              <img src="images/mastercard.png" alt="mastercard"/>
              <img src="images/american-express.jpg" alt="american-express"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="js/jquery-1.11.0.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/script.js"></script>
  </body>

                </>
                )
}
