import React from 'react'

const Services = () => {
    return (
        <div className='px-4 py-20 max-w-7xl mx-auto '>
            <h1 className='text-2xl max-w-xs'>Easy Farming: We Provides Best Services For Your Garden</h1>
            <div className='py-8 flex items-center justify-between'>
                <div className='flex flex-col text-sm space-y-2'>
                    <li className='list-none'>
                        <button className='px-4 py-2 rounded-full bg-green text-white '>01. Farm Bot</button>
                    </li>
                    <li className='list-none'>
                        <button className='px-4 py-2 rounded-full bg-greenn text-wahite '>02. Weather Insight</button>
                    </li>
                    <li className='list-none'>
                        <button className='px-4 py-2 rounded-full bg-greenn text-wahite '>03. Disease Detection</button>
                    </li>
                </div>
                <div className='flex space-x-4 max-w-3xl'>
                    <img className='w-[200px] h-[150px] object-cover rounded-xl' src="https://plus.unsplash.com/premium_photo-1667509347081-a9db0567ed83?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='text-md'>Lorem ipsum nem quod. Nesciunt suscipit doloremque vitae fugit dignissimos voluptatem nobis adipisci mollitia neque eaque, hic natus eligendi quasi consequuntur labore sint asperiores est. Ipsa modi non sapiente consequuntur?</p>
                </div>
            </div>
        </div>
    )
}

export default Services