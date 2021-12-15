const Login = () =>{
	return(
		<div className="sign_in">
      <div className="input_field">
        <input type="text" placeholder="E-mail" className="input" />
      </div>
      <div className="input_field">
        <input type="password" placeholder="Password" className="input" />
      </div>
      <div className="btn"><a href="#">Sign in</a></div>
     
    </div>
	)
}


export default Login;