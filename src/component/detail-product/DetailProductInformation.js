import {
	Container,
	Row,
	Col
} from 'react-bootstrap';
import {Link} from "react-router-dom";
import InnerImageZoom from 'react-inner-image-zoom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import SlickDetailProduct from "./SlickDetailProduct.js";
import { Product } from '../../context/ProductContext.js';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../../Css/detail-product/DetailProductInformation.css";


const DetailProductInformation = (props) =>{
	const state = useContext(Product);
	const [isLoading,setIsLoading] = useState(true);
	var _id = window.location.href.split('/')[4];

	useEffect(()=>{
		const fetchData = async () =>{	
			axios.get(`http://localhost:4000/get-products/get-product?_id=${_id}`)
			.then((res)=>{
				state.setParamProductNow(res.data);
				setIsLoading(false);
			}).catch(err=>console.log(err));
		}
	fetchData();
	},[]);
	const item = props.children||state.paramProductNow;
	const Decrease = ()=>{
		if(state.amount <= 1){
			state.setAmount(1);
		}
		else{
			state.setAmount(state.amount -1);
		}
	}

	if(isLoading){
		return(
			<div>Loading ...</div>
		)
	}
	return(
		<Container>
			<Row>
				<Col sm={6}>
					<InnerImageZoom className="img-zoom" src={item.imgDemo[0]} zoomType="hover" />
					<SlickDetailProduct children={item.imgDemo} />
				</Col>
				<Col sm={6}>
					<div className="title-detail-product">
						{item.name}
					</div>
					<div className="price-product">
						<span className="intial-product">
							{item.price}
							<i className="unit-money">đ</i>
						</span>
						<span className="current-product">
							{item.priceNew}<i className="unit-money">đ</i>
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
							<div className="distortion-color-one" style={{backgroundImage:`url("${item.imgDemo[0]}")`}}></div>
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
							<span className="amount">{state.amount}</span>
							<button type="button" onClick={()=> state.setAmount(state.amount + 1)}> + </button>
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