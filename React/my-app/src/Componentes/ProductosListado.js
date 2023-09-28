import React from "react";
import Producto from "./Producto";

const ProductosListado = ({products}) => {
  
  return (
    <>    
    {products.map((product) => (
      <Producto key={product.id} product={product} />           
    ))}
    </>
  );
};

export default ProductosListado;