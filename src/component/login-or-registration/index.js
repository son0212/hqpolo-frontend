import {Link} from "react-router-dom";

import "../../Css/login-or-registration/index.css";

const PageDad = (props)=>{
		return(
			<div className="wrapper">
	    	<div className="container">
	        <div className="tabs">
	          <ul>
	            <li><Link to="/login" >Sign in</Link></li>
	            <li><Link to ="/registration">Sign up</Link></li>
	          </ul>
	        </div>
	        <div className="icon-button"> 
		        <span className="facebook">F</span>
		        <span className="google">G</span>
		      </div>
	    		{props.element}
		    </div>
	    </div>
		);
	
}

export default PageDad;