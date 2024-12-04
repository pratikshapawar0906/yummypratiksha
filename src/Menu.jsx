import React from 'react'
import Navbar1 from './Navbar1'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Starter from './Starter'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner1 from './Dinner1'



const Menu = () => {
  return (
    <>
        <section id="menu">
            <div className="col-md-12 text-center aos-init aos-animated" data-aos="fade-up" >
                <h6 className=" font-weight-lighter" style={{color: '#9e9c9c',   paddingTop: '70px'}}>OUR MENU</h6>
                <p className="display-4" style={{paddingBottom: '60px'}}>
                  <span className='font'>Check Your</span>
                  <span className="description-title">Yummy Menu</span>
                </p>
            </div>

            <div className="container">
              <Router>
                  <Navbar1 />
                  <Routes>
                      <Route path='/' element={< Starter/>}></Route>
                      <Route path='/breakfast' element={< Breakfast />}></Route>
                      <Route path='/lunch' element={< Lunch />}></Route>
                      <Route path='/dinner' element={< Dinner1 />}></Route>
                  </Routes>
              </Router>
            </div>
        </section>
    </>
  )
}

export default Menu
