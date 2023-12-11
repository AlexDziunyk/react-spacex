import { GetRocketsQuery } from "../../__generated__/graphql";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TourCard from "../TourCard/TourCard";
import './style.css';
import { useState } from "react";

import slide1 from '/images/sliderimg1.png';
import slide2 from '/images/sliderimg2.png';
import slide3 from '/images/sliderimg3.png';


import { useRef } from "react";

const ToursSlider = ({rockets}: GetRocketsQuery) => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  
  const settings = {
    customPaging: function(index: number) {
      return (
        <div className="tours-slider__dot">
          {currentIndex === index && <div className="tours-slider__dot_active"></div>}
        </div>
      )
    },
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false,
    afterChange: (index: number) => {
      setCurrentIndex(index);
    }
  };

  const slides: string[] = [slide1, slide2, slide3];

  const slider = useRef<Slider>(null);

  return (
    <div className="tours-slider">
      <div className="tours-slider__top">
        <div className="tours-slider__title">popular tours</div>
        <div className="tours-slider__arrows">
          <button className="tours-slider__arrow" onClick={() => slider?.current?.slickPrev()}>
            <img src="/icons/arrow_left.svg"></img>
          </button>
          <button className="tours-slider__arrow" onClick={() => slider?.current?.slickNext()}>
            <img src="/icons/arrow_right.svg"></img>
          </button>
        </div>
      </div>
      <div className="slider-slick"> 
        <Slider className="slider-slick__container" ref={slider} {...settings}>
          {rockets?.map((item, index) => (
            <TourCard key={item?.id} id={item?.id!} isLike={true} image={slides[index % slides.length]} name={item?.name!} description={item?.description!}></TourCard>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ToursSlider