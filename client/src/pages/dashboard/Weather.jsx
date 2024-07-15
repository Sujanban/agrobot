import Navbar from '@/components/dashboard/Navbar'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiTempHigh, CiDroplet } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { LuClock3 } from "react-icons/lu";
import { IoRainy } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineWindPower } from "react-icons/md";
import compass from "../../assets/compass.png"
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Weather = () => {
    return (
        <div className='flex'>
            <Navbar />
            <div className='p-8 w-full space-y-4'>
                <div className='flex items-center justify-end space-x-2 text-blue-800'>
                    <AiTwotoneQuestionCircle color='blue' />
                    <Link to={'/'} className='text-sm'>Help & Feedback</Link>
                </div>
                <h1 className='font-semibold text-2xl'>Weather</h1>

                <div className='grid grid-cols-3 gap-4'>
                    <div className=' space-y-4 bg-black rounded-xl'>
                        <div className='m-1 flex items-center gap-2 rounded-full bg-white'>
                            <IoLocationOutline className='text-5xl pl-4 py-2' />
                            <input className='p-3 w-full text-sm rounded-full outline-none' type="search" placeholder='Kathmandu, Nepal' />
                        </div>

                        <div className='today-weather bg-black text-white p-4 rounded-xl space-y-4'>
                            <div className='py-8 text-center space-y-2'>
                                <h1 className='text-5xl font-semibold'>28°C</h1>
                                <h2 className='text-medium'>Rainy Day</h2>
                                <p className='text-sm'>Today, expect a rainy day with temperature reaching the maximum of 28°C. Make sure to grab your umbrella and raincoat before heading out.</p>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>

                                <div className='p-2 space-y-2 border shadow rounded-xl'>
                                    <div className='font-bold flex items-center gap-1'>
                                        <CiTempHigh className='' />
                                        <p className=''>FEELS LIKE</p>
                                    </div>
                                    <h1 className='text-3xl'>30°C</h1>
                                    <p className='text-xs text-stone-500'>Humidity is making it feel warmer</p>
                                </div>

                                <div className='p-2 space-y-2 border shadow rounded-xl'>
                                    <div className='font-bold flex items-center gap-1'>
                                        <CiDroplet className='' />
                                        <p className=''>PRECIPITATION</p>
                                    </div>
                                    <div>
                                        <h1 className='text-3xl'>2.3"</h1>
                                        <p className='font-medium'>in last 24h</p>
                                    </div>
                                    <p className='text-xs text-stone-500'>Humidity is making it feel warmer</p>
                                </div>

                                <div className='p-2 space-y-2 border shadow rounded-xl'>
                                    <div className='font-bold flex items-center gap-1'>
                                        <IoEyeOutline className='' />
                                        <p className=''>VISIBILITY</p>
                                    </div>
                                    <h1 className='text-3xl'>6 mi</h1>
                                </div>

                                <div className='p-2 space-y-2 border shadow rounded-xl'>
                                    <div className='font-bold flex items-center gap-1'>
                                        <WiHumidity className='' />
                                        <p className=''>HUMIDITY</p>
                                    </div>
                                    <h1 className='text-3xl'>82%</h1>
                                    <p className='text-xs text-stone-500'>The dew point is 25°C right now</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 gap-4 w-full'>
                        <div className='grid gap-4'>
                            <div className='p-4 rounded-xl bg-black'>
                                <div className='p-2 font-bold text-slate-500 flex items-center space-x-2 border-b-2 border-stone-600'>
                                    <LuClock3 /> <p>HOURLY FORECAST</p>
                                </div>
                                <div className='py-4 max-w-[46rem] overflow-auto flex items-center gap-4 text-white'>
                                    <div className='px-5 py-3 bg-slate-900 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Now</h2>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Now</h2>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Now</h2>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Now</h2>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Now</h2>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Now</h2>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Now</h2>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Now</h2>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Now</h2>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                </div>
                            </div>

                            <div className='p-4 rounded-xl bg-black'>
                                <div className='p-2 font-bold text-slate-500 flex items-center space-x-2 border-b-2 border-stone-600'>
                                    <CiCalendar /> <p>10-DAY FORECAST</p>
                                </div>
                                <div className='py-4 max-w-[46rem] overflow-auto flex items-center gap-4 text-white'>
                                    <div className='px-5 py-3 bg-slate-900 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Today</h2>
                                        <p className='text-xs text-slate-500'>16/09</p>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Thu</h2>
                                        <p className='text-xs text-slate-500'>17/09</p>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Thu</h2>
                                        <p className='text-xs text-slate-500'>17/09</p>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Thu</h2>
                                        <p className='text-xs text-slate-500'>17/09</p>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Thu</h2>
                                        <p className='text-xs text-slate-500'>17/09</p>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Thu</h2>
                                        <p className='text-xs text-slate-500'>17/09</p>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Thu</h2>
                                        <p className='text-xs text-slate-500'>17/09</p>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Thu</h2>
                                        <p className='text-xs text-slate-500'>17/09</p>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Thu</h2>
                                        <p className='text-xs text-slate-500'>17/09</p>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                    <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                        <h2 className='text-sm'>Thu</h2>
                                        <p className='text-xs text-slate-500'>17/09</p>
                                        <h1 className='text-xl font-medium'>28°C</h1>
                                        <IoRainy className='text-2xl mx-auto' />
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div className='p-4 space-y-2 bg-black text-white rounded-xl '>
                                    <div className=' font-bold text-slate-500 flex items-center space-x-2'>
                                        <CiTempHigh className='' />
                                        <p className=''>UV INDEX</p>
                                    </div>
                                    <div>
                                        <h1 className='text-3xl'>3</h1>
                                        <p className='font-medium'>Moderate</p>
                                    </div>
                                    <div className='relative w-full h-2 bg-red-500 rounded-full '>
                                        <div className='absolute h-3 w-2 rounded bg-orange-600 border border-white  -top-0.5 left-[50%]'></div>
                                    </div>
                                    <p className='text-xs text-stone-500'>use the sun protection until 16:00</p>

                                </div>
                                <div className='p-4 space-y-2 bg-black text-white rounded-xl'>
                                    <div className=' font-bold text-slate-500 flex items-center space-x-2'>
                                        <MdOutlineWindPower className='' />
                                        <p className=''>WIND</p>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='space-y-2'>
                                            <div className='py-2 flex flex-grow items-center space-x-2 border-b-2 border-slate-500'>
                                                <h1 className='text-3xl'>3</h1>
                                                <div className=''>
                                                    <h1 className='font-bold text-sm text-slate-500'>MPH</h1>
                                                    <p className='text-sm'>Wind</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-grow items-center space-x-2'>
                                                <h1 className='text-3xl'>9</h1>
                                                <div className=''>
                                                    <h1 className='font-bold text-sm text-slate-500'>MPH</h1>
                                                    <p className='text-sm'>Gusts</p>
                                                </div>
                                            </div>
                                        </div>
                                        <img className='mx-auto h-20' src={compass} alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather