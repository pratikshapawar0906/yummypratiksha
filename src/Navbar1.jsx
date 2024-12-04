import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <>
    
        <div className='navbar   '>
            <ul className='nav m-auto'>
                <li className='nav-item'>
                    <NavLink to='/' className="nav-link starters"><h4 style={{fontSize: '18px', color: 'black'}}>Starters</h4></NavLink>
                </li>
                <li className='nav-item mx-3'>
                    <NavLink to="/breakfast" className='nav-link breakfast'><h4 style={{fontSize: '18px', color: 'black'}}>Breakfast</h4></NavLink>
                </li>
                <li className='nav-item mx-3'>
                    <NavLink to="/lunch" className='nav-link lunch'><h4 style={{fontSize: '18px', color: 'black'}}>Lunch</h4> </NavLink>
                </li>
                <li className='nav-item mx-3'>
                    <NavLink to="/dinner" className='nav-link dinner'><h4 style={{fontSize: '18px', color: 'black'}}>Dinner</h4> </NavLink>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar1
