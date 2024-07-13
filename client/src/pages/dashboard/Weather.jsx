import Navbar from '@/components/dashboard/Navbar'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiTempHigh, CiDroplet } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { LuClock3 } from "react-icons/lu";
import { IoRainy } from "react-icons/io5";


const Weather = () => {
    return (
        <div className='flex'>
            <Navbar />
            <div className='p-8 w-full space-y-4'>
                <h1 className='font-medium text-4xl'>Weather</h1>

                <div className='grid grid-cols-3 gap-4'>
                    <div className=' space-y-4 bg-slate-200'>
                        <div className='flex items-center gap-2 rounded-full shadow border'>
                            <IoLocationOutline className='text-5xl pl-4 py-2' />
                            <input className='p-3 w-full text-sm rounded-full outline-none' type="search" placeholder='Kathmandu, Nepal' />
                        </div>

                        <div className='today-weather p-4 rounded-xl space-y-4'>
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
                    <div className='col-span-2 gap-4 bg-slate-200 w-full'>
                        <div className='p-4 rounded-xl bg-black'>
                            <div className='p-2 font-bold text-slate-500 flex items-center space-x-2 border-b-2 border-stone-600'>
                                <LuClock3 /> <p>HOURLY FORECAST</p>
                            </div>
                            <div className='py-4 max-w-3xl overflow-auto flex items-center gap-4 text-white'>
                                <div className='px-5 py-3 bg-slate-900 grid gap-2 text-center rounded-md'>
                                    <h2 className='text-sm'>Now</h2>
                                    <h1 className='text-xl font-medium'>28°C</h1>
                                    <IoRainy className='text-2xl mx-auto'/>
                                </div>
                                <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                    <h2 className='text-sm'>Now</h2>
                                    <h1 className='text-xl font-medium'>28°C</h1>
                                    <IoRainy className='text-2xl mx-auto'/>
                                </div>
                                <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                    <h2 className='text-sm'>Now</h2>
                                    <h1 className='text-xl font-medium'>28°C</h1>
                                    <IoRainy className='text-2xl mx-auto'/>
                                </div>
                                <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                    <h2 className='text-sm'>Now</h2>
                                    <h1 className='text-xl font-medium'>28°C</h1>
                                    <IoRainy className='text-2xl mx-auto'/>
                                </div>
                                <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                    <h2 className='text-sm'>Now</h2>
                                    <h1 className='text-xl font-medium'>28°C</h1>
                                    <IoRainy className='text-2xl mx-auto'/>
                                </div>
                                <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                    <h2 className='text-sm'>Now</h2>
                                    <h1 className='text-xl font-medium'>28°C</h1>
                                    <IoRainy className='text-2xl mx-auto'/>
                                </div>
                                <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                    <h2 className='text-sm'>Now</h2>
                                    <h1 className='text-xl font-medium'>28°C</h1>
                                    <IoRainy className='text-2xl mx-auto'/>
                                </div>
                                <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                    <h2 className='text-sm'>Now</h2>
                                    <h1 className='text-xl font-medium'>28°C</h1>
                                    <IoRainy className='text-2xl mx-auto'/>
                                </div>
                                <div className='px-5 py-3 bg-slate-900000 grid gap-2 text-center rounded-md'>
                                    <h2 className='text-sm'>Now</h2>
                                    <h1 className='text-xl font-medium'>28°C</h1>
                                    <IoRainy className='text-2xl mx-auto'/>
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