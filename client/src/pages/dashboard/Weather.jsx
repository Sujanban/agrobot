import Navbar from '@/components/dashboard/Navbar'
import React, { useState, useEffect } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiTempHigh } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { LuClock3 } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineWindPower } from "react-icons/md";
import compass from "../../assets/compass.png"
import { FaWind } from "react-icons/fa";


const Weather = () => {
    const [city, setCity] = useState("kathmandu");
    const [Weather, setWeather] = useState({});
    const fetchWeather = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?&units=metric&q=` + city + `&appid=6e93b3d15872f914c6929fed9ea71e9a`);
            const data = await response.json();

            const response3 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=` + data?.coord?.lat + `&lon=` + data?.coord?.lon + `&units=metric&appid=6e93b3d15872f914c6929fed9ea71e9a`);
            const data3 = await response3.json();
            setWeather(data3);
            console.log(data3);
        } catch (err) {
            console.log(err)
        }
    }
    const handleSearch = async (e) => {
        e.preventDefault();
        fetchWeather();

    }

    useEffect(() => {
        fetchWeather();
    }, [])


    return (
        <div className='flex max-w-7xl mx-auto'>
            <Navbar />
            <div className='h-screen overflow-auto p-8 w-full space-y-4'>
                <h1 className='font-semibold text-2xl'>Weather</h1>
                <div className='flessx grid grid-cols-3 gap-4'>
                    <div className='flex-grow space-y-4 bg-blasck rounded-xl border shadow'>
                        <form onSubmit={handleSearch} className='m-1 shadow border flex items-center gap-2 rounded-full bg-white'>
                            <IoLocationOutline className='text-5xl pl-4 py-2' />
                            <input onChange={(e) => setCity(e.target.value)} className='p-3 w-full text-sm rounded-full outline-none' type="search" placeholder='Kathmandu, Nepal' />
                        </form>
                        <div className='today-weather bg-blsack text-whiste p-4 rounded-xl space-y-4'>
                            <div className='py-8 text-center space-y-2'>
                                <h1 className='text-5xl font-semibold'>{Weather?.current?.temp}°C</h1>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>

                                <div className='p-2 space-y-2 border shadow rounded-xl'>
                                    <div className='font-bold flex items-center gap-1'>
                                        <CiTempHigh className='' />
                                        <p className='text-sm'>FEELS LIKE</p>
                                    </div>
                                    <h1 className='text-3xl'>{Weather?.current?.feels_like}</h1>
                                    <p className='text-xs text-stone-500'>°C</p>
                                </div>
                                <div className='p-2 space-y-2 border shadow rounded-xl'>
                                    <div className='font-bold flex items-center gap-1'>
                                        <FaWind className='' />
                                        <p className='text-sm'>WIND</p>
                                    </div>
                                    <div>
                                        <h1 className='text-3xl'>{Weather?.current?.wind_speed}</h1>
                                    </div>
                                    <p className='text-xs text-stone-500'>km/h</p>
                                </div>
                                <div className='p-2 space-y-2 border shadow rounded-xl'>
                                    <div className='font-bold flex items-center gap-1'>
                                        <IoEyeOutline className='' />
                                        <p className='text-sm'>VISIBILITY</p>
                                    </div>
                                    <h1 className='text-3xl'>{Weather?.current?.visibility} </h1>
                                    <p className='text-xs text-stone-500'>meter</p>

                                </div>
                                <div className='p-2 space-y-2 border shadow rounded-xl'>
                                    <div className='font-bold flex items-center gap-1'>
                                        <WiHumidity className='' />
                                        <p className='text-sm'>HUMIDITY</p>
                                    </div>
                                    <h1 className='text-3xl'>{Weather?.current?.humidity}</h1>
                                    <p className='text-xs text-stone-500'>%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 gap-4 w-full'>
                        <div className='grid gap-4'>
                            <div className='p-4 rounded-xl bg-bddlack border shadow'>
                                <div className='p-2 font-bold text-slate-500 flex items-center space-x-2 border-b-2 border-stone-600'>
                                    <LuClock3 /> <p>24 HOUR FORECAST</p>
                                </div>
                                <div className='py-4 max-w-xl overflow-auto flex items-center gap-2 text-whddite'>
                                    {
                                        Weather?.hourly?.slice(0, 24)?.map((item, index) => (
                                            <div className=' px-5 py-3 grid gap-2 text-center rounded-md' key={index}>
                                                <h2 className='text-sm'>{new Date(item?.dt * 1000).toLocaleTimeString()}</h2>
                                                <h1 className='text-xl font-medium'>{Math.floor(item?.temp)}°C</h1>
                                                <img src={`http://openweathermap.org/img/w/` + item?.weather[0]?.icon + `.png`} alt="" />
                                                <p className='text-[10px]'>{item?.weather[0]?.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='p-4 rounded-xl bg-blacddk border shadow'>
                                <div className='p-2 font-bold text-slate-500 flex items-center space-x-2 border-b-2 border-stone-600'>
                                    <CiCalendar /> <p>1 WEEK FORECAST</p>
                                </div>
                                <div className='py-4 max-w-xl overflow-auto flex items-center gap-4 text-whddite'>
                                    {
                                        Weather?.daily?.map((item, index) => (
                                            <div className='px-6 py-3 grid gap-2 text-center rounded-md' key={index}>
                                                <p className='text-xs text-slate-500'>{new Date(item?.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</p>
                                                <h1 className='text-xl font-medium'>{Math.floor(item?.temp?.day)}°C</h1>
                                                <img src={`http://openweathermap.org/img/w/` + item?.weather[0]?.icon + `.png`} alt="" />
                                                <p className='text-[10px]'>{item?.weather[0]?.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='p-4 space-y-2 bg-blfffack text-wfffhite rounded-xl border shadow'>
                                    <div className=' font-bold text-slate-500 flex items-center space-x-2'>
                                        <CiTempHigh className='' />
                                        <p className=''>UV INDEX</p>
                                    </div>
                                    <div>
                                        <h1 className='text-3xl'>3</h1>
                                        <p className='font-medium'>Moderate</p>
                                    </div>
                                    <div className='relative w-full h-2 bg-red-500 rounded-full '>
                                        <div className='absolute h-3 w-2 bg-orange-500  -top-0.5 left-[50%]'></div>
                                    </div>
                                    <p className='text-xs text-stone-500'>use the sun protection until 16:00</p>

                                </div>
                                <div className='p-4 space-y-2 bg-bffflack text-whdfdfite rounded-xl border shadow'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather