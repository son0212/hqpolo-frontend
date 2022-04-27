import {Col, Row, Container} from "react-bootstrap";

import "../../Css/detail-product/Descript.css";

const Descript = ()=>{
	return(
		<div className="descript">
			<Container>
				<Row>
					<Col sm={6}>Tên sản phẩm</Col>
					<Col sm={6}>Áo polo đen phối</Col>
					<hr />
					<Col sm={6}>Mã sản phẩm</Col>
					<Col sm={6}>HQDDP1.0</Col>
					<hr />
					<Col sm={6}>Chất liệu</Col>
					<Col sm={6}>100%cotton/Spandex</Col>
					<hr />
					<Col sm={6}>Chi tiết</Col>
					<Col sm={6}>Áo polo cao cấp của HQPOLO</Col>
					<hr />
					<Col sm={6}>Kiểu đáng</Col>
					<Col sm={6}>Slim Fit</Col>
					<hr />
					<h3 className="title-descript">ĐẶC TÍNH ÁO POLO CHẤT LIỆU COTTON SPANDEX:</h3>
					<p>♦ Vải có chứa thành phần lên đến 95% cotton giúp áo có khả năng thấm hút và thoáng mát vượt trội. Sự pha trộn với 5% sợi Spandex mang đến tính năng co dãn 4 chiều nên tạo được sự thoải mái khi mặc, ôm lấy cơ thể người mặc theo nhiều hướng, không tạo ra sự gò bó.</p>
					<p>♦ Tính chất vải thân thiện với môi trường, không gây kích ứng da do có thành phần từ sợi bông tự nhiên.</p>
					<p>♦  Dễ dàng giặt, rửa và vệ sinh các vết bẩn bám trên vải.</p>
					<h3 className="title-descript">MỘT SỐ HÌNH ẢNH MÔ TẢ CHI TIẾT SẢN PHẨM:</h3>
					<p>Với định hình phong cách thời trang Trẻ trung và Tinh tế, chúng tôi đã dành hết tâm huyết của mình để tạo nên 1 chiếc áo polo đặc biệt chất lượng từ chất liệu áo đến từng đường kim mũi chỉ. Khoác lên mình sản phẩm này sẽ giúp bạn trở lên sang trọng và cảm giác của quyền lực:</p>
					<div className="div-demo-product">
						<iframe className="iframe-demo-product" height="765px" src="https://www.youtube.com/embed/mZDl6yUbHBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					
						<img src='/images/list-demo-product/polo-xanh-than01.jpg' className="img-demo" alt="img-01" title="xanh than 01" />
						<img src="/images/list-demo-product/polo-xanh-than02.jpg" className="img-demo" alt="img-02" title="xanh than 02" />
						<img src="/images/list-demo-product/polo-xanh-than03.jpg" className="img-demo" alt="img-03" title="xanh than 03" />
						<img src="/images/list-demo-product/polo-xanh-than04.jpg" className="img-demo" alt="img-04" title="xanh than 04" />
						<img src="/images/list-demo-product/polo-xanh-than05.jpg" className="img-demo" alt="tutorial-choose-size" title="tutorial-choose-size" />
						<img src="/images/list-img-product/table-polo.jpg" className="img-demo" alt="img-05" title="xanh than 05" />
					</div>
					<p>Bất kỳ sản phẩm nào của HQPOLO khi giao đến tay khách hàng cũng đều được đóng trong 1 chiếc hộp đựng sang trọng, với niềm tin của bạn dành cho chúng tôi, bạn xứng đáng nhận được 1 món quà chứ không chỉ là 1 món hàng..</p>
				</Row>
			</Container>
		</div>
	)
	
}

export default Descript;