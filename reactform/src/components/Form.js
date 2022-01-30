import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import react from 'react';
const Form = () => {
    const [data, setdata] = useState();
    const [success, setsuccess] = useState('');
    const Handlechange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }
    const submit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:8000/api/student', data);
        document.getElementById("myform").reset();
        setsuccess(res.data.success);
    }

    return (
        <div className="container p-5 ">
            <div className="card p-5 border-info ">
                <div className="text-success p-4">{success}</div>
                <form action="" onSubmit={submit} id='myform' method='post'>
                    <div className="row">
                        <div className="col-sm-4">
                            <label htmlFor="">Name</label>
                            <input type="text" className='form-control' name='name' onChange={Handlechange} placeholder='name' id="" />
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="">Email</label>
                            <input type="text" className='form-control' name="email" onChange={Handlechange} placeholder='email' id="" />
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="">Phone</label>
                            <input type="text" className='form-control' name="phone" onChange={Handlechange} placeholder='phone' id="" />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <button className='btn btn-primary btn-sm text-center' type='submit' >submit</button>

                    </div>


                </form>
            </div>
        </div>

    );
}

export default Form;
