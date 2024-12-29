import React from 'react'

const Why = () => {
  return (
    <>
      <section className="why-us" id="why-us" style={{backgroundColor: '#F2F2F2', paddingTop:'60px'}}>
           <div className="container-fluid" >
               <div className="row" >
                   <div className="col-lg-4 col-md-12 aos-init aos-animated" data-aos="fade-up" data-aos-delay="100" style={{marginTop:'24px'}}>
                       <div className="why-box">
                           <h2 >Why Choose Yummy</h2>
                           <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore ipsa doloremque exercitationem aperiam minus praesentium corporis sit. Voluptates ipsum doloribus, mollitia cupiditate, maxime corrupti eius accusantium hic sit fuga minus.</p>
                           <div className="text-center"><a hraf="https://ww.youtube.com" className="more-btn" style={{padding: '8px 40px 10px', backgroundColor:'rgb(234, 46, 46)', textDecoration: 'none', color: '#ffffff'}}><span>learn More</span><i className="bi bi-chevron-right ms-2"></i></a></div>
                       </div>
                   </div>
   
                   <div className="col-lg-8 col-md-12 aos-init aos-animated" data-aos="fade-up" data-aos-delay="200" >
                       <div className="row">
                           <div className="col-xl-4 aos-animated aos-init" data-aos="fade-up" data-aos-delay="200" >
                               <div className="icon-box justify-content-center align-items-center d-flex flex-column" >
                                   <div className="clipboard"><i className="bi bi-clipboard-data"></i></div>
                                   <h4 style={{marginBottom: '30px', fontSize: '20px'}} className="text-center">Lorem ipsum dolor sit amet consectetur.</h4>
                                   <p className="text-center" style={{color:'#787474 ', fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, ullam ex </p>
                               </div>
                           </div>
                           <div className="col-xl-4 aos-init aos-animated" data-aos="fade-up" data-aos-delay="200" >
                               <div className="icon-box d-flex justify-content-center align-items-center flex-column" >
                                   <div className="gem"><i className="bi bi-gem"></i></div>
                                   <h4 style={{marginBottom: '30px', fonSize: '20px'}} className="text-center">Lorem ipsum dolor sit amet consectetur.</h4>
                                   <p className="text-center" style={{color:'#787474' , fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. !</p>
                               </div>
                           </div>
                           <div className="col-xl-4 aos-init aos-animated"data-aos="fade-up" data-aos-delay="200" >
                               <div className="icon-box justify-content-center align-items-center d-flex flex-column" >
                                   <div className="inboxes"><i className="bi bi-inboxes"></i></div>
                                   <h4 style={{marginBottom: '30px', fontSize: '20px'}} className="text-center">Lorem ipsum dolor sit amet consectetur.</h4>
                                   <p className="text-center" style={{color:'#787474',  fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, ullam ex ducimus </p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
      </section>
    </>
  )
}

export default Why
