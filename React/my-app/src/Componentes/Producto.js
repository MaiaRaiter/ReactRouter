import React from 'react'
import { Link } from "react-router-dom";

export default function Producto({product}) {
  return (
    <div className="product-item col-lg-4 col-md-6 col-sm-6">
      <div className="image-holder">
      <div key={product.id}>
        <img src={product.thumbnail} alt="Books" className="product-image"/>
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
                      <Link to={`/DetalleProductos/${product.id}`}> <h3 className="product-title">
                        <a href="single-product.html">{product.title} </a> </h3></Link>
                        <div className="item-price text-primary">${product.price}</div>
                      </div>
                    </div>
         
      </div>
      </div>
  )
}
