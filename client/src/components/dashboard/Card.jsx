import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Card = ({title, descriprtion, path, anchor}) => {
    return (
        <div className='p-4 border shadow rounded-xl space-y-2 bg-white'>
            <h1 className='text-xl font-semibold'>{title}</h1>
            <div className='flex items-center gap-8'>
                <p className='text-gray-500 text-sm'>{descriprtion}</p>
                <Link className='flex items-center space-x-2 px-8 py-4 bg-stone-900 rounded-xl text-sm text-white'
                    to={path}>{anchor}<LuChevronRight /></Link>
            </div>
        </div>
    )
}

export default Card