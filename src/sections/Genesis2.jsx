import React, { useRef } from 'react';

const Genesis2 = () => {
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
          alt="Genesis2"
          loading="lazy"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-gray-900 px-4">
        <p className="text-md tracking-widest uppercase font-semibold">Chapter 1</p>
        <h1 className="text-2xl md:text-5xl mt-5 font-extrabold tracking-tight w-10/12 lg:w-full text-center mx-auto">
          Ganga Naidu
          <br /> &
          <span className="text-xl md:text-3xl block font-bold">
            The Foundation of Poolai Medu
            <div className="mt-4 md:mt-8 w-1/4 mx-auto border-b-red-600 border-b-2"></div>
          </span>
        </h1>
        <p className="w-10/12 md:w-3/4 lg:w-1/2 mx-auto mt-4 md:mt-16 text-justify md:text-center text-base md:text-lg font-medium text-gray-800">
          Ganga Naidu's visionary establishment of Poolai Medu on November 11, 1711, marks the beginning of a significant chapter in history. The settlement became a melting pot for historical immigration, fostering a unique blend of Andhra Pradesh, Karnataka, and local Tamil communities. Through relentless hard work and innovative agricultural practices, the once-wilderness region transformed into a thriving oasis. The community's deep gratitude is evident in the bestowed titles like 'Peria Veettukarar' and 'Dharmakartas,' honoring not only Ganga Naidu but also his descendants for their contributions to the region's growth and prosperity. Over time, the name ‘Poolai Medu’ gracefully evolved into the present day 'Peelamedu'.
        </p>
      </div>
    </div>
  );
};

export default Genesis2;
