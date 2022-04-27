import {
  Container
} from 'react-bootstrap';
import {Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../../Css/detail-product/DescriptionProduct.css";

const DescriptionProduct = ()=>{
	let currentLink = window.location.href.split('/')[4]
	;
	return(
		<div className="DescriptionProduct">
			<Container>
					<div className="main-title-infor">
						<Link to={`/detail-product/${currentLink}/`} className="descript-main">Mô tả</Link>
						<Link to={`/detail-product/${currentLink}/additional-information` }className="additional-information-main">Thông tin bổ sung</Link>
						<Link to={`/detail-product/${currentLink}/tutorial-protect`} className="tutorial-protect-main">Hướng dẫn bảo quản</Link>
					</div>
					
			</Container>
		</div>
	)
}







export default DescriptionProduct;