import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


 export default function DetalleProductos () {

    const [product, setProduct] = useState(null);
    const {id}=useParams()

    useEffect(() => {
      axios
        .get('https://dummyjson.com/products/'+id)
        .then((result) => {
          setProduct(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
  
    }, [id]);

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
                            
                            <h4>{product.title}</h4>

                            <span  className="price">${product.price}</span>

                            <ul  className="stars">
                                <li>{product.rating}/<i  className="fa fa-star"></i></li>
                                <li><i  className="fa fa-star"></i></li>
                                <li><i  className="fa fa-star"></i></li>
                                <li><i  className="fa fa-star"></i></li>
                                <li><i  className="fa fa-star"></i></li>
                            </ul>
                        
                            <div  className="quote">
                               <p>{product.description}</p>
                            </div>

                            <div  className="quantity-content">
                            <div  className="total">
                                <h4>Total: $210.00</h4>
                                <div  className="main-border-button"><a href="#">Add To Cart</a></div>
                            </div>
                            </div>
                            
                        </div>
                    
                    </div>
                        <div  className="col-lg-8">
                            <div  className="left-images">
                                <img src={'https://i.dummyjson.com/data/products/' + id + '/1.jpg'} width="50px" height="auto" />
                                <img src={'https://i.dummyjson.com/data/products/' + id + '/2.jpg'} width="50px" height="auto" />
                            </div>
                            
                        </div>
                    </div>

                   
                </div>
            </section>  
       
        )}
    </>

    );
}