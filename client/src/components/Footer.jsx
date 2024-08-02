import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className=' text-white'>
      <div className='bg-stone-900 rounded-xl max-w-7xl mx-auto'>
        <div className=' px-12 py-20 '>
          <div className='flex justify-between'>
            <div className='flex space-x-16'>
              <div className='grid space-y-4'>
                <h1 className='text-xl'>Company</h1>
                <Link className='text-white/70'>About Agrobot</Link>
                <Link className='text-white/70'>Pricing</Link>
                <Link className='text-white/70'>Demo</Link>
              </div>

              <div className='grid space-y-4'>
                <h1 className='text-xl'>Resources</h1>
                <Link className='text-white/70'>Blog</Link>
                <Link className='text-white/70'>Services</Link>
                <Link className='text-white/70'>Tool Library</Link>
              </div>

              <div className='grid space-y-4'>
                <h1 className='text-xl'>Legal</h1>
                <Link className='text-white/70'>Terms of Use</Link>
                <Link className='text-white/70'>Privacy Policy</Link>
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