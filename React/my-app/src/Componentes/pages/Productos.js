import React, { useState, useContext } from "react";
import Header from '../Header'
import Filtros from '../Filtros'
import Footer from '../Footer'
import ProductosListado from '../ProductosListado'
import Producto from '../Producto'
import { ProductosContext } from '../../context/ProductosContext'
import { CategoriasContext } from '../../context/CategoriasContext'
import FilterOption from '../FilterOption'
import axios from 'axios' 

export default function Productos() {

  const { Productos } = useContext(ProductosContext); 
  const { categorias } = useContext(CategoriasContext);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]); 

  setData(Productos);
  setFilter(Productos);

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

                <Filtros />
                <FilterOption onClickFunction={() => setFilter(data)} text="All" />

                 {categorias.map((categoria, index) => {

                   return (
                   <>

                    <FilterOption onClickFunction={() => filterProduct(categoria)} text={categoria} key={index} />

                    </>)

                    })}
              

                <div class="tab-content">
                  <div id="all" data-tab-content class="active">
                    <div class="row d-flex flex-wrap">

                      <ProductosListado Productos={Productos} />

                    </div>
                  </div>
                </div>
              </div>
            </section>

            <aside class="col-md-3">
            <div>
              <input onChange={(e) => filterByName(e)} id="inputFiltro" type='text' placeholder='search...' autoComplete='off' className='searchBar' />
            </div>

            
            </aside>

          </div>
          <div className="col-md-9 py-md-3">
                        
                        <div className="row">
                            {filter.map((producto) => {
                                return (
                                   <Producto producto={producto}></Producto>
                                )
                            })}
                        </div>

          </div>
        </div>
      </div>

      < Footer />
    </>
  )
}
