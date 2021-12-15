import React from "react";
import {Link} from "react-router-dom";

import "../../Css/login-or-registration/index.css";

export default class PageDad extends React.Component{
	render(){
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
	    		{this.props.element}
		    </div>
	    </div>
		);
	}
}