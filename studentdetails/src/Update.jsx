import React, {useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const Update = () => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneno, setPhoneno] = useState()
    const [depart, setDepart] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:4001/getUser/'+id)
        .then(result => {console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setPhoneno(result.data.phoneno)
        setDepart(result.data.depart)
    })
        .catch(err => console.log(err))
    },[])
    const Update = (e) =>{
        e.preventDefault()
        axios.put("http://localhost:4001/updateuser/"+id,{name,email,phoneno,depart})
        .then(result => {console.log(result)
        navigate('/')})
        .catch(err => console.log(err))
    }


    return (
<div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2>UpdateDetails</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' placeholder='Enter Name'className='form-control' value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='text' placeholder='Enter Email'className='form-control' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>PhoneNumber</label>
                        <input type='text' placeholder='Enter PhNo'className='form-control' value={phoneno} onChange={(e)=> setPhoneno(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Department</label>
                        <input type='text' placeholder='Enter Dept'className='form-control' value={depart} onChange={(e)=> setDepart(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
