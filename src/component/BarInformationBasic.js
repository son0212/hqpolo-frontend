import Marquee from "react-fast-marquee";


import logoInstagram from "../images/logo-instagram.svg";
import logoFacebook from "../images/logo-facebook.svg";
import logoGmail from "../images/logo-gmail.svg";
import logoYoutube from "../images/logo-youtube.svg";

import "../Css/BarInformationBasic.css";

export default function BarInformationBasic(){
	return(
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
	)
} 