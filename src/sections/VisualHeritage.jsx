import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';

const VisualHeritage = () => {
  return (
    <AnimatedSection bgImage="/images/bg4.webp">
        <div className="absolute inset-0 bg-white opacity-20" />
        <div className='relative z-10 text-gray-900 px-4'>
            <p className='text-md tracking-widest uppercase font-semibold'>Chapter 10</p>
            <h1 className="text-5xl mt-5 font-bold tracking-tighter w-10/12 lg:w-full text-center mx-auto">Visual Heritage</h1>
        </div>
    </AnimatedSection>
  )
}

export default VisualHeritage