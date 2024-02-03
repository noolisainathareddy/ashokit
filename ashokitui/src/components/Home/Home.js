import React from 'react';
import Header from "../header/Header";
import Courses from '../courses/Courses';
import Footer from '../footer/Footer';
import Carousel from '../carousel/Carousel';
import slides from "../../data/CarouselsSlides.json";

const Home = () => {
    return(
        <div>
            <Header/>
            <Carousel data={slides}/>
            <Courses/>
            <Footer/>
        </div>
    )
}

export default Home; 