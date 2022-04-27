import {useState, createContext} from "react";

const User = createContext();

const UserProvider = ({children}) =>{
	let [inforLogin,setInforLogin] = useState({
    error:"",
    email:"",
    password:""
  });
	let [inforRegistration,setInforRegistration] = useState({
		error:"",
		email:"",
		password:"",
		name:"",
		phoneNumber:"",
		address:"",
		age:"",
		selectAge:""
	});

    return(
			<User.Provider value={{
				inforLogin,
				setInforLogin,
				inforRegistration,
				setInforRegistration,
				
			}}>
				{children}
			</User.Provider>
    )
}

export {User, UserProvider };