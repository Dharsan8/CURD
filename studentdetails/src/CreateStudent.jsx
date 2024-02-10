import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateStudent = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneno, setPhoneno] = useState()
    const [depart, setDepart] = useState()
    const navigate = useNavigate()
    const Submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:4001/createuser",{name,email,phoneno,depart})
        .then(result => {console.log(result)
        navigate('/')})
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>AddDetails</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' placeholder='Enter Name'className='form-control' onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='text' placeholder='Enter Email'className='form-control' onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>PhoneNumber</label>
                        <input type='text' placeholder='Enter PhNo'className='form-control' onChange={(e)=> setPhoneno(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Department</label>
                        <input type='text' placeholder='Enter Dept'className='form-control' onChange={(e)=> setDepart(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateStudent;
