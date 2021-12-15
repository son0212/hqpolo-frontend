import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../Css/homePage/SlickSellingProduct.css";

export default class SlickSellingProduct extends React.Component {
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
        console.log('enter');
    }

    onMouseLeaveHandler() {
        this.setState({
            hover: false
        });
        console.log('leave');
    }

  render() {
    
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      className: "Slider"
    };

    return (
      <React.Fragment>
        <Slider {...settings}>
          <div className="img-custom SlickSellingProduct">
            <div onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler} className={this.state.hover?"box-image box-image-after":"box-image-before box-image"}></div>
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
          <div className="img-custom SlickSellingProduct">
            <div className="box-image">img two</div>
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
          <div className="img-custom SlickSellingProduct">
            <div className="box-image">img three</div>
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
          <div className="img-custom SlickSellingProduct">
            <div className="box-image">img four</div>
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
          <div className="img-custom SlickSellingProduct">
            <div className="box-image">img five</div>
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
          <div className="img-custom SlickSellingProduct">
            <div className="box-image">img six</div>
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
          <div className="img-custom SlickSellingProduct">
            <div className="box-image">img seven</div>
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
          <div className="img-custom SlickSellingProduct">
            <div className="box-image">img eight</div>
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
        </Slider>
      </React.Fragment>
    );
  }
}