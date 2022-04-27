import { useContext } from 'react';
import { Product } from '../../context/ProductContext';

import '../../Css/homePage/NewProduct.css';

import TitleProduct from "./TitleProduct.js";

const NewProduct = () =>{
	const state = useContext(Product);

	return(
		<>
			<TitleProduct title="Sản phẩm mới" />
			
			<div className="newProduct">
				{state.listNewProduct?state.listNewProduct.map((item,index)=>{
				return(
				<div className="img-custom col-sm-3">
					<div onMouseEnter={()=>(state.setHoverSlickSellingProduct(index))}
            onMouseLeave={()=>(state.setHoverSlickSellingProduct(-1))} 
						className="box-image"
            style={state.hoverSlickSellingProduct === index ? {backgroundImage:`url('${item.imgDemo[1]}')` }:{backgroundImage:`url('${item.imgDemo[0]}')`}} key={index}></div>
					<div className="box-price-and-text">
						<div className="title-product">{item.name}</div>
						<div className="price">
							<div className="current-price">{item.priceNew}<span className="unit">đ</span></div>
							<div className="initial-price">{item.price}<span className="unit">đ</span></div>
						</div>
						<div className="button-function">
							<div className="box1">Thêm vào giỏ</div>
							<div className="box2">Mua ngay</div>
						</div>
					</div>
				</div>
		
				)}):null}
				</div>
		</>
	)
	
}

export default NewProduct;