import './style.css';

import HeaderSlider from "../../components/HeaderSlider/HeaderSlider";
import Tours from '../../components/Tours/Tours';
import { useRef } from 'react';

const Home = () => {

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClickScroll = () => {
    scrollRef.current?.scrollIntoView({behavior: 'smooth'});
  }
    
  return (
    <div>
      <HeaderSlider handleClickScroll={handleClickScroll}></HeaderSlider>
      <Tours scrollRef={scrollRef}></Tours>
    </div>
  )
}

export default Home