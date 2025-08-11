import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useParallaxBackground } from '../components/hooks/useParallaxBackground';
import { FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaFacebookF  } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk, MdOutlineClose } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const { handleMouseMove, translateX } = useParallaxBackground(20, 80);
    const [ openModal, setOpenModal ] = useState(false);
    const navigate = useNavigate();
    const publicationData = [
        {
            title: 'Harbinger Issue 1',
            link: 'https://www.flipbookpdf.net/web/site/b9b9eb93de29ff711a66751051427802ed0ef45cFBP19494842.pdf.html',
            date: 'Jan – Mar 2024'
        },
        {
            title: 'Harbinger Issue 2',
            link: 'https://www.flipbookpdf.net/web/site/cc505b6c2ab687f08688266d32e1ad3f437c1379FBP19494842.pdf.html',
            date: 'Apr - June 2024'
        },
        {
            title: 'Harbinger Issue 3',
            link: 'https://www.flipbookpdf.net/web/site/2d17846c72696cab2b5cffab5a0ec98bfbc611dfFBP19494842.pdf.html',
            date: 'Jul - Sept 2024'
        },
        {
            title: 'Harbinger Issue 4',
            link: 'https://www.flipbookpdf.net/web/site/2db46cf90925ca81a8d06c84b07b2de5374171a8FBP19494842.pdf.html',
            date: 'Oct - Dec 2024'
        },
        {
            title: 'The Fifth Brother',
            link: 'https://www.flipbookpdf.net/web/site/64930f11c0745e4c0c6db77aca313aba2201884fFBP19494842.pdf.html',
            date: ''
        },
        {
            title: 'PSG Tech Coffee Table',
            link: 'https://flipbookpdf.net/web/site/943016ef258f2eff5c15cb3553feb5d36f51c751FBP19494842.pdf.html',
            date: ''
        },
    ]
    return (
        <div className='section h-[100dvh]' onMouseMove={handleMouseMove}>
            <div className='overflow'>
                <div className='flex relative flex-col  text-center justify-center items-center h-[100dvh] w-full'>
                    <div className='absolute left-0 top-0 w-full bottt overflow-hidden h-[100dvh]'>
                        <motion.div 
                            style={{ x: translateX }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            className='absolute left-0 top-0 w-full overflow-hidden h-[100dvh]'
                        >
                            <img src="/images/bg2.webp" loading="lazy" width="1835" height="1022" className='absolute scale-[110%] top-0 left-0 w-full h-[100dvh] object-cover opacity-60' alt="visionary" />
                        </motion.div>
                    </div>
                    <div className='fader z-[9999999999] pointer-events-none w-full h-28 md:h-40 absolute bottom-0 '></div>
                    <div className={`${!openModal && 'relative z-10 text-gray-900 px-4'}`}>
                        <h1 className='text-2xl md:text-4xl w-10/12 mx-auto font-bold tracking-tighter'>
                            Connect with Excellence, Reach Out to Us
                        </h1>
                        <p className='mt-4 md:mt-6 w-10/12 mx-auto'>
                            For further assistance or information, kindly get in touch with us.
                        </p>
                        <div className='mt-4 md:mt-8'>
                            <div className='mx-auto flex gap-6 justify-center items-center md:text-xl w-fit mb-8 md:mb-16'>
                                <a 
                                    target="_blank" 
                                    className='bg-white text-black rounded-full p-2 size-8 md:size-12 drop-shadow flex justify-center items-center' 
                                    href="https://www.facebook.com/psgandsonscharities"
                                >
                                    <FaFacebookF />
                                </a>
                                <a 
                                    target="_blank" 
                                    className='bg-white text-black rounded-full p-2 size-8 md:size-12 drop-shadow flex justify-center items-center' 
                                    href="https://www.linkedin.com/company/psg-sons-charities/"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a 
                                    target="_blank" 
                                    className='bg-white text-black rounded-full p-2 size-8 md:size-12 drop-shadow flex justify-center items-center' 
                                    href="https://www.youtube.com/channel/UCthdLg7gr_I564sdytJaLjw"
                                >
                                    <FaYoutube />
                                </a>
                            </div>
                            <div className='bg-white border border-slate-300 hover:bg-white hover:text-black anim relative font-semibold p-4 md:p-6 px-8 md:px-12 w-11/12 md:w-fit rounded-xl shadow-md mx-auto'>
                                <a
                                    target="_blank"
                                    className="block text-center"
                                    href="https://www.google.com/maps/dir//22F3%2BW4G,+PSG+College+of+Technology+Campus,+Avinashi+Road,+Peelamedu,+Coimbatore,+Tamil+Nadu+641004/@11.0247975,76.9204244,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8582f11555555:0x51ff199fa3d30ddf!2m2!1d77.0028263!2d11.0248086?entry=ttu"
                                >
                                    PO Box No: 1609, Peelamedu, Coimbatore - 641 004
                                </a>
                                <FaMapMarkerAlt className='absolute left-1/2 -translate-x-1/2 -top-4 w-6 md:w-8 h-6 md:h-8 rounded-full bg-white p-1.5 md:p-2 text-blue-600 drop-shadow-lg'/>
                            </div>
                            <div className='flex gap-6 mt-8 justify-center items-center mx-auto flex-wrap'>
                                <div className='bg-white border border-slate-300 hover:bg-white hover:text-black anim relative font-semibold p-4 md:p-6 px-8 md:px-12 w-11/12 md:w-fit rounded-xl shadow-md'>
                                    <a target="_blank" href="mailto:charity@psgtech.edu">charity@psgtech.edu</a>
                                    <MdEmail className='absolute left-1/2 -translate-x-1/2 -top-4 w-6 md:w-8 h-6 md:h-8 rounded-full bg-white p-1.5 md:p-2 text-blue-600 drop-shadow-lg'/>
                                </div>
                                <div className='bg-white border border-slate-300 hover:bg-white hover:text-black anim relative font-semibold p-4 md:p-6 px-8 md:px-12 w-11/12 md:w-fit rounded-xl shadow-md'>
                                    <a target="_blank" href="tel:04222572265">0422 257 2265 / 434 4000</a>
                                    <MdPhoneInTalk  className='absolute left-1/2 -translate-x-1/2 -top-4 w-6 md:w-8 h-6 md:h-8 rounded-full bg-white p-1.5 md:p-2 text-blue-600 drop-shadow-lg'/>
                                </div>
                                <div className='bg-white border border-slate-300 hover:bg-white hover:text-black anim relative font-semibold p-4 md:p-6 px-8 md:px-12 w-11/12 md:w-fit rounded-xl shadow-md'>
                                    <button className='cursor-pointer' onClick={()=>setOpenModal(true)}>Publications</button>
                                    <HiOutlineDocumentText className="absolute left-1/2 -translate-x-1/2 -top-4 w-6 md:w-8 h-6 md:h-8 rounded-full bg-white p-1.5 md:p-2 text-blue-600 drop-shadow-lg" />
                                </div>
                                <div className='bg-white border border-slate-300 hover:bg-white hover:text-black anim relative font-semibold p-4 md:p-6 px-8 md:px-12 w-11/12 md:w-fit rounded-xl shadow-md'>
                                    <a href="/privacy-policy"><button className='cursor-pointer'>Disclosures</button></a>
                                    <AiOutlineInfoCircle  className="absolute left-1/2 -translate-x-1/2 -top-4 w-6 md:w-8 h-6 md:h-8 rounded-full bg-white p-1.5 md:p-2 text-blue-600 drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {openModal && (
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }} 
                            className='absolute top-0 left-0 h-screen text-black w-screen  justify-center items-center flex toppppp'
                        >
                            <div className='flex flex-col justify-center items-center toppppp gap-8 drop-shadow-2xl rounded-2xl z-10 h-[80vh] w-[60vw]'>
                                <h1 className='-mt-8 text- font-semibold tracking-tighter text-center text-3xl'>Publications</h1>
                                <div className='mt-8 gap-8 w-full md:w-4/6 lg:w-1/2 justify-center grid grid-cols-2 items-start'>
                                    {publicationData.map((pub,idx)=>(
                                        <div key={idx}>
                                            <a
                                                target="_blank"
                                                href={pub.link}
                                                className='bg-white h-full flex justify-center flex-col items-center hover:bg-blue-100 text-sm md:text-lg ring-2 ring-blue-100 rounded-xl md:px-8 p-2 md:p-4'
                                            >
                                                {pub.title}
                                                <br/>
                                                <span className='text-xs md:text-sm mt-1 block text-center opacity-50'>{pub.date}</span>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <button className='absolute toppppp pointer-events-auto bg-red-500 ring-white ring-2 text-sm text-white px-4 p-2 rounded-xl bottom-8 centerh' onClick={()=>setOpenModal(false)}>
                                    Close <MdOutlineClose className="inline w-4 h-4" />
                                </button>
                            </div>
                            <div className='backdrop-blur-lg bg-white cursor-pointer w-screen h-screen absolute top-0 left-0 z-[1]'></div>
                        </motion.div>  
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact