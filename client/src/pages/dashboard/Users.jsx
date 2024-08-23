import Navbar from '@/components/dashboard/Navbar'
import React, { useEffect, useState } from 'react'
import { LuChevronRight, LuHome } from "react-icons/lu";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { VscTrash } from 'react-icons/vsc';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoFunnelOutline } from 'react-icons/io5'

const Users = () => {
    const [users, setUsers] = useState(null);
    return (
        <div className='flex max-w-7xl mx-auto'>
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
                                            <th scope="col" className="px-3 md:px-6 py-3">Name</th>
                                            <th scope="col" className="px-3 md:px-6 py-3">Role</th>
                                            <th scope="col" className="px-3 md:px-6 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='text-xs sm:text-sm border-b'>
                                            <td scope="col" className="px-3 md:px-6 py-2">1</td>
                                            <td scope="col" className="px-3 md:px-6 py-2">bansujan@gmail.com</td>
                                            <td scope="col" className="px-3 md:px-6 py-2 capitalize">Sujan Ban</td>
                                            <td scope="col" className="px-3 md:px-6 py-2">{'admin'}</td>
                                            <td scope="col" className="px-3 md:px-6 py-2">
                                                <button className='py-2 px-2 md:px-4 text-sm text-orange-600 bg-orange-100 transition-all duration-300 hover:bg-orange-200 rounded-xl'><VscTrash size={20} /></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Users