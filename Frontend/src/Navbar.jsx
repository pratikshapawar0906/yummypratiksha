import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  fw-bold  sticky-top bg-light shadow-sm ">
         <div className="container-fluid p-3 align-items-center  " >
              <div className="col-md-12 d-flex align-items-center justify-content-between w-100">

                   <div className="col-md-2">
                           <h2 className="fw-bold ">Yummy <sub className="text-danger">.</sub></h2>
                    </div>

                    <div className="col-md-8">
                       <button className="navbar-toggler"  type="button" data-bs-target="#navbarNav" data-bs-toggle="collapse" aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigations'><span
                       className="navbar-toggler-icon"></span></button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav m-auto text-light text-center">
                            <li className="nav-item mx-3"><ScrollLink to='home' smooth={true} duration={500} className="nav-link home">Home</ScrollLink></li>
                            <li className="nav-item mx-3"><ScrollLink to='about'smooth={true} duration={500} className="nav-link about" >About</ScrollLink></li>
                            <li className="nav-item mx-3"><ScrollLink to='menu'smooth={true} duration={500} className="nav-link menu" >Menu</ScrollLink></li>
                            <li className="nav-item mx-3"><ScrollLink to='event' smooth={true} duration={500} className="nav-link event" >Events</ScrollLink></li>
                            <li className="nav-item mx-3"><ScrollLink to='chefs' smooth={true} duration={500} className="nav-link chef" >Chefs</ScrollLink></li>
                            <li className="nav-item mx-3"><ScrollLink to='gallary' smooth={true} duration={500} className="nav-link gallary">Gallary</ScrollLink></li>
       
                            <li className="nav-item mx-2 dropdown"><ScrollLink to="#"className='nav-link dropdown-toggle ' data-bs-toggle="dropdown"
                               role="button" id="dropdownMenuButton" aria-expanded="false">Dropdown</ScrollLink>
       
                                 <ul className="dropdown-menu"aria-labelledby="dropdownMenuButton" >
                                    <li><ScrollLink to="#" className=" nav-link dropdown-item">Dropdown 1</ScrollLink></li>
      
                                    <li className="dropdown-item dropdown"><ScrollLink to="#" data-bs-toggle="dropdown"
                                          className=" nav-link dropdown-toggle"  aria-expanded="false">Deep Dropdown 1</ScrollLink>
      
                                            <ul className="dropdown-menu  d-menu" >
                                               <li className="dropdown-item dropdown-toggle "><ScrollLink to="#" className="nav-link"> Deep Dropdown
                                                   1</ScrollLink></li>
                                               <li className="dropdown-item dropdown-toggle "><ScrollLink to="#" className="nav-link"> Deep Dropdown
                                                   2</ScrollLink></li>
                                               <li className="dropdown-item dropdown-toggle " ><ScrollLink to="#" className="nav-link">Deep Dropdown
                                                    3</ScrollLink></li>
                                               <li className="dropdown-item dropdown-toggle "><ScrollLink to="#" className="nav-link">Deep Dropdown
                                                    4</ScrollLink></li>
                                               <li className="dropdown-item dropdown-toggle "><ScrollLink to="#" className="nav-link">Deep Dropdown
                                                  5</ScrollLink></li>
                                           </ul>
                                     </li>
      
                                      <li className="dropdown-item"><ScrollLink to="#" className=" nav-link" >Dropdown 3</ScrollLink></li>
                                      <li className="dropdown-item"><ScrollLink to="#" className=" nav-link">Dropdown 4</ScrollLink></li>
                                      <li className="dropdown-item"><ScrollLink to="#" className=" nav-link">Dropdown 5</ScrollLink></li>
      
                                  </ul>
                              </li>
                              <li className="nav-item mx-3"><ScrollLink to="contact" smooth={true} duration={500} className="nav-link contact" >Contact</ScrollLink></li>
                              {/* <li className="nav-item mx-3"><a href="/"  className="nav-link contact" ></a></li> */}
                          </ul>
                       </div> 
                </div>
                <div className=" col-md-2 text-danger-lg text-left-sm">
                      <ScrollLink to='bookatable' smooth={true} duration={500} className='nav-link'>
                          <button className="btn btn-danger px-4 mt-2 fw-bold book-table">Book A Table</button>
                       </ScrollLink>
                 </div>
             </div>

         </div>
      </nav>  

    </>
  )
}

export default Navbar
