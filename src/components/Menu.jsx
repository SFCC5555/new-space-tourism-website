import { NavLink } from 'react-router-dom';
import closeIcon from '../assets/shared/icon-close.svg'
import PropTypes from 'prop-types';
import '../styles/Menu.css'

const Menu = ({ menuStatus,setMenuStatus }) => {
  return (
    <section className={`menu ${!menuStatus&&'hidden'} sm:flex absolute sm:relative h-screen p-7 pr-0 sm:py-0 sm:px-5 gap-5 font2 text-sm w-1/2 sm:w-3/4 md:w-96 right-0 top-0 sm:h-auto z-20 flex flex-col sm:flex-row sm:justify-center bg-white/5 backdrop-blur-3xl sm:backdrop-blur-0`} >
        <span onClick={()=>setMenuStatus(false)} className='w-5 h-5 mr-7 self-end mb-12 cursor-pointer sm:hidden' style={{backgroundImage:`url(${closeIcon})`}} />
        <NavLink onClick={()=>setMenuStatus(false)} className='navLink' to={'/'} ><span>00</span> HOME</NavLink>
        <NavLink onClick={()=>setMenuStatus(false)} className='navLink' to={'/DESTINATION'} ><span>01</span> DESTINATION</NavLink>
        <NavLink onClick={()=>setMenuStatus(false)} className='navLink' to={'/CREW'} ><span>02</span> CREW</NavLink>
        <NavLink onClick={()=>setMenuStatus(false)} className='navLink' to={'/TECHNOLOGY'} ><span>03</span> TECHNOLOGY</NavLink>
    </section>
  )
}

Menu.propTypes = { menuStatus: PropTypes.bool, setMenuStatus: PropTypes.func }

export {Menu};