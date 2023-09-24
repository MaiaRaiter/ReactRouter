import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Carrusel() {

    return (

        <Carousel>
            <div className="main-swiper swiper-wrapper swiper-slide Banner1" >
                <img src=" https://i.dummyjson.com/data/products/1/thumbnail.jpg" className="product-image" />

            </div>

            <div className="main-swiper swiper-wrapper  Banner2" >
                <img src=" https://i.dummyjson.com/data/products/4/thumbnail.jpg" className="product-image" />
                
            </div>

        </Carousel>

    )
}


