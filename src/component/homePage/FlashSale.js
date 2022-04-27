import { Container, Row } from "reactstrap";
import "../../Css/homePage/FlashSale.css";
import SlickSellingProduct from "./SlickSellingProduct.js";

const FlashSale = () =>{
	return(
		<>
			<div className="FlashSale">
				<span></span>
				<b><img src="/images/icon-clock.svg" alt="FlashSale"/>FlashSale</b>
				<span></span>
				<a className="nextLink" href="#">&#62;</a>
			</div>
			<Container>
				<Row className="CountDown">
					<div className="time hours">0<span>giờ</span></div>
					<div className="time minute">0<span>phút</span></div>
					<div className="time second">0<span>giây</span></div>
				</Row>
				<Row>
					<SlickSellingProduct />
				</Row>
			</Container>
		</>
	)

}

export default FlashSale;