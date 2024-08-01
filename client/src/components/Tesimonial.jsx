import React from 'react'
import user2 from "../assets/user2.png"
import { FaQuoteLeft } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Tesimonial = () => {
    return (
        <section className='bg-slate-100'>
            <div className='px-4 py-20 max-w-7xl mx-auto'>
                <div className='flex items-center space-x-4'>
                    <h1 className='p-8 text-5xl leading-normal font-medium bg-white rounded-xl'>What top-tier farmers tell about our products</h1>
                    <p className='max-w-sm'>Join the growing number of business and companies that have experianced that we have transformative impact on the smart AI integration service.</p>
                </div>
                <div className='p-8 grid grid-cols-2'>
                    <div className='relative mx-auto'>
                        <img className='' src={user2} alt="" />
                        <div className='absolute bottom-6 left-8 text-white'>
                            <h1 className='text-3xl font-medium'>Mbida Messi</h1>
                            <p>Founder GOTHALO INC.</p>
                        </div>
                    </div>
                    <div className='p-2 rounded-3xl bg-white space-y-4 flex flex-col'>
                        <div className='p-4 testimonial-banner space-y-2 grow'>
                            <button className='font-medium text-sm border rounded-full px-4 py-2 border-black'>
                                <FaQuoteLeft className='inline-flex mr-2' size={15} />
                                Client Testimonial
                            </button>
                            <h1 className='py-2 text-3xl font-medium  '>I was amaized by the level of assistance received from the AI Chatbot provided by Agrobot. It quickly undeerstood my needs and provided me with the best possible solutions.</h1>
                        </div>
                        <div className='p-4 border-t-2 border-slate-300 flex justify-between items-center'>
                            <button className='border rounded-full px-6 py-2 border-black'>1/4</button>
                            <button className='text-white/80 border rounded-full px-8 py-2 text-white bg-black'>See more testimonials <MdArrowOutward className='inline-flex' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tesimonial