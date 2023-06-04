import { Menu } from './Menu';
import logo from '../assets/shared/interstellarLogo.png';
import burgerIcon from '../assets/shared/icon-hamburger.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {

  const [menuStatus,setMenuStatus] = useState(false);


  return (
    <nav className ='fixed w-full flex items-center justify-between p-7 sm:p-10 z-10 sm:pr-0'>
        <Link to='/' ><span className='w-10 h-10 sm:w-12 sm:h-12 hover:opacity-90' style={{backgroundImage:`url(${logo})`}} /></Link>
        <div className='hidden sm:block borderTop1px flex-auto translate-x-5' />
        <Menu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
        <span onClick={()=>setMenuStatus(true)} className='w-7 h-7 cursor-pointer sm:hidden' style={{backgroundImage:`url(${burgerIcon})`}} />
    </nav>
)}

export {NavBar};