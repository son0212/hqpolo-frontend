import axios from 'axios';
import { useContext } from 'react';
import { Alert } from "reactstrap";
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from '../../context/UserContext';

const Login = () =>{
  const state = useContext(User);
  const navigate = useNavigate();
  const updateInput = (evt)=>{
    state.setInforLogin({...state.inforLogin,[evt.target.name]: evt.target.value});
  }
  const postDataLogin = (e)=>{
    axios.post('http://localhost:4000/login',{
        email:e.target[0].value,
        password:e.target[1].value
      }).then((response) => {
        state.setInforLogin({...state.inforLogin,error:""});
        navigate('/');
        alert('Sign In success');
      }).catch(err=>{
        state.setInforLogin({...state.inforLogin,error:err.response.data.message});
    });
    e.preventDefault();
  }
	return(
    <>
      {state.error?<Alert color="warning">{state.error}</Alert>:null}

      <form onSubmit={postDataLogin} className="sign_in">
        <div className="input_field">
        <input type="text" placeholder="E-mail" className="input" onChange={updateInput} name="email" value={state.email} />
        </div>
        <div className="input_field">
        <input type="password" placeholder="Password" className="input" onChange={updateInput} name="password" value={state.password} />
        </div>
        <button type="submit" className="btn">Sign in</button>
      
      </form>
    </>
	)
}


export default Login;