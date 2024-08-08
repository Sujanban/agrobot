import React from 'react'
import { BsLightningCharge } from 'react-icons/bs'

const Hero = () => {
    return (
        <section className='bg-slate-100'>
            <div className='px-4 py-8 max-w-7xl mx-auto space-y-8'>
                <div className='grid grid-cols-3 gap-4'>
                    <img className='rounded-xl' src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className='col-span-2'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className=''>
                                <h1 className=' text-xl flerx'>
                                    <BsLightningCharge className='p-1 mr-2 ring-1 ring-green rounded-full text-green inline-flex' />
                                    Solving the problem of tomorrow with the smart solution. AI to your fingertips.
                                    <BsLightningCharge className='p-1 ml-2 ring-1 ring-green rounded-full text-green inline-flex' />
                                </h1>
                                <div className='relative  flex items-center justify-center'>
                                    <div className=' my-4 rounded-xl p-4 bg-custom-green w-60'>
                                        <h1 className='font-medium text-xl'>Farming made smart</h1>
                                        <p className='py-2 text-sm'>we link your farming with the growwing technology to change the way you farm</p>
                                    </div>
                                    <div className='text-white absolute top-0 -left-[30%] w-40 my-4 rounded-xl p-4 backdrop-blur-sm bg-white/20 shadow border border-white/20'>
                                        <h1 className='font-medium text-4xl'>40+</h1>
                                        <p className='py-2 text-sm text-custom-green'>Different disease identification</p>
                                    </div>
                                </div>
                            </div>
                            <img className='rounded-xl' src="https://plus.unsplash.com/premium_photo-1664475320136-53a63b21612a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='py-4'>
                            <div className='p-4 border-b-2 grid grid-cols-3 gap-4'>
                                <h1 className=' flex items-center space-x-4'>
                                    <span className='h-6 w-6 flex items-center justify-center p-1 border rounded-full ring-slate-900 ring-1'>1 </span>
                                    <span className='font-medium'>Easy and Fast Process</span>
                                </h1>
                                <p className='col-span-2'>Just signup and use our services. no need to wait for hours just to get started.</p>
                            </div>
                            <div className='p-4 border-b-2 grid grid-cols-3 gap-4'>
                                <h1 className=' flex items-center space-x-4'>
                                    <span className='h-6 w-6 flex items-center justify-center p-1 border rounded-full ring-slate-900 ring-1'>2 </span>
                                    <span className='font-medium'>100% Accuracy</span>
                                </h1>
                                <p className='col-span-2'>
                                    We test plant with 99.99% accuracy with well tested dataset and AI models.
                                </p>
                            </div>
                            <div className='p-4 border-b-2 grid grid-cols-3 gap-4'>
                                <h1 className=' flex items-center space-x-4'>
                                    <span className='h-6 w-6 flex items-center justify-center p-1 border rounded-full ring-slate-900 ring-1'>3 </span>
                                    <span className='font-medium'>100% Confidentiality</span>
                                </h1>
                                <p className='col-span-2'>Your data is safe to us and we insure safe storage of your data through encription mechanisms. Say no to data leaks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero