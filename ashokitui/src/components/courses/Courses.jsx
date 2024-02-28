import React from 'react';
import "../courses/Courses.css";
import { Button } from 'react-bootstrap';

const Courses = () => {
    return(
        <div className="coursesList">
            <div className="list">
                <div className="course">
                    <img src="https://ashokitech.com/uploads/course/spring-boot-microservices-online-training.jpeg" alt=""/>
                    <div className="details">
                        <span>Duration: 4 Months</span><br/>
                        <span>$8000 $<strike>9000</strike></span><br/>
                        <Button>Preview</Button> <Button>View Details</Button>
                        
                    </div>
                </div>
                <div className="course">
                    <img src="https://ashokitech.com/uploads/course/java-realtime-project-online-training.png" alt="" />
                    <div className="details">
                        <span>Duration: 4 Months</span><br/>
                        <span>$8000 $<strike>9000</strike></span><br/>
                        <Button>Preview</Button> <Button>View Details</Button>
                    </div>
                </div>
                <div className="course">
                    <img src="https://ashokitech.com/uploads/course/java-fullstack-development-online-training.jpeg" alt="" />
                    <div className="details">
                        <span>Duration: 4 Months</span><br/>
                        <span>$8000 $<strike>9000</strike></span><br/>
                        <Button>Preview</Button> <Button>View Details</Button>
                    </div>
                </div>
                <div className="course">
                    <img src="https://ashokitech.com/uploads/course/devops-with-aws-online-training.jpeg" alt="" />
                    <div className="details">
                        <span>Duration: 4 Months</span><br/>
                        <span>$8000 $<strike>9000</strike></span><br/>
                        <Button>Preview</Button> <Button>View Details</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;