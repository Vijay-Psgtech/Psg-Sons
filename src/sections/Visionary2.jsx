import React, { useRef } from 'react';
import AnimatedSection from '../components/common/AnimatedSection';

const Visionary2 = () => {

  return (
    <AnimatedSection bgImage="/images/bg2.jpg">
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
    </AnimatedSection>
  );
};

export default Visionary2;
