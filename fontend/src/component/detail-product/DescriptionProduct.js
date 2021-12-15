import React, {useState} from "react";
import {
  Container
} from 'react-bootstrap';
import {Link } from "react-router-dom";

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../../Css/detail-product/DescriptionProduct.css";

const DescriptionProduct = ()=>{
	return(
		<div className="DescriptionProduct">
			<Container>
					<div className="main-title-infor">
						<Link to="/detail-product/descript" className="descript-main">Mô tả</Link>
						<Link to="/detail-product/additional-information" className="additional-information-main">Thông tin bổ sung</Link>
						<Link to="/detail-product/tutorial-protect" className="tutorial-protect-main">Hướng dẫn bảo quản</Link>
					</div>
					
			</Container>
		</div>
	)
}







export default DescriptionProduct;