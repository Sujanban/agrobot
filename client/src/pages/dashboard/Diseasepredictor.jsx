import Navbar from '@/components/dashboard/Navbar'
import React from 'react'
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import fileupload from "../../assets/file-upload.gif"
import { GoPaperclip } from "react-icons/go";


const Diseasepredictor = () => {
    return (
        <div className='flex h-screen'>
            <Navbar />
            <div className='p-8 w-full space-y-4 h-full overflow-auto'>
                <div className='flex items-center justify-end space-x-2 text-blue-800'>
                    <AiTwotoneQuestionCircle color='blue' />
                    <Link to={'/'} className='text-sm'>Help & Feedback</Link>
                </div>
                <h1 className='font-semibold text-2xl'>Disease Predictor</h1>

                <div className=' w-full h-full flex items-center justify-center bg-string'>
                    <div className='p-4 max-w-lg rounded-xl shadow-xl border space-y-2'>
                        {/* <img className='w-20 mx-auto' src={fileupload} alt="" /> */}
                        <h1 className='font-medium text-xl text-center'>Upload an Image</h1>
                        <p className='text-sm text-stone-500 text-center'>For best results, images should be atleast 1280x720 px in jpg, png or jpeg format</p>
                        <div className='p-4  rounded-xl shadow '>
                            <img className='mx-auto' src={fileupload} alt="" />
                            <div className='px-4 py-2 flex items-center justify-center space-x-4 border-dotted border-2 border-stone-400 rounded-xl'>
                                <GoPaperclip />
                                <p className='text-sm text-stone-500'>Drag and drop or click to upload</p>
                            </div>
                            <p></p>
                        </div>

                        <button className='my-8 bg-stone-900 w-full text-sm text-white px-4 py-2 rounded-md'>Predict</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diseasepredictor