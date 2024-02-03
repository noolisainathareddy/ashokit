import { Button } from "react-bootstrap";
import Header from "../header/Header";
import "../login/LogIn.css";
import { useState } from "react";
import axios from "axios";

const LogIn = () => {

    const[logInInfo, setLogInInfo] = useState({
        emailId : "",
        password : "",

    })

    const obj = {
        "userId" : {
            "emailId" : ""
        },
        "password" : ""
    };

    const onChangeHandler = (e) => {
        setLogInInfo({...logInInfo,[e.target.name]:e.target.value});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        obj.userId.emailId = logInInfo.emailId;
        obj.password = logInInfo.password;
        console.log(obj);
        axios.post("http://localhost:8080/login",obj).then((response) => {
            console.log(response);
        });
    }
    return(
        <div class="login">
            <Header/>
            <div class="loginbody">
                <div class="loginform">
                    <h1>Ashok IT</h1><br/>
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" name="emailId" placeholder="emailId" onChange={onChangeHandler}/><br/><br/>
                        <input type="password" name="password" placeholder="password" onChange={onChangeHandler}/><br/><br/>
                        <input type="submit" id="submit"/>
                    </form>    
                    <p>Don't have an account? <a href="/signup"><Button>Create Now</Button></a></p>
                </div>
                <div class="info">
                    <p>Ashok IT is a leading Indian IT training institute preparing tech-aspirants for flourishing careers in this challenging and competitive domain since 2020.</p>
                </div>
            </div>
            
        </div>
    )
}

export default LogIn; 