import React, { useState, useContext, useEffect } from "react";
import Header from '../Header'
import Footer from '../Footer'
import ProductosListado from '../ProductosListado'
import Producto from '../Producto'
//import { ProductosContext } from '../../Context/ProductosContext'
import FilterOption from '../FilterOption'
import axios from 'axios' 

export default function Productos() {
  //const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => {
        //setProducts(result.data.products);
        setData(result.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
    
    axios
      .get("https://dummyjson.com/products/categories")
      .then((result) => {
        setCategories(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterProduct = (category) => {
    const updatedList = data.filter((x) => x.category === category);
    setFilter(updatedList);
  }

  const filterByName = (e) => {

    axios
        .get("https://dummyjson.com/products/search?q=" + e.target.value)
        .then((result) => {

            setFilter(result.data.products)

        })

  }

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

            <section id="selling-Productos" class="col-md-9 product-store">
              <div class="container">
                <div class="tab-content">
                  <div id="all" data-tab-content class="active">
                    <div class="row d-flex flex-wrap">

                      {filter.map((product) => {
                        return (
                           <Producto product={product}></Producto>
                        )
                      })}

                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="col-md-3">

              <div>
               <input onChange={(e) => filterByName(e)} id="inputFiltro" type='text' placeholder='search...' autoComplete='off' className='searchBar' />
              </div>

              <FilterOption onClickFunction={() => setFilter(data)} text="All" />

              {categories.map((categoria, index) => {
                return (
                  <>
                  <FilterOption onClickFunction={() => filterProduct(categoria)} text={categoria} key={index} />
                  </>)
              })}
            
            </div>

          </div>
        </div>
      </div>

      < Footer />
    </>
  )
}
