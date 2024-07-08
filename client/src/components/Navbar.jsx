import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoHomeOutline, IoChatboxOutline } from "react-icons/io5";
import { TbHotelService } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa6";
import { SiAboutdotme } from "react-icons/si";


const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  const menuItems = [
    {
      id: 1,
      name: 'Home',
      icon: <IoHomeOutline />,
      path: '/'
    },
    {
      id: 2,
      name: 'Services',
      icon: <TbHotelService />,
      path: '/services'
    },
    {
      id: 3,
      name: 'How it Works',
      icon: <FaQuestion />,
      path: '/howitworks'
    },
    {
      id: 4,
      name: 'Contact',
      icon: <IoChatboxOutline />,
      path: '/contact'
    }
  ]
  return (
    <header className='shadow'>
      {/* desktop nav */}
      <div className='p-4 hidden md:flex h-[10vh] max-w-7xl mx-auto items-center justify-between'>
        <div>
          <Link className='text-xl font-bold'>Agrobot</Link>
        </div>
        <nav className='flex items-center gap-6'>
          {
            menuItems.map(item => (
              <Link className='flex items-center space-x-1' key={item.id} to={item.path}>
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))
          }
        </nav>

        <div className='flex items-center space-x-2'>
          <Link to={"/register"} className='rounded-full border text-white bg-green px-4 py-2'>Get Started</Link>
        </div>
      </div>


      {/* mobile navigation */}
      <div className='md:hidden p-4 w-screen overflow-hidden'>
        <div className='py-2 flex justify-between align-center'>
          <Link className='text-xl font-bold'>Agrobot</Link>
          <button onClick={() => setToggleNavbar(!toggleNavbar)}>
            <HiMiniBars3BottomRight className='text-xl' />
          </button>
        </div>
        {
          toggleNavbar &&
          <div className=' p-4 absolute h-[90vh] w-[350px] bg-white z-50 top-[80px] left-0 grid border-r gap-1'>
            <div>
              <nav className='grid gap-1'>
                {
                  menuItems.map(item => (
                    <Link className='py-2 mx-auto hover:bg-slate-100 rounded-xl' key={item.id} to={item.path}>{item.name}</Link>
                  ))
                }
              </nav>

            </div>
            <div className='absolute bottom-4  justify-center w-full flex '>
              <Link to={"/register"} className='rounded-full border border-green px-4 py-2'>Get Started</Link>
            </div>
          </div>
        }

      </div>
    </header>
  )
}

export default Navbar