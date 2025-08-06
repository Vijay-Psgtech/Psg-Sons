import React, { useState } from 'react'
import SideDrawer from '../components/common/SideDrawer';

const drawerData = 
{
    image: "/images/trustees/Fgopal.webp",
    title: "L. Gopalakrishnan",
    content: [
        "Shri L. Gopalakrishnan assumed the role of Managing Trustee in May 2011, emphasizing quality education and the significance of research. He promoted faculty research through initiatives like scholarships for research scholars and the creation of PSG Distinguished Professor Fellowship.",
        
        "Under his leadership, a Center for Excellence was established at PSG College of Technology and PSG Institute of Medical Sciences and Research. Additionally, a hospital was inaugurated at Karadivavi, and collaborations with U.S. and European universities were initiated.",
        
        "Shri L. Gopalakrishnan pioneered 'Vishnugranthi' in 2013, providing life education for children with special needs. In 2014, PSG Institute of Technology and Applied Research was founded, promoting the integration of teaching and research.",
        
        "Noteworthy initiatives include the 'Vanavil' platform for Tamil literary personalities, the revival of the 'PSG Kadambari' musical festival, and the 'Yuva Kala Ratna Award' to recognize musical talent in Coimbatore.",
        
        "He spearheaded the creation of an eco-friendly crematorium in Peelamedu and introduced training for Panchayat Union school teachers. PSG & Sons Charities organized master health check-ups for Coimbatore police personnel and introduced alumni health cards.An undergraduate program on Robotics and Automation addressed industrial automation needs.",
        
        "As part of PSG Institutions' Corporate Social Responsibility, a crematorium facility and drinking water projects were established.During his ongoing tenure, a 10 lakh square feet building was constructed for PSG Hospital's requirements, and facilities such as the Convention Centre, Institute of Architecture and Planning in Neelambur, and PSG Institute of Oncology have been established.",
    ]
};

const Leading = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleImageClick = () => {
        setOpenDrawer(true);
    };
   
    return (
        <>
            <div className='section h-[100dvh]'>
                <div className='overflow' tabIndex="-1">
                    <div className='flex flex-col overflow-hidden relative text-center justify-center items-center h-[100dvh] w-full'>
                    
                        {/* Background Image */}
                        <div className='absolute left-0 top-0 w-full bottt overflow-hidden h-[100dvh] z-0'>
                            <div className='absolute left-0 top-0 w-full overflow-hidden h-[100dvh]'>
                            <img 
                                alt="bg" 
                                loading="lazy" 
                                width={1587} 
                                height={1079} 
                                className='absolute scale-[110%] top-0 left-0 w-full h-[100dvh] object-cover opacity-60' 
                                src="/images/bg2.jpg" 
                            />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className='relative z-10 text-gray-900 px-4'>
                            <p className='text-md tracking-widest uppercase font-semibold'>Chapter 6</p>
                            <h1 className='text-5xl mt-5 font-bold tracking-tighter w-10/12 lg:w-full text-center mx-auto'>
                                Visionaries 
                                <br />
                                Leading the Way
                            </h1>
                        </div>

                        {/* Foreground Image (Trustee) */}
                        <img 
                            alt="trustee" 
                            loading="lazy" 
                            width={180} 
                            height={177}  
                            className="absolute z-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer toppp -bottom-2 -left-0 w-1/2 md:w-1/4"
                            src="/images/trustee.png" 
                            onClick={() => {
                                handleImageClick()
                            }}
                        />
                        
                    </div>
                </div>
                <SideDrawer
                    isOpen={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                    data={drawerData}
                />
            </div>     
        </>
    )
}

export default Leading