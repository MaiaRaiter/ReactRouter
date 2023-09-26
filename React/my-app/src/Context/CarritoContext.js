//https://codervent.com/shopingo/demo/shopingo_V1/cart.html
//https://themewagon.github.io/hexashop/single-product.html#

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosContext = createContext();

const ProductosProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios
      .get("https://dummyjson.com/products")
      .then((result) => {
        setProducts(result.data.products); 
        console.log(result.data.products);       
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, [products]);  

  return (
    <ProductosContext.Provider
      value={products}
    >
      {props.children}
    </ProductosContext.Provider>
  );  
};

export default ProductosProvider;