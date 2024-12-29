import React from 'react'
import {Link as ScrollLink } from 'react-scroll'

const Home = () => {
  return (
    <>   
      <section>
        <div className="container-fluid py-5" id='home' style={{backgroundColor:'#F2F2F2 ',zIndex: '-1 '}} >
          <div className="col-lg-12 ">
            <div className="row aligns-items-center" >
                <div className=" col-md-6 text-center text-md-start p-5">
                    <h1 className="display-4 fw-600 aos-init aos-animated text-small-caps" data-aos="fade-up" >
                       Enjoy Your Healthy <br/>
                        Delicious Food
           
                    </h1>
                    <p className="blockquote my-3 aos-init aos-animated" data-aos="fade-up" data-aos-delay="100">We are team of talented designers making websites with Bootstrap</p>
         
                    <div className="mt-4 aos-animated aos-init" data-aos="fade-up" data-aos-delay="200">
                        <ScrollLink to='bookatable' smooth={true} duration={500} className="d-inline-block">
                           <button className="btn btn-danger px-4 fw-bold " 
                            style={{borderRadius: '20px',backgroundcolor: '#CE1212 !important'}}>Book A Table</button>
                        </ScrollLink>
        
                        <button className="btn btn-light px-4 fw-bold watch"  style={{borderRadius: '20px'}}>
                          <a href="https://www.youtube.com" className="pulsating-play-btn m-auto d-inline-flex align-items-center" target="_blank"  rel="noreferrer noopener">
                             <i className="bi bi-youtube  me-2 " style={{color: '#CE1212 !important'}}></i>Watch
                            Video</a></button>
                    </div>
                </div>
                
                <div className="  col-md-6  text-center aos-init aos-animated" data-aos="zoom-out">
                   <img src="images/hero-img.png"  className="img-fluid foodImage " alt="Delicious Food" style={{ objectFit: 'cover'}}/>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Home
