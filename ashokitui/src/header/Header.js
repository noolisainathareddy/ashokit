import React from 'react'; 
import "../header/Header.css";
import {Button} from "react-bootstrap";

const Header = () => {
    return(
        <div class="mainHeader">
            <div class="header">
                <div class="logo">
                    <a href="/"><img src="https://ashokitech.com/uploads/settings/general_settings_1639053735_1412244780.jpg" alt=""/></a>
                </div>
                <div class="nav">
                    <span>Home</span>
                    <span>Services</span>
                    <span>Courses Offerings</span>
                    <span>Training Schedules</span>
                    <span>Carrers</span>
                    <span>About US</span>
                </div>
                <div class="login">
                    <Button>LogIn</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;