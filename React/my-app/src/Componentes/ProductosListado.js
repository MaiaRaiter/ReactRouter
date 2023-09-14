import React from "react";
import Producto from "./Producto";

const ProductosListado = ({products}) => {
  
  return (
    <>    
    {products.map((producto) => (
      <Producto producto={producto} />           
    ))}
    </>
  );
};

export default ProductosListado;