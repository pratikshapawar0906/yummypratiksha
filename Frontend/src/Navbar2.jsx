import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
           <nav className='navbar navbar-expand-lg text-light bg-dark'>
               <ul className='navbar-nav m-auto p-3'>

                  <li className="nav-item mx-3">
                      <NavLink to='/usercustomer ' className='nav-link text-light'>Usercustomer</NavLink>
                  </li>

                  <li className="nav-item mx-3">
                      <NavLink to='/usercontact' className='nav-link text-light'>Usercontact</NavLink>
                  </li>
              </ul>
           </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar2
