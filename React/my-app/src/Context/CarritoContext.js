//https://codervent.com/shopingo/demo/shopingo_V1/cart.html
//https://themewagon.github.io/hexashop/single-product.html#

import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = (props) => {

    const [productos, setProductos] = useState([]);
    const cantidadProductos = productos.length

    const AddProduct = (producto) => {
        setProductos([...productos,
            producto])
    }

    const ResetCarrito = () => {
        setProductos([])
    }


    return (
        <CarritoContext.Provider
          value={{
            productos,
            cantidadProductos,
            AddProduct,
            ResetCarrito
          }}
        >
          {props.children}
        </CarritoContext.Provider>
      );


    
}



export default CarritoProvider;