import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className='relative'>
      <div className='hidden md:block left-0 -top-[20%] absolute w-1/2 rounded-r-full h-32  p-4 bg-white'></div>
      <div className='hidden md:block right-0 -top-[20%] absolute w-1/2 rounded-l-full h-32  p-4 bg-white'></div>
      <div className='px-4  max-w-7xl mx-auto'>
        <div className='py-20 flex justify-between flex-wrap gap-4'>
          <div className='space-y-4'>
            <Link className='bg-green px-4 py-2 rounded-full text-white' to='/'>Agrobot</Link>
            <p className='text-sm max-w-sm '>Join us to improve the way you farm. </p>
          </div>
          <div className='space-y-2'>
            <h1 className='font-medium text-lg'>Quick Navigation</h1>
            <ul className='text-gray-500 grid grid-cols-2 gap-4'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/howitworks'>How it works</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </div>
          <div className='flex space-x-2'>
            <Link><FaFacebookF className="p-1 rounded-full shadow" size={25} /></Link>
            <Link><FaTwitter className="p-1 rounded-full shadow" size={25} /></Link>
            <Link><FaInstagram className="p-1 rounded-full shadow" size={25} /></Link>
            <Link><FaLinkedinIn className="p-1 rounded-full shadow" size={25} /></Link>
            <Link><FaYoutube className="p-1 rounded-full shadow" size={25} /></Link>
          </div>
        </div>
        <div className='text-sm border-t py-4 flex justify-between items-center flex-wrap'>
          <h1>Copyright © 2022 Agrobot</h1>
          <div className='flex items-center space-x-4 flex-wrap'>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
            <Link>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer