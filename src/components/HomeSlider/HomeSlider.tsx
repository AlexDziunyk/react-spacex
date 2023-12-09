import './style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const HomeSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  return (
    <div className='home-slider'>
      <div className='home-slider__text'>
        <p className='home-slider__smalltext'>The space is waiting for</p>
        <p className='home-slider__bigtext'>you</p>
      </div>
      <Slider {...settings}>
        <img className='home-slider__slide' src='src\assets\images\sliderimg1.png' alt='slide'></img>
        <img className='home-slider__slide' src='src\assets\images\sliderimg2.png' alt='slide'></img>
        <img className='home-slider__slide' src='src\assets\images\sliderimg3.png' alt='slide'></img> 
      </Slider>
    </div>
  )
}

export default HomeSlider;