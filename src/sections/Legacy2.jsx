import React, { useRef } from 'react';

const Legacy2 = () => {
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
          alt="Legacy2"
          loading="lazy"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-gray-900 px-4">
        <p className="text-md tracking-widest uppercase font-semibold">Chapter 2</p>
        <h1 className="text-2xl md:text-5xl mt-5 font-extrabold tracking-tight w-10/12 lg:w-full text-center mx-auto">
          Sama Naidu 
            <br/>
            <div className="mt-4 md:mt-8 w-1/4 mx-auto border-b-red-600 border-b-2"></div>
        </h1>
        <p className="w-10/12 md:w-3/4 lg:w-1/2 mx-auto mt-4 md:mt-16 text-justify md:text-center text-base md:text-lg font-medium text-gray-800">
          Venkatarama Naidu was a member of the esteemed 'Periya Veedu' family and the grandson of Ganga Naidu. Venkatarama Naidu had four sons namely Dharmakartha Muthu Naidu, Lingappa Naidu, Sama Naidu, and Rangaswamy Naidu. Sama Naidu, known for his friendly demeanor and immense generosity, earned the affection of Poolai Medu residents.
        </p>
        <div className='text-center pb-8 w-10/12 md:w-3/4 lg:w-1/2 mx-auto mt-6 lead'>
            Sama Naidu's marriage to Ranganayaki Ammal resulted in the birth of four sons:
            <ul className='grid grid-cols-2 gap-4 font-semibold justify-center mt-4 '>
                <li className='text-sm flex justify-center items-center min-h-[5rem] p-3 rounded-lg bg-white drop-shadow-xl  px-5'>
                    P.S. Narappa Naidu
                </li>
                <li className='text-sm flex justify-center items-center min-h-[5rem] cursor-pointer p-3 rounded-lg bg-white drop-shadow-xl  px-5'>
                    P.S. Govindaswamy Naidu
                </li>
                <li className='text-sm flex justify-center items-center min-h-[5rem] p-3 rounded-lg bg-white drop-shadow-xl  px-5'>
                    P.S. Kondaswamy Naidu
                </li>
                <li className='text-sm flex justify-center items-center min-h-[5rem] p-3 rounded-lg bg-white drop-shadow-xl  px-5'>
                    P.S. Krishnamma Naidu
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Legacy2;
