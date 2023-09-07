import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Carrusel () {

    return (
        
           <Carousel>
           

                        <div className="main-swiper swiper-wrapper swiper-slide Banner1" >
                            <img src="images/banner1.jpg" className="product-image" />

                            <div className="banner-content">

                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="image-holder">

                                            </div>
                                            <h2 className="banner-title">Summer Collection</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="main-swiper swiper-wrapper  Banner2" >
                        <img src="images/banner2.jpg" className="product-image" />
                            <div className="banner-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2 className="banner-title">Casual Collection</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
             



                  
               
      
             </Carousel>
       
   )
}


