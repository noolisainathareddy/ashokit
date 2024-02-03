import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import "../carousel/Carousel.css";
import { useState } from 'react';
 
const Carousel = ({data}) => {
    const[slide, setSlide] = useState(0);

    const nextSLide = () => {
        setSlide(slide === data.slides.length - 1 ? 0 : slide + 1 );
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.slides.length -1 : slide - 1);
    }

    return(
        <div class="mainCarousel">
            <div class="carousel">

                <BsArrowLeftCircleFill class="arrow arrow-left"  onClick={prevSlide}/>
                {data.slides.map((item, index) => {
                    return <img src={item.src} class={slide === index ? "slide" : "slide slide-hidden"}/>
                })} 
                <BsArrowRightCircleFill  class="arrow arrow-right" onClick={nextSLide}/>                       
            </div> 
        </div>
    )
};

export default Carousel;