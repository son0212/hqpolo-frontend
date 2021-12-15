import React from "react";
import {Container, Row} from "reactstrap";

import SlickSellingProduct from "./SlickSellingProduct.js";

import "../../Css/homePage/FlashSale.css";

import Clock from "../../images/icon-clock.svg";

export default class FlashSale extends React.Component{
	render(){
		return(
			<React.Fragment>
				<div className="FlashSale">
					<span></span>
					<b><img src={Clock} alt="FlashSale"/>FlashSale</b>
					<span></span>
					<a className="nextLink" href="#">&#62;</a>
				</div>
				<Container>
					<Row className="CountDown">
						<div className="time hours">0<span>giờ</span></div>
						<div className="time minute">0<span>phút</span></div>
						<div className="time second">0<span>giây</span></div>
					</Row>
					<Row>
						<SlickSellingProduct />
					</Row>
				</Container>
			</React.Fragment>
		)
	}
}