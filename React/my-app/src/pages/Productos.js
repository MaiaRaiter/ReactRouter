import React, { useState, useEffect } from "react";
import Producto from '../Componentes/Producto'
import FilterOption from '../Componentes/FilterOption'
import axios from 'axios' 

export default function Productos() {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => {
        setData(result.data.products);
        setFilter(result.data.products);
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
      <section className="main-swiper swiper-wrapper swiper-slide Banner1" >
        <img src="https://i.dummyjson.com/data/products/9/1.jpg" className="main-swiper swiper-wrapper swiper-slide Banner1" alt="aa" />
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

      <div className="shopify-grid padding-large">
        <div className="container">
          <div className="row">

            <section id="selling-Productos" className="col-md-9 product-store">
              <div className="container">
                <div className="tab-content">
                  <div id="all" data-tab-content className="active">
                    <div className="row d-flex flex-wrap">

                      {filter.map((product) => {
                        return (
                           <Producto key={product.id} product={product}></Producto>
                        )
                      })}

                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="col-md-3">

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
    </>
  )
}
