import React from 'react';
import { motion } from "framer-motion";
import { useParallaxBackground } from '../components/hooks/useParallaxBackground';

const VisualHeritage = () => {
  const { handleMouseMove, translateX } = useParallaxBackground(20, 80);
  return (
    <div className='section relative flex flex-col justify-center items-center text-center h-[100dvh] w-full overflow-hidden' onMouseMove={handleMouseMove}>  
        <motion.div
              style={{ x: translateX }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute inset-0 z-0"
          >
              <img
                src="/images/bg4.webp"
                alt="Section background"
                loading="lazy"
                className="w-full h-full object-cover opacity-20"
              />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className='relative z-10 text-gray-900 px-4'
          >
              <p className='text-md tracking-widest uppercase font-semibold'>Chapter 10</p>
              <h1 className="text-5xl mt-5 font-bold tracking-tighter w-10/12 lg:w-full text-center mx-auto">Visual Heritage</h1>
          </motion.div>
    </div>
  )
}

export default VisualHeritage