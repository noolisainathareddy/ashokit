import { Button } from "react-bootstrap";
import Header from "../header/Header";
import "../login/LogIn.css";

const LogIn = () => {
    return(
        <div class="login">
            <Header/>
            <div class="loginbody">
                <div class="loginform">
                    <h1>Ashok IT</h1><br/>
                    <form>
                        <input type="text" placeholder="username"/><br/><br/>
                        <input type="password" placeholder="password"/><br/><br/>
                        <input type="submit"/>
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