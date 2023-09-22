import React from "react";
import Producto from "./Producto";

const ProductosListado = ({producto}) => {
  
  return (
    <>    
    {producto.map((producto) => (
      <Producto producto={producto} />           
    ))}
    </>
  );
};

export default ProductosListado;