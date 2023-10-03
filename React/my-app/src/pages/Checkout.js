import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Checkout () {

    return (
     <>

        <div >
              <h1 classNameName="section-title">Mi carrito tiene x productos------boton seguir comprando</h1>
        </div>

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
                <tr>
                <th scope="row">1</th>
                <td>FOTO</td>
                <td>NOMBRE</td>
                <td>
                <div className="quantity buttons_added"><input type="button" className="minus" value="-"/><input type="number" step="1" min="1" max="" name="quantity" title="Qty" className="input-text qty text" size="4" pattern="" inputmode="" value="1"/><input type="button" className="plus" value="+"/></div>
                </td>
                <td>PRECIO TOTAL</td>
                </tr>

                <tr>
                <th scope="row">2</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                    
                <th scope="row">3</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
        </table>


    </>
 );
}
