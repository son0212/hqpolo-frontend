import React from 'react';
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
  DropdownItem
} from 'reactstrap';
import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../Css/MenuHeaderTop.css";

import logoInstagram from "../images/logo-instagram.svg";
import logoFacebook from "../images/logo-facebook.svg";
import logoGmail from "../images/logo-gmail.svg";
import logoYoutube from "../images/logo-youtube.svg";
import iconCart from "../images/icon-cart.svg";
import iconSearch from "../images/icon-search.svg";
import logoHQPOLO from "../images/logoHQPOLO.svg";

class MenuHeaderTop extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isOpen: false
		}
	}
	 render(){
		const toggle = () => this.setState({isOpen: !this.state.isOpen});
		console.log("Render");
	  return (
	    <React.Fragment>
				<div className="BarInformationBasic">
					<div className="DivTextRun">
					<Marquee gradientColor="#232323" speed="30" direction="left"><i>Đầu tiên chúng ta phải kể đến đó là cách sử dụng thuộc tính của table , đây là cách mà được khá nhiều người xử dụng từ trước đến nay. </i></Marquee>

					</div>
					<div>Zalo/Hotline: 091 608 5629 | Email CSKH: hqpolo.vn@gmail.com
					</div>
					<div className="DivBackLink">
						<img className="BackLink" src={logoInstagram} alt="instagram" title="Follow us on Instagram" />
						<img className="BackLink" src={logoFacebook} alt="facebook" title="Follow us on Facebook"/>
						<img className="BackLink" src={logoGmail} alt="gmail" title="Send us an Email"/>
						<img className="BackLink" src={logoYoutube} alt="youtube" title="Follow us on Youtube"/>
					</div>
					
				</div>
	      <Navbar light expand="md" className="sticky-top">
	        <Link to="/">
	        	<img className="logo-hqpolo" src={logoHQPOLO} alt="home page" title="home page" />
	        </Link>
	        <NavbarToggler onClick={toggle} />
	        <Collapse isOpen={this.state.isOpen} navbar>
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
	          <div className="cart"><img src={iconCart} alt="cart" title="cart" width="20px" height="20px" />
	          </div>
	        	<div className="searchBox">
	            <input className="searchInput"type="text" name="" placeholder="Search" />
	            <button className="searchButton" href="#">
	              <img src={iconSearch} alt="search" title="search" width="30px" height="30px" />
	            </button>
	           </div>
	          
	        </div>
	      		
	      </Navbar>
	    </React.Fragment>
	  );
	}
}

export default MenuHeaderTop;