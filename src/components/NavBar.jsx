import { Menu } from './Menu';
import logo from '../assets/shared/interstellarLogo.png';
import burgerIcon from '../assets/shared/icon-hamburger.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className ='fixed w-full flex items-center justify-between p-7 sm:p-10 z-10'>
        <Link to='/' ><span className='w-10 h-10 sm:w-12 sm:h-12' style={{backgroundImage:`url(${logo})`}} /></Link>
        <Menu />
        <span className='w-7 h-7 cursor-pointer sm:hidden' style={{backgroundImage:`url(${burgerIcon})`}} />
    </nav>
)}

export {NavBar};