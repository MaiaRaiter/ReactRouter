import React, { useState, useContext, useEffect } from "react";
import Header from '../Componentes/Header'
import Footer from '../Componentes/Footer'
import Producto from '../Componentes/Producto'
//import { ProductosContext } from '../../Context/ProductosContext'
import FilterOption from '../Componentes/FilterOption'
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

      <section className="main-swiper swiper-wrapper swiper-slide Banner1" >
        <img src="https://i.dummyjson.com/data/products/9/1.jpg" className="main-swiper swiper-wrapper swiper-slide Banner1"/>
        <div className="banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="banner-title">Productos</h2>
                            </div>
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
