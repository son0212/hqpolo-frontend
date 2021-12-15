import React from "react";
import Slider from "react-slick";
import { Container, Row} from 'reactstrap';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../Css/homePage/Slick01.css";

export default class Slick01 extends React.Component{
	render(){

		const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      className: "Slick01"
  	};
		return(
			<Container>
				<Row>
	        <Slider {...settings}>
	        	<div className="img-1 img"></div>
	        	<div className="img-2 img"></div>
	        	<div className="img-3 img"></div>
	        	<div className="img-4 img"></div>
	        	<div className="img-5 img"></div>
	        </Slider>
        </Row>
      </Container>
		)
	}
}