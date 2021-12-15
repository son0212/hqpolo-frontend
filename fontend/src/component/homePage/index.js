import React from "react";

import SlideShow from "./SlideShow.js";
import BenefitCustomer from "./BenefitCustomer.js";
import SellingProduct from "./SellingProduct.js";
import NewProduct from "./NewProduct.js";
import Slick01 from "./Slick01.js";
import FlashSale from "./FlashSale.js";
import Slick02 from "./Slick02.js";
import Slick03 from "./Slick03.js";

const MainPage = ()=>{
	return(
		<React.Fragment>
	      <SlideShow />
	      <BenefitCustomer />
	      <SellingProduct />
	      <NewProduct />
	      <Slick01 />
	      <FlashSale />
	      <Slick02 />
	      <Slick03 />
	      <BenefitCustomer /> 
	    </React.Fragment>
	)
}

export default MainPage;