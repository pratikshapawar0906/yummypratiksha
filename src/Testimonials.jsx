import React from 'react'
import Emp from './Emp'

const Testimonials = () => {
    const data=[
        {
          id:1,
          empInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus similique nulla veritatis nobis expedita deleniti cum praesentium, facere eos, sed laboriosam recusandae mollitia doloremque aliquid error maxime ea veniam ut',
          empName:'Soul Goodman',
          empPosition:'CEO & FONDER',
          empImg:'images/testimonials-1.jpg',
        },
        {
            id:2,
            empInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus similique nulla veritatis nobis expedita deleniti cum praesentium, facere eos, sed laboriosam recusandae mollitia doloremque aliquid error maxime ea veniam ut',
            empName:'Soul Goodman',
            empPosition:'CEO & FONDER',
            empImg:'images/testimonials-2.jpg',
        },
        {
            id:3,
            empInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus similique nulla veritatis nobis expedita deleniti cum praesentium, facere eos, sed laboriosam recusandae mollitia doloremque aliquid error maxime ea veniam ut',
            empName:'Soul Goodman',
            empPosition:'CEO & FONDER',
            empImg:'images/testimonials-3.jpg',
        },
        {
            id:4,
            empInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus similique nulla veritatis nobis expedita deleniti cum praesentium, facere eos, sed laboriosam recusandae mollitia doloremque aliquid error maxime ea veniam ut',
            empName:'Soul Goodman',
            empPosition:'CEO & FONDER',
            empImg:'images/testimonials-4.jpg',
        },
    ]
  return (
    <>
      <section className="light-background testimonials">
            <div className="col-md-12 text-center aos-init aos-animated m-p" data-aos="fade-up"  >
                <h6 className=" font-weight-lighter title" >TESTIMONIALS</h6>
                <p className="display-4 title-description" >
                  <span className='font'>WHAT ARE THEY</span>
                  <span className="description-title">SAYING ABOUT US</span>
                </p>
            </div>
            <div className="container aos-animated aos-init" data-aos="fade-up" data-aos-delay="100" style={{margin: '0px 44px', padding: '0px 12px'}}>
                <div className="carousel slide " data-bs-ride="carousel" data-interval="2000" id="carouseldata">
                   <div className="col-lg-12 aos-init aos-animated">
                        <div className="carousel-inner col-lg-8">
                            
                             {

                              data.map((val, index, array) => {
            
                                // console.log(val);
                                return (
            
            
                                  
                                    <Emp
                                       key={val.id || index}
                                       empInfo={val.empInfo} 
                                       empName={val.empName}
                                       empPosition={val.empPosition} 
                                       empImg={val.empImg} 
                                       isActive={index === 0}
                                    />
            
                                )
            
            
            
                              })
                            }
                        </div>
                    </div>
                    
                    <div className="carousel-indicators  " style={{position: 'relative', top: '40px'}} >
                        <button  data-bs-target="#carouseldata" data-bs-slide-to="0" className="active" ></button>
                        <button  data-bs-target="#carouseldata" data-bs-slide-to="1"></button>
                        <button  data-bs-target="#carouseldata" data-bs-slide-to="2"></button>
                        <button  data-bs-target="#carouseldata" data-bs-slide-to="3"></button>
                    </div>
                </div>
             </div>
           </section>
    </>
  )
}

export default Testimonials
