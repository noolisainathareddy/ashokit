import React from 'react'; 
import "../header/Header.css";
import { Button } from 'react-bootstrap';


const Header = () => {
    return(
        <div className="mainHeader">
            <div className="header">
                <div className="logo">
                    <a href="/"><img src="https://ashokitech.com/uploads/settings/general_settings_1639053735_1412244780.jpg" alt=""/></a>
                </div>
                <div className="nav">
                    <span>Home</span>
                    <span>Services</span>
                    <span>Courses Offerings</span>
                    <span>Training Schedules</span>
                    <span>Carrers</span>
                    <span>About US</span>
                </div>
                <div className={ window.location.pathname === "/" ?  "login" : "insideLogIn" }>
                    <a href="/login"><Button>LogIn</Button></a>
                </div>
            </div>
        </div>
    )
}

export default Header;