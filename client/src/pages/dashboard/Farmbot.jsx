import Navbar from '@/components/dashboard/Navbar'
import React from 'react'

const Farmbot = () => {
    return (
        <div className='flex'>
            <Navbar />
            <div className='p-8 w-full'>
                <h1>Farmbot</h1>
            </div>
        </div>
    )
}

export default Farmbot