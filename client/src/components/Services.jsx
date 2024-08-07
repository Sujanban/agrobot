import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";


const Services = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <section id='services' className='bg-slate-100'>
            <div className='px-4 py-20 max-w-7xl mx-auto '>
                <h1 className='text-4xl font-medium max-w-md'>
                    <span className='text-green'>Smart Farming</span>
                    : We Provides Best Services For Your Garden</h1>
                <div className='py-8 pb-20 flex items-center justify-between gap-4 flex-wrap'>
                    <div className='flex flex-col text-sm space-y-2'>
                        <li className='list-none text-3xl'>
                            <button onClick={() => setActiveTab(1)} className={`px-4 py-2 rounded-full ${activeTab === 1 ? 'bg-stone-9000 ' : 'text-gray-400'} `}>01. Farm Bot</button>
                        </li>
                        <li className='list-none text-3xl'>
                            <button onClick={() => setActiveTab(2)} className={`px-4 py-2 rounded-full ${activeTab === 2 ? 'bg-stone-9000 ' : 'text-gray-400'} `}>02. Weather Insight</button>
                        </li>
                        <li className='list-none text-3xl'>
                            <button onClick={() => setActiveTab(3)} className={`px-4 py-2 rounded-full ${activeTab === 3 ? 'bg-stone-9000 ' : 'text-gray-400'} `}>03. Disease Detection</button>
                        </li>
                    </div>
                    <div>
                        <FaArrowRightLong size={40} />
                    </div>
                    {
                        activeTab === 1 &&
                        <div className='relative shadow flex  gap-4 max-w-3xl flex-wrap'>
                            <img className='w-[700px] h-[500px] object-cover rounded-xl' src="https://plus.unsplash.com/premium_vector-1682307904375-1e8b895c745c?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <Link className='m-2 px-4 py-2 shadow border rounded-full bg-slate-200 hover:bg-slate-300 text-sm flex items-center space-x-2 absolute bottom-0 left-0' to='/'><span>Try now</span> <MdArrowOutward /></Link>
                        </div>
                    }
                    {
                        activeTab === 2 &&
                        <div className='relative shadow'>
                            <img className='w-[700px] h-[500px] object-cover rounded-xl' src="https://plus.unsplash.com/premium_vector-1714142580885-97d3f0e39f98?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <Link className='m-2 px-4 py-2 shadow border rounded-full bg-slate-200 hover:bg-slate-300 text-sm flex items-center space-x-2 absolute bottom-0 left-0' to='/'><span>Try now</span> <MdArrowOutward /></Link>
                        </div>
                    }
                    {
                        activeTab === 3 &&
                        <div className='relative shadow'>
                            <img className=' w-[700px] h-[500px] object-cover rounded-xl' src="https://plus.unsplash.com/premium_vector-1711987356317-e765e719f673?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <Link className='m-2 px-4 py-2 shadow border rounded-full bg-slate-200 hover:bg-slate-300 text-sm flex items-center space-x-2 absolute bottom-0 left-0' to='/'><span>Try now</span> <MdArrowOutward /></Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Services