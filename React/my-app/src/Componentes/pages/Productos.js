import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../Header'
import Buscador from '../Busacdor'
import Filtros from '../Filtros'
import Footer from '../Footer'
import ProductosListado from '../ProductosListado'

export default function Productos() {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {

    axios
      .get("https://dummyjson.com/products")
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  return (
    <>
      < Header />


      <section class="main-swiper swiper-wrapper swiper-slide" >
        <img src="images/hero-image.jpg" className="product-image " />
        <div class="container">

          <div class="row">

            <div class="col-md-12">

              <h1 class="page-title">Productos</h1>

            </div>
          </div>
        </div>
      </section>

      <div class="shopify-grid padding-large">
        <div class="container">
          <div class="row">

            <section id="selling-products" class="col-md-9 product-store">
              <div class="container">

                <Filtros />

                <div class="tab-content">
                  <div id="all" data-tab-content class="active">
                    <div class="row d-flex flex-wrap">

                      <ProductosListado products={products} />

                    </div>
                  </div>
                </div>
              </div>
            </section>

            <aside class="col-md-3">
              <Buscador />
            </aside>

          </div>
        </div>
      </div>

      < Footer />
    </>
  )
}
