import React from 'react';
import {
  Carousel
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";

export default function SlideShow(){
  return(
    <Carousel slide={true} variant="dark" nextLabel="" prevLabel="">
      <Carousel.Item>
        <img src={one} width="100%" alt="One" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={two} width="100%" alt="Two" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={three} width="100%" alt="Three" />
      </Carousel.Item>
    </Carousel>
  )
}