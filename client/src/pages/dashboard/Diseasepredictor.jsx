import Navbar from '@/components/dashboard/Navbar'
import React from 'react'
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import fileupload from "../../assets/file-upload.gif"
import { GoPaperclip } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";
import { PiMagicWandLight } from "react-icons/pi";


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
                    <div className='px-4 py-8 max-w-md rounded-xl shadow-xl border space-y-2'>
                        {/* <img className='w-20 mx-auto' src={fileupload} alt="" /> */}
                        <h1 className='font-medium text-xl text-center'>Upload an Image</h1>
                        <p className='text-sm text-gray-500 text-center'>For best results, images should be atleast 1280x720 px in jpg, png or jpeg format</p>
                        <div className='py-8 border-2 border-[#5E82FE] p-4 text-center rounded-xl shadow space-y-2'>
                            <CiImageOn className='mx-auto text-5xl p-2 rounded-full bg-slate-100 shadow border' />
                            <h2 className='font-medium '>Drag and Drop image files to upload</h2>
                            <p className='text-sm text-gray-500'>Your images will be private and only visible to you</p>
                            <button className='text-sm shadow px-4 py-2 border rounded'>Select files</button>
                        </div>
                        <div className='flex  justify-end'>
                            <button className=' flex items-center space-x-2 bg-stone-900  text-sm text-white px-4 py-2 rounded-md'><PiMagicWandLight /><span>Predict</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diseasepredictor