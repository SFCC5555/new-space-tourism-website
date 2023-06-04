import { NavLink } from 'react-router-dom';
import closeIcon from '../assets/shared/icon-close.svg'

const Menu = () => {
  return (
    <section className='absolute sm:relative h-screen p-7 gap-5 font2 w-1/2 right-0 top-0 sm:w-2/5 sm:h-auto z-20 flex flex-col sm:flex-row bg-white/5 backdrop-blur-3xl sm:backdrop-blur-0' >
        <span className='w-6 h-6 self-end mb-12 cursor-pointer sm:hidden' style={{backgroundImage:`url(${closeIcon})`}} />
        <NavLink to={'/'} ><span>00</span> HOME</NavLink>
        <NavLink to={'/DESTINATION'} ><span>01</span> DESTINATION</NavLink>
        <NavLink to={'/CREW'} ><span>02</span> CREW</NavLink>
        <NavLink to={'/TECHNOLOGY'} ><span>03</span> TECHNOLOGY</NavLink>
    </section>
  )
}

export {Menu};