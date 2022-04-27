import Slider from "react-slick";
import { Container, Row} from 'reactstrap';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TitleProduct from "./TitleProduct.js";

import "../../Css/homePage/Slick03.css";


const Slick03 = ()=>{

	const settings = {
		infinite: true,
		speed: 100,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		centerMode: true,
		centerPadding: '0px',
		className: "Slick03"
	};
	return(
		<>

			<TitleProduct title="KHÁCH HÀNG NÓI GÌ VỀ KHÁCH HÀNG HQPOLO #FEEDBACK" />
			<Container>
				<Row>
					<Slider {...settings}>
						<div className="img-1-slick03 img-slick03">
							<div>“Rất ấn tượng với hãng thời trang HQPOLO này. Shop đóng gói hộp đựng rất xịn xò, còn tinh tế bonus thêm phiếu giảm giá lần sau nữa” – ( Nguyễn Văn Sơn) Người sáng lập</div>
						</div>
						<div className="img-2-slick03 img-slick03">
							<div>“Rất ấn tượng với hãng thời trang HQPOLO này. Shop đóng gói hộp đựng rất xịn xò, còn tinh tế bonus thêm phiếu giảm giá lần sau nữa” – ( Nguyễn Văn Sơn) Người sáng lập</div>
						</div>
						<div className="img-3-slick03 img-slick03">
							<div>“Rất ấn tượng với hãng thời trang HQPOLO này. Shop đóng gói hộp đựng rất xịn xò, còn tinh tế bonus thêm phiếu giảm giá lần sau nữa” – ( Nguyễn Văn Sơn) Người sáng lập</div>
						</div>
						<div className="img-4-slick03 img-slick03">
							<div>“Rất ấn tượng với hãng thời trang HQPOLO này. Shop đóng gói hộp đựng rất xịn xò, còn tinh tế bonus thêm phiếu giảm giá lần sau nữa” – ( Nguyễn Văn Sơn) Người sáng lập</div>
						</div>
						<div className="img-5-slick03 img-slick03">
							<div>“Rất ấn tượng với hãng thời trang HQPOLO này. Shop đóng gói hộp đựng rất xịn xò, còn tinh tế bonus thêm phiếu giảm giá lần sau nữa” – ( Nguyễn Văn Sơn) Người sáng lập</div>
						</div>
						<div className="img-6-slick03 img-slick03">
							<div>“Rất ấn tượng với hãng thời trang HQPOLO này. Shop đóng gói hộp đựng rất xịn xò, còn tinh tế bonus thêm phiếu giảm giá lần sau nữa” – ( Nguyễn Văn Sơn) Người sáng lập</div>
						</div>
					</Slider>
				</Row>
			</Container>
		</>
	)
}


export default Slick03;