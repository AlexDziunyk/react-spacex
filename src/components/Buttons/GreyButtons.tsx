import { useState } from "react";

import styled from "styled-components";
import whiteHeart from '../../assets/icons/whiteHeart.svg';
import blackHeart from '../../assets/icons/blackHeart.svg';

interface ButtonProps {
  onClick: () => void;
}

const ButtonContainer = styled.button`
  display: flex;
  width: 53px;
  height: 53px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: #ECECEC;
  border: none;
  transition: 0.3s;
  cursor: pointer;
`;

const LikeButtonContainer = styled(ButtonContainer)`
  &:hover {
    background: #DD377D;
  }
`;

export const LikeButton = ({onClick}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return ( 
    <LikeButtonContainer onClick={onClick} onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)}>
      <img src={isHovered ? whiteHeart : blackHeart}></img>
    </LikeButtonContainer>
  )
}


export const DeleteButton = ({onClick}: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <img src="src\assets\icons\Delete.svg"></img>
    </ButtonContainer>
  )
}



