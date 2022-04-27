import {Container, Row, Col} from "react-bootstrap";

import "../../Css/blog/Blog.css";

export default function Blog(){
	return(
		<div className="Blog">
			<h2>BỘ SƯU TẬP BLOG</h2>
			<Container>
				<Row>
					<Col sm={3} className="col">
						<div className="blog01 img-blog">
							<div className="dateUp"><span>19</span> Th5</div>
							<div className="title-blog">3 Lý do người có thu nhập cao thường mặc áo POLO</div>
						</div>
					</Col>
					<Col sm={1} className="col"></Col>
					<Col sm={3} className="col">
						<div className="blog02 img-blog">
							<div className="dateUp"><span>19</span> Th5</div>
							<div className="title-blog">3 Lý do người có thu nhập cao thường mặc áo POLO</div>
						</div>
					</Col>
					<Col sm={1} className="col"></Col>
					<Col sm={3} className="col">
						<div className="blog03 img-blog">
							<div className="dateUp"><span>19</span> Th5</div>
							<div className="title-blog">3 Lý do người có thu nhập cao thường mặc áo POLO</div>
						</div>
					</Col>
					<Col sm={1} className="col"></Col>
					<Col sm={3} className="col">
						<div className="blog04 img-blog">
							<div className="dateUp"><span>19</span> Th5</div>
							<div className="title-blog">3 Lý do người có thu nhập cao thường mặc áo POLO</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}