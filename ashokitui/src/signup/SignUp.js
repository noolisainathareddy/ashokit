import { useState } from "react";
import Header from "../header/Header";
import "../signup/SignUp.css";
import axios from "axios";
const SignUp = () => {
    const[info, setInfo] = useState({
        firstName : "",
        lastName: "",
        userName : "",
        emailId: "",
        password: "",
        confirmPassword: ""
    })
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(info);
        axios.post("http://localhost:8080/addNewUser", info).then((response) => {console.log(response)});
    }
    const onChnageHandler = (e) => {
           setInfo({...info,[e.target.name]:e.target.value}); 
    }
    return(
        <div class="main-signup">
            <Header/>
            <div class="singup">
                <div class="signupform">
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" name="firstName" placeholder="First Name" onChange={onChnageHandler}/><br/><br/>
                        <input type="text" name="lastName" placeholder="Last Name" onChange={onChnageHandler}/><br/><br/>
                        <input type="text" name="userName" placeholder="User Name" onChange={onChnageHandler}/><br/><br/>
                        <input type="text" name="emailId" placeholder="Email Id" onChange={onChnageHandler}/><br/><br/>
                        <input type="password" name="password" placeholder="New Password" onChange={onChnageHandler}/><br/><br/>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={onChnageHandler}/><br/><br/>
                        <input type="submit" value="Create Account"/>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default SignUp;