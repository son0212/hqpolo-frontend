import "../../Css/homePage/TitleProduct.css";

const TitleProduct = (props) =>{
	return(
		<div className="TitleProduct">
			<span></span>
			<b>{props.title}</b>
			<span></span>
			<a className="nextLink" href="#">&#62;</a>
		</div>
	)
	
}


export default TitleProduct;