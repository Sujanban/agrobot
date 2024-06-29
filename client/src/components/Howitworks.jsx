import React from 'react'
import bot from '../assets/bot1.png'
import leaf from '../assets/leaf.png'
import weather from '../assets/weather.png'

const Howitworks = () => {
  return (
    <section className='bg-slate-200'>
      <div className='px-4 py-8 max-w-7xl mx-auto '>
        <h1 className='font-medium text-4xl capitalize max-w-md'>Using our service is <span className='text-green'>simple</span>, <span className='text-green'>quick</span> and <span className='text-green'>easy</span>.</h1>

        <div className='py-20 grid md:grid-cols-3 gap-4'>

          <div className='px-4 py-8 md:p-8 sm:p-12 mx-auto text-center max-w-md space-y-3 bg-white rounded-xl'>
            <h1 className='text-xl font-medium capitalize'>Quick Accessing a farm bot model</h1>
            <img className=' mx-auto' src={bot} alt="" />
            <p className='text-gray-500 text-sm '>You you can easily accerss the farm bot by signuping into the platform using your email and password. You can find the chat bot section under the navigation bar on the left. </p>
          </div>

          <div className='px-4 py-8 md:p-8 sm:p-12 mx-auto text-center max-w-md space-y-3 bg-white rounded-xl'>
            <h1 className='text-xl font-medium capitalize'>Using a leaf disease detection model</h1>
            <img className='mx-auto' src={leaf} alt="" />
            <p className='text-gray-500 text-sm '>You you can easily accerss the farm bot by signuping into the platform using your email and password. You can find the chat bot section under the navigation bar on the left. </p>
          </div>

          <div className='px-4 py-8 md:p-8 sm:p-12 mx-auto text-center max-w-md space-y-3 bg-white rounded-xl'>
            <h1 className='text-xl font-medium capitalize'>Getting to the Weather insight page</h1>
            <img className='mx-auto ' src={weather} alt="" />
            <p className='text-gray-500 text-sm '>You you can easily accerss the farm bot by signuping into the platform using your email and password. You can find the chat bot section under the navigation bar on the left. </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Howitworks