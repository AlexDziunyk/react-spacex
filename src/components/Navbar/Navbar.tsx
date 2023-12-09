import './style.css';
import { NavLinkFavourites } from '../Buttons/NavLinkFavourites';
import { NavLink, Link } from 'react-router-dom';
import { BlueButton } from '../Buttons/BlueButton';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
        <img className='navbar__image' src="src\assets\images\logo.png" alt="logo"></img>
      </Link>
      <ul className='navbar__links'>
        <NavLink className="navbar__link" to='/'>
          {({isActive}) => (
            <span className={isActive ? 'navbar__link_active' : 'navbar__link'}>Home</span>
          )}  
        </NavLink>
        <li className='navbar__link'>Tours</li>
        <li className='navbar__link'>About</li>
        <li className='navbar__link'>Help</li>
      </ul>
      <div className='navbar__buttons'>
        <NavLinkFavourites path='/favourites'/>
        <BlueButton>SIGN IN</BlueButton>
      </div>
    </div>
  )
}

export default Navbar