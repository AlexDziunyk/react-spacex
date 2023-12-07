import './style.css';
import SmallButton from '../SmallButton/SmallButton';
import BigButton from '../BigButton/BigButton';
import { BlueButton } from '../BigButton/BigButton';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className='navbar__image' src="src\assets\logo.png"></img>
      <ul className='navbar__links'>
        <li>Home</li>
        <li>Tours</li>
        <li>About</li>
        <li>Help</li>
      </ul>
      <div className='navbar__buttons'>
        <SmallButton />
        <BigButton />
      </div>
    </div>
  )
}

export default Navbar