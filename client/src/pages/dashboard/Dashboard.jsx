import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Navbar from '@/components/dashboard/Navbar';
import Card from '../../components/dashboard/Card';

const Dashboard = () => {
    return (
        <div className='flex max-w-7xl mx-auto'>
            <Navbar />
            <div className='h-screen overflow-auto p-8 w-full space-y-4'>
                <h1 className='font-semibold text-3xl'>Good Morning, Sujan Ban</h1>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div className='grid col-span-2 gap-4'>
                        <Card
                            title={'Farm Bot'}
                            descriprtion={'Get answers to your questions using our chatbot. You can access it by clicking the chatbot button on the navigation bar.'}
                            path={'/farmbot'}
                            anchor={'visit'}
                        />

                        <Card
                            title={'Weather'}
                            descriprtion={'Get answers to your questions using our chatbot. You can access it by clicking the chatbot button on the navigation bar.'}
                            path={'/weather'}
                            anchor={'visit'}
                        />
                    </div>
                    <div>
                        <div className='p-4 border shadow rounded-xl space-y-2 bg-white'>
                            <h1 className='text-xl font-semibold'>Disease Predictor</h1>
                            <p className='text-gray-500 text-sm'>Get answers to your questions using our chatbot. You can access it by clicking the chatbot button on the navigation bar.</p>
                            <Link className='flex items-center justify-center space-x-2 px-4 py-4 bg-stone-900 rounded-xl text-sm text-white'
                                to={'/diseasepredictor'}>Visit<LuChevronRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard