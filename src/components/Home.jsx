import React from 'react'
import pic from '../assets/resume-pic.png'
const Home = () => {
  return (
    <div className='h-screen border-b border-neutral-900 pb-4 lg:mb-36 bg-gradient-to-b from-black to-gray-800'>
        <div className='flex flex-wrap px-10 py-4'>
            <div className='w-full lg:w-1/2'>
                 <div className=' flex flex-col items-center lg:items-start'>
                    <h1 className='p-12 text-6xl font-thin tracking-tight lg:mt-28 lg:text-8xl text-white'> Heena Garg</h1>
                    <span className='pl-12 bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Frontend Developer</span>
                    <p className='my-2 max-w-xl py-6 pl-12 font-light tracking-tight text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores aspernatur voluptate pariatur eligendi rerum sit veniam vitae similique fuga quam quae impedit quidem et eius, molestiae porro veritatis animi minima repellendus corporis. Nostrum porro impedit, est, excepturi deleniti commodi magnam animi blanditiis, alias consectetur ex odit nulla dolorem? Accusamus, voluptas.</p>
                 </div>
            </div>
          
            <div className='mt-10 pt-10 flex justify-center'>
                <img src={pic} alt="pic" className='rounded-2xl w-2/3 md:w-full  '/>
            </div>

            
        </div>

    </div>
  )
}

export default Home