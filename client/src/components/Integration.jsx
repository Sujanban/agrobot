import React from 'react'
import gemini from '../assets/gemini logo.png'
import google from '../assets/google logo.png'
import kaggle from '../assets/kaggle logo.png'
import openweather from '../assets/openweather logo.png'

const Integration = () => {
    return (
        <div className='px-4 py-8 bg-gray-200'>
            <div className='max-w-7xl m-auto flex items-center justify-center'>
                <div className='flex items-center space-x-12'>
                    <img className='p-4 h-20 grayscale' src={google} alt="" />
                    <img className='p-4 h-20 grayscale' src={openweather} alt="" />
                    <img className='p-4 h-20 grayscale' src={kaggle} alt="" />
                    <img className='relative -top-2 p-4 h-20 grayscale' src={gemini} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Integration