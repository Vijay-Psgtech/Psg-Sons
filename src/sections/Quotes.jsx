import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useParallaxBackground } from '../components/hooks/useParallaxBackground';
import SideDrawer from '../components/common/SideDrawer';

const drawerData = 
  {
    title: 'P. S. Govindaswamy Naidu',
    image: '/images/trustees/Fpsg.webp',
    content: [ 
      'The legacy of the PSG institutions founded by Shri.P.S.Govindaswamy Naidu has been handed down through several generations. Each time the baton was handed down to the successor of the Trust, these golden words, "Let there be charity, so others can share my family’s prosperity" are embedded firmly and hence the Founder’s vision has only grown richer and more profound. Education, one of the most treasured clauses in the Trust deed, attained sharper focus each growing year while each succeeding Head of Trust, carried the dreams of the Founder on their shoulders towards fulfillment of the Vision and the betterment of the Future.',

    ]
  };

const Quotes = () => {
    const { handleMouseMove, translateX } = useParallaxBackground(20, 80);
    const [openDrawer, setOpenDrawer] = useState(false);
    
    const handleDrawerClick = () => {
        setOpenDrawer(true);
    };

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
                    <img alt="founder" loading="lazy" width={430} height={567} className='absolute hover:grayscale h-[25.5rem] transition-all grayscale-0 cursor-pointer w-48 md:w-[22rem] bottom-0 left-0 md:left-24 z-10'src="/images/founder.jpg" onClick={() => handleDrawerClick()} />
                    <div className='mt-8 overflow-visible w-10/12 my-12 md:w-1/3'>
                        <div className='relative z-10 text-gray-900 px-4'>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.3 }} 
                                className='font-bold tracking-tighter text-4xl lg:text-7xl mb-8 relative'
                            >
                                <img alt="quote" loading="lazy" width={91} height={123} className='bottt h-[10rem] drop-shadow-xl absolute md:-left-36 -left-12 md:-top-12 top-6 hidden md:block' src="/images/quote.svg" />
                                Let there be{" "}
                                <span className="text-red-600 underline">
                                    <br />
                                    charity
                                </span>{" "}
                                so that
                                <br /> others can share <br /> my family's <br /> prosperity
                            </motion.div>
                            <div className='mt-8 w-24 border-b-red-600 border-b-4 ' />
                            <p className='text-sm md:text-lg font-bold uppercase mt-4'>
                                Shri P S Govindaswamy Naidu
                                <span className='block text-xs md:text-sm tracking-widest font-medium'>Founder</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <SideDrawer
                isOpen={openDrawer}
                onClose={() => setOpenDrawer(false)}
                data={drawerData}
            />
        </div>
    )
}

export default Quotes