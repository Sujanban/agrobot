import Navbar from '@/components/dashboard/Navbar'
import React, { useState } from 'react'
import { MdOutlineStarPurple500, MdOutlineStarOutline, MdOutlineStarHalf } from "react-icons/md";
import { VscTrash, VscEdit } from 'react-icons/vsc';
import TestimonialCard from '../../components/dashboard/TestimonialCard';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    return (
        <div className='flex max-w-7xl mx-auto '>
            <Navbar />
            <div className='p-8 w-full'>
                <h1 className='font-medium text-2xl'>Testimonials</h1>
                <div className='py-4 grid grid-cols-3'>
                    <div className='p-4 rounded-xl shadow space-y-2'>
                        <p className='font-semibold'>Total Reviews</p>
                        <h1 className='text-2xl font-semibold'>10K</h1>
                        <p className='text-sm text-gray-500'>Growth in reviews</p>
                    </div>

                    <div className='p-4 rounded-xl shadow space-y-2'>
                        <p className='font-semibold'>Average Rating</p>
                        <div className='flex items-center gap-4'>
                            <h1 className='text-2xl font-semibold'>4.0</h1>
                            <div className='flex'>
                                <MdOutlineStarPurple500 className='text-yellow-500' />
                                <MdOutlineStarPurple500 className='text-yellow-500' />
                                <MdOutlineStarPurple500 className='text-yellow-500' />
                                <MdOutlineStarPurple500 className='text-yellow-500' />
                                <MdOutlineStarPurple500 className='text-gray-300' />
                            </div>
                        </div>
                        <p className='text-sm text-gray-500'>Average rating all time</p>
                    </div>


                    <div className='p-4 rounded-xl shadow space-y-2 text-xs'>
                        <div className='flex items-center gap-4'>
                            <MdOutlineStarPurple500 className='text-yellow-500' />
                            <p>5.0</p>
                            <div className='w-[60%] h-1 bg-teal-500 rounded-xl'></div>
                            <p>2.0k</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <MdOutlineStarPurple500 className='text-yellow-500' />
                            <p>4.0</p>
                            <div className='w-[50%] h-1 bg-purple-500 rounded-xl'></div>
                            <p>2.0k</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <MdOutlineStarPurple500 className='text-yellow-500' />
                            <p>3.0</p>
                            <div className='w-[30%] h-1 bg-yellow-500 rounded-xl'></div>
                            <p>2.0k</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <MdOutlineStarPurple500 className='text-yellow-500' />
                            <p>2.0</p>
                            <div className='w-[5%] h-1 bg-cyan-500 rounded-xl'></div>
                            <p>0.23k</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <MdOutlineStarPurple500 className='text-yellow-500' />
                            <p>1.0</p>
                            <div className='w-[2%] h-1 bg-red-500 rounded-xl'></div>
                            <p>0.1k</p>
                        </div>

                    </div>


                </div>
                <div>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </div>
        </div>
    )
}

export default Testimonials