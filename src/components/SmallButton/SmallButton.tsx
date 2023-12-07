import styled from 'styled-components';
import './style.css';
import blackHeart from '../../assets/images/blackHeart.svg';
import whiteHeart from '../../assets/images/whiteHeart.svg';
import { useState } from 'react';

export const LikeButton = styled.button`
  background: #ECECEC;
  border: none;
  padding: 15px 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #DD377D;
  }
`;


const SmallButton = () => {

  const [hovered, setHovered] = useState(false);

  return (
    <LikeButton onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(true)}>
      <img src={hovered ? whiteHeart : blackHeart} alt='heart'></img>
    </LikeButton>
  )
}

export default SmallButton;