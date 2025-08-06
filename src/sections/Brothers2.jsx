import React, { useRef } from 'react';
import AnimatedSection from '../components/common/AnimatedSection';

const Brothers2 = () => {
  return (
    <AnimatedSection bgImage="/images/bg2.jpg">
      {/* Foreground content */}
      <div className="relative z-10 text-gray-900 px-4">
        <p className="text-md tracking-widest uppercase font-semibold">Chapter 4</p>
        <h1 className="text-2xl md:text-5xl mt-5 font-extrabold tracking-tight w-10/12 lg:w-full text-center mx-auto">
            The PSG Brothers
            <div className="mt-4 md:mt-8 w-1/4 mx-auto border-b-blue-600 border-b-2"></div>
        </h1>
        <p className="w-10/12 md:w-3/4 lg:w-1/2 mx-auto mt-4 md:mt-16 text-justify md:text-center text-base md:text-lg font-medium text-gray-800">
          PS Govindaswamy Naidu married Manguthayammal and the couple had four sons: PSG Venkataswamy Naidu, PSG Rangaswamy Naidu, PSG Ganga Naidu, and PSG Narayanaswamy Naidu. Renowned for their ingenuity and forward-thinking, the PSG Brothers made a pivotal decision in 1922, channeling their acumen into the Sri Ranga Vilas Ginning, Spinning, and Weaving Mills. This strategic move catalyzed the metamorphosis of Coimbatore into the <span className='font-semibold'>"Manchester of South India"</span>in the ensuing years. Their impact, however, transcended the realm of textiles, encompassing groundbreaking initiatives in mechanized agriculture, marked by the introduction of the region's maiden tractor and early adoption of electricity. The PSG Brothers' collective vision and adaptability left an indelible imprint on Coimbatore's industrial landscape, steering the city's trajectory and playing a pivotal role in its enduring growth.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default Brothers2;
