import React, { useState } from 'react'

const Services = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <section className='bg-slate-100'>
            <div className='px-4 py-20 max-w-7xl mx-auto '>
                <h1 className='text-2xl max-w-xs'><span className='text-[#878686]'>Smart Farming</span> : We Provides Best Services For Your Garden</h1>
                <div className='py-8 pb-20 flex items-center justify-between'>
                    <div className='flex flex-col text-sm space-y-2'>
                        <li className='list-none'>
                            <button onClick={() => setActiveTab(1)} className={`px-4 py-2 rounded-full ${activeTab === 1 ? 'bg-green text-white' : 'bg-greenn'} `}>01. Farm Bot</button>
                        </li>
                        <li className='list-none'>
                            <button onClick={() => setActiveTab(2)} className={`px-4 py-2 rounded-full ${activeTab === 2 ? 'bg-green text-white' : 'bg-greenn'} `}>02. Weather Insight</button>
                        </li>
                        <li className='list-none'>
                            <button onClick={() => setActiveTab(3)} className={`px-4 py-2 rounded-full ${activeTab === 3 ? 'bg-green text-white' : 'bg-greenn'} `}>03. Disease Detection</button>
                        </li>
                    </div>
                    {
                        activeTab === 1 &&
                        <div className='flex space-x-4 max-w-3xl'>
                            <img className='max-h-[150px] w-[200px] object-cover rounded-xl' src="https://plus.unsplash.com/premium_vector-1682307904375-1e8b895c745c?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div>
                                <h1 className='py-2 font-medium'>Farm Bot</h1>
                                <p className='text-md'>Lorem ipsum nem quod. Nesciunt suscipit doloremque vitae fugit dignissimos voluptatem nobis adipisci mollitia neque eaque, hic natus eligendi quasi consequuntur labore sint asperiores est. Ipsa modi non sapiente consequuntur?</p>
                            </div>
                        </div>
                    }
                    {
                        activeTab === 2 &&
                        <div className='flex space-x-4 max-w-3xl'>
                            <img className='max-h-[150px] w-[200px] object-cover rounded-xl' src="https://plus.unsplash.com/premium_vector-1714142580885-97d3f0e39f98?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div>
                                <h1 className='py-2 font-medium'>Weather Insight</h1>
                                <p className='text-md'>Lorem ipsum nem quod. Nesciunt suscipit doloremque vitae fugit dignissimos voluptatem nobis adipisci mollitia neque eaque, hic natus eligendi quasi consequuntur labore sint asperiores est. Ipsa modi non sapiente consequuntur?</p>
                            </div>
                        </div>
                    }
                    {
                        activeTab === 3 &&
                        <div className='flex space-x-4 max-w-3xl'>
                            <img className='max-h-[150px] w-[200px] object-cover rounded-xl' src="https://plus.unsplash.com/premium_vector-1711987356317-e765e719f673?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div>
                                <h1 className='py-2 font-medium'>Disease Detection</h1>
                                <p className='text-md'>Lorem ipsum nem quod. Nesciunt suscipit doloremque vitae fugit dignissimos voluptatem nobis adipisci mollitia neque eaque, hic natus eligendi quasi consequuntur labore sint asperiores est. Ipsa modi non sapiente consequuntur?</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Services