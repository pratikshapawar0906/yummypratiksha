import React, { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import { BrowserRouter as Router,Routes,Route,  } from 'react-router-dom'
import Navbar from './Navbar'
import Contact from './Contact'
import Menu from './Menu'
import About from './About'
import Home from './Home'
import Event from './Event'
import Chef from './Chef'
import Gallary from './Gallary'
import StatsSection from './StatsSection';
import Why from './Why-us'
import Testimonials from './Testimonials';
import BookATable from './BookATable';
import Footer from './Footer';
const App = () => {
 
  useEffect(() => {
      AOS.init();
      
    }, []);
      
  return (
    <>
    {/* Navbar section  */}
     
         <Router>
         
             <Navbar />
              
                  <Routes>
                     <Route  >
                         <Route path='/' element={ < Home/>}></Route>
                     </Route>
                  </Routes>
              
         </Router>

        {/* About section */}
        <About/>
        {/* About section complete */}

        {/* Why us section */}
         < Why />
        {/* Why us section complete */}

        {/* Stats section */}
        < StatsSection/>
        {/* stats section complete */}
       

       {/* menu section */}
         < Menu/>
       {/* menu section complete */}

       {/* Testimonials section */}
         <Testimonials/>
       {/* Testimonials section complete */}

       {/* Event Section */}
        < Event/>
       {/* Event Section complete */}

       {/* Chef section */}
        <Chef />
       {/* Chef section complete */}

       {/* Book A table */}
         <BookATable/>
       {/* Book A table */}

       {/* Gallary  section*/}
         <Gallary />
       {/* Gallary  section complete*/}

       {/* Contact section */}
         <Contact />
       {/* Contact section complete */}

       {/* Footer section */}
        <Footer/>
       {/* Footer section complete */}
      


       <a href="/" className="scroll-top d-flex justify-content-center align-items-center active">
            <i className="bi bi-arrow-up-short"></i>
       </a>
    </>
  )
}

export default App
