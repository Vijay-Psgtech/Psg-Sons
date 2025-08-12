import React from 'react';
import { motion } from "framer-motion";
import { useParallaxBackground } from '../components/hooks/useParallaxBackground';

const Home = () => {
    const { handleMouseMove, translateX } = useParallaxBackground(20, 80);
    return (
        <div className="section relative h-[100dvh] w-full flex items-center justify-center text-center" onMouseMove={handleMouseMove}>
            <motion.div 
                style={{ x: translateX }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute top-0 left-0 w-full h-full overflow-hidden"
            >
                <img
                    src="/images/building.webp"
                    alt="PSG Charity Background"
                    className="w-full h-full object-cover scale-110 opacity-25"
                />
            </motion.div>
            <div className="relative z-10 flex flex-col items-center justify-center w-10/12 md:w-full">
                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-5xl md:text-6xl font-bold tracking-tighter drop-shadow-sm"
                >
                    'PSG & Sons' Charities'
                </motion.h1>
                <p className="text-xs md:text-sm text-black/90 mt-3 md:mt-6 font-semibold uppercase tracking-widest">
                    The Story of the Fifth Brother
                </p>
            </div>
            {/* Explore Button */}
            <a
                href="#quote"
                className="absolute flex flex-col justify-center items-center bottom-12"
            >
                <span className="tracking-widest opacity-60 uppercase text-xs font-semibold">
                    Explore
                </span>
                <svg
                    className="text-3xl mt-2 animate-bounce text-red-500 drop-shadow-md hover:drop-shadow-xl"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-121.57-17.77l-74.13 89.09a16 16 0 01-24.6 0l-74.13-89.09A16 16 0 01181.86 212h148.28a16 16 0 0112.29 26.23z"></path>
                </svg>
            </a>
        </div>
    )
}

export default Home