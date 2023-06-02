import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <section>
        <NavLink to={'/'} >HOME</NavLink>
        <NavLink to={'/DESTINATION'} >DESTINATION</NavLink>
        <NavLink to={'/CREW'} >CREW</NavLink>
        <NavLink to={'/TECHNOLOGY'} >TECHNOLOGY</NavLink>
    </section>
  )
}

export {Menu};