import "../reviews/StudentReview.css";
import React from "react";

const StudentReview = () => {
    return(
        <div class="studentReviews">
            <div class="reviewContainer">
                <div class="review1">   
                    <div class="reviewHeader">
                        <h3>Rajesh Kumar</h3>
                        <h5>Front End</h5>
                    </div>
                    <div class="reviewContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lectus ac ipsum finibus, ac maximus nisl gravida. Morbi mauris enim, luctus sed semper nec, elementum a metus. Maecenas consectetur sapien id feugiat ornare. Nulla pharetra egestas odio quis dictum. In hac habitasse platea dictumst.</p>
                    </div>
                    <div class="reviewDate">
                        <p> Date : 01/16/2024</p>
                    </div>
                </div>
                <div class="review2">
                    <div class="reviewHeader">
                        <h3>Pavan Reddy</h3>
                        <h5>JRTP</h5>
                    </div>
                    <div class="reviewContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lectus ac ipsum finibus, ac maximus nisl gravida. Morbi mauris enim, luctus sed semper nec, elementum a metus. Maecenas consectetur sapien id feugiat ornare. Nulla pharetra egestas odio quis dictum. In hac habitasse platea dictumst.</p>
                    </div>
                    <div class="reviewDate">
                        <p> Date : 10/30/2023</p>
                    </div>
                </div>
                <div class="review3">
                    <div class="reviewHeader">
                        <h3>Suraj Malhothra</h3>
                        <h5>Spring Boot</h5>
                    </div>
                    <div class="reviewContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque lectus ac ipsum finibus, ac maximus nisl gravida. Morbi mauris enim, luctus sed semper nec, elementum a metus. Maecenas consectetur sapien id feugiat ornare. Nulla pharetra egestas odio quis dictum. In hac habitasse platea dictumst.</p>
                    </div>
                    <div class="reviewDate">
                        <p> Date : 11/19/2023</p>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default StudentReview;