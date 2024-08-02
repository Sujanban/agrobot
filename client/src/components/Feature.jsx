import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";


const Feature = () => {
    return (
        <section className='bg-slate-200'>
            <div className='px-4 py-20 max-w-7xl mx-auto'>
                <div className='flex justify-between space-x-4'>
                    <div className='max-w-sm'>
                        <p>Throughout your customers entire buying journey, Agrobot ai will allow you to delight them at every step of the way, from their first visit to the final purchase.</p>
                        <Link className='my-4 text-sm px-8 py-3 rounded-full text-white bg-stone-900 flex justify-center items-center space-x-2'>
                            <span>Get Started</span>
                            <MdArrowOutward />
                        </Link>
                    </div>
                    <div className='px-8 bg-white rounded-xl'>
                        <h1 className='text-5xl font-medium leading-normal'>Redefining Conversations and Enhancing User experiance.
                        </h1>
                        <button className='my-4 inline-flex px-2 border border-stone-900 rounded-full'>
                            <button className='px-2 border border-stone-900 rounded-full'>
                                <button className='px-4 py-1 border border-stone-900 rounded-full space-x-2'>
                                    <IoEyeOutline className='inline-flex text-3xl' />
                                    <FaArrowRightLong className='inline-flex text-3xl' />
                                </button>
                            </button>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature