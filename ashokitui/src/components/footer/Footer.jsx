import "../footer/Footer.css";

const Footer = () => {
    return(
        <div className="mainfooter">
            <div className="footer">
                <div className="row1">
                    <div className="col1 row1-col">
                        <img src="https://ashokitech.com/uploads/settings/general_settings_1639053735_1412244780.jpg" alt="" /><br/>
                        <span>Ashok IT is a leading Indian IT training institute preparing tech-aspirants for flourishing careers in this challenging and competitive domain since 2020.</span>
                    </div>
                    <div className="col2 row1-col">
                        <h3>QUICK LINKS</h3>
                        <span>About us</span>
                        <span>Online Batches</span>
                        <span>Classroom Batches</span>
                        <span>Weekend Workshops</span>
                        <span>Contact US</span>
                    </div>
                    <div className="col3 row1-col">
                        <h3>OUR SERVICES</h3>
                        <span>Online Training</span>
                        <span>Classroom Training</span>
                        <span>Corporate Training</span>
                        <span>Placements</span>
                        <span>Internship</span>
                    </div>
                    <div className="col4 row1-col">
                        <h3>Legal</h3>
                        <span>Terms of use & Privacy Policy</span>
                    </div>
                    <div className="col5 row1-col">
                        <h3>Contact US</h3>
                    </div>
                </div>
                <div className="row2 row1-col">
                    <div className="container">
                        <span>© 2024 Ashok IT. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer; 