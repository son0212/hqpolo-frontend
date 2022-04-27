import {Container, Row} from "react-bootstrap";

import "../../Css/detail-product/TutorialProtect.css";

const TutorialProtect = ()=>{
	return(
		<div className="tutorial-protect">
			<Container style={{"border":"0.5px gray solid"}}>
				<Row style={{"textAlign":"left"}}>
					<div className="header-tutorial">* Những thể nghiệm chưa bao giờ là dễ dàng khi HQPOLO luôn đặt những tiêu chí khắt khe nhất dành cho sản phẩm để có thể mang lại trải nghiệm trọn vẹn cho khách hàng, vì thế tất cả sản phẩm đều được nghiên cứu, sản xuất từ những thành phần tự nhiên và an toàn cho người dùng. Để sản phẩm được bảo quản tốt nhất HQPOLO có một số lưu ý nho nhỏ dưới đây: </div>
					<div className="content-tutorial">
						<p>- Giặt máy ở chế độ nhẹ, nhiệt độ thường.</p>
						<p>- Nên lộn trái áo, tránh trường hợp mặt hình in cọ sát vào thùng giặt gây tróc hình in.</p>
						<p>- Không đổ trực tiếp bột giặt lên quần áo sẽ gây loang màu sản phẩm.</p>
						<p>- Không sử dụng hoá chất tẩy có chứa Clo.</p>
						<p>- Nên giặt với sản phẩm cùng màu.</p>
						<p>- Phơi trong bóng mát, không phơi dưới ánh nắng mặt trời gay gắt.</p>
						<p>- Sấy thùng với chế độ nhẹ nhàng.</p>
						<p>- Lộn trái áo và là ở nhiệt độ trung bình 150 độ C.</p>
						<p>- Không là lên chi tiết trang trí.</p>
						<p>- Tránh để sản phẩm ở nơi ẩm thấp, với tính năng thu ẩm, hút nước tốt sẽ khiến áo dễ bị nấm mốc.</p>
					</div>
				</Row>	
			</Container>
		</div>
	)
}


export default TutorialProtect;