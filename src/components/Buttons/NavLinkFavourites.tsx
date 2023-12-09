import { useState } from "react";

import styled from "styled-components";
import whiteHeart from '../../assets/icons/whiteHeart.svg';
import blackHeart from '../../assets/icons/blackHeart.svg';
import { NavLink } from "react-router-dom";

const NavContainer = styled(NavLink)`
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
  &:hover {
    background: #DD377D;
  }
  &.active{
    background: #DD377D;
  };
`;


interface NavLikeButton {
  path: string;
}

export const NavLinkFavourites = ({path}: NavLikeButton) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <NavContainer to={path} onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)}>
      {({isActive}) => (
        <img src={(isHovered || isActive) ? whiteHeart : blackHeart} alt="heart"></img>
      )}
    </NavContainer>
  )
}

