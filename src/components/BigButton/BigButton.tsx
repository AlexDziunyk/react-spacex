import styled from 'styled-components';
import './style.css';

export const BlueButton = styled.button`
  display: flex;
  background: #D3EAFF;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  width: 163px;
  height: 53px;
  border: none;
  cursor: pointer;

  color: #000;
  text-align: center;
  font-family: Syne;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  font-family: 'Syne', sans-serif;
`;

const BigButton = () => {


  return (
    <div >
      <BlueButton>SIGN IN</BlueButton>
    </div>
  )
}

export default BigButton