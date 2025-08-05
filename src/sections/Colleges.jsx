import React,{ useRef, useState } from 'react';
import { CollegeData } from '../components/content/Content';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import SideDrawer from '../components/common/SideDrawer';

const Colleges = () => {
    const scrollRef = useRef();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [collegeData, setCollegeData] = useState({});

    const handleModalClick = (data) => {
        setOpenDrawer(true);
        setCollegeData(data);
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
        <div className='section h-[100dvh]'>
            <div className='relative h-[100dvh] overflow-hidden'>
                <div className='flex shrink-0 gap-4 absolute right-16 bottom-12 z-20'>
                    <button onClick={handleScrollLeft} className='w-12 h-12 flex justify-center items-center bg-white rounded-full drop-shadow-md'>
                        <FaChevronLeft />
                    </button>
                    <button onClick={handleScrollRight} className='w-12 h-12 flex justify-center items-center bg-white rounded-full drop-shadow-md'>
                        <FaChevronRight />
                    </button>
                </div>
                <div className='absolute left-0 top-0 w-full h-[100dvh] overflow-hidden'>
                    <img
                        alt="bg"
                        loading='lazy'
                        className='absolute scale-[110%] top-0 left-0 w-full h-[100dvh] object-cover opacity-60'
                        src="/images/bg2.jpg"
                    />
                </div>
                <div className='relative z-10 text-gray-900 px-8'>
                    <div 
                        ref={scrollRef} 
                        className='flex overflow-x-auto scroll-smooth space-x-8 px-4 py-8'
                    >
                        <div className='ml-12 lg:ml-24 flex h-screen justify-center flex-col items-start shrink-0 w-[20rem] md:w-1/4'>
                            <h1 className='text-4xl font-bold tracking-tight'>Nurturing Minds & Shaping Futures Across Decades</h1>
                            <p className='mt-4 lg:mt-6 text-lg w-11/12 mb-36 whitespace-pre-wrap'>
                                Over the span of numerous decades, Coimbatore has consistently remained the preferred educational hub for students from across Tamil Nadu seeking higher education opportunities. This prominence can be attributed to the establishment of a range of PSG Institutions, covering disciplines including Arts, Management, Engineering, and many more.
                            </p>
                        </div>
                        {CollegeData.map((data, index)=>(
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
                                    alt={`college${index}`}
                                    className='size-[13rem] md:size-[16rem] object-right-top hover:brightness-105 brightness-100 anim object-contain mt-0 mb-auto anim toppp pointer-events-auto object-right-bottom md:object-right-top'
                                    src={data.image}
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
                data={collegeData}
            />
        </div>
    )
}

export default Colleges