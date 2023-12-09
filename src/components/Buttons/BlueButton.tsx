import styled from "styled-components";


export const BlueButton = styled.button<{ $big?: boolean; }>`
  display: flex;
  width: ${props => props.$big ? "278px" : "163px"};
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  border: none;

  cursor: pointer;
  background: #D3EAFF;
  font-family: 'Syne', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  transition: 0.2s;

  &:active {
    background: #b8d0e6;
  }

`;


