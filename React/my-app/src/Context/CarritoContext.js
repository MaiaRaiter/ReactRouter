//https://codervent.com/shopingo/demo/shopingo_V1/cart.html
//https://themewagon.github.io/hexashop/single-product.html#

import React, { createContext, useState, useEffect } from "react";


export const CarritoContext = createContext();

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const cantidadCarrito = carrito.length
    useEffect(() => {
        
      if (localStorage.getItem("carrito") != null) {
        let storage = localStorage.getItem("carrito")
        setCarrito(JSON.parse(storage))
    }
      },[])

    const AddProduct = (prod) => {
    
     setCarrito([...carrito, prod])
     console.log(prod);
     localStorage.setItem("carrito", JSON.stringify([...carrito, prod]))
    }
    

    const ResetCarrito = () => {
      setCarrito([])
    }

    const EliminarProduct = (productid) => {
      setCarrito(
        carrito.filter((prod) => prod.id !== productid)
      ); 
    };
    


    return (
        <CarritoContext.Provider
          value={{
            carrito,
            cantidadCarrito,
            AddProduct,
            ResetCarrito,
            EliminarProduct
          }}
        >
          {props.children}
        </CarritoContext.Provider>
      );


    
}



export default CarritoProvider;