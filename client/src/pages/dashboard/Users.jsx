import Navbar from '@/components/dashboard/Navbar'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { VscTrash, VscEdit } from 'react-icons/vsc';

const Users = () => {
    const [users, setUsers] = useState(null);
    const [modal, setModal] = useState(false);
    const [modelData, setModelData] = useState(null);


    const getUsers = async () => {
        try {
            const res = await axios.get('/api/users');
            setUsers(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`/api/users/deleteUser/${id}`);
            if (res.data.message) {
                getUsers();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleModelToggle = (data) => {
        setModal(!modal);
        setModelData(data);
    }


    const updateUser = async (e) => {
        e.preventDefault();
        console.log(modelData);
        try {
            const res = await axios.post('/api/users/editUser', modelData);
            console.log(res.data);
            // if (res.data.message) {
            //     getUsers();
            // }
        } catch (err) {
            console.log(err);
        }
    }



    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <div className={` ${modal ? 'blur-sm' : ''} flex max-w-7xl mx-auto`}>
                <Navbar />
                <div className='p-8 w-full'>
                    <h1 className='font-medium text-2xl'>Users</h1>

                    <div className=' h-[90vh] overflow-y-auto bg-gray-100'>
                        <div className='md:p-4 pt-2'>
                            <div className='p-2 bg-white rounded-xl'>

                                <div className="relative overflow-x-auto sm:rounded-lg">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50">
                                            <tr className=''>
                                                <th scope="col" className="px-3 md:px-6 py-3">SN</th>
                                                <th scope="col" className="px-3 md:px-6 py-3">Email</th>
                                                <th scope="col" className="px-3 md:px-6 py-3">Role</th>
                                                <th scope="col" className="px-3 md:px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users && users.map((user, index) =>
                                                    <tr className="bg-white border-b" key={index}>
                                                        <td className="px-3 md:px-6 py-2">{index + 1}</td>
                                                        <td className="px-3 md:px-6 py-2">{user.email}</td>
                                                        <td className="px-3 md:px-6 py-2">{user.role == 1 ? 'Admin' : 'User'}</td>
                                                        <td className="px-3 md:px-6 py-2 space-x-1">
                                                            <button onClick={() => deleteUser(user._id)} className='py-2 px-2 md:px-4 text-sm text-orange-600 bg-orange-100 transition-all duration-300 hover:bg-orange-200 rounded-xl'><VscTrash size={20} /></button>
                                                            <button onClick={() => handleModelToggle(user)} className='py-2 px-2 md:px-4 text-sm text-emerald-600 bg-emerald-100 transition-all duration-300 hover:bg-emerald-200 rounded-xl'><VscEdit size={20} /></button>
                                                        </td>
                                                    </tr>


                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            {
                modal && <div>
                    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center">
                        <div className=" shadow-xl border relative bg-white rounded-lg">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Edit User Details
                                </h3>
                                <button onClick={() => setModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-toggle="crud-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                            <form className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type email here" required="" value={modelData && modelData.username} onChange={(e) => setModelData({ ...modelData, username: e.target.value })} />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type email here" required="" value={modelData && modelData.email} onChange={(e) => setModelData({ ...modelData, email: e.target.value })} />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Password" required="" value={modelData && modelData.password} onChange={(e) => setModelData({ ...modelData, password: e.target.value })} />
                                    </div>

                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                                        <select
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                            value={modelData?.role || "0"} // Bind the select value to modelData.role, defaulting to "0"
                                            onChange={(e) => setModelData({ ...modelData, role: e.target.value })} // Handle role update
                                        >
                                            <option value="1">Admin</option>
                                            <option value="0">User</option>
                                        </select>
                                    </div>

                                </div>
                                <button onClick={updateUser} type="submit" className="space-x-3 text-white flex items-center bg-stone-900 hover:bg-stone-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    <VscEdit />
                                    <p>update user</p>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Users