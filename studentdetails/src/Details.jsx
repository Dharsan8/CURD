import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

const Details = () => {
    const [details,setDetails] = useState([{Name : 'Dharsan',Email:'dharsan@gmail.com',PhoneNumber:'4567899012',Department:'ECE'}])

    useEffect(()=>{
        axios.get('http://localhost:4001')
        .then(result => setDetails(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) =>{
        axios.delete('http://localhost:4001/deleteuser/'+id)
        .then(res => {console.log(res)
        window.location.reload()})
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
            <div className='w-60 bg-white rounded p-4'>
                <Link to='/create' className='btn btn-success'>Create+</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map((items)=>{
                                return(
                                    <tr>
                                        <td>{items.name}</td>
                                        <td>{items.email}</td>
                                        <td>{items.phoneno}</td>
                                        <td>{items.depart}</td>
                                        <td>
                                        <Link to={`/update/${items._id}`} className='btn btn-success'>Update</Link>
                                            <button className='btn btn-danger' onClick={(e) => handleDelete(items._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Details;
