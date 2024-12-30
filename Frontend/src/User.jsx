import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import Usercontact from './Usercontact'
import Usercustomer from './Usercustomer'
import Editcustomer from './Editcustomer'
import Editcontact from './Editcontact'

const User = () => {
  return (
    <>

        <AdminLayout/>
         <Routes>
                <Route>
                    <Route path="usercontact" element={<Usercontact />} />
                    <Route path="usercustomer" element={<Usercustomer />} />
                    <Route path='editcustomer/:id' element={ < Editcustomer/>}></Route>
                    <Route path='editcontact/:id' element={ < Editcontact/>}></Route>
                </Route>
         </Routes>
    </>
  )
}

export default User
