import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Usercustomer from './Usercustomer'
import Usercontact from './Usercontact'
import BookATable from './BookATable'
import Contact from './Contact'
import Navbar2 from './Navbar2'
import Editcustomer from './Editcustomer'
import Editcontact from './Editcontact'

const App2 = () => {
  return (
    <>
      <Router>
             <Navbar2/>
               
                  <Routes>
                     <Route  >
                         <Route path='/usercustomer' element={ < Usercustomer/>}></Route>

                         <Route path='/usercontact' element={ < Usercontact/>}></Route>

                         <Route path='/editcustomer/:id' element={ < Editcustomer/>}></Route>

                         <Route path='/editcontact/:id' element={ < Editcontact/>}></Route>
                     </Route>
                  </Routes>
         </Router>

    </>
  )
}

export default App2
