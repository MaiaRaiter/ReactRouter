import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CarritoContext } from '../Context/CarritoContext.js';

export default function Checkout () {

    const {carrito}= useContext(CarritoContext);
    const {ResetCarrito}= useContext(CarritoContext);
    const {EliminarProduct}= useContext(CarritoContext);

    console.log("en carrito" + carrito);
 

    return (
     <>

        <div >
              <h1 className="section-title">Mi carrito tiene {carrito.length} productos</h1>
        </div>
        <div>
            
              <p> <div  className="main-border-button"><button onClick={() => ResetCarrito()} className="btn btn-primary">Resetear Carrito</button></div></p>

        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>

            <tbody>
            {carrito.map((product, index) => (
                <div key={index}>
                <tr >
                <th scope="row" >{index+1}</th>
                <th scope="col">
                <td><img src={product.thumbnail} className="ImagenTabla"></img></td>
                </th>
                
                <td>{product.title}</td>
                <td>${product.price}</td>
                </tr>
                <td>
                  <p> <div  className="main-border-button"><button onClick={() => EliminarProduct(product.id)} className="btn btn-danger">Eliminar Producto</button></div></p>
                </td>
                </div>
      ))}
                
            </tbody>
        </table>
          
     
 </div> 
    </>
 );
}
