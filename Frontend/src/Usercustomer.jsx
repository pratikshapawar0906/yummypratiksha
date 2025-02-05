import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {NavLink} from 'react-router-dom'

const Usercustomer = () => {
    const[data,setdata]=useState([])

    const LodData=async()=>{
        try{
            const result=await Axios.get('http://localhost:3000/customer')
            console.log(result.data)
            setdata(result.data)
        }
        catch{
            console.log('error')
        }
    }

   
    useEffect(()=>{
     LodData()
    //  LodData1()
    },[])

    //************************************************************************* */
    const DeleteCustomer= async(id)=>{

        var result=data.filter((val)=>val.id!==id)
        setdata(result)
        await Axios.delete(`http://localhost:3000/customer/${id}`)
    }
  return (
    <>
        <table className='table table-hover table-striped w-100 text-center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Member</th>
                        <th>Message</th>
                    </tr>
                </thead>

                <tbody>

                    {

                        data.map((val, index, array) => {
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.username}</td>
                                    <td>{val.useremail}</td>
                                    <td>{val.userphone}</td>
                                    <td>{val.userdate}</td>
                                    <td>{val.usertime}</td>
                                    <td>{val.person}</td>
                                    <td>{val.message}</td>

                                    {/* <td><i className='bi bi-trash text-danger fw-bold' onClick={() => DeleteCustomer(val.id)}></i></td> */}
                                    <td><i className='bi bi-trash text-danger fw-bold' onClick={() => { if (window.confirm('Are You Sure ?')) { DeleteCustomer(val.id) } }}></i></td>


                                    <td><NavLink to={`/editcustomer/${val.id}`}><i className='bi bi-pen-fill text-success fw-bold'></i></NavLink></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
        </table>
    </>
  )
}

export default Usercustomer
