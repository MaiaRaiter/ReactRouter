import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosContext = createContext();

const ProductosProvider = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {

    axios
      .get("https://dummyjson.com/Products")
      .then((result) => {
        setProductos(result.data.Products);        
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, []);  

  return (
    <ProductosContext.Provider
      value={{
        productos
      }}
    >
      {props.children}
    </ProductosContext.Provider>
  );  
};

export default ProductosProvider;