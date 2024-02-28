import { useState } from "react";
import Header from "../header/Header";
import "../signup/SignUp.css";
import axios from "axios";
import SignUpModal from "./SignUpModal";
const SignUp = () => {
    const[showModal, setShowModal] = useState(false);
    const[apiResonse, setApiResponse] = useState('Empty');
    const[info, setInfo] = useState({
        firstName : "",
        lastName: "",
        userName : "",
        emailId: "",
        password: "",
        confirmPassword: ""
    })

    const obj= {
        "userId" : {
            "emailId" : ""
        },
        "firstName" : "",
        "lastName" : "",
        "userName" : "",
        "password" : "",
        "confirmPassword" : ""
    }

    
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(info);
        obj.userId.emailId = info.emailId; 
        obj.firstName=info.firstName;
        obj.lastName=info.lastName;
        obj.userName=info.userName;
        obj.password=info.password;
        obj.confirmPassword=info.confirmPassword;
        try{
          const {data} = await  axios.post("http://localhost:8080/addNewUser", obj);
          console.log("Logging response", data);
          setApiResponse(data);
          setShowModal(true);
        }catch(error){
            console.log(error.response);
        }
        
        
    }
    const onChnageHandler = (e) => {
           setInfo({...info,[e.target.name]:e.target.value}); 
    }
    return(
        <div className="main-signup">
            <Header/>
            <div className="singup">
                <div className="signupform">
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" name="firstName" placeholder="First Name" onChange={onChnageHandler}/><br/><br/>
                        <input type="text" name="lastName" placeholder="Last Name" onChange={onChnageHandler}/><br/><br/>
                        <input type="text" name="userName" placeholder="User Name" onChange={onChnageHandler}/><br/><br/>
                        <input type="text" name="emailId" placeholder="Email Id" onChange={onChnageHandler}/><br/><br/>
                        <input type="password" name="password" placeholder="New Password" onChange={onChnageHandler}/><br/><br/>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={onChnageHandler}/><br/><br/>
                        <input id="submit" type="submit" value="Create Account"/>
                    </form>
                </div>
            </div>
            {showModal && <SignUpModal data={apiResonse}/>}
        </div>
    )
}


export default SignUp;