import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { TiWeatherShower } from "react-icons/ti";
import { SiDependabot } from "react-icons/si";
import { FaDisease } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GiFireRing } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { RiHome6Line } from "react-icons/ri";


const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [minNavbar, setMinNavbar] = useState(false);
    const navigation = [
        {
            name: 'Home',
            path: '/dashboard',
            icon: <RiHome6Line />
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
            icon: <FiUsers />
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
                            <div className='flex items-center'>
                                <GiFireRing size={35} className='rounded border shadow p-2 text-custom-blue' />
                                <Link className='p-2 text-xl font-bold'>Agrobot</Link>
                            </div>
                            :
                            <Link className='p-2 text-3xl mx-auto font-bold'>A</Link>
                    }

                    {/* {
                        !minNavbar &&
                        <div className='flex items-center space-x-4 '>
                            <p className='text-sm w-8 h-8 font-medium rounded-full bg-pink-300 text-stone-900 flex items-center justify-center'>SB</p>
                            <PiBellBold size={20} />
                        </div>
                    } */}
                    {/* <FaBarsStaggered className='md:hidden' /> */}
                    {/* {
                        !minNavbar ?
                            <IoIosArrowDropleft
                                size={36}
                                onClick={() => setMinNavbar(!minNavbar)}
                                className='p-2 cursor-pointer shadow  rounded-full fixed top-7 left-[16rem]' />
                            :
                            <IoIosArrowDropleft size={36}
                                onClick={() => setMinNavbar(!minNavbar)}
                                className={`p-2 cursor-pointer shadow  rounded-full fixed top-7 left-[19rem] rotate-180 ${minNavbar && 'left-[5.6rem] rotate-180'}`} />
                    } */}


                </div>
            </div>
            <div className='flex justify-between flex-col h-full'>
                <div className='grid gap-2'>
                    <div className='my-2 rounded-md shadow border flex items-center text-sm '>
                        <CiSearch size={25} className='ml-2 text-gray-500' />
                        <input className='p-2 w-full rounded-md outline-none' type="search" placeholder="Search..." />
                    </div>
                    {
                        navigation.map(item => (
                            <NavLink to={item.path} className={({ isActive }) =>
                                isActive ?
                                    `p-2 text-sm font-medium rounded-md space-x-4 shadow border flex items-center`
                                    :
                                    `p-2 text-sm font-medium rounded-md space-x-4 hover:bg-stone-100 transition-all duration-200 ease-in-out flex items-center`

                            } key={item.name}>
                                <span className='text-xl'>{item.icon}</span>
                                {!minNavbar && <span>{item.name}</span>}
                            </NavLink>
                        ))
                    }
                </div>
                <div className='py-4 grid gap-2'>
                    <NavLink to={'/support'} className={({ isActive }) =>
                        isActive ?
                            `p-2 text-sm font-medium rounded-md space-x-4 shadow border flex items-center`
                            :
                            `p-2 text-sm font-medium rounded-md space-x-4 hover:bg-stone-100 transition-all duration-200 ease-in-out flex items-center`

                    }>
                        <HiOutlineSupport className='text-xl' />
                        {!minNavbar && <span>Support</span>}
                    </NavLink>

                    <NavLink to={'/settings'} className={({ isActive }) =>
                        isActive ?
                            `p-2 text-sm font-medium rounded-md space-x-4 shadow border flex items-center`
                            :
                            `p-2 text-sm font-medium rounded-md space-x-4 hover:bg-stone-100 transition-all duration-200 ease-in-out flex items-center`

                    }>
                        <IoSettingsOutline className='text-xl' />
                        {!minNavbar && <span>Settings</span>}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar