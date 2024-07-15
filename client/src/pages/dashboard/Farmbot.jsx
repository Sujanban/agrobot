import Navbar from '@/components/dashboard/Navbar'
import React from 'react'
import { IoPaperPlaneOutline } from "react-icons/io5";
import { LuPenSquare } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { AiTwotoneQuestionCircle } from "react-icons/ai";

const Farmbot = () => {
    return (
        <div className='flex'>
            <Navbar />
            <div className='p-8 w-full h-screen space-y-4'>
                <div className='flex items-center justify-end space-x-2 text-blue-800'>
                    <AiTwotoneQuestionCircle color='blue' />
                    <Link to={'/'} className='text-sm'>Help & Feedback</Link>
                </div>
                {/* <div className='px-4 py-1 flex items-center justify-between bg-stone-200 rounded-md'>
                    <h1 className='p-4 font-medium'>Start Chat</h1>
                    <Link className='flex items-center space-x-2 px-8 py-4 bg-stone-900 rounded-md text-sm text-white'><LuPenSquare /><p>create</p></Link>
                </div> */}
                <h1 className='font-semibold text-2xl'>Farmbot</h1>
                <p className='text-sm text-stone-500'>Ask the chatbot with your queries related to farming and agriculture.</p>
                <div className='p-4 overflow-auto h-2/3 space-y-4 bordder shaddow rounded-xl'>

                    <div className='py-2 flex space-x-4'>
                        <h1 className='h-10 w-10 flex items-center justify-center shrink-0 text-white  rounded-full bg-stone-800'>S</h1>
                        <div className='space-y-2'>
                            <h1 className='font-semibold'>You</h1>
                            <p className='p-2 bg-stone-900 text-white rounded-r-xl rounded-b-xl text-sm'>
                                Hi
                            </p>
                        </div>
                    </div>


                    <div className='py-2 flex space-x-4 justify-end'>
                        <div className='space-y-2'>
                            <h1 className='font-semibold text-right'>Agrobot</h1>
                            <p className='p-2 bg-stone-200 text-black rounded-l-xl rounded-b-xl text-sm'>
                                Hello! How can I assist you today?
                            </p>
                        </div>
                        <h1 className='h-10 w-10 flex items-center justify-center shrink-0 text-white  rounded-full bg-emerald-700'>A</h1>
                    </div>



                    <div className='py-2 flex space-x-4'>
                        <h1 className='h-10 w-10 flex items-center justify-center shrink-0 text-white  rounded-full bg-stone-800'>S</h1>
                        <div className='space-y-2'>
                            <h1 className='font-semibold'>You</h1>
                            <p className='p-2 bg-stone-900 text-white rounded-r-xl rounded-b-xl text-sm'>
                                what is farming
                            </p>
                        </div>
                    </div>

                    <div className='py-2 flex space-x-4 justify-end'>
                        <div className='space-y-2'>
                            <h1 className='font-semibold text-right'>Agrobot</h1>
                            <p className='p-2 bg-stone-200 text-black rounded-l-xl rounded-b-xl text-sm'>
                                Farming is the practice of cultivating land, growing crops, and raising animals for food, fiber, medicinal plants, and other products used to sustain and enhance human life.

                                Crop Production: This includes planting, growing, and harvesting crops such as grains, fruits, vegetables, and legumes. Farmers use techniques like plowing, sowing, irrigating, and applying fertilizers and pesticides to ensure healthy and abundant crops.


                            </p>
                        </div>
                        <h1 className='h-10 w-10 flex items-center justify-center shrink-0 text-white  rounded-full bg-emerald-700'>A</h1>
                    </div>



                </div>
                <form className='flex items-center gap-1'>
                    <input className='w-full px-4 py-3 border border-stone-900 rounded-md text-sm' type="text" placeholder='Ask something...' />
                    <button className='text-xl text-white bg-stone-900 p-3 rounded-md'><IoPaperPlaneOutline /></button>
                </form>
            </div>
        </div>
    )
}

export default Farmbot