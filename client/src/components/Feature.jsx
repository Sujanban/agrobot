import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

import disease from "../assets/disease2.png"
import weather from "../assets/weather2.png"
import chatbot from "../assets/chatbot2.png"


const Feature = () => {
    const [openTab, setOpenTab] = useState(1);
    return (
        <section className='bg-slate-200'>
            <div className='px-4 py-20 max-w-7xl mx-auto'>
                {/* feature section header */}
                <div className='flex justify-between space-x-4'>
                    <div className='max-w-sm'>
                        <p>Throughout your customers entire buying journey, Agrobot ai will allow you to delight them at every step of the way, from their first visit to the final purchase.</p>
                        <Link className='my-4 text-sm px-8 py-3 rounded-full text-white bg-stone-900 flex justify-center items-center space-x-2'>
                            <span>Get Started</span>
                            <MdArrowOutward />
                        </Link>
                    </div>
                    <div className='px-8 bg-white rounded-3xl'>
                        <h1 className='text-5xl font-medium leading-normal'><span className='bg-green-200 px-4 py-1 rounded-tl-xl rounded-br-xl'>Redefining agriculture</span> and Enhancing crops yeilds.
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

                {/* feature main tabs */}
                <div className='my-4 p-8 grid grid-cols-3 space-x-4 bg-white rounded-3xl'>
                    <div className='space-y-4'>
                        <div onClick={() => setOpenTab(1)} className={`${openTab === 1 ? 'bg-slate-200' : ''} p-4 rounded-xl cursor-pointer space-y-2`}>
                            <h1 className='text-xl font-semibold'>Engaging</h1>
                            <p className='text-sm text-black/70'>Reach out to visitors proactivity using personalized chgatbot greetings. Turn website visitors into sales opportunities.</p>
                        </div>
                        <div onClick={() => setOpenTab(2)} className={`${openTab === 2 ? 'bg-slate-200' : ''} p-4 rounded-xl cursor-pointer space-y-2`}>
                            <h1 className='text-xl font-semibold'>Nuture</h1>
                            <p className='text-sm text-black/70'>Lead customers to a sale through the recommended purchases and tailored offerings.</p>
                        </div>
                        <div onClick={() => setOpenTab(3)} className={`${openTab === 3 ? 'bg-slate-200' : ''} p-4 rounded-xl cursor-pointer space-y-2`}>
                            <h1 className='text-xl font-semibold'>Engaging</h1>
                            <p className='text-sm text-black/70'>Reach out to visitors proactivity using personalized chgatbot greetings. Turn website visitors into sales opportunities.</p>
                        </div>
                    </div>
                    <div className='col-span-2 max-h-[400px] p-8 feature-background rounded-3xl'>
                        {
                            openTab === 1
                            &&
                            <img className='h-full w-full object-contain mx-auto rounded-3xl' src={disease} alt="" />
                        }
                        {
                            openTab === 2
                            &&
                            <img className='h-full w-full object-contain mx-auto rounded-3xl' src={weather} alt="" />
                        }
                        {
                            openTab === 3
                            &&
                            <img className='h-full w-full object-contain mx-auto rounded-3xl' src={chatbot} alt="" />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature