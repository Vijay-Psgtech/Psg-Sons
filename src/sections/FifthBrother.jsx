import React from 'react'

const FifthBrother = () => {
  return (
    <div className='section h-[100dvh]'>
        <div className='overflow'>
            <div className='flex flex-col relative justify-center text-center items-center h-[100dvh] w-full'>
                <div className='absolute left-0 top-0 w-full bottt overflow-hidden h-[100dvh]'>
                    <div className='absolute left-0 top-0 w-full overflow-hidden h-[100dvh]'>
                        <img src="/images/building.png" loading="lazy" width="1835" height="1022" className='absolute top-0 left-0 w-full h-full object-cover scale-[110%] opacity-60' alt="visionary" />
                        <div className="absolute inset-0 bg-white opacity-50" />
                    </div>
                </div>
                <div className='relative z-10 text-gray-900 px-4'>
                    <p className='text-md tracking-widest uppercase font-semibold'>Chapter 5</p>
                    <h1 className="text-5xl mt-5 font-bold tracking-tighter w-10/12 lg:w-full text-center mx-auto">The Fifth Brother</h1>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default FifthBrother