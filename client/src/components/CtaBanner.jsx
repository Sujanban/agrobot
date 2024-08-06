import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const CtaBanner = () => {
    return (
        <section id='contact' className='py-20'>
            <div className='banner p-20 max-w-7xl mx-auto '>
                <h1 className='text-5xl max-w-4xl leading-normal font-medium'>Take control of your productivity with a Gemeni 4.0 chatbot now</h1>
                <div className='flex items-center justify-between'>
                    <p>Transform your farming experience with our AI and Deep Learning powered chatbot. Try it free now.</p>
                    <Link className='space-x-2 px-8 py-4 bg-stone-900 rounded-full text-white' to='/register'><span>Start for free</span>
                        <MdArrowOutward className='inline-flex' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CtaBanner