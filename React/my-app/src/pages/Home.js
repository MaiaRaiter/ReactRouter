import React from 'react'

export default function Home() {
    return (
   <>            

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
            <header id="header">
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
            </header>

            <section id="billboard" className="overflow-hidden">

                <button className="button-prev">
                    <i className="icon icon-chevron-left"></i>
                </button>
                <button className="button-next">
                    <i className="icon icon-chevron-right"></i>
                </button>
                <div className="swiper main-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide bannerprincipal">
                            <div className="banner-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2 className="banner-title">Summer Collection</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                                          
                                            <div className="btn-wrap">
                                                <a href="shop.html" className="btn btn-light btn-medium d-flex align-items-center" tabindex="0">Shop it now <i className="icon icon-arrow-io"></i>
                                                </a>
                                            </div>
                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>

            

            <div className="shopify-grid padding-large">
      <div className="container">
        <div className="row">

          <section id="selling-products" className="col-md-12 product-store">
            <div className="container">
              <ul className="tabs list-unstyled">
                <li data-tab-target="#all" className="active tab">All</li>
                <li data-tab-target="#shoes" className="tab">Shoes</li>
                <li data-tab-target="#tshirts" className="tab">Tshirts</li>
                <li data-tab-target="#pants" className="tab">Pants</li>
                <li data-tab-target="#hoodie" className="tab">Hoodie</li>
                <li data-tab-target="#outer" className="tab">Outer</li>
                <li data-tab-target="#jackets" className="tab">Jackets</li>
                <li data-tab-target="#accessories" className="tab">Accessories</li>
              </ul>
              <div className="tab-content">
                <div id="all" data-tab-content className="active">
                  <div className="row d-flex flex-wrap">
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products1.jpg" alt="Books" className="product-image" />
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
                        <img src="images/selling-products2.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Stylish Grey T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$35.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products3.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Silk White Shirt</a>
                        </h3>
                        <div className="item-price text-primary">$35.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products4.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Grunge Hoodie</a>
                        </h3>
                        <div className="item-price text-primary">$30.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products5.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Full sleeve Jeans jacket</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products6.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Grey Check Coat</a>
                        </h3>
                        <div className="item-price text-primary">$30.00</div>
                      </div>
                    </div>                    
                  </div>
                </div>
                <div id="shoes" data-tab-content>
                  <div className="row d-flex flex-wrap">
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products13.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Orange white Nike</a>
                        </h3>
                        <div className="item-price text-primary">$55.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products14.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Running Shoe</a>
                        </h3>
                        <div className="item-price text-primary">$65.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products15.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Tennis Shoe</a>
                        </h3>
                        <div className="item-price text-primary">$80.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products16.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Nike Brand Shoe</a>
                        </h3>
                        <div className="item-price text-primary">$65.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tshirts" data-tab-content>
                  <div className="row d-flex flex-wrap">
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products3.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Silk White Shirt</a>
                        </h3>
                        <div className="item-price text-primary">$35.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products8.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">White Half T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$30.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products5.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Ghee Half T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products7.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Long Sleeve T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="pants" data-tab-content>
                  <div className="row d-flex flex-wrap">
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products1.jpg" alt="Books" className="product-image" />
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
                        <img src="images/selling-products4.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Grunge Hoodie</a>
                        </h3>
                        <div className="item-price text-primary">$30.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products7.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Long Sleeve T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products2.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Stylish Grey Pant</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="hoodie" data-tab-content>
                  <div className="row d-flex flex-wrap">
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products17.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">White Hoodie</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products4.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Navy Blue Hoodie</a>
                        </h3>
                        <div className="item-price text-primary">$45.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products18.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Dark Green Hoodie</a>
                        </h3>
                        <div className="item-price text-primary">$35.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="outer" data-tab-content>
                  <div className="row d-flex flex-wrap">
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products3.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Silk White Shirt</a>
                        </h3>
                        <div className="item-price text-primary">$ 35.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products4.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Grunge Hoodie</a>
                        </h3>
                        <div className="item-price text-primary">$ 30.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products6.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Grey Check Coat</a>
                        </h3>
                        <div className="item-price text-primary">$ 30.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products7.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Long Sleeve T-shirt</a>
                        </h3>
                        <div className="item-price text-primary">$ 40.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="jackets" data-tab-content>
                  <div className="row d-flex flex-wrap">
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products5.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Full Sleeve Jeans Jacket</a>
                        </h3>
                        <div className="item-price text-primary">$40.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products2.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Stylish Grey Coat</a>
                        </h3>
                        <div className="item-price text-primary">$35.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products6.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Grey Check Coat</a>
                        </h3>
                        <div className="item-price text-primary">$35.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="accessories" data-tab-content>
                  <div className="row d-flex flex-wrap">
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products19.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Stylish Women Bag</a>
                        </h3>
                        <div className="item-price text-primary">$35.00</div>
                      </div>
                    </div>
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products20.jpg" alt="Books" className="product-image" />
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
                          <a href="single-product.html">Stylish Gadgets</a>
                        </h3>
                        <div className="item-price text-primary">$30.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>         
          
        </div>        
      </div>      
    </div>


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
                                <img src="images/visa-icon.jpg" alt="visa" />
                                    <img src="images/mastercard.png" alt="mastercard" />
                                        <img src="images/american-express.jpg" alt="american-express" />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </>
                )
}
