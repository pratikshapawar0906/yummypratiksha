import React, { useState } from 'react'
import  Axios  from 'axios';

const BookATable = () => {

  const [data, setdata] = useState({username: '',useremail: '',userphone:'',userdate: '',usertime: '',userperson:'',message:''});

  // ******************************************
  const [errors, setErrors] = useState({});

    const dataHandler = (e) => {
        const { name, value} = e.target;

          setdata({ ...data, [name]: value });

  };


  // *******************************************
  const saveForm = async(e) => {
    e.preventDefault();

    if (validation()) {
        alert('Form submitted successfully!');
        console.log(data);
        setdata({username: '',useremail: '',userphone:'',userdate: '',usertime: '',userperson:'',message:''});
        setErrors({});
    }
    await Axios.post('http://localhost:3000/customer',data)
  };


  // **************************************

  const validation = () => {
    
    const newErrors = {};
    if (data.username === '') newErrors.username = 'Please enter your f name';
    if (data.userphone === '') newErrors.userphone = 'Please enter your phone no';
    if (data.useremail === '') newErrors.useremail = 'Please enter your email';
    if (data.userperson === '') newErrors.userperson = 'Please enter a members';
    if (data.userdate === '') newErrors.userdate = 'Please select a date';
    if (data.usertime === '') newErrors.usertime = 'Please select a time';
    if (data.message === '') newErrors.message = 'Please enter a message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  };
  return (
    <>
      <section style={{padding: '60px 0px'}} id='bookatable'>
                <div className="col-md-12 text-center aos-init aos-animated m-p" data-aos="fade-up"  >
                    <h6 className=" font-weight-lighter title" >BOOK A TABLE</h6>
                    <p className="display-4 title-description" >
                      <span className='font'>BOOK YOUR</span>
                      <span className="description-title">STAY WITH US</span>
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 reservation-img aos-init aos-animated"data-aos="fade-up" data-aos-delay="100" >
                            <img src="images/book-a-table.jpeg" className="img-fluid"/>
                        </div>
                        <div className="col-lg-8 light-background d-flex align-items-center aos-init aos-animated" data-aos="fade-up" data-aos-delay="200" >
                            <form onSubmit={(e)=>saveForm(e)}>
                                <div className="row">
                                    <div className="col-lg-4 my-3">

                                       <div className="form-group">

                                         <input type='text' id='username' name='username' placeholder=' Your name' value={data.username} onChange={(e)=>dataHandler(e)}  className='form-control'/>
                                         { 
                                           errors.username && <p className="fw-bold text-danger">{errors.username}</p>
                                          }
                                       </div>
                                    </div>
                                    <div className="col-lg-4 my-3">

                                      <div className="form-group">
                  
                                         <input type='email' id='useremail' name='useremail' placeholder=' Your email' value={data.useremail} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                         { 
                                           errors.useremail && <p className="fw-bold text-danger">{errors.useremail}</p>
                                          }
                                       </div>
                                    </div>
                                     <div className="col-lg-4 my-3">

                                       <div className="form-group">
                
                                         <input type='tel' id='userphone' name='userphone' placeholder=' Your phone ' value={data.userphone} onChange={(e)=>dataHandler(e)}  className='form-control'/>
                                         { 
                                           errors.userphone && <p className="fw-bold text-danger">{errors.userphone}</p>
                                          }
                   
                                       </div>
                                    </div>
                                    <div className="col-lg-4 my-3">

                                       <div className="form-group">
                   
                                         <input type='date' id='userdate' name='userdate' placeholder='Date' value={data.userdate} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                         { 
                                           errors.userdate && <p className="fw-bold text-danger">{errors.userdate}</p>
                                          }
                   
                                       </div>
                                    </div>
                                    <div className="col-lg-4 my-3">

                                       <div className="form-group">
                
                                         <input type='time' id='usertime' name='usertime' placeholder='Time'value={data.usertime} onChange={(e)=>dataHandler(e)}  className='form-control'/>
                                         { 
                                           errors.usertime && <p className="fw-bold text-danger">{errors.usertime}</p>
                                          }
                   
                                       </div>
                                    </div>
                                    <div className="col-lg-4 my-3">

                                       <div className="form-group">
                
                                         <input type='number' id='userperson' name='userperson' placeholder='members' value={data.userperson} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                         { 
                                           errors.userperson && <p className="fw-bold text-danger">{errors.userperson}</p>
                                          }
                   
                                       </div>
                                    </div>
                                </div>
                                <div className="my-3">

                                       <div className="form-group">
                
                                         <textarea type='message' id='message' name='message' placeholder='Message' rows='5' value={data.message} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                         { 
                                           errors.message && <p className="fw-bold text-danger">{errors.message}</p>
                                          }
                                       </div>
                                </div>
                                <div className="text-center my-3">
                
                                     <button type="submit" style={{backgroundColor: '#CE1212', padding: '14px 60px', color:'#ffffff', margin: '24px', border: '#CE1212'}}>Book A Table</button>
                                        
                                      
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
      </section>
    </>
  )
}

export default BookATable
