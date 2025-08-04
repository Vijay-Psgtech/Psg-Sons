import React from 'react'

const Legacy = () => {
  return (
    <div className="section flex flex-col relative justify-center text-center items-center h-[100dvh] w-full">
        <div className='absolute left-0 top-0 w-full bottt overflow-hidden h-[100dvh]'>
            <img src="/images/bg2.jpg" loading="lazy" width="1835" height="1022" className='absolute scale-[110%] top-0 left-0 w-full h-[100dvh] object-cover opacity-60' alt="legacy" />
        </div>
        <div className='relative z-10 text-gray-900 px-4'>
            <p className='text-md tracking-widest uppercase font-semibold'>Chapter 2</p>
            <h1 className="text-5xl mt-5 font-bold tracking-tighter w-10/12 lg:w-full text-center mx-auto">The Legacy Continues</h1>
        </div>
    </div>
  )
}

export default Legacy