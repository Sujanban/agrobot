import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signupimg from '../assets/signup-image.png'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '@/app/feature/userSlice';

const Register = () => {
  const { error } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    {
      username: '',
      email: '',
      password: '',
      cpassword: ''
    }
  );

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(addUser(formData)).then((res) => {
      if (res.payload.message) navigate('/login');
    })
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className='h-screen'>
      <div className='grid grid-cols-3 h-full'>
        <div className=' flex flex-col gap-4 bg-slate-100 overflow-y-hidden'>
          <Link to={"/"} className='px-4 py-8 text-3xl grid font-bold'>Agrobot.</Link>
          <h1 className='px-4 py-2 text-3xl font-medium'>
            We make farming easy
          </h1>
          <p className='px-4 py-2 text-xl '>We'll handle your worldwide compliance, payroll, and benefits, so you can fast-track your international expansion.
          </p>
          <img className='w-full object-cover' src={signupimg} alt="" />
        </div>
        <div className='px-20 relative bg-stone-200 col-span-2 flex items-center'>
          <div className='px-8 max-w-md py-12 '>
            <div className='flex justify-center flex-col'>
              <h1 className='text-2xl mx-auto font-bold flex border-b-2 border-stone-800'>Create an account</h1>
              <p className='py-4 text-sm text-center text-gray-500'>Sign up with your work Google account or use the form.</p>

            </div>
            <form className='grid gap-4'>
              <div>
                <input
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })} type="text" placeholder='Username'
                  className='w-full px-4 py-3 border border-gray-400 rounded-md text-sm' />
              </div>
              <div>
                <input
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  type="text" placeholder='E-mail'
                  className='w-full px-4 py-3 border border-gray-400 rounded-md text-sm' />
              </div>
              <div className='relative'>
                <input
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  type="text" placeholder='Password'
                  className='w-full px-4 py-3 border border-gray-400 rounded-md text-sm' />
                {
                  showPassword ?
                    <FaRegEye onClick={() => setShowPassword(!showPassword)} className='absolute top-[50%] -translate-y-[50%] right-3 cursor-pointer text-stone-900' /> :
                    <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} className='absolute top-[50%] -translate-y-[50%] right-3 cursor-pointer text-stone-900' />
                }
              </div>
              <div className='relative'>
                <input
                  onChange={(e) => setFormData({ ...formData, cpassword: e.target.value })}
                  type="text" placeholder='Confirm Password'
                  className='w-full px-4 py-3 border border-gray-400 rounded-md text-sm' />
                {
                  showConfirmPassword ?
                    <FaRegEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute top-[50%] -translate-y-[50%] right-3 cursor-pointer text-stone-900' /> :
                    <FaRegEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute top-[50%] -translate-y-[50%] right-3 cursor-pointer text-stone-900' />
                }
              </div>
              <p className='text-xs text-gray-500'>By confirming your email, you agree to our Terms of Service and that you have read and understood our Privacy Policy.</p>
              <input onClick={handleRegister} type="submit" className='px-4 py-3 rounded-md bg-stone-900 hover:bg-stone-800 transition-all ease-in-out duration-200 cursor-pointer text-white' value={"Create Account"} />
            </form>
          </div>
          <div className='absolute top-8 right-8 text-sm flex items-center space-x-4'>
            <p>Already have an account?</p>
            <Link className=' rounded-md px-4 py-2 ring-1 ring-stone-500 hover:bg-stone-900 hover:text-white transition-all duration-200 ease-in-out' to={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register