import { Menu } from './Menu';
import logo from '../assets/shared/interstellarLogo.png';
import burgerIcon from '../assets/shared/icon-hamburger.svg';

const NavBar = () => {
  return (
    <nav className ='fixed w-full flex items-center justify-between py-3 px-5 z-10'>
        <span className='w-12 h-12' style={{backgroundImage:`url(${logo})`}} />
        <Menu />
        <span className='w-8 h-8' style={{backgroundImage:`url(${burgerIcon})`}} />
    </nav>
)}

export {NavBar};