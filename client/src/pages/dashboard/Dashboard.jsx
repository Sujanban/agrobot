import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Navbar from '@/components/dashboard/Navbar';
import { AiTwotoneQuestionCircle } from "react-icons/ai";

const Dashboard = () => {
    return (
        <div className='flex'>
            <Navbar />
            <div className='p-8 w-full'>
                <div className='flex items-center justify-end space-x-2 text-blue-800'>
                    <AiTwotoneQuestionCircle color='blue' />
                    <Link to={'/'} className='text-sm'>Help & Feedback</Link>
                </div>
                <h1 className='text-3xl'>This is dashboard</h1>
            </div>
        </div>
    )
}

export default Dashboard