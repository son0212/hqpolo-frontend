import React from "react";

import "../Css/InforEndPage.css";

import {
	Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading } from "./StyleFooter.js";

const InforEndPage = ()=>{

	return(
		<t>
			<Box>
				<div className="sign-up-to-receive-information">
					<div className="div-left">
						<h4 className="title-subscribe-to-receive-information">ĐĂNG KÝ NHẬN THÔNG TIN</h4>
						<p className="subscribe-to-receive-information">Đăng ký ngay để là người đầu tiên cập nhật sớm nhất những tin tức thời trang, những bộ sưu tập cũng như ưu đãi hấp dẫn từ HQPOLO</p>
					</div>
					<div className="div-right">
						<div className="divOne">
							<input type="text" placeholder="Số điện thoại của bạn" />
							<input type="button" value="Đăng Ký" /> 
						</div>
						<div className="divTwo">
							<input type="checkbox" name="agreement" />
							<label for="agreement">Tôi đồng ý nhận tin nhắn từ HQPOLO</label>
						</div>
						
					</div>
				</div>
				<div className="way"></div>
				<Container>
					<Row>
						<div className="founding">
							<img src="/images/logoHQPOLO-end-page.jpg" alt="Trang chủ hqpolo.com" />
							<p>Thành lập từ năm 2021, năm con TRÂU VÀNG. Vì sứ mệnh 50 triệu đàn ông Việt Nam Trẻ trung và Tinh tế. HQPOLO cung cấp cho bạn chiếc áo polo: Đẹp nhất - Chất lượng tốt nhất - Giá hợp lý nhất!</p>
						</div>
						<Column>
							<Heading>Về HQPOLO</Heading>
							<FooterLink href="#">Giới thiệu</FooterLink>
							<FooterLink href="#">Tìm kiếm</FooterLink>
							<FooterLink href="#">Điều khoản sử dụng</FooterLink>
							<FooterLink href="#">Tạp chí thời trang</FooterLink>
							<FooterLink href="#">Tin khuyến mãi</FooterLink>
							<FooterLink href="#">Hợp tác</FooterLink>
						</Column>
						<Column>
							<Heading>Hỗ trợ khách hàng</Heading>
							<FooterLink href="#">Chính sách đổi trả</FooterLink>
							<FooterLink href="#">Chính sách bảo mật</FooterLink>
							<FooterLink href="#">Chính sách bảo hành</FooterLink>
							<FooterLink href="#">Chinh sách mua hàng</FooterLink>
							<FooterLink href="#">Hướng dẫn chọn size</FooterLink>
							<FooterLink href="#">Khách hàng thân thiết</FooterLink>
						</Column>
						<div className="fanPage">
							<Heading>FANPAGE</Heading>
							<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhqpolo.vn%2F&amp;tabs=timeline&amp;width=450&amp;height=750&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" width="450" height="130" style={{border:"none",overFlow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="Main Page Shop On Facebook"></iframe>
						</div>
					</Row>
					<div className="moreInfor">
						<div className="contactWithHQPOLO">
							<Heading>LIÊN LẠC VỚI HQPOLO</Heading>
							<ul>
								<li>Mua hàng online: 091 608 5629</li>
								<li>Góp ý, khiếu nại: 0916085629</li>
							</ul>
						</div>
						<div className="moreLinkHQPOLO">
							<Heading>KẾT NỐI VỚI HQPOLO</Heading>
							<div>
								<div className="linkTikTok logoLink"></div>
								<div className="linkFacebook logoLink"></div>
								<div className="linkYoutube logoLink"></div>
								<div className="linkInstagram logoLink"></div>
							</div>
						</div>
						<div className="certifycateHQPOLO"></div>
					</div>

				</Container>
				
			</Box>
			<div className="elementEndPage">
				<p>© 2021 HQPOLO | Hộ kinh doanh HQPOLO - Số 3, ngách 64/57 ngõ 58 Vũ Trọng Phụng - Hà Nội | Mã số thuế 0109684799 cấp ngày 28/6/2021</p>
				<p>© Giấy phép đăng ký HỘ KINH DOANH HQPOLO: 01F8021288 do UBND quận Thanh Xuân - Hà Nội cấp ngày 17/6/2021</p>
			</div>
	</t>
	)

}


export default InforEndPage;