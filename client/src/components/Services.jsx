import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from "react-icons/bs";
import rain from '../assets/rain.png'
import chat from '../assets/chat.png'
import plant from '../assets/plant.png'



const Services = () => {
    return (
        <div id='services' className='bg-slate-100'>
            <div className='px-4 py-20 max-w-7xl w-full mx-auto'>
                <div className='flex space-x-12'>
                    <div>
                        <span className='p-4 font-bold bg-green-300 uppercase  max-w-md'>Our Services</span>
                        <p className='py-4 text-3xl font-medium leading-normal'>We provide a variety of services to help you get started. </p>
                    </div>
                    <div className='p-8 max-w-2xl block bg-slate-200'>
                        <p>we offer services that can help you improve yours crops yeild. We are the forefront of Smart AI development, revolutingly the way farmers and business grow their crops more effectively.</p>
                    </div>
                </div>


                <div className='py-12 space-y-4'>
                    <div
                        className='group relative hover:italic bg-green-100 cursor-pointer hover:bg-custom-green  transition-all duration-100 ease-in-out border-b-2 border-stone-500'>
                        <Link to='/weather'
                            className='hover:translate-x-12 transition-all duration-100 ease-in-out p-12 flex items-center justify-between'>
                            <h1 className='text-5xl font-medium'>Weather Forecast</h1>
                            <BsArrowRightCircle size={40} className='text-slate-800' />
                        </Link>
                        <img className='absolute z-50 -top-[70px] right-[80px] h-60 hidden group-hover:block rounded-xl grayscale' src={rain} alt="" />
                    </div>
                    <div
                        className='group relative hover:italic bg-green-200 cursor-pointer hover:bg-custom-green  transition-all duration-100 ease-in-out border-b-2 border-stone-500'>
                        <Link to='/farmbot'
                            className='hover:translate-x-12 transition-all duration-100 ease-in-out p-12 flex items-center justify-between'>
                            <h1 className='text-5xl font-medium'>Farming Chatbot</h1>
                            <BsArrowRightCircle size={40} className='text-slate-800' />
                        </Link>
                        <img className='absolute z-50 -top-[70px] right-[80px] h-60 hidden group-hover:block rounded-xl grayscale' src={chat} alt="" />

                    </div>
                    <div
                        className='group relative hover:italic bg-green-300 cursor-pointer hover:bg-custom-green  transition-all duration-100 ease-in-out border-b-2 border-stone-500'>
                        <Link to='/diseasepredictor'
                            className='hover:translate-x-12 transition-all duration-100 ease-in-out p-12 flex items-center justify-between'>
                            <h1 className='text-5xl font-medium'>Plant Disease Detection</h1>
                            <BsArrowRightCircle size={40} className='text-slate-800' />
                        </Link>
                        <img className='absolute -top-[70px] right-[80px] h-60 hidden group-hover:block rounded-xl grayscale' src={plant} alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services