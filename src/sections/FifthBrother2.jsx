import React, { useRef } from 'react';
import AnimatedSection from '../components/common/AnimatedSection';

const FifthBrother2 = () => {
  return (
    <AnimatedSection bgImage="/images/bg2.webp">
      {/* Foreground content */}
      <div className="relative z-10 text-gray-900 px-4">
        <p className="text-sm md:text-md tracking-wide md:tracking-widest uppercase font-semibold text-center">
          Chapter 5
        </p>

        <h1 className="text-xl sm:text-3xl md:text-5xl mt-5 font-extrabold tracking-tight w-full md:w-10/12 lg:w-full text-center mx-auto px-2">
          PSG & Sons' Charities
          <div className="mt-3 md:mt-8 w-1/4 mx-auto border-b-yellow-600 border-b-2"></div>
        </h1>

        <p className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 mx-auto mt-4 md:mt-16 text-justify md:text-center text-sm sm:text-base md:text-lg font-medium text-gray-800 leading-relaxed px-3">
          In 1926, the four brothers took a significant step by partitioning their ancestral
          properties to give rise to PSG & Sons' Charities, effectively becoming the fifth brother
          in their legacy. The primary objective was to champion inclusive education, provide a
          platform for technical empowerment among the youth, and actively contribute to the welfare
          of the underprivileged. The inaugural institution, Sarvajana, embodied an egalitarian ethos,
          envisioned as a school "for all people." The PSG family's unwavering faith in the transformative
          power of education played a pivotal role in propelling Coimbatore into a prominent educational
          and industrial hub. Presently, PSG & Sons' Charities extends its influence to over 30,000 students
          across 30 educational institutions, offering a comprehensive array of educational opportunities
          ranging from kindergartens to medical education.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default FifthBrother2;
