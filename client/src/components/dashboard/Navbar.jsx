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
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { GiFireRing } from "react-icons/gi";


const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [minNavbar, setMinNavbar] = useState(false);
    const navigation = [
        {
            name: 'Home',
            path: '/dashboard',
            icon: <GoHome />
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
            <div className='grid gap-2'>
                <div className='my-2 rounded-md shadow border flex items-center gap-2 text-sm '>
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
        </div>
    )
}

export default Navbar