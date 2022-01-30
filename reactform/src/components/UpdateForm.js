import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import Redirect from 'react-dom'
const Updateform = () => {
    const [data, setdata] = useState({ name: '', email: '', phone: '', success: '' });
    const Handlechange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }
    const { id } = useParams()
    const fetchdata = async (e) => {
        const res = await axios.get(`http://localhost:8000/api/student/${id}`);
        setdata({ name: res.data.name, email: res.data.email, phone: res.data.phone });
    }

    const submit = async (e) => {
        e.preventDefault();
        const updateres = await axios.put(`http://localhost:8000/api/student/${id}`, data)
        setdata({success:updateres.data.update});
        <Redirect to="/" />
    }
    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div className="container p-5 ">
            <div className="card p-5 border-info ">
            <div className="text-success p-4">{data.success}</div>
                <form action="" onSubmit={submit} method='post'>
                    <div className="row">
                        <div className="col-sm-4">
                            <label htmlFor="">Name</label>
                            <input type="text" className='form-control' value={data.name} name='name' onChange={Handlechange} placeholder='name' id="" />
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="">Email</label>
                            <input type="text" className='form-control' value={data.email} name="email" onChange={Handlechange} placeholder='email' id="" />
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="">Phone</label>
                            <input type="text" className='form-control' value={data.phone} name="phone" onChange={Handlechange} placeholder='phone' id="" />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <button className='btn btn-primary btn-sm text-center'  type='submit' >submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Updateform;
