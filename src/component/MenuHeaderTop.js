import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
	Container,
	Col
} from 'reactstrap';
import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../Css/MenuHeaderTop.css";

const MenuHeaderTop = () =>{
	const [isOpen,setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<>
			<Container fluid className="BarInformationBasic">
				<Col sm-3 className="DivTextRun">
				<Marquee className="fst-italic fs-6" gradientColor="#232323" speed="30" direction="left">Đầu tiên chúng ta phải kể đến đó là cách sử dụng thuộc tính của table , đây là cách mà được khá nhiều người xử dụng từ trước đến nay. </Marquee>

				</Col>
				<Col sm-3 style={{fontSize:"0.9rem"}}>Zalo/Hotline: 091 608 5629 | Email CSKH: hqpolo.vn@gmail.com
				</Col>
				<Col sm-3 className="DivBackLink">
					<img className="BackLink" src="/images/logo-instagram.svg" alt="instagram" title="Follow us on Instagram" />
					<img className="BackLink" src="/images/logo-facebook.svg" alt="facebook" title="Follow us on Facebook"/>
					<img className="BackLink" src="/images/logo-gmail.svg" alt="gmail" title="Send us an Email"/>
					<img className="BackLink" src="/images/logo-youtube.svg" alt="youtube" title="Follow us on Youtube"/>
				</Col>
				
			</Container>
			<Navbar light expand="md" className="sticky-top">
				<Link to="/">
					<img className="logo-hqpolo" src="/images/logoHQPOLO.svg" alt="home page" title="home page" />
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/components/">ÁO POLO</NavLink>
						</NavItem>



						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								THỜI TRANG NAM
							</DropdownToggle>
							<DropdownMenu className="DropDownMenu" right>
								<DropdownItem>
									SẢN PHẨM BÁN CHẠY
								</DropdownItem>
								<DropdownItem>
									SẢN PHẨM MỚI
								</DropdownItem>
								<DropdownItem />
							</DropdownMenu>
						</UncontrolledDropdown>


						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								QUYỀN LỜI KHÁCH HÀNG
							</DropdownToggle>
							<DropdownMenu className="DropDownMenu" right>
								<DropdownItem>
									<Link to="/policy/privacy">CHÍNH SÁCH BẢO MẬT </Link>
									
								</DropdownItem>
								<DropdownItem>
									<Link to="/policy/exchange-or-return">CHÍNH SÁCH ĐỔI/TRẢ HÀNG </Link>
									
								</DropdownItem>
								<DropdownItem>
									<Link to="/policy/tryal">CHÍNH SÁCH VẬN CHUYỂN </Link>
									
								</DropdownItem>
								<DropdownItem>
									<Link to="/policy/tryal">CHÍNH SÁCH DÙNG THỬ </Link>
									
								</DropdownItem>
								<DropdownItem>
									<Link to="/detail-product">HƯỚNG DẪN CHỌN SIZE </Link>
									
								</DropdownItem>
								<DropdownItem />


							</DropdownMenu>
						</UncontrolledDropdown>

						<NavItem className="nav-custom-again">
							<Link to="/blog/">TIN TỨC/BLOG</Link>
						</NavItem>
						<NavItem>
							<NavLink href="/policy">KHÁCH HÀNG THÂN THIẾT</NavLink>
						</NavItem>
						<NavItem style={{"display":"flex","alignItems": "center","color":"blue","textDecoration":"underline"}}>
							<Link to="/login">ĐĂNG NHẬP</Link>
						</NavItem>
					</Nav>
				</Collapse>

				<div className="div-cart-and-search-box">
					<div className="cart"><img src="/images/icon-cart.svg" alt="cart" title="cart" width="20px" height="20px" />
					</div>
					<div className="searchBox">
						<input className="searchInput"type="text" name="" placeholder="Search" />
						<button className="searchButton" href="#">
							<img src="/images/icon-search.svg" alt="search" title="search" width="30px" height="30px" />
						</button>
						</div>
					
				</div>
					
			</Navbar>
		</>
	);
}

export default MenuHeaderTop;