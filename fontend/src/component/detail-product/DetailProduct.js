import React from "react";

import DetailProductInformation from "./DetailProductInformation.js";
import DescriptionProduct from "./DescriptionProduct.js";
import TheSameProduct from "./TheSameProduct.js";

export default function DetailProduct(props){

	return(
		<React.Fragment>
			<DetailProductInformation />
			<DescriptionProduct />
			{props.element}
			<TheSameProduct />
		</React.Fragment>
	)
}