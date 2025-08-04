import React, { useRef } from 'react';

const Visionary2 = () => {
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
        <p className="text-md tracking-widest uppercase font-semibold">Chapter 3</p>
        <h1 className="text-2xl md:text-5xl mt-5 font-extrabold tracking-tight w-10/12 lg:w-full text-center mx-auto">
            P.S.Govindaswamy Naidu 
            <div className="mt-4 md:mt-8 w-1/4 mx-auto border-b-blue-600 border-b-2"></div>
        </h1>
        <p className="w-10/12 md:w-3/4 lg:w-1/2 mx-auto mt-4 md:mt-16 text-justify md:text-center text-base md:text-lg font-medium text-gray-800">
          PS Govindaswamy Naidu, the second son of Sama Naidu, emerged as a visionary committed to charitable initiatives in his village. Inheriting both fertile and dry land, he engaged in trading cotton, earning respect within the trading community. PS Govindaswamy Naidu's leadership extended beyond commerce, as he championed piety and charitable values. The name PSG, representing 'Periya Veedu,' 'Sama Naidu,' and 'Govindaswamy Naidu,' symbolizes the enduring legacy of values passed down through generations.
        </p>
      </div>
    </div>
  );
};

export default Visionary2;
