import React, { useState } from 'react'
import { handleError, handleSuccess } from "./util";
import { ToastContainer } from "react-toastify";


const Contact = () => {
   const [data, setdata] = useState({username: '',useremail: '',subject:'',message:''});

   // *********************************************


    const dataHandler = (e) => {
        const { name, value } = e.target;

          setdata({ ...data, [name]: value });

  };


//  // *******************************************
 const saveForm = async(e) => {
   e.preventDefault();
    
   const { username, useremail, subject, message}= data

      if(!username || !useremail || !subject || !message){
           return handleError('Name , email, subject and message are required ')
      }
      try{
         const url="http://yummypratiksha.onrender.com/user/contact"
         const response = await fetch(url,{
           method:"POST",
           headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({  name: username, email: useremail, subject, message })
         })
         const result=await response.json()
         const { success, message: serverMessage }=result

         if (success) {
            handleSuccess(serverMessage);
         }
      }catch(error){
       handleError(error)
      }

  };
  return (
    <>
      <section style={{padding: '60px 0px'}} id="contact">
                <div className="col-md-12 text-center aos-init aos-animated m-p" data-aos="fade-up"  >
                    <h6 className=" font-weight-lighter title"  >CONTACT </h6>
                    <p className="display-4 title-description" >
                      <span className='font'>NEED HELP?</span>
                      <span className="description-title">CONTACT US</span>
                    </p>
                </div>
                <div className="container aos-init aos-animated" data-aos="fade-up" data-aos-delay="100" style={{backgroundColor: '#F2F2F2'}}>
                    <div className="google-map aos-init aos-animated">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3614657904045!2d-74.00871262369846!3d40.710058571393816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1727761318459!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='LocationMap'></iframe>
                    </div>
                    <div className="row">
                        <div className="col-md-6 addressOuter my-3" >
                            <div className="info-item d-flex align-items-center aos-init aos-animated" data-aos="fade-up" data-aos-delay="200" >
                               <i className="bi bi-geo-alt icon  " ></i>
                               <div >
                                <h3 className="address">Address</h3>
                                <p className="p">A108 Adam Street,New York,NY 5302522</p>
                               </div>
                            </div>
                        </div>
                        <div className="col-md-6 addressOuter my-3" >
                            <div className="info-item d-flex align-items-center aos-init aos-animated" data-aos="fade-up" data-aos-delay="300" >
                               <i className="bi bi-telephone icon"></i>
                               <div >
                                <h3 className="address">Call us</h3>
                                <p className="p">+ 5589 55488 55</p>
                               </div>
                            </div>
                        </div>
                        <div className="col-md-6  addressOuter my-3" >
                            <div className="info-item d-flex align-items-center aos-animated aos-init" data-aos="fade-up" data-aos-delay="400" >
                               <i className="bi bi-envelope icon"></i>
                               <div >
                                <h3 className="address">Email us</h3>
                                <p className="p">info@example.com</p>
                               </div>
                            </div>
                        </div>
                        <div className="col-md-6  addressOuter my-3" >
                            <div className="info-item d-flex align-items-center aos-init aos-animated " data-aos="fade-up" data-aos-delay="500" >
                               <i className="bi bi-clock icon"></i>
                               <div >
                                   <h3 className="address">Opening Hours</h3>
                                   <p className="p"><strong>Mon-sat</strong>:11AM:23PM;<strong>Sunday:</strong>Closed</p>
                               </div>
                            </div>
                        </div>
                      </div>
                      <div className="row">
                         <div className="col-lg-12">
                            <form onSubmit={saveForm} className="aos-init aos-animated my-3 p-3" data-aos="fade-up" data-aos-delay="600"  style={{ backgroundColor: '#ffffff'}}>
                               <div className="row">
                                  <div className="col-lg-6 my-3">

                                       <div className="form-group">

                                         <input type='text' id='username' name='username' placeholder=' Your name' value={data.username} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                         
                   
                                       </div>
                                    </div>
                                    <div className="col-lg-6 my-3">

                                       <div className="form-group">

                                         <input type='email' id='useremail' name='useremail' placeholder=' Your email' value={data.useremail} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                        
                                       </div>
                                    </div>
                                    <div className="col-lg-12 my-3">

                                       <div className="form-group">

                                         <input type='text' id='subject' name='subject' placeholder=' Subject' value={data.subject} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                         
                                       </div>
                                    </div>
                                    <div className="col-lg-12 my-3">

                                       <div className="form-group">

                                          
                                         <textarea type='message' id='message' name='message' placeholder='Message' rows='5' value={data.message} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                         
                                       </div>
                                    </div>
                                    <div className="text-center">
                                    <div className="loading"></div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">
                                        <button type="submit" style={{backgroundColor: '#CE1212', padding: '14px 60px', color:'#ffffff', margin: '24px', border: '#CE1212',borderRadius: '30px'}}>Send  Message</button>
                                    </div>
                                 </div>
                               </div>
                            </form>
                            <ToastContainer/>
                         </div>
                      </div>
                </div>
      </section>
    </>
  )
}

export default Contact
