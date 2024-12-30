import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

const Usercontact = () => {
  const [data, setData] = useState([]);

  
  const loadData = async () => {
    try {
      const result = await Axios.get('http://localhost:3000/contact');
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

 
  //******************************************* */   
  
  const deleteContact = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await Axios.delete(`http://localhost:3000/contact/${id}`);

        setData(data.filter((val) => val.id !== id)); 
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  return (
    <table className="table table-hover table-striped w-100 text-center">
       <thead>
          <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Email</th>
               <th>Subject</th>
               <th>Message</th>
               <th>Actions</th>
          </tr>
       </thead>
       <tbody>
            {
                data.map((val) => (
                   <tr key={val.id}>
                       <td>{val.id}</td>
                       <td>{val.username}</td>
                       <td>{val.useremail}</td>
                       <td>{val.subject}</td>
                       <td>{val.message}</td>
        
                       <td>
                           <i className="bi bi-trash text-danger fw-bold" onClick={() => deleteContact(val.id)} style={{ cursor: 'pointer' }}></i>
                           <NavLink to={`/editcontact/${val.id}`}>
                             <i className="bi bi-pen-fill text-success fw-bold ms-3"></i>
                           </NavLink>
                       </td>
    
                  </tr>
                ))
            }
      </tbody>
    </table>
  );
};

export default Usercontact;
