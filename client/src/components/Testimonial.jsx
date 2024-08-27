import React from 'react'
import user2 from "../assets/user2.png"
import { FaQuoteLeft } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { MdOutlineStarPurple500, MdOutlineStarOutline, MdOutlineStarHalf } from "react-icons/md";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    // console.log(testimonials)
    const fetchTestimonials = async () => {
        try {
            const res = await axios.get('/api/testimonials');
            setTestimonials(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleNextTestimonial = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    }

    const handlePrevTestimonial = () => {
        setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    }

    useEffect(() => {
        fetchTestimonials();
    }, [])


    return (
        <section id='testimonials' className='bg-slate-100'>
            <div className='px-4 py-20 max-w-7xl mx-auto'>
                <div className='flex items-center space-x-4'>
                    <h1 className='p-8 text-5xl leading-normal font-medium bg-white rounded-xl'>What top-tier farmers tell about our products</h1>
                    <p className='max-w-sm'>"Don't just take our word for it—see what our satisfied clients have to say! Discover how our platform has helped businesses thrive with data-driven insights and exceptional support."</p>
                </div>
                <div className='p-8 grid grid-cols-2'>
                    <div className='relative mx-auto'>
                        <img className='' src={user2} alt="" />
                        <div className='absolute bottom-6 left-8 text-white'>
                            <h1 className='text-2xl font-medium'>
                                {
                                    testimonials && testimonials[currentIndex] && testimonials[currentIndex].email
                                }
                            </h1>
                            <p>Agrobot User</p>
                        </div>
                    </div>
                    <div className='p-2 rounded-3xl bg-white space-y-4 flex flex-col'>
                        {testimonials && testimonials.length > 0 ? (
                            <div className='p-4 testimonial-banner space-y-2 grow'>
                                <div className='flex justify-between'>
                                    <button className='font-medium text-sm border rounded-full px-4 py-2 border-black'>
                                        <FaQuoteLeft className='inline-flex mr-2' size={15} />
                                        Client Testimonial
                                    </button>
                                    <div className='pr-4 flex space-x-2 items-top'>
                                        {
                                            Array(5).fill(0).map((_, index) =>
                                                <MdOutlineStarPurple500
                                                    size={20}
                                                    key={index}
                                                    className={index < testimonials[currentIndex].rating ? 'text-yellow-500' : 'text-gray-300'}
                                                />)
                                        }
                                        <p className='text-sm'>{new Date(testimonials[currentIndex].createdAt).toDateString()}</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='py-2 text-3xl font-medium  '>
                                        {testimonials[currentIndex].message.slice(0, 190)}
                                        {testimonials[currentIndex].message.length > 190 ? "..." : ""}</h1>
                                </div>
                            </div>
                        ) : (
                            <p>Loading testimonials...</p>
                        )}
                        <div className='p-4 border-t-2 border-slate-300 flex justify-between items-center'>
                            <div className='flex space-x-4'>
                                <button onClick={handlePrevTestimonial}>
                                    <BsArrowLeftCircle size={40} />
                                </button>
                                <button onClick={handleNextTestimonial}>
                                    <BsArrowRightCircle size={40} />
                                </button>
                            </div>
                            <button className='text-white/80 border rounded-full px-8 py-2 text-white bg-black'>See more testimonials <MdArrowOutward className='inline-flex' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial