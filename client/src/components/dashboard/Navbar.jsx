import React, { useState } from 'react'
import { PiBellBold } from "react-icons/pi";
import { Link, NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { TiWeatherShower } from "react-icons/ti";
import { SiDependabot } from "react-icons/si";
import { FaDisease } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosArrowDropleft } from "react-icons/io";


const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [minNavbar, setMinNavbar] = useState(false);
    const navigation = [
        {
            name: 'Home',
            path: '/dashboard',
            icon: <IoHomeOutline />
        },
        {
            name: 'Weather',
            path: '/weather',
            icon: <TiWeatherShower />
        },
        {
            name: 'Farm Bot',
            path: '/farmbot',
            icon: <SiDependabot />
        },
        {
            name: 'Disease Predictor',
            path: '/diseasepredictor',
            icon: <FaDisease />
        },
        {
            name: 'Users',
            path: '/users',
            icon: <LuUsers2 />
        }
    ]
    return (
        <div className={`
            p-8 absolute md:relative bg-white ring-1 ring-stone-200 shadow-xl h-screen overflow-y-hidden
            ${!minNavbar && 'w-[20rem]'}
            `}>

            <div className=''>
                <div className='flex items-center justify-between'>
                    {
                        !minNavbar ?
                            <Link className='text-3xl font-bold'>Agrobot</Link>
                            :
                            <Link className='text-3xl mx-auto font-bold'>A</Link>
                    }
                    {
                        !minNavbar &&
                        <div className='flex items-center space-x-4 '>
                            <p className='text-sm w-8 h-8 font-medium rounded-full bg-pink-300 text-stone-900 flex items-center justify-center'>SB</p>
                            <PiBellBold size={20} />
                        </div>
                    }
                    <FaBarsStaggered className='md:hidden' />
                    {
                        !minNavbar ?
                            <IoIosArrowDropleft
                                size={36}
                                onClick={() => setMinNavbar(!minNavbar)}
                                className='p-2 cursor-pointer shadow  rounded-full fixed top-7 left-[16rem]' />
                            :
                            <IoIosArrowDropleft size={36}
                                onClick={() => setMinNavbar(!minNavbar)}
                                className={`p-2 cursor-pointer shadow  rounded-full fixed top-7 left-[19rem] rotate-180 ${minNavbar && 'left-[5.6rem] rotate-180'}`} />
                    }


                </div>
                {
                    !minNavbar &&
                    <div className='py-2'>
                        <p className='text-xs text-stone-500'>User</p>
                        <p className='text-xs text-stone-500'>bansujan@gmail.com</p>
                    </div>
                }
            </div>
            <div className='py-4 grid gap-4'>
                {
                    navigation.map(item => (
                        <NavLink to={item.path} className={({ isActive }) =>
                            isActive ?
                                `p-3 text-sm font-medium rounded-md space-x-4 bg-gray-100 ring-1 ring-gray-200 flex items-center`
                                :
                                `p-3 text-sm font-medium rounded-md space-x-4 hover:bg-stone-100 transition-all duration-200 ease-in-out flex items-center`

                        } key={item.name}>
                            <span className='text-xl'>{item.icon}</span>
                            {!minNavbar && <span>{item.name}</span>}
                            {/* <span>{item.name}</span> */}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar