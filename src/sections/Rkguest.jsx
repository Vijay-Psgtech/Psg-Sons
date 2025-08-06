import React from 'react';
import { motion } from "framer-motion";
import { useParallaxBackground } from '../components/hooks/useParallaxBackground';

const Rkguest = () => {
    const { handleMouseMove, translateX } = useParallaxBackground(20, 80);
    return (
        <div className='section h-[100dvh]' onMouseMove={handleMouseMove}>
            <div className='overflow'>
                <div className='flex justify-center relative items-center h-[100dvh] w-full'>
                    <img alt="quote" src="/images/quote.svg" loading="lazy" width={91} height={123} className='w-[5rem] absolute top-12 right-12 block md:hidden'/>
                    <div className='absolute left-0 top-0 w-full bottt overflow-hidden h-[100dvh]'>
                        <motion.div 
                            style={{ x: translateX }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            className='absolute left-0 top-0 w-full overflow-hidden h-[100dvh]'
                        >
                            <img alt="bg" loading="lazy" width="1587" height="1079" className='absolute scale-[110%] top-0 left-0 w-full h-[100dvh] object-cover opacity-60' src="/images/bg2.jpg"/>
                        </motion.div>
                    </div>
                    <img alt="rk" loading="lazy" width={430} height={567} className='absolute w-48 md:w-[20rem] bottom-0 left-8 md:left-24 z-10'src="/images/rk.png" />
                    <div className='mt-8 overflow-visible w-10/12 my-12 md:w-1/3'>
                        <div className='relative z-10 text-gray-900 px-4'>
                            <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }} 
                                className='relative font-bold tracking-tighter lg:text-left  text-xl lg:text-4xl whitespace-break-spaces break-words'
                            >
                                <img alt="quote" loading="lazy" width={91} height={123} className='bottt h-[10rem] drop-shadow-xl absolute md:-left-36 -left-12 md:-top-12 top-6 hidden md:block' src="/images/quote.svg" />
                                The Story of the PSG & Sons' Charities is a thrilling one of abiding faith, great piety and noble adventure. The institutions, literary and technological, are a testimony to the foresight of the Founders and their confidence in the future of this country
                            </motion.div>
                            <div className='mt-8 w-24 border-b-red-600 border-b-4 ' />
                            <p className='text-sm md:text-lg font-bold uppercase mt-4'>
                                Dr S radhakrishnan
                                <span className='block text-xs md:text-sm tracking-widest font-medium'>Former President of India</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Rkguest