import React, { useEffect, useRef } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParallaxBackground } from "../components/hooks/useParallaxBackground";
import ScrollNavigationBar from "../components/common/ScrollNavigationBar";
import { useScrollNavigation } from "../components/hooks/useScrollNavigation";
import { milestones } from "../components/content/Content";

const MileStones = () => {
  const { scrollRef } = useScrollNavigation(600);
  const { handleMouseMove, translateX } = useParallaxBackground(20, 80);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#milestones" && scrollRef.current) {
        scrollRef.current.scrollLeft = 0;
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

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
          src="/images/bg2.webp"
        />
      </motion.div>

      {/* Content Area */}
      <div className="relative z-10 h-full w-full flex items-center justify-between px-8">
        {/* Navigation Buttons */}
        <ScrollNavigationBar scrollRef={scrollRef} scrollDistance={600} />

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
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
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
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`w-[20rem] ${index % 2 === 0 ? "mt-[40px]" : "mb-[3px]"} h-fit relative pb-8 border-l-black px-8 border-l-2`}
                      style={{
                        transform:
                          index % 2 === 0
                            ? "translateY(-100%)"
                            : "translateY(0px)",
                        paddingTop: index % 2 === 0 ? "0rem" : "2rem",
                        borderBottom:
                          index % 2 === 0 ? "2px solid black" : "none",
                        borderTop: index % 2 === 0 ? "none" : "2px solid black",
                      }}
                    >
                      <div
                        className={`${index % 2 === 0 ? "top-0" : "bottom-0"} absolute -translate-x-1/2 rounded-full p-1.5 ring-white ring-4 drop-shadow-md bg-red-800 left-0`}
                      ></div>

                      <h1 className="text-4xl w-fit tracking-tighter font-bold">
                        {milestone.year}
                      </h1>
                      <p className="mt-4">{milestone.text}</p>
                    </div>
                  ))}
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
