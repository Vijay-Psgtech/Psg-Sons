import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';

const Legacy = () => {
  return (
    <AnimatedSection bgImage="/images/bg2.jpg">
        <div className='relative z-10 text-gray-900 px-4'>
            <p className='text-md tracking-widest uppercase font-semibold'>Chapter 2</p>
            <h1 className="text-5xl mt-5 font-bold tracking-tighter w-10/12 lg:w-full text-center mx-auto">The Legacy Continues</h1>
        </div>
    </AnimatedSection>
  )
}

export default Legacy