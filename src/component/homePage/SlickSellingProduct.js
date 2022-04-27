import {useContext} from "react";
import Slider from "react-slick";
// import axios from "axios";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../Css/homePage/SlickSellingProduct.css";
import { Product } from "../../context/ProductContext";


const SlickSellingProduct = () =>{
  const state = useContext(Product)
    
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: "slick-selling-product"
  }

  return(
    <>
      <Slider {...settings}>
                {state.listSlickSellingProduct?state.listSlickSellingProduct.map((item,index)=>{
        return (<div className="img-custom SlickSellingProduct" key={index}>
        <Link to={`/detail-product/${item._id}`} state={item}><div onMouseEnter={()=>(state.setHoverSlickSellingProduct(index))}
            onMouseLeave={()=>(state.setHoverSlickSellingProduct(-1))} className="box-image"
            style={state.hoverSlickSellingProduct === index ? {backgroundImage:`url('${item.imgDemo[1]}')` }:{backgroundImage:`url('${item.imgDemo[0]}')`}}></div></Link>
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
      </div>)
    }):null}
        
      </Slider>
    </>
  )
}

export default SlickSellingProduct;


