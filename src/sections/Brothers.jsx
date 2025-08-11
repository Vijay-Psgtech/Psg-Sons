  import React from 'react';
import { motion } from "framer-motion";
import { useParallaxBackground } from '../components/hooks/useParallaxBackground';

const Brothers = () => {
    const { handleMouseMove, translateX } = useParallaxBackground(20, 80);
    return (
        <div className='section h-[100dvh]' onMouseMove={handleMouseMove}>
            <div className='overflow'>
                <div className='flex flex-col relative text-center justify-center items-center h-[100dvh] w-full'>
                    <div className='absolute left-0 top-0 w-full bottt overflow-hidden h-[100dvh]'>
                        <motion.div 
                            style={{ x: translateX }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            className='absolute left-0 top-0 w-full overflow-hidden h-[100dvh]'
                            >
                            <img src="/images/bg2.jpg" loading="lazy" width="1905" height="552" className='absolute scale-[110%] top-0 left-0 w-full h-[100dvh] object-cover opacity-60' alt="Genesis" />
                        </motion.div>
                    </div>
                    <div className="relative z-10 text-gray-900 px-4">
                        <p className='text-md toppp tracking-widest -mt-36 uppercase font-semibold'>Chapter 4</p>
                        <h1 className="text-5xl toppppp mt-5 font-bold tracking-tighter w-full text-center mx-auto">The PSG Brothers</h1>
                    </div>
                    <img alt="brothers" loading="lazy" width="1905" height="552" className='absolute bottom-0 drop-shadow-xl z-20 w-5/6 md:w-full centerh' src="/images/brothers.jpg"/>
                    <img alt="founder" loading="lazy" width="1000" height="1150" className='absolute object-contain w-1/2 md:w-1/3  mix-blend-overlay opacity- z-10 origin-bottom centerh bottom-0' src="/images/founder.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Brothers