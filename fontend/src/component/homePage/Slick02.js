import React from "react";
import Slider from "react-slick";
import { Container, Row} from 'reactstrap';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TitleProduct from "./TitleProduct.js";

import "../../Css/homePage/Slick02.css";

export default class Slick02 extends React.Component{
	render(){

		const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // className: "Slider"
  	};
		return(
			<React.Fragment>
				<TitleProduct title="BỘ SƯU TẬP & BLOG" />
				<Container style={{marginBottom: "30px"}}>
					<Row>
		        <Slider {...settings}>
		        	<div className="img-1-slick02 img-slick02">
		        		<div className="dateUp"><span>19</span> th5</div>
		        		<div className="titlePost">
		        			<div className="titleQuestion">3 Lý do người có thu nhập cao thường mặc áo POLO</div>
		        			<div className="answerQuestion">Là trang phục phổ thông của làng mốt, áo polo còn được gọi với cái tên khác là [...]</div>
		        			<button type="button">Xem thêm</button>
		        		</div>
		        	</div>
		        	<div className="img-2-slick02 img-slick02">
		        		<div className="dateUp"><span>19</span> th5</div>
		        		<div className="titlePost">
		        			<div className="titleQuestion">3 Lý do người có thu nhập cao thường mặc áo POLO</div>
		        			<div className="answerQuestion">Là trang phục phổ thông của làng mốt, áo polo còn được gọi với cái tên khác là [...]</div>
		        			<button type="button">Xem thêm</button>
		        		</div>
		        	</div>
		        	<div className="img-3-slick02 img-slick02">
		        		<div className="dateUp"><span>19</span> th5</div>
		        		<div className="titlePost">
		        			<div className="titleQuestion">3 Lý do người có thu nhập cao thường mặc áo POLO</div>
		        			<div className="answerQuestion">Là trang phục phổ thông của làng mốt, áo polo còn được gọi với cái tên khác là [...]</div>
		        			<button type="button">Xem thêm</button>
		        		</div>
		        	</div>
		        	<div className="img-4-slick02 img-slick02">
		        		<div className="dateUp"><span>19</span> th5</div>
		        		<div className="titlePost">
		        			<div className="titleQuestion">3 Lý do người có thu nhập cao thường mặc áo POLO</div>
		        			<div className="answerQuestion">Là trang phục phổ thông của làng mốt, áo polo còn được gọi với cái tên khác là [...]</div>
		        			<button type="button">Xem thêm</button>
		        		</div>
		        	</div>
		        </Slider>
	        </Row>
	      </Container>
	    </React.Fragment>
		)
	}
}