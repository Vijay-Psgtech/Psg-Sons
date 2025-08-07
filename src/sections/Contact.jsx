import React from 'react';
import { motion } from "framer-motion";
import { useParallaxBackground } from '../components/hooks/useParallaxBackground';
import { FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaFacebookF  } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk   } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Contact = () => {
    const { handleMouseMove, translateX } = useParallaxBackground(20, 80);
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
                            <img src="/images/bg2.jpg" loading="lazy" width="1835" height="1022" className='absolute scale-[110%] top-0 left-0 w-full h-[100dvh] object-cover opacity-60' alt="visionary" />
                        </motion.div>
                        <div className='fader z-[9999999999] pointer-events-none w-full h-28 md:h-40 absolute bottom-0 '></div>
                    </div>
                    <div className='relative z-10 text-gray-900 px-4'>
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
                                    <button>Publications</button>
                                    <HiOutlineDocumentText className="absolute left-1/2 -translate-x-1/2 -top-4 w-6 md:w-8 h-6 md:h-8 rounded-full bg-white p-1.5 md:p-2 text-blue-600 drop-shadow-lg" />
                                </div>
                                <div className='bg-white border border-slate-300 hover:bg-white hover:text-black anim relative font-semibold p-4 md:p-6 px-8 md:px-12 w-11/12 md:w-fit rounded-xl shadow-md'>
                                    <button>Disclosures</button>
                                    <AiOutlineInfoCircle  className="absolute left-1/2 -translate-x-1/2 -top-4 w-6 md:w-8 h-6 md:h-8 rounded-full bg-white p-1.5 md:p-2 text-blue-600 drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact