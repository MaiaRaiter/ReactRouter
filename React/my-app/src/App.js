import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>

    <div class="preloader-wrapper">
      <div class="preloader">
      </div>
    </div>

    <div class="search-popup">
      <div class="search-popup-container">

        <form role="search" method="get" class="search-form" action="">
          <input type="search" id="search-form" class="search-field" placeholder="Type and press enter" value="" name="s" />
          <button type="submit" class="search-submit"><a href="#"><i class="icon icon-search"></i></a></button>
        </form>

        <h5 class="cat-list-title">Browse Categories</h5>
        
        <ul class="cat-list">
          <li class="cat-list-item">
            <a href="shop.html" title="Men Jackets">Men Jackets</a>
          </li>
          <li class="cat-list-item">
            <a href="shop.html" title="Fashion">Fashion</a>
          </li>
          <li class="cat-list-item">
            <a href="shop.html" title="Casual Wears">Casual Wears</a>
          </li>
          <li class="cat-list-item">
            <a href="shop.html" title="Women">Women</a>
          </li>
          <li class="cat-list-item">
            <a href="shop.html" title="Trending">Trending</a>
          </li>
          <li class="cat-list-item">
            <a href="shop.html" title="Hoodie">Hoodie</a>
          </li>
          <li class="cat-list-item">
            <a href="shop.html" title="Kids">Kids</a>
          </li>
        </ul>
      </div>
    </div>
    <header id="header">
      <div id="header-wrap">
        <nav class="secondary-nav border-bottom">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-md-4 header-contact">
                <p>Let's talk! <strong>+57 444 11 00 35</strong>
                </p>
              </div>
              <div class="col-md-4 shipping-purchase text-center">
                <p>Free shipping on a purchase value of $200</p>
              </div>
              <div class="col-md-4 col-sm-12 user-items">
                <ul class="d-flex justify-content-end list-unstyled">
                  <li>
                    <a href="login.html">
                      <i class="icon icon-user"></i>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <i class="icon icon-shopping-cart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html">
                      <i class="icon icon-heart"></i>
                    </a>
                  </li>
                  <li class="user-items search-item pe-3">
                    <a href="#" class="search-button">
                      <i class="icon icon-search"></i>
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

                  <div id="main-nav" class="stellarnav d-flex justify-content-end right">
                    <ul class="menu-list">

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
      </div>
    </header>

    <section id="billboard" class="overflow-hidden">

      <button class="button-prev">
        <i class="icon icon-chevron-left"></i>
      </button>
      <button class="button-next">
        <i class="icon icon-chevron-right"></i>
      </button>
      <div class="swiper main-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="background-image: url('images/banner1.jpg');background-repeat: no-repeat;background-size: cover;background-position: center;">
            <div class="banner-content">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <h2 class="banner-title">Summer Collection</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                        
                 
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" style="background-image: url('images/banner2.jpg');background-repeat: no-repeat;background-size: cover;background-position: center;">
            <div class="banner-content">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <h2 class="banner-title">Casual Collection</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="featured-products" class="product-store padding-large">
      <div class="container"/>
        <div class="section-header d-flex flex-wrap align-items-center justify-content-between">
          <h2 class="section-title">Los mejores 6 Productos</h2>    
   

        <div class="swiper product-swiper overflow-hidden">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="product-item">
                <div class="image-holder">
                  <img src="images/product-item1.jpg" alt="Books" class="product-image"/>
                </div>
                <div class="cart-concern">
                  <div class="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" class="view-btn tooltip
                        d-flex">
                      <i class="icon icon-screen-full"></i>
                      <span class="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" class="wishlist-btn">
                      <i class="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div class="product-detail">
                  <h3 class="product-title">
                    <a href="single-product.html">Full sleeve cover shirt</a>
                  </h3>
                  <span class="item-price text-primary">$40.00</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-item">
                <div class="image-holder">
                  <img src="images/product-item2.jpg" alt="Books" class="product-image"/>
                </div>
                <div class="cart-concern">
                  <div class="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" class="view-btn tooltip
                        d-flex">
                      <i class="icon icon-screen-full"></i>
                      <span class="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" class="wishlist-btn">
                      <i class="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div class="product-detail">
                  <h3 class="product-title">
                    <a href="single-product.html">Volunteer Half blue</a>
                  </h3>
                  <span class="item-price text-primary">$38.00</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-item">
                <div class="image-holder">
                  <img src="images/product-item3.jpg" alt="Books" class="product-image"/>
                </div>
                <div class="cart-concern">
                  <div class="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" class="view-btn tooltip
                        d-flex">
                      <i class="icon icon-screen-full"></i>
                      <span class="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" class="wishlist-btn">
                      <i class="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div class="product-detail">
                  <h3 class="product-title">
                    <a href="single-product.html">Double yellow shirt</a>
                  </h3>
                  <span class="item-price text-primary">$44.00</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-item">
                <div class="image-holder">
                  <img src="images/product-item4.jpg" alt="Books" class="product-image"/>
                </div>
                <div class="cart-concern">
                  <div class="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" class="view-btn tooltip
                        d-flex">
                      <i class="icon icon-screen-full"></i>
                      <span class="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" class="wishlist-btn">
                      <i class="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div class="product-detail">
                  <h3 class="product-title">
                    <a href="single-product.html">Long belly grey pant</a>
                  </h3>
                  <span class="item-price text-primary">$33.00</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-item">
                <div class="image-holder">
                  <img src="images/product-item3.jpg" alt="Books" class="product-image"/>
                </div>
                <div class="cart-concern">
                  <div class="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" class="view-btn tooltip
                        d-flex">
                      <i class="icon icon-screen-full"></i>
                      <span class="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" class="wishlist-btn">
                      <i class="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div class="product-detail">
                  <h3 class="product-title">
                    <a href="single-product.html">Double yellow shirt</a>
                  </h3>
                  <span class="item-price text-primary">$44.00</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-item">
                <div class="image-holder">
                  <img src="images/product-item4.jpg" alt="Books" class="product-image"/>
                </div>
                <div class="cart-concern">
                  <div class="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" class="view-btn tooltip
                        d-flex">
                      <i class="icon icon-screen-full"></i>
                      <span class="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" class="wishlist-btn">
                      <i class="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div class="product-detail">
                  <h3 class="product-title">
                    <a href="single-product.html">Long belly grey pant</a>
                  </h3>
                  <span class="item-price text-primary">$33.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
   

   

  
    

  
  </>  
  );
}

export default App;
