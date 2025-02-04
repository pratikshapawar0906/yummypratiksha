import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from './util';

const BookATable = () => {

  const [data, setdata] = useState({username: '',useremail: '',userphone:'',userdate: '',usertime: '',userperson:'',message:''});

  
     // *********************************************
  
  
      const dataHandler = (e) => {
          const { name, value } = e.target;
  
            setdata({ ...data, [name]: value });
  
    };
  
  
  //  // *******************************************
   const saveForm = async(e) => {
     e.preventDefault();
      
     const { username, useremail,userphone, userdate,usertime, userperson, message}= data
  
        if(!username || !useremail ||!userphone || !userdate||!usertime|| !userperson || !message){
             return handleError('Name , email, subject and message are required ')
        }
        try{
           const url="http://yummypratiksha.onrender.com/user/booktable"
           const response = await fetch(url,{
             method:"POST",
             headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({  name: username, email: useremail,phone:userphone,date: userdate,time:usertime, members:userperson,  message })
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
                            <img src="images/book-a-table.jpeg"  alt="Table Images" className="img-fluid"/>
                        </div>
                        <div className="col-lg-8 light-background d-flex align-items-center aos-init aos-animated" data-aos="fade-up" data-aos-delay="200" >
                            <form onSubmit={saveForm}>
                                <div className="row">
                                    <div className="col-lg-4 my-3">

                                       <div className="form-group">

                                         <input type='text' id='username' name='username' placeholder=' Your name' value={data.username} onChange={(e)=>dataHandler(e)}  className='form-control'/>
                                         
                                       </div>
                                    </div>
                                    <div className="col-lg-4 my-3">

                                      <div className="form-group">
                  
                                         <input type='email' id='useremail' name='useremail' placeholder=' Your email' value={data.useremail} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                         
                                       </div>
                                    </div>
                                     <div className="col-lg-4 my-3">

                                       <div className="form-group">
                
                                         <input type='tel' id='userphone' name='userphone' placeholder=' Your phone ' value={data.userphone} onChange={(e)=>dataHandler(e)}  className='form-control'/>
                                         
                                       </div>
                                    </div>
                                    <div className="col-lg-4 my-3">

                                       <div className="form-group">
                   
                                         <input type='date' id='userdate' name='userdate' placeholder='Date' value={data.userdate} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                         
                   
                                       </div>
                                    </div>
                                    <div className="col-lg-4 my-3">

                                       <div className="form-group">
                
                                         <input type='time' id='usertime' name='usertime' placeholder='Time'value={data.usertime} onChange={(e)=>dataHandler(e)}  className='form-control'/>
                                         
                   
                                       </div>
                                    </div>
                                    <div className="col-lg-4 my-3">

                                       <div className="form-group">
                
                                         <input type='number' id='userperson' name='userperson' placeholder='members' value={data.userperson} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                         
                                       </div>
                                    </div>
                                </div>
                                <div className="my-3">

                                       <div className="form-group">
                
                                         <textarea type='message' id='message' name='message' placeholder='Message' rows='5' value={data.message} onChange={(e)=>dataHandler(e)} className='form-control'/>
                                        
                                       </div>
                                </div>
                                <div className="text-center my-3">
                
                                     <button type="submit" style={{backgroundColor: '#CE1212', padding: '14px 60px', color:'#ffffff', margin: '24px', border: '#CE1212'}}>Book A Table</button>
                                        
                                      
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

export default BookATable
