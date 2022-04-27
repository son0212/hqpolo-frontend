import React from 'react';
import {
  Carousel
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import "../../Css/homePage/SlideShow.css";

export default function SlideShow(){
  return(
    <Carousel slide={true} variant="dark" nextLabel="" prevLabel="">
      <Carousel.Item>
        <div className="imgOne img-slideShow"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="imgTwo img-slideShow"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="imgThree img-slideShow"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="imgFour img-slideShow"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="imgFive img-slideShow"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="imgSix img-slideShow"></div>
      </Carousel.Item>
    </Carousel>
  )
}