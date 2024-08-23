import Navbar from '@/components/dashboard/Navbar'
import React, { useState } from 'react'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    return (
        <div className='flex max-w-7xl mx-auto'>
            <Navbar />
            <div className='p-8 w-full'>
                <h1 className='font-medium text-2xl'>Testimonials</h1>
                <div>
                    {
                        reviews && reviews.map((review, index) =>
                            <>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Testimonials