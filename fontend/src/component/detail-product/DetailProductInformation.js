import React, {useState} from "react";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import {Link} from "react-router-dom";
import InnerImageZoom from 'react-inner-image-zoom';

import SlickDetailProduct from "./SlickDetailProduct.js";

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../../Css/detail-product/DetailProductInformation.css";

import img01 from "../../images/list-img-product/polo-black-rim01.png";


const DetailProductInformation = () =>{
	const [amount, setAmount] = useState(1);

	const Decrease = ()=>{
		if(amount <= 1){
			setAmount(1);
		}
		else{
			setAmount(amount -1);
		}
	}

	return(
		<Container>
			<Row>
				<Col sm={6}>
					<InnerImageZoom className="img-zoom" src={img01} zoomType="hover" />
					<SlickDetailProduct />
				</Col>
				<Col sm={6}>
					<div className="title-detail-product">
						POLO ĐEN VIỀN - HQPOLO
					</div>
					<div className="price-product">
						<span className="intial-product">
							399,000
							<i className="unit-money">đ</i>
						</span>
						<span className="current-product">
							249,000<i className="unit-money">đ</i>
						</span>
						
					</div>
					<div className="money-saved">
						(
						Bạn đã tiết kiệm được 150,000
						<i className="unit-money">đ</i>
						)
					</div>
					<div className="distortion-color">
						<div className="name-distortion">Màu sắc:</div>
						<div className="all-distortion">
							<div className="distortion-color-one"></div>
						</div>
					</div>
					<div className="distortion-size">
						<div className="name-distortion">Size:</div>
						<div className="all-distortion">
							<div className="distortion-size-one">S</div>
							<div className="distortion-size-two">M</div>
							<div className="distortion-size-four">L</div>
							<div className="distortion-size-five">XL</div>
							<div className="distortion-size-six">XXL</div>
						</div>
					</div>
					<div className="suggestion-size">
						<div className="name-distortion">Kích thước:</div>
					<Link to="#">BẠN ĐÃ BIẾT SIZE CHUẨN CỦA MÌNH CHƯA?</Link>
					</div>
					<div className="amount-product">
						<div className="amount">Số lượng:</div>
						<div className="decrease-and-indecrease">
							<button type="button" onClick={Decrease}> - </button>
							<span className="amount">{amount}</span>
							<button type="button" onClick={()=> setAmount(amount + 1)}> + </button>
						</div>						
					</div>
					<div className="add-and-pay-product">
						<div className="add-to-cart">Thêm vào giỏ</div>
						<div className="pay-now">Thanh toán ngay</div>
					</div>
					<div className="promotion">
						<div className="title-promotion">Khuyến mãi</div>
						<span>- Tặng bạn ưu đãi: Áo đầu tiên chỉ #99k</span>
					<span>- Freeship toàn quốc đơn hàng từ 2 sản phẩm</span>
					<span>- Đóng hộp sang trọng với tất cả đơn hàng</span>
					</div>
				</Col>
			</Row>
		</Container>
	)
}


export default DetailProductInformation;