import 'bootstrap/dist/css/bootstrap.min.css';

import "../../Css/homePage/BenefitCustomer.css";

export default function BenefitCustomer(){
	return(

		<div className="BenefitCustomer">
			<div className="Item">
				<img src="/images/icon-free-ship.png" className="icon" alt="icon free-ship"/>
				<div className="text" >
					<div className="title">FREESHIP TOÀN QUỐC</div>
					<p className="Descript">Miễn phí giao hàng với bất kỳ đơn hàng từ 2 sản phẩm.</p>
				</div>
			</div>
			<div className="Item">
				<img src="/images/icon-gift.png" className="icon" alt="icon gift"/>
				<div className="text">
					<div className="title">ĐÓNG GÓI HỘP MIỄN PHÍ</div>
					<p className="Descript">Hỗ trợ đóng gói hộp miễn phí áp dụng với tất cả đơn hàng.</p>
				</div>
			</div>
			<div className="Item">
				<img src="/images/icon-warrant.png" className="icon" alt="icon warrant"/>
				<div className="text">
					<div className="title">CHẤT LƯỢNG ĐẢM BẢO</div>
					<p className="Descript">Kiểm hàng trước khi thanh toán & đổi trả sản phẩm lên đến 21 ngày.</p>
				</div>
			</div>
		</div>
	)
}