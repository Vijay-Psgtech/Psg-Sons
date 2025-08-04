import React, { useRef } from 'react';

const Brothers2 = () => {
  const bgRef = useRef();

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { width, left } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const moveX = ((x / width) - 0.5) * 20; // range: -10 to 10

    if (bgRef.current) {
      bgRef.current.style.transform = `translateX(${moveX}px)`;
    }
  };

  return (
    <div
      className="section relative flex flex-col justify-center items-center text-center h-[100dvh] w-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with smooth X translation */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out"
      >
        <img
          src="/images/bg2.jpg"
          alt="Visionay2"
          loading="lazy"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

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
    </div>
  );
};

export default Brothers2;
