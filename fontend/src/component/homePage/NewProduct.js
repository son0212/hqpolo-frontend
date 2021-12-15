import React from "react";
// import { Container, Row} from 'reactstrap';

import '../../Css/homePage/NewProduct.css';

import TitleProduct from "./TitleProduct.js";

export default class NewProduct extends React.Component{
	constructor(){
    super();
    this.state = {
      hover: false
    }
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }
  onMouseEnterHandler() {
    this.setState({
        hover: true
    });
    console.log(this);
  }

  onMouseLeaveHandler() {
    this.setState({
        hover: false
    });
  }

	render(){
		return(
			<React.Fragment>
				<TitleProduct title="Sản phẩm mới" />
				<div className="newProduct">
					<div className="img-custom col-sm-3">
		        <div onMouseEnter={this.onMouseEnterHandler}
		            onMouseLeave={this.onMouseLeaveHandler} className={this.state.hover?"box-image box-image-after":"box-image-before box-image"} key="1"></div>
		        <div className="box-price-and-text">
		          <div className="title-product">POLO TRĂNG PHỐI XANH HQ05</div>
		          <div className="price">
		            <div className="current-price">199.000<span className="unit">đ</span></div>
		            <div className="initial-price">399.000<span className="unit">đ</span></div>
		          </div>
		          <div className="button-function">
		            <div className="box1">Thêm vào giỏ</div>
		            <div className="box2">Mua ngay</div>
		          </div>
		        </div>
		      </div>
		      <div className="img-custom col-sm-3">
		        <div onMouseEnter={this.onMouseEnterHandler}
		            onMouseLeave={this.onMouseLeaveHandler} className={this.state.hover?"box-image box-image-after":"box-image-before box-image"} key="2"></div>
		        <div className="box-price-and-text">
		          <div className="title-product">POLO TRĂNG PHỐI XANH HQ05</div>
		          <div className="price">
		            <div className="current-price">199.000<span className="unit">đ</span></div>
		            <div className="initial-price">399.000<span className="unit">đ</span></div>
		          </div>
		          <div className="button-function">
		            <div className="box1">Thêm vào giỏ</div>
		            <div className="box2">Mua ngay</div>
		          </div>
		        </div>
		      </div>
		      <div className="img-custom col-sm-3">
		        <div onMouseEnter={this.onMouseEnterHandler}
		            onMouseLeave={this.onMouseLeaveHandler} className={this.state.hover?"box-image box-image-after":"box-image-before box-image"} key="3"></div>
		        <div className="box-price-and-text">
		          <div className="title-product">POLO TRĂNG PHỐI XANH HQ05</div>
		          <div className="price">
		            <div className="current-price">199.000<span className="unit">đ</span></div>
		            <div className="initial-price">399.000<span className="unit">đ</span></div>
		          </div>
		          <div className="button-function">
		            <div className="box1">Thêm vào giỏ</div>
		            <div className="box2">Mua ngay</div>
		          </div>
		        </div>
		      </div>
		      <div className="img-custom col-sm-3">
		        <div onMouseEnter={this.onMouseEnterHandler}
		            onMouseLeave={this.onMouseLeaveHandler} className={this.state.hover?"box-image box-image-after":"box-image-before box-image"} key="4"></div>
		        <div className="box-price-and-text">
		          <div className="title-product">POLO TRĂNG PHỐI XANH HQ05</div>
		          <div className="price">
		            <div className="current-price">199.000<span className="unit">đ</span></div>
		            <div className="initial-price">399.000<span className="unit">đ</span></div>
		          </div>
		          <div className="button-function">
		            <div className="box1">Thêm vào giỏ</div>
		            <div className="box2">Mua ngay</div>
		          </div>
		        </div>
		      </div>    
		      <div className="img-custom col-sm-3">
		        <div onMouseEnter={this.onMouseEnterHandler}
		            onMouseLeave={this.onMouseLeaveHandler} className={this.state.hover?"box-image box-image-after":"box-image-before box-image"} key="5"></div>
		        <div className="box-price-and-text">
		          <div className="title-product">POLO TRĂNG PHỐI XANH HQ05</div>
		          <div className="price">
		            <div className="current-price">199.000<span className="unit">đ</span></div>
		            <div className="initial-price">399.000<span className="unit">đ</span></div>
		          </div>
		          <div className="button-function">
		            <div className="box1">Thêm vào giỏ</div>
		            <div className="box2">Mua ngay</div>
		          </div>
		        </div>
		      </div>
		      <div className="img-custom col-sm-3">
		        <div onMouseEnter={this.onMouseEnterHandler}
		            onMouseLeave={this.onMouseLeaveHandler} className={this.state.hover?"box-image box-image-after":"box-image-before box-image"} key="6"></div>
		        <div className="box-price-and-text">
		          <div className="title-product">POLO TRĂNG PHỐI XANH HQ05</div>
		          <div className="price">
		            <div className="current-price">199.000<span className="unit">đ</span></div>
		            <div className="initial-price">399.000<span className="unit">đ</span></div>
		          </div>
		          <div className="button-function">
		            <div className="box1">Thêm vào giỏ</div>
		            <div className="box2">Mua ngay</div>
		          </div>
		        </div>
		      </div>
		      <div className="img-custom col-sm-3">
		        <div onMouseEnter={this.onMouseEnterHandler}
		            onMouseLeave={this.onMouseLeaveHandler} className={this.state.hover?"box-image box-image-after":"box-image-before box-image"} key="7"></div>
		        <div className="box-price-and-text">
		          <div className="title-product">POLO TRĂNG PHỐI XANH HQ05</div>
		          <div className="price">
		            <div className="current-price">199.000<span className="unit">đ</span></div>
		            <div className="initial-price">399.000<span className="unit">đ</span></div>
		          </div>
		          <div className="button-function">
		            <div className="box1">Thêm vào giỏ</div>
		            <div className="box2">Mua ngay</div>
		          </div>
		        </div>
		      </div>
		      <div className="img-custom col-sm-3">
		        <div onMouseEnter={this.onMouseEnterHandler}
		            onMouseLeave={this.onMouseLeaveHandler} className={this.state.hover?"box-image box-image-after":"box-image-before box-image"} key="8"></div>
		        <div className="box-price-and-text">
		          <div className="title-product">POLO TRĂNG PHỐI XANH HQ05</div>
		          <div className="price">
		            <div className="current-price">199.000<span className="unit">đ</span></div>
		            <div className="initial-price">399.000<span className="unit">đ</span></div>
		          </div>
		          <div className="button-function">
		            <div className="box1">Thêm vào giỏ</div>
		            <div className="box2">Mua ngay</div>
		          </div>
		        </div>
		      </div>
		    </div>



      </React.Fragment>
		)
	}
}