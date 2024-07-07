import React from 'react'
import { Link } from 'react-router-dom'
import signupimg from '../assets/signup-image.png'

const Register = () => {
  return (
    <div className='h-screen'>
      <div className='grid grid-cols-3 h-full'>
        <div className=' flex flex-col gap-4 bg-slate-100 overflow-y-hidden'>
          <Link className='px-4 py-8 text-3xl grid font-bold'>Agrobot.</Link>
          <h1 className='px-4 py-2 text-3xl font-medium'>Hire internationally with complete confidence
          </h1>
          <p className='px-4 py-2 text-xl '>We'll handle your worldwide compliance, payroll, and benefits, so you can fast-track your international expansion.
          </p>
          <img className='w-full object-cover' src={signupimg} alt="" />

        </div>
        <div className='col-span-2 flex items-center justify-center'>
          <div className='px-8 max-w-md py-12 bg-white rounded-xl shadow-xl border'>
            <div className='flex justify-center flex-col'>
              <h1 className='text-2xl mx-auto font-bold flex border-b-2 border-stone-800'>Create an account</h1>
              <p className='py-4 text-sm text-center text-gray-500'>Sign up with your work Google account or use the form.</p>

            </div>
            <form className='grid gap-4'>
              <div>
                <input type="text" placeholder='Full Name'
                  className='w-full p-4 border border-gray-400 rounded-md text-sm' />
              </div>
              <div>
                <input type="text" placeholder='E-mail'
                  className='w-full p-4 border border-gray-400 rounded-md text-sm' />
              </div>
              <div>
                <input type="text" placeholder='Password'
                  className='w-full p-4 border border-gray-400 rounded-md text-sm' />
              </div>
              <div>
                <input type="text" placeholder='Confirm Password'
                  className='w-full p-4 border border-gray-400 rounded-md text-sm' />
              </div>
              <p className='text-xs text-gray-500'>By confirming your email, you agree to our Terms of Service and that you have read and understood our Privacy Policy.</p>
              <input type="submit" className='p-4 rounded-md bg-stone-900 hover:bg-stone-800 transition-all ease-in-out duration-200 cursor-pointer text-white' value={"Create Account"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register