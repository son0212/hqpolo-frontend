import Slider from "react-slick";
import { Container, Row } from 'reactstrap';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../Css/detail-product/SlickDetailProduct.css";


const SlickDetailProduct = (props)=>{


		const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      className: "slick-detail-product"
  	};
		const listImg = props.children;
		return(
			<Container>
				<Row>
	        <Slider {...settings}>
						{listImg.map((img,index)=>{
	        	// return (<div key={index} className="img-slick-detail" style={{ backgroundImage:`url(http://localhost:3000${abc}})`}}></div> )
						return <img className="img-slick-detail" key={index} src={img} />
						})}
	        </Slider>
        </Row>
      </Container>
		)

}


export default SlickDetailProduct;