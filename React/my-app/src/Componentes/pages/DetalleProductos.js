import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


 export default function DetalleProductos () {
    const [product, setProduct] = useState(null);
    const {id}=useParams()
    useEffect(() => {
      axios
        .get("https://dummyjson.com/products/" + id)
        .then((result) => {
          setProduct(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
  
    }, []);

    return (
        <>
            {!product ? (
                <div>loading</div>
            ) : (



            


            
            <section  className="section" id="product">
                <div  className="container">
                    <div  className="row">
                    <div  className="col-lg-4">
                        <div  className="right-content">
                            <h4>{product.name}</h4>
                            <span  className="price">$75.00</span>
                            <ul  className="stars">
                                <li><i  className="fa fa-star"></i></li>
                                <li><i  className="fa fa-star"></i></li>
                                <li><i  className="fa fa-star"></i></li>
                                <li><i  className="fa fa-star"></i></li>
                                <li><i  className="fa fa-star"></i></li>
                            </ul>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                            <div  className="quote">
                                <i  className="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                            </div>

                            <div  className="quantity-content">
                                <div  className="left-content">
                                    <h6>No. of Orders</h6>
                                </div>

                                <div  className="right-content">
                                    <div  className="quantity buttons_added">
                                        <input type="button" value="-"  className="minus"/><input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty"  className="input-text qty text" size="4" pattern="" inputmode=""/><input type="button" value="+"  className="plus"/>
                                    </div>
                                </div>
                            </div>

                            <div  className="total">
                                <h4>Total: $210.00</h4>
                                <div  className="main-border-button"><a href="#">Add To Cart</a></div>
                            </div>
                        </div>
                    
                    </div>
                        <div  className="col-lg-8">
                            <div  className="left-images">
                                <img src="images/collection-item2.jpg" alt=""/>
                                <img src="images/product-item1.jpg" alt=""/>
                            </div>
                            
                        </div>
                    </div>

                   
                </div>
            </section>  
       
        )}
    </>

    );
}