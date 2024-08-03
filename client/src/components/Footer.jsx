import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className=' text-white'>
      <div className='bg-stone-900 rounded-xl max-w-7xl mx-auto'>
        <div className=' px-12 py-20 '>
          <div className='flex justify-between'>
            <div className='flex space-x-16'>
              <div className='flex flex-col space-y-4'>
                <h1 className='text-xl font-semibold'>Company</h1>
                <Link className='text-white/70 text-sm'>About Agrobot</Link>
                <Link className='text-white/70 text-sm'>Pricing</Link>
                <Link className='text-white/70 text-sm'>Demo</Link>
              </div>

              <div className='flex flex-col space-y-4'>
                <h1 className='text-xl  font-semibold'>Resources</h1>
                <Link className='text-white/70 text-sm'>Blog</Link>
                <Link className='text-white/70 text-sm'>Services</Link>
                <Link className='text-white/70 text-sm'>Tool Library</Link>
              </div>

              <div className='flex flex-col space-y-4'>
                <h1 className='text-xl font-semibold'>Legal</h1>
                <Link className='text-white/70 text-sm'>Terms of Use</Link>
                <Link className='text-white/70 text-sm'>Privacy Policy</Link>
              </div>
            </div>
            <div className='max-w-xl space-y-4'>
              <Link className='text-4xl font-semibold'>Agrobot</Link>
              <p className='text-white/70'>We are the forefront of Smart AI development, revolutingly the way farmers and business grow their crops more effectively.</p>
            </div>
          </div>
        </div>
        <div className='px-12 '>
          <div className='text-sm flex items-center py-8 border-t-2 border-stone-600 text-white/70 space-x-2'>
            <div className='space-x-2'>
              <Link className='px-4 py-2 border rounded-full'>Instagram</Link>
              <Link className='px-4 py-2 border rounded-full'>Linkedin</Link>
              <Link className='px-4 py-2 border rounded-full'>Twitter</Link>
              <Link className='px-4 py-2 border rounded-full'>Github</Link>
            </div>
            <div className='grow border text-center rounded-full px-4 py-2 '>
              <Link className=''>Agrobot. All Rights Reserved.</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer