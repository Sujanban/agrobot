import Navbar from '@/components/dashboard/Navbar'
import React from 'react'

const Users = () => {
    return (
        <div className='flex max-w-7xl mx-auto'>
            <Navbar />
            <div className='p-8 w-full'>
                <h1>Users</h1>
            </div>
        </div>
    )
}

export default Users