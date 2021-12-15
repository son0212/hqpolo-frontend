import {Container, Row} from "react-bootstrap";

import SlickSellingProduct from "../homePage/SlickSellingProduct.js";

const TheSameProduct = () =>{
	return(
		<Container>
			<Row>
				<div className="title-detail-product" style={{"text-align":"left"}}>Sản phẩm tương tự</div>
				<SlickSellingProduct />
			</Row>
		</Container>
	)
}


export default TheSameProduct;