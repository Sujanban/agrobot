import Navbar from '@/components/dashboard/Navbar'
import React, { useState, useEffect } from 'react'
import { MdOutlineStarPurple500, MdOutlineStarOutline, MdOutlineStarHalf } from "react-icons/md";
import { VscTrash, VscEdit } from 'react-icons/vsc';
import TestimonialCard from '../../components/dashboard/TestimonialCard';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { HashLoader } from 'react-spinners';

const Testimonials = () => {
    const [model, setModel] = useState(false);
    const [modelData, setModelData] = useState(null);

    const [testimonials, setTestimonials] = useState([]);

    // rating
    const [hover, setHover] = useState(0);

    const [formData, setFormData] = useState({
        email: 'sujanban',
        message: '',
        rating: 0
    });

    const fetchTestimonials = async () => {
        try {
            const res = await axios.get('/api/testimonials');
            console.log(res.data);
            setTestimonials(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const addTestimonial = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await axios.post(`/api/testimonials/addTestimonial`, formData);
            console.log(res.data)
            if (res.data.message) {
                toast.success(res.data.message);
                fetchTestimonials();
                setModel(false);
            }
            if (res.data.error) {
                toast.error(res.data.error);
            }
        } catch (error) {
            console.log(error)
        }
    }


    const deleteTestimonial = async (id) => {
        try {
            const res = await axios.delete(`/api/users/deleteTestimonial/${id}`);
            console.log(res.data)
            if (res.data.message) {
                toast.success(res.data.message);
                getUsers();
            }
            if (res.data.error) {
                toast.error(res.data.error);
            }
        } catch (err) {
            console.log(err);
        }
    };



    useEffect(() => {
        fetchTestimonials();
    }, [])
    

    return (
        <>
            <div className={` ${model ? 'blur-sm' : ''} flex max-w-7xl mx-auto`}>
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

                    <button onClick={() => setModel(true)} className='text-sm bg-emerald-100 text-emerald-600 border border-emerald-500  rounded px-2 py-1'>
                        <VscEdit className='inline-flex' /> <span>Add Testimonial</span>
                    </button>


                    <div>
                        {
                            testimonials && testimonials.map((test, index) => 
                            <TestimonialCard key={index} data={test} setModel={setModel} setModelData={setModelData} deleteTestimonial={deleteTestimonial} />)
                        }
                        {/* <TestimonialCard setModel={setModel} setModelData={setModelData} />
                        <TestimonialCard setModel={setModel} setModelData={setModelData} /> */}
                    </div>
                </div>
            </div>





            {
                model && <div>
                    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center">
                        <div className=" shadow-xl border relative bg-white rounded-lg w-full max-w-lg">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Add Testimonial
                                </h3>
                                <button onClick={() => setModel(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-model-toggle="crud-model">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                            <form className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write a short Review</label>
                                        <textarea id="message"
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows="4"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
                                        " placeholder="Write a short Review here"></textarea>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Rating
                                        </label>
                                        <div className="flex">
                                            {[...Array(5)].map((star, index) => {
                                                const currentRating = index + 1;
                                                return (
                                                    <button
                                                        type="button"
                                                        key={index}
                                                        onClick={(e) => setFormData({ ...formData, rating: currentRating })}
                                                        onMouseEnter={() => setHover(currentRating)}
                                                        onMouseLeave={() => setHover(0)}
                                                    >
                                                        <MdOutlineStarPurple500
                                                            className="star"
                                                            color={
                                                                currentRating <= (hover || formData.rating)
                                                                    ? "#f59e0b" // yellow-500
                                                                    : "#9ca3af" // gray-500
                                                            }
                                                            size={24}
                                                        />
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <button onClick={(e) => addTestimonial(e)}
                                    type="submit" className="space-x-3 text-white flex items-center bg-stone-900 hover:bg-stone-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    <VscEdit />
                                    <p>Create Testimonial</p>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Testimonials