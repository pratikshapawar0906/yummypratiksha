import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';





const Editcustomer = () => {



    

    const [username, setUsername] = useState('');
    const [useremail, setEmail] = useState('');
    const [userperson, setPerson] = useState('');
    const [userphone, setPhone] = useState('');
    const [usertime, setTime] = useState('');
    const [userdate, setDate] = useState('');
    const [message, setMessage] = useState('');



    // *********************************************************

   
    const nav = useNavigate();



    
    const data = useParams();
    console.log(data);

   
    const { id } = useParams()

    console.log(id);

    // ***************************************



    
    const FetchUser = async () => {


        const result = await Axios.get(`http://yummypratiksha.onrender.com/customer/${id}`);

        // console.log(result);
        console.log(result.data);


        

        setUsername(result.data.username  || '')
        setEmail(result.data.useremail  || '')
        setPhone(result.data.userphone  || '')
        setPerson(result.data.userperson  || '');
        setTime(result.data.usertime  || '');
        setDate(result.data.userdate || '' );
        setMessage(result.data.message  || '');

    }


    useEffect(() => {
        FetchUser()

    }, [])


    // *******************************************************
    
    const UpdateForm = async (e) => {
        e.preventDefault();

        alert('Congrats Updated Successfully');

        console.log(username)
        console.log(useremail)
        console.log(userperson)
        console.log(userphone)
        console.log(usertime)
        console.log(userdate)
        console.log(message)


        

        await Axios.put(`http://yummypratiksha.onrender.com/customer/${id}`,
            {

                username: username,
                useremail: useremail,
                userdate:userdate,
                userperson:userperson,
                userphone:userphone,
                usertime:usertime,
                message:message,

            }
        )


        

        nav('/usercustomer')


    }



    return (
        <>



           <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className=" text-center text-warning fw-bold p-3 mb-4">Update Form</h1>
                    </div>



                    <form action="" onSubmit={(e) => UpdateForm(e)}>

                        <div className="col-md-12">

                            {/* nested grid */}
                            <div className="row fw-bold bg-dark text-light p-4">
                                <div className="col-md-12 my-3">
                                    <div className="form-group">
                                        <label htmlFor="">Update Your name:</label>
                                        <input type="text" placeholder="update your name" value={username  || ''} onChange={(e) => setUsername(e.target.value)} className="form-control" name="username" id="username" />
                                    </div>
                                </div>

                                <div className="col-md-6 my-3">
                                    <div className="form-group">
                                        <label htmlFor="">Update Your Email:</label>
                                        <input type="email" className="form-control" value={useremail  || ''} onChange={(e) => setEmail(e.target.value)} name="useremail" id="useremail" />
                                    </div>
                                </div>


                                <div className="col-md-6 my-3">
                                    <div className="form-group">
                                        <label htmlFor="">Update Your phone no</label>
                                        <input type="phone" value={userphone  || ''} placeholder="enter strong password" onChange={(e) => setPhone(e.target.value)} className="form-control" name="userphone" id="userphone" />
                                    </div>
                                </div>


                               <div className="col-lg-6 my-3">

                                       <div className="form-group">
                                           <label htmlFor="">Update Your Date:</label>
                                           <input type='date' id='userdate' name='userdate' placeholder='Date' value={userdate  || ''} onChange={(e) => setDate(e.target.value)} className='form-control'/>

                                       </div>
                                </div>

                                <div className="col-lg-6 my-3">
                                   <div className="form-group">
                                     <label htmlFor="">Update Your Time:</label>
                                     <input type='time' id='usertime' name='usertime' placeholder='Time'value={usertime  || ''} onChange={(e) => setTime(e.target.value)}  className='form-control'/>
                                
                
                                   </div>
                                </div>

                                <div className="col-lg-12 my-3">
                                    <div className="form-group">
                                      <label htmlFor="">Update Your Member:</label>
            
                                      <input type='number' id='userperson' name='userperson' placeholder='members' value={userperson  || ''} onChange={(e) => setPerson(e.target.value)} className='form-control'/>
                                     
                
                                   </div>
                                </div>
                            
                                <div className=" col-lg-12 my-3">

                                       <div className="form-group">
                                          <label htmlFor="">Update Your Message:</label>
                
                                         <textarea type='message' id='message' name='message' placeholder='Message' rows='5' value={message  || ''} onChange={(e) => setMessage(e.target.value)} className='form-control'/>
                                        
                                       </div>
                                </div>

                                <div className="col-md-12 text-center mt-4">
                                    <button className="btn btn-danger px-4 fw-bold ">Update Form</button>
                                </div>


                            </div>
                        </div>


                    </form>
                </div>
            </div>

           </section>

        </>
    )
}

export default Editcustomer
