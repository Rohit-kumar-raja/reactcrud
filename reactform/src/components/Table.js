import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Table = () => {
    const [state, setstate] = useState({ users: '', destroy: '' });
    // gettig the data from api
    const fetchData = async () => {
        const api = await fetch("http://127.0.0.1:8000/api/student");
        setstate({
            users: await api.json(),
        })
    };

    const deleteData = async (id) => {
        const response = await axios.delete(`http://127.0.0.1:8000/api/student/${id}`);
        setstate({ destroy: response.data.destroy });
        fetchData();
    }
    // console.log(state.users);
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="p-5">

            <div className="container card">
                <div className="row">
                    <div className="col-sm-10">
                        <div className="text-success p-0">{state.destroy}</div>
                    </div>
                    <div className="col-sm-2 p-3">
                        <Link className=' btn btn-primary btn-sm' to="add">Add new</Link>

                    </div>

                    <div className="table-responsive">
                        <table className="table-hover table border-1">
                            <thead className='text-center'>
                                <th>S.NO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </thead>
                            <tbody className='text-center'>

                                {
                                    state?.users ?
                                        state?.users?.map((user) => (
                                            <tr key={user?.id}>
                                                <td>{user?.id}</td>
                                                <td>{user?.name}</td>
                                                <td>{user?.email}</td>
                                                <td>{user?.phone}</td>
                                                <td colSpan={2}><Link className='btn btn-warning btn-sm' to={`update/${user?.id}`}>Edit</Link>
                                                    <button className='btn btn-danger btn-sm' onClick={() => deleteData(user?.id)} >Delete</button></td>

                                            </tr>
                                        )) : "Loading..."
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
