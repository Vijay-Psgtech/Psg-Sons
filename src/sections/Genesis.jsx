import React from 'react'

const Genesis = () => {
  return (
     <div className="section flex flex-col relative justify-center text-center items-center h-[100dvh] w-full bg-gray-100">
        <div className='absolute left-0 top-0 w-full bottt overflow-hidden h-[100dvh]'>
            <img src="/images/bg1.jpg" loading="lazy" width="1835" height="1022" className='absolute top-0 left-0 w-full h-full object-cover scale-[110%] opacity-60' alt="Genesis" />
            <div className="absolute inset-0 bg-white opacity-20" />
        </div>
        <div className='relative z-10 text-gray-900 px-4'>
            <p className='text-md tracking-widest uppercase font-semibold'>Chapter 1</p>
            <h1 className="text-5xl mt-5 font-bold tracking-tighter w-10/12 lg:w-full text-center mx-auto">The Genesis</h1>
        </div>
    </div>
  )
}

export default Genesis