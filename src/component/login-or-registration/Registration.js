import axios from "axios";
import { useContext } from "react";
import { Alert } from "reactstrap";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Css/login-or-registration/Registration.css";
import { User } from "../../context/UserContext";

const Registration = () =>{
  const navigate = useNavigate();
  const state = useContext(User)
	
  const handleChange = (age) => {
    state.setInforRegistration({...state.inforRegistration,age:age.value,selectAge:age});
  };

  const options = () => {
    let array =[];
    for(let i=10;i<=60;i++){
      array.push({value:i,label:i});
    }
    return array;
  }

  const updateInput = (evt)=>{
    state.setInforRegistration({...state.inforRegistration,[evt.target.name]: evt.target.value});
  }
  

  const postDataRegistration = (e)=>{
      axios.post('http://localhost:4000/registration',{
        email: e.target[0].value,
        password: e.target[1].value,
        phoneNumber: e.target[2].value,
        name: e.target[3].value,
        address: e.target[4].value,
        age: e.target[6].value,
      }).then((response) => {
        state.setInforRegistration({...state.inforRegistration,error:""});
        navigate('/login');
        alert('Sign Up success');
      }).catch(err=>{
        state.setInforRegistration({...state.inforRegistration,error:err.response.data.message});
      });
    e.preventDefault();
  }
    return(
      <>
        {state.inforRegistration.error?<Alert color="warning">{state.inforRegistration.error}</Alert>:null}
        
        <form onSubmit={postDataRegistration} className="sign_up">
          
          <div className="input_field">
            <input type="text" placeholder="E-mail" className="input" onChange={updateInput} name="email" value={state.inforRegistration.email} />
          </div>
          <div className="input_field">
            <input type="password" placeholder="Password" className="input" onChange={updateInput} name="password" value={state.inforRegistration.password} />
          </div>
          <div className="input_field">
            <input type="text" placeholder="phoneNumber" className="input" onChange={updateInput} name="phoneNumber" value={state.inforRegistration.phoneNumber} />
          </div>
          <div className="input_field">
            <input type="text" placeholder="name" className="input" onChange={updateInput} name="name" value={state.inforRegistration.name} />
          </div>
          <div className="input_field">
            <input type="text" placeholder="address" className="input" onChange={updateInput} name="address" value={state.inforRegistration.address} />
          </div>
          <div className="input_field div-custom-registration">
            
            {<Select onChange={handleChange} value={state.inforRegistration.selectAge} options={options()} placeholder="Age" className="select" /> }
            
            <div className="div-other">*Other:</div>
            <input type="text" placeholder="age" className="input" onChange={updateInput} name="age" value={state.inforRegistration.age} />
          </div>
          <button type="submit" className="btn">Sign up</button>
        </form>
      </>
    )

}
export default Registration;