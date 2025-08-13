import React from "react";
import { motion } from "framer-motion";
import { useParallaxBackground } from "../components/hooks/useParallaxBackground";

const FifthBrother = () => {
  const { handleMouseMove, translateX } = useParallaxBackground(20, 80);
  return (
    <div className="section h-[100dvh]" onMouseMove={handleMouseMove}>
      <div className="overflow">
        <div className="flex flex-col relative justify-center text-center items-center h-[100dvh] w-full">
          <div className="absolute left-0 top-0 w-full bottt overflow-hidden h-[100dvh]">
            <motion.div
              style={{ x: translateX }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute left-0 top-0 w-full overflow-hidden h-[100dvh]"
            >
              <img
                src="/images/building.webp"
                loading="lazy"
                width="1835"
                height="1022"
                className="absolute top-0 left-0 w-full h-full object-cover scale-[110%] opacity-60"
                alt="visionary"
              />
              <div className="absolute inset-0 bg-white opacity-50" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative z-10 text-gray-900 px-4"
          >
            <p className="text-md tracking-widest uppercase font-semibold">
              Chapter 5
            </p>
            <h1 className="text-5xl mt-5 font-bold tracking-tighter w-10/12 lg:w-full text-center mx-auto">
              The Fifth Brother
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FifthBrother;
