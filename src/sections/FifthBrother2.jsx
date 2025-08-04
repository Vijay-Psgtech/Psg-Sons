import React, { useRef } from 'react';

const FifthBrother2 = () => {
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
        <p className="text-md tracking-widest uppercase font-semibold">Chapter 5</p>
        <h1 className="text-2xl md:text-5xl mt-5 font-extrabold tracking-tight w-10/12 lg:w-full text-center mx-auto">
           PSG & Sons' Charities
            <div className="mt-4 md:mt-8 w-1/4 mx-auto border-b-yellow-600 border-b-2"></div>
        </h1>
        <p className="w-10/12 md:w-3/4 lg:w-1/2 mx-auto mt-4 md:mt-16 text-justify md:text-center text-base md:text-lg font-medium text-gray-800">
          In 1926, the four brothers took a significant step by partitioning their ancestral properties to give rise to PSG & Sons' Charities, effectively becoming the fifth brother in their legacy. The primary objective was to champion inclusive education, provide a platform for technical empowerment among the youth, and actively contribute to the welfare of the underprivileged. The inaugural institution, Sarvajana, embodied an egalitarian ethos, envisioned as a school "for all people." The PSG family's unwavering faith in the transformative power of education played a pivotal role in propelling Coimbatore into a prominent educational and industrial hub. Presently, PSG & Sons' Charities extends its influence to over 30,000 students across 30 educational institutions, offering a comprehensive array of educational opportunities ranging from kindergartens to medical education.
        </p>
      </div>
    </div>
  );
};

export default FifthBrother2;
