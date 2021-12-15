const Registration = () =>{
	return(
	  <div className="sign_up">
      <div className="input_field">
        <input type="text" placeholder="Username" className="input" />
      </div>
      <div className="input_field">
        <input type="text" placeholder="E-mail" className="input" />
      </div>
      <div className="input_field">
        <input type="password" placeholder="Password" className="input" />
      </div>
      <div className="btn"><a href="#">Sign up</a></div>
    </div>
	)
}


export default Registration;