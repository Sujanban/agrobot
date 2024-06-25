import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3BottomRight } from "react-icons/hi2";


const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  const menuItems = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'Services',
      path: '/services'
    },
    {
      id: 3,
      name: 'How it Works',
      path: '/howitworks'
    },
    {
      id: 4,
      name: 'Contact',
      path: '/contact'
    },
    {
      id: 5,
      name: 'About',
      path: '/about'
    }
  ]
  return (
    <header className='shadow'>
      {/* desktop nav */}
      <div className='hidden sm:flex h-[10vh] max-w-7xl mx-auto items-center justify-between'>
        <div>
          <Link className='text-xl font-bold'>Agrobot</Link>
        </div>
        <nav className='flex items-center space-x-4'>
          {
            menuItems.map(item => (
              <Link className='p-2 hover:bg-slate-100 rounded-xl' key={item.id} to={item.path}>{item.name}</Link>
            ))
          }
        </nav>

        <div className='flex items-center space-x-2'>
          <Link className='rounded-full border border-green px-4 py-2'>Get Started</Link>
        </div>
      </div>


      {/* mobile navigation */}
      <div className='sm:hidden p-4 bg-slate-200 h-screen w-screen overflow-hidden'>
        <div className='flex justify-between align-center'>
          <Link className='text-xl font-bold'>Agrobot</Link>
          <button onClick={() => setToggleNavbar(!toggleNavbar)}>
            <HiMiniBars3BottomRight className='text-xl' />
          </button>
        </div>
        {
          toggleNavbar &&
          <div className='flex flex-col'>
            <nav className='flex-grow grid py-2 '>
              {
                menuItems.map(item => (
                  <Link className='py-2 hover:bg-slate-100 rounded-xl' key={item.id} to={item.path}>{item.name}</Link>
                ))
              }
            </nav>

            <div className='py-2'>
              <Link className='rounded-full border border-green px-4 py-2'>Get Started</Link>
            </div>
          </div>
        }

      </div>
    </header>
  )
}

export default Navbar