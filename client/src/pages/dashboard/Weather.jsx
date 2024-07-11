import Navbar from '@/components/dashboard/Navbar'
import React from 'react'

const Weather = () => {
    return (
        <div className='flex'>
            <Navbar />
            <div className='p-8 w-full'>
                <h1>Weather</h1>
            </div>
        </div>
    )
}

export default Weather