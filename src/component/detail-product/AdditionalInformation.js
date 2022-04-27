import {Col, Row, Container} from "react-bootstrap";

const AdditionalInformation = ()=>{
	return(
		<div className="additional-information">
			<Container style={{"border":"0.5px gray solid"}}>
				<Row style={{"lineHeight": "30px"}}>
					<Col style={{"paddingTop":"20px"}} sm={6}>MÀU SẮC</Col>
					<Col style={{"paddingTop":"20px"}} sm={6}>POLO XANH THAN</Col>
					<hr />
					<Col sm={6}>SIZE</Col>
					<Col sm={6}>S,M,L,XL,XXL</Col>
					<hr />
				</Row>
			</Container>
		</div>
	)
}


export default AdditionalInformation;