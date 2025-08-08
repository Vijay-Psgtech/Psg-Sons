import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaHandPointRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParallaxBackground } from '../components/hooks/useParallaxBackground';
const MileStones = () => {
  const scrollRef = useRef(null);
  const { handleMouseMove, translateX } = useParallaxBackground(20, 80);

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="section h-screen w-full relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <motion.div 
            style={{ x: translateX }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} 
            className="absolute inset-0 z-0"
        >
            <img
                alt="Timeline Background"
                loading="lazy"
                width="1587"
                height="1079"
                decoding="async"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-60 scale-110 hover:animate-shake"
                src="/images/bg2.jpg"
            />
        </motion.div>

      {/* Content Area */}
      <div className="relative z-10 h-full w-full flex items-center justify-between px-8">
        {/* Navigation Buttons */}
        <div className="hidden md:flex shrink-0 gap-4 absolute right-13 bottom-12 z-2">
          <button
            onClick={handleScrollLeft}
            className="w-12 h-12 flex justify-center items-center bg-white rounded-full drop-shadow-md"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleScrollRight}
            className="w-12 h-12 flex justify-center items-center bg-white rounded-full drop-shadow-md"
          >
            <FaChevronRight />
          </button>
        </div>

        <div style={{ opacity: 1, transform: "translate(-0.46px, -0.02px)" }}>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-8 px-4 py-8 justify-start items-center"
          >
            <div className="ml-6 sm:ml-12 lg:ml-24 flex h-screen justify-center flex-col items-start shrink-0 w-[20rem] md:w-1/4">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                PSG Milestones
              </h1>
              <p className="mt-4 lg:mt-6 text-md sm:text-lg w-11/12 mb-36 shrink-0">
                Here are the notable milestones that have defined the
                institution over time. From its inception to the present, the
                college's unwavering commitment to educational excellence has
                shaped its remarkable journey. These chronicles serve as a
                testament to the college's enduring dedication to knowledge,
                growth, and the relentless pursuit of educational excellence.
              </p>
              <div className="md:hidden mb-2 flex flex-col items-center text-lg text-black">
                    <span className="mb-1">Swipe to Navigate</span>
                    
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="mt-1"
                    >
                        <FaHandPointRight className="text-xl w-6 h-6 text-indigo-500" />
                    </motion.div>
                </div>
            </div>
            <div className="shrink-0 pr-24 ml-16 flex justify-center items-center">
              <div className="w-4 h-4 shrink-0 rounded-full bg-black"></div>
              <div className="relative">
                <div
                  className="flex ml-8 absolute top-0"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div
                    className="px-8 mt-[2px] ml-[-2.5rem] -translate-y-full"
                    style={{ borderBottom: "2px solid black" }}
                  ></div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      1711
                    </h1>
                    <p
                      className="mt-4"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      After a long journey from their native land, Shri. Ganga
                      Naidu along with his family founded the settlement,
                      Poolaimedu, named after the Mound of Poolai flowers in the
                      region.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      1920
                    </h1>
                    <p
                      className="mt-4"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      For the maintenance of the modern equipment they used in
                      their agricultural farms, the family set up a workshop at
                      Papanaickenpalayam.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1920
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Just a few years after Graham Bell's wondrous invention,
                      PS Govindaswamy Naidu installed Coimbatore's first
                      telephone to manage their business establishments.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1921
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      On the auspicious occasion of Deepavali, the village
                      elders of Poolaimedu along with the PSG brothers gathered
                      to propose the establishment of a High School in the
                      village.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1922
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      In order to mitigate the economic shocks of the First
                      World War, the brothers set up Sri Ranga Vilas Ginning,
                      Spinning &amp; Weaving Mills.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1924
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      The small workshop made great headway and produced the
                      first indigenous Centrifugal Pump.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1924
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      June 4, Sarvajana School - the school for the masses,
                      opened its doors to the young learners of the Peelamedu
                      village with 170 students.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1925
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Thanthai Periyar, the rationalist leader visited Sarvajana
                      School.
                    </p>
                  </div>

                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1926
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG acquired the German Oil Expeller and ventured into
                      mechanising agricultural operations at a time when such
                      technologies were still in its primaeval stage.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1926
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG &amp; Sons' Charities Trust was born with an endowment
                      sum of Rs. 2,01,116/-.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1926
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Rabindranath Tagore visited Sarvajana School and sang the
                      “Jana Gana Mana” which became our national anthem after
                      independence.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1926
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      The Sarvajana High School came under the Trust's care.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1926
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Foundation Stone was laid for PSG Industrial Institute at
                      the workshop building making this historic space the
                      nucleus of the PSG &amp; Sons' Charities Trust.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1927
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      The first batch of students graduated from Sarvajana
                      School.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1934
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Mahatma Gandhi, the Father of our Nation visited the PSG
                      Institutions.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1935
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Hon. Sir. C.V. Raman, Indian Physicist and awardee of the
                      Nobel Prize in Physics, visited the PSG Institutions.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1939
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      War Technicians of World War II selected PSG Industrial
                      Institute as their training centre.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1939
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Polytechnic College was set up offering LME, LEE &amp;
                      LPT Programs
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1941
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Industrial Institute manufactured the 1st indigenous
                      electric motor
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1947
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Primary School welcomed its first batch of students.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1943
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Middle School at Vedapatti was inaugurated after it
                      was taken over from the Coimbatore District Board to help
                      fulfil educational demands in the growing suburb of
                      Vedapatti, Coimbatore.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1947
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      To fill the dearth of good arts colleges in the region,
                      PSG College of Arts &amp; Science was established.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1951
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      In order to meet the need of technical education in the
                      growing industrial city of Coimbatore, PSG College of
                      Technology was established.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1951
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Rural Health Centres began operating at Vedapatti,
                      Karadivavi, Neelambur to provide affordable health care
                      services to the marginalised communities in those areas.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1958
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Technology manufactured India's 1st
                      variable speed electric motor.
                    </p>
                  </div>

                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1962
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Thiru K. Kamaraj, the then Chief Minister of Tamil Nadu
                      inaugurated the PSG Polytechnic Hostel
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1969
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      The Prestigious President's Award was won by PSG
                      Industrial Institute and PSG College of Technology for
                      import substitution of the generalised electromechanical
                      energy Converter
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1972
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG pioneered in usage of Computer Technology in
                      industries for designing new products
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1974
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG &amp; Sons' Charities Metallurgy and Foundry division
                      was established in Neelambur
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1976
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Polytechnic College was conferred with the Autonomous
                      status
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1977
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Technology celebrated its Silver Jubilee.
                      It was also conferred with Autonomous status.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1978
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Arts &amp; Science was conferred with
                      Autonomous status
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1985
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Institute of Medical Sciences &amp; Research was
                      established to provide quality medical education
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1986
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Industrial Training Centre commenced classes
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1987
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Diamond Jubilee Year celebrations of the PSG &amp; Sons'
                      Charities
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1989
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Golden Jubilee year of PSG Polytechnic College
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1989
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      MOU Signed with CII
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1989
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Hospitals was inaugurated as a teaching affiliate of
                      PSG IMS&amp;R
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1989
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Centre for Sponsored Research &amp; Consultancy was
                      established
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1989
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Centre for Non Formal &amp; Continuing Education was
                      opened
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1993
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Urban Health Centre was set up.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1994
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Institute of Management was established as an
                      autonomous institute dedicated to management studies and
                      research.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1994
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Nursing was established.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1995
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      UNDP - Jute Diversified Production and Training Centre
                      Started
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1997
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Technology got accreditation for 18 study
                      programs
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1998
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Science &amp; Technology Entrepreneurial Park (PSG
                      STEP) was established
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      1999
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Physiotherapy commenced classes
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2000
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      National Assessment and Accreditation Council (NAAC)
                      awarded the highest 5 Star Rating to PSG College of Arts
                      &amp; Science
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2000
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      ISO 9001 Standard Certificate issued to PSG College of
                      Technology by Standardisation Testing and Quality
                      Certification (STQC)
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2001
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      ISO 9001 Standard Certificate issued to PSG College of
                      Arts &amp; Science.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2001
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Technology Golden Jubilee inauguration
                      exhibition was inaugurated
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2001
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Pharmacy, PSG College of Arts &amp; Science
                      and PSG Centre for Advertising &amp; Communication were
                      opened.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2002
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Hon. Dr. A.P.J. Abdul Kalam visited PSG Institutions.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2002
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Children's School began classes for Pre-KG through
                      standard V
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2003
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Offshore Healthcare Management Services began
                      operations
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2004
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Arts &amp; Science bagged the most
                      prestigious and coveted status, “College with Potential
                      for Excellence” by the University Grants Commission (UGC)
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2005
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Polytechnic College got accreditation for 5 study
                      programs.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2005
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG High School of Vedapatti began classes to meet the
                      demand for quality education in the area.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2006
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Products of PSG Institutions exhibited in commemoration of
                      the 80th year Celebrations of PSG &amp; Sons' Charities
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2006
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Institute of Advanced Studies began accepting
                      admission for its research and foreign degree programs.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2007
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Arts &amp; Science accredited with A+ Grade
                      by the National Assessment and Accreditation Council of
                      India (NAAC)
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2008
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Public School started under the Central Board of
                      School Education Guidelines
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2011
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Diamond Jubilee year celebrations of PSG College of
                      Technology.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2011
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      TechEx - An Exhibition of the Products of PSG Alumni was
                      conducted
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2013
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Centenary celebrations of Dr. G.R.Damodaran's birth
                      anniversary.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2013
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Vishnugranthi Day Care Centre opened exclusively for
                      the wellbeing of Specially-abled Children with novel
                      facilities
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2014
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Institute of Technology and Applied Research was
                      established for the promotion of popular education at all
                      levels without any reservation
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2015
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Samarpan, an eco-friendly crematorium dedicated to the
                      public began operating.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2015
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Centre For Academic Research And Excellence was set
                      up.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2017
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Software Technologies began operations.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2021
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Institute of Architecture and Planning was
                      established.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2022
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG Convention Center was inaugurated.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2022
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Arts &amp; Science celebrated its Platinum
                      Jubilee by creating the Guinness World Record for the most
                      clay pots arranged in a single formation by arranging
                      76,168 clay pots in the formation of Number 75.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mb-[3px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(0px)",
                      paddingTop: "2rem",
                      borderBottom: "none",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className=" bottom-0  absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2023
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      PSG College of Technology was the only engineering college
                      in Tamil Nadu to host the G20 Lecture Series.
                    </p>
                  </div>
                  <div
                    className="w-[20rem] mt-[40px] h-fit relative pb-8 border-l-black px-8 border-l-2"
                    style={{
                      transform: "translateY(-100%)",
                      paddingTop: "0rem",
                      borderBottom: "2px solid black",
                      borderTop: "none",
                    }}
                  >
                    <div className=" top-0 absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0"></div>
                    <h1
                      className="text-4xl w-fit tracking-tighter font-bold"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      2023
                    </h1>
                    <p
                      className="mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateX(50px) translateZ(0px)",
                      }}
                    >
                      Centenary celebration of PSG Sarvajana High School
                    </p>
                  </div>
                  <div className="px-16"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MileStones;
