import React from "react";

import "../../Css/homePage/TitleProduct.css";

export default class TitleProduct extends React.Component{
	render(){
		return(
			<div className="TitleProduct">
				<span></span>
				<b>{this.props.title}</b>
				<span></span>
				<a className="nextLink" href="#">&#62;</a>
			</div>
		)
	}
}