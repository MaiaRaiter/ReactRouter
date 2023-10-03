//https://codervent.com/shopingo/demo/shopingo_V1/cart.html
//https://themewagon.github.io/hexashop/single-product.html#

import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const cantidadCarrito = carrito.length

    const AddProduct = (prod) => {
      //validar si el prod ya existe en el carrito
      let newCarrito = [...carrito];

      // Find the position (posicion) of the product in the cart
      let posicion = newCarrito.findIndex((item) => item.id === prod.id);

      if (posicion !== -1) {
        // If the product already exists, increment the quantity
        newCarrito[posicion].cantidad++;
      } else {
        // If the product doesn't exist, add it to the cart
        newCarrito.push({ ...prod, cantidad: 1 });
      }
    
      // Update the state with the modified cart
      setCarrito(newCarrito);
    }
/*estructura carrito

[
    {
        producto:{
            id: 1,
            nombre:'iphone',
            precio: 1500
        },
        cantidad: 1
    },
    {
        producto:{
            id: 2,
            nombre:'iphone',
            precio: 1500
        },
        cantidad: 4,
        subtotal: 6000
    }
]*/

      
   

    const ResetCarrito = () => {
      setCarrito([])
    }

    const SumarCarrito = () => {
      setCarrito([])
    }

    const RestarCarrito = () => {
      setCarrito([])
    }


    return (
        <CarritoContext.Provider
          value={{
            carrito,
            cantidadCarrito,
            AddProduct,
            ResetCarrito,
            SumarCarrito,
            RestarCarrito
          }}
        >
          {props.children}
        </CarritoContext.Provider>
      );


    
}



export default CarritoProvider;