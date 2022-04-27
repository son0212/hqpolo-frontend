import React from "react";

import TitleProduct from "./TitleProduct.js";
import SlickSellingProduct from "./SlickSellingProduct.js";
 
export default function SellingProduct(){
	return(
		<React.Fragment>
			<TitleProduct title="Sản phẩm bán chạy" />
			<SlickSellingProduct />
		</React.Fragment>
	)
}