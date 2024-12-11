import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <>
    
        <div className='navbar   '>
            <ul className='nav m-auto'>
                <li className='nav-item'>
                    <NavLink to='/' className="nav-link starters"><h4 className='fs text-dark' >Starters</h4></NavLink>
                </li>
                <li className='nav-item mx-3'>
                    <NavLink to="/breakfast" className='nav-link breakfast'><h4 className='fs text-dark'>Breakfast</h4></NavLink>
                </li>
                <li className='nav-item mx-3'>
                    <NavLink to="/lunch" className='nav-link lunch '><h4 className='fs text-dark'>Lunch</h4> </NavLink>
                </li>
                <li className='nav-item mx-3'>
                    <NavLink to="/dinner" className='nav-link dinner '><h4 className='fs text-dark'>Dinner</h4> </NavLink>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar1
