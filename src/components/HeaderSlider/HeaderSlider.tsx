import './style.css';
import { useState } from 'react';
import slide1 from '../../assets/images/sliderimg1.png';
import slide2 from '../../assets/images/sliderimg2.png';
import slide3 from '../../assets/images/sliderimg3.png';
import { useRef, useEffect } from 'react';


interface HeaderSlider {
  handleClickScroll: () => void;
}


const HeaderSlider = ({handleClickScroll}: HeaderSlider) => {
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slides: string[] = [slide1, slide2, slide3];

  const goToNext = () => {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newSlide: number = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 3000);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex]);


  return (
    <div className='slider__container'>
      
      <div className='slider__text'>
        <p className='slider__smalltext'>The space is waiting for</p>
        <p className='slider__bigtext'>you</p>
      </div>
      <div className='slider'>
        <div className='slider__slides'>
          <div className='slider__explore'>
            <p onClick={handleClickScroll} className='slider__explore__text'>Explore tours</p>
            <img src='src\assets\icons\arrow.svg' alt='arrow'></img>
          </div>
          {slides.map((item: string, index: number) => (
            <div
              key={index}
              className={`slider__slide ${currentIndex === index ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${slides[index]})`,
                opacity: currentIndex === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            ></div>
          ))}
        </div>
        <div className='slider__dots'>
          {slides.map((item: string, index: number) => (
            <div key={index} className="slider__dot">
              {currentIndex === index && <div className="slider__dot_active"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
