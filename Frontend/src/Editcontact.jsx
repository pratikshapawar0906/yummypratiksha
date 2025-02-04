import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editcontact = () => {

  const [username, setUsername] = useState('');
  const [useremail, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  const { id } = useParams();
  const navigate = useNavigate();

  // ********************************************************

  const fetchUser = async () => {
    try {
      const result = await Axios.get(`http://yummypratiksha.onrender.com/contact/${id}`);
      setUsername(result.data.username || '');
      setEmail(result.data.useremail  || '');
      setSubject(result.data.subject  || '');
      setMessage(result.data.message  || '');

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  // ********************************************************

  const updateForm = async (e) => {

    e.preventDefault();
    try {
      await Axios.put(`http://yummypratiksha.onrender.com/contact/${id}`, {
        username,
        useremail,
        subject,
        message,
      });
      alert('Contact updated successfully!');
      navigate('/usercontact');
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <section>
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center text-warning fw-bold p-3 mb-4">Update Form</h1>
        </div>
        <form onSubmit={updateForm}>
          <div className="row fw-bold bg-dark text-light p-4">
            <div className="col-md-6 my-3">
              <div className="form-group">

                <label>Update Your Name:</label>
                <input type="text" placeholder="Update your name" value={username  || ''} onChange={(e) => setUsername(e.target.value)}className="form-control"/>

              </div>
            </div>
            <div className="col-md-6 my-3">
              <div className="form-group">

                <label>Update Your Email:</label>
                <input type="email" className="form-control" value={useremail  || ''} onChange={(e) => setEmail(e.target.value)}/>

              </div>
            </div>
            <div className="col-lg-12 my-3">
              <div className="form-group">

                <label>Update Your Subject:</label>
                <input type="text" placeholder="Subject" value={subject  || ''} onChange={(e) => setSubject(e.target.value)} className="form-control"/>

              </div>
            </div>
            <div className="col-lg-12 my-3">
              <div className="form-group">

                <label>Update Your Message:</label>
                <textarea placeholder="Message" rows="5" value={message  || ''} onChange={(e) => setMessage(e.target.value)}className="form-control"/>

              </div>
            </div>
            <div className="col-md-12 text-center mt-4">
                <button type="submit" className="btn btn-danger px-4 fw-bold">
                  Update Contact
                </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Editcontact;
