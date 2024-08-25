import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { VscTrash, VscEdit } from 'react-icons/vsc';


const TestimonialCard = ({ setModel, setModelData, data, deleteTestimonial }) => {
    return (
        <div className='py-4 grid gap-4 border-b-2'>
            <div className='flex space-x-12'>
                <div className='space-x-4 flex flex-shrink-0'>
                    <img className='w-20 h-20 ' src="http://localhost:5173/src/assets/user2.png" alt="" />
                    <div>
                        <h1 className='font-semibold capitalize'>{data.email}</h1>
                        <p className='text-sm text-gray-500'>CEO of Agrobot</p>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='flex items-center gap-2'>
                        <div className='flex'>
                            {
                                Array(5).fill(0).map((_, index) =>
                                    <MdOutlineStarPurple500
                                        key={index}
                                        className={index < data.rating ? 'text-yellow-500' : 'text-gray-300'}
                                    />)
                            }
                        </div>
                        <h1 className='text-xs text-gray-500'>{new Date(data.createdAt).toDateString()}</h1>
                    </div>
                    <div className='max-w-xl'>
                        <p className='text-gray-600 text-sm'>{data.message}</p>
                        <div className='py-4 flex space-x-4'>
                            <button onClick={() => setModel(true)} className='text-sm bg-emerald-100 text-emerald-600 border border-emerald-500  rounded px-2 py-1'>
                                <VscEdit className='inline-flex' /> <span>Edit Review</span>
                            </button>
                            <button className='text-sm bg-orange-100 text-orange-600 border border-orange-500  rounded px-2 py-1'>
                                <VscTrash className='inline-flex' /> <span>Delete Review</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestimonialCard