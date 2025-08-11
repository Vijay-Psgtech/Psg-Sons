import React, { useRef, useState } from 'react';
import { IndustrialData } from '../components/content/Content';
import { FaChevronRight, FaChevronLeft, FaHandPointRight } from 'react-icons/fa';
import SideDrawer from '../components/common/SideDrawer';
import { motion } from "framer-motion";
import { useParallaxBackground } from '../components/hooks/useParallaxBackground';
import NavButton from '../components/common/NavButton';

const IndustrialTraining = () => {
    const scrollRef = useRef();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [industryData, setIndustryData] = useState({});
    const { handleMouseMove, translateX } = useParallaxBackground(20, 80);

    const handleModalClick = (data) => {
        setOpenDrawer(true);
        setIndustryData(data);
    };

    const handleScrollLeft = () => {
        scrollRef.current?.scrollBy({
        left: -300,
        behavior: 'smooth'
        });
    };

    const handleScrollRight = () => {
        scrollRef.current?.scrollBy({
        left: 300,
        behavior: 'smooth'
        });
    };

    return (
        <div className='section h-[100dvh]' onMouseMove={handleMouseMove}>
            <div className='relative h-[100dvh] overflow-hidden'>
                <div className='hidden md:flex shrink-0 gap-4 absolute right-16 bottom-12 z-20'>
                    <NavButton onClick={handleScrollLeft}>
                        <FaChevronLeft />
                    </NavButton>

                    <NavButton onClick={handleScrollRight}>
                        <FaChevronRight />
                    </NavButton>
                </div>
                <motion.div 
                    style={{ x: translateX }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }} 
                    className='absolute left-0 top-0 w-full h-[100dvh] overflow-hidden'
                >
                    <img
                    alt="bg"
                    loading='lazy'
                    className='absolute scale-[110%] top-0 left-0 w-full h-[100dvh] object-cover opacity-60'
                    src="/images/bg2.webp"
                    />
                </motion.div>
                <div className='relative z-10 text-gray-900 px-8'>
                    <div 
                        ref={scrollRef} 
                        className='flex overflow-x-auto scroll-smooth space-x-8 px-4 py-8'
                    >
                        <div className='ml-6 sm:ml-12 lg:ml-24 flex h-screen justify-center flex-col items-start shrink-0 w-[16rem] sm:w-[20rem]'>
                            <h1 className='text-2xl sm:text-4xl font-bold tracking-tight'>PSG & the Industrialization of Coimbatore</h1>
                            <p className='mt-4 lg:mt-6 text-md sm:text-lg w-11/12 mb-36 whitespace-pre-wrap'>
                                At the epicentre of Coimbatore's transformation into the industrial and entrepreneurial hub of South India lies in our founders's visionary drive. They have invigorated this journey by founding training centres that consistently nurture top-tier technicians, infusing the region with vitality and expertise.
                            </p>
                            <div className="md:hidden mb-2 flex flex-col items-center text-lg text-black">
                                <span className="mb-1">Swipe to Navigate</span>
                                
                                <motion.div
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                    className="mt-1"
                                >
                                    <FaHandPointRight className="text-xl w-6 h-6 text-indigo-500" />
                                </motion.div>
                            </div>
                        </div>
                        {IndustrialData.map((data, index)=>(
                           <div
                            key={index}
                            onClick={()=>handleModalClick(data)}
                            className={`h-[100dvh] drop-shadow-xl cursor-pointer group pointer-events-auto py-12 p-8 w-screen md:w-fit min-w-[15rem] max-w-[65rem] flex shrink-0 ${index % 2 === 0 ? 'items-start justify-start flex-col mt-24 ml-36 w-full false' : 'items-end -translate-y-24 justify-end  flex-col-reverse  md:-mx-24 false'}`}
                        >
                            <div className={`rounded-xl flex gap-8 md:flex-row-reverse flex-col-reverse w-full ${index % 2 === 0 ? '' : 'mt-auto mb-0'}`}>
                                <div className='w-full md:w-[24rem]'>
                                    <h1 className='text-xl md:text-3xl font-semibold'>{data.title}</h1>
                                    <p className='md:text-xl font-medium tracking-tight'>{data.desc}</p>
                                    <p className='mt-2 text-sm md:text-base line-clamp-3 md:line-clamp-5'>{data.content}</p>
                                    <button className='text-red-800 uppercase font-semibold text-sm cursor-pointer'>
                                    Read More
                                    </button>
                                </div>
                                <img
                                    alt={`industry${index}`}
                                    className='size-[13rem] md:size-[16rem] object-right-top hover:brightness-105 brightness-100 anim object-contain mt-0 mb-auto anim toppp pointer-events-auto object-right-bottom md:object-right-top'
                                    src={data.image}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <SideDrawer
                isOpen={openDrawer}
                onClose={() => setOpenDrawer(false)}
                data={industryData}
            />
        </div>
    )
}

export default IndustrialTraining