import React from "react";
import {useLocation, useParams } from "react-router-dom";

import DetailProductInformation from "./DetailProductInformation.js";
import DescriptionProduct from "./DescriptionProduct.js";
import Descript from "./Descript.js";
import TheSameProduct from "./TheSameProduct.js";


export default function DetailProduct(props){
	let {IdProduct} = useParams();
	const location = useLocation();
	return(
		<React.Fragment>
			<DetailProductInformation>{location.state}</DetailProductInformation>
			<DescriptionProduct />
			{
				props.element?props.element:<Descript/>
			}
			<TheSameProduct />
		</React.Fragment>
	)
}