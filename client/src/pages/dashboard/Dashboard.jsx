import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Navbar from '@/components/dashboard/Navbar';

const Dashboard = () => {
    return (
        <div className='flex'>
            <Navbar />
           <div className='p-8'>
            <p>This is dashboard</p>
           </div>
        </div>
    )
}

export default Dashboard