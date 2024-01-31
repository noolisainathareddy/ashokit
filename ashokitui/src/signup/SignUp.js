import { useState } from "react";
import Header from "../header/Header";
import "../signup/SignUp.css";
const SignUp = () => {
    const[info, setInfo] = useState({
        firstname : "",
        lastname: "",
        username : "",
        emailid: "",
        password: "",
        confirmpassword: ""
    })
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(info);
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
                        <input type="text" name="firstname" placeholder="firstname" onChange={onChnageHandler}/><br/><br/>
                        <input type="text" name="lastname" placeholder="lastname" onChange={onChnageHandler}/><br/><br/>
                        <input type="text" name="username" placeholder="username" onChange={onChnageHandler}/><br/><br/>
                        <input type="text" name="emailid" placeholder="emailId" onChange={onChnageHandler}/><br/><br/>
                        <input type="password" name="password" placeholder="New Password" onChange={onChnageHandler}/><br/><br/>
                        <input type="password" name="confirmpassword" placeholder="confirm password" onChange={onChnageHandler}/><br/><br/>
                        <input type="submit" value="Create Account"/>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default SignUp;