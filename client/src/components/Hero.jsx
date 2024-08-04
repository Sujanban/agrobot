import React from 'react'
import { BsLightningCharge } from 'react-icons/bs'

const Hero = () => {
    return (
        <section className='bg-slate-100'>
            <div className='px-4 py-8 max-w-7xl mx-auto space-y-8'>
                {/* <div className='md:grid md:grid-cols-4'>
                    <div className='hidden md:block relative'>
                        <img className='rounded-xl' src="https://images.unsplash.com/photo-1549024449-d6968d2a435f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <FaRobot className='absolute p-2 rounded bottom-0 right-0 bg-white text-green  text-4xl ' />
                    </div>
                    <div className='px-4 text-center m-auto col-span-2'>
                        <h1 className='py-12 md:py-0 text-xl md:text-2xl uppercase'>
                            <BsLightningCharge className='p-1 mr-2 ring-1 ring-green rounded-full text-green inline-flex' />
                            Solving the problem of tomorrow with the smart solution. <br /> AI to your fingertips.
                            <BsLightningCharge className='p-1 ml-2 ring-1 ring-green rounded-full text-green inline-flex' />
                        </h1>
                    </div>
                    <div className=' m-auto grid md:block md:space-y-2 grid-cols-2 gap-4 '>
                        <div className='p-2 rounded-md bg-emerald-600 text-white'>
                            <p>100+ <br /> Disease Detection</p>
                        </div>
                        <div className='p-2 rounded-md bg-emerald-600 text-white'>
                            <p>12K + <br /> Happy Users</p>
                        </div>
                    </div>
                </div> */}

                {/* <h1 className='hidden md:block py-2 text-3xl md:text-5xl lg:text-7xl font-medium text-center tracking-widest'>AGROBOT</h1>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='space-y-2'>
                        <li className='bg-slate-100 p-2 rounded-xl list-none'>1. Easy and Fast Process.</li>
                        <li className='bg-slate-100 p-2 rounded-xl list-none'>2. 100% Accuracy.</li>
                        <li className='bg-slate-100 p-2 rounded-xl list-none'>3. 100% Confidentiality.</li>
                        <p className='pt-8 text-slate-500 underline text-sm'>We test plant with 99.99% accuracy with well tested dataset and AI models.</p>
                    </div>
                    <div className='m-auto'>
                        <img className='rounded-xl' src="https://plus.unsplash.com/premium_photo-1667509347081-a9db0567ed83?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='hidden md:block bg-slate-100 p-2 rounded-xl'>
                        <h1 className='font-medium'>Accuracy Meter</h1>
                        <p className='py-2 text-slate-500 text-xs'>Healing your plants with great accuracy.</p>
                        <img className='h-36 m-auto' src={speedometer} alt="" />
                    </div>
                </div> */}



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
                                {/* <div className='py-4 space-y-2'>
                                    <li className='bg-slate-100 p-2 rounded-xl list-none'>1. Easy and Fast Process.</li>
                                    <li className='bg-slate-100 p-2 rounded-xl list-none'>2. 100% Accuracy.</li>
                                    <li className='bg-slate-100 p-2 rounded-xl list-none'>3. 100% Confidentiality.</li>
                                    <p className='pt-8 text-slate-500 underline text-sm'>We test plant with 99.99% accuracy with well tested dataset and AI models.</p>
                                </div> */}
                            </div>
                            <img className='rounded-xl' src="https://plus.unsplash.com/premium_photo-1664475320136-53a63b21612a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                        <div className='py-4'>
                            <div className='p-4 border-b-2 grid grid-cols-3 gap-4'>
                                <h1 className=' flex items-center space-x-4'>
                                    <span className='h-6 w-6 flex items-center justify-center p-1 border rounded-full ring-slate-900 ring-1'>1 </span>
                                    <span className='font-medium'>Easy and Fast Process</span>
                                </h1>
                                <p className='col-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus optio culpa reiciendis ab dolorum repellat eveniet aliquam inventore eaque nostrum.</p>
                            </div>
                            <div className='p-4 border-b-2 grid grid-cols-3 gap-4'>
                                <h1 className=' flex items-center space-x-4'>
                                    <span className='h-6 w-6 flex items-center justify-center p-1 border rounded-full ring-slate-900 ring-1'>2 </span>
                                    <span className='font-medium'>100% Accuracy</span>
                                </h1>
                                <p className='col-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus optio culpa reiciendis ab dolorum repellat eveniet aliquam inventore eaque nostrum.</p>
                            </div>
                            <div className='p-4 border-b-2 grid grid-cols-3 gap-4'>
                                <h1 className=' flex items-center space-x-4'>
                                    <span className='h-6 w-6 flex items-center justify-center p-1 border rounded-full ring-slate-900 ring-1'>3 </span>
                                    <span className='font-medium'>100% Confidentiality</span>
                                </h1>
                                <p className='col-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus optio culpa reiciendis ab dolorum repellat eveniet aliquam inventore eaque nostrum.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero