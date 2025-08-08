import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({ bgImage, children }) => {
  const x = useMotionValue(0);
  const translateX = useTransform(x, [-200, 200], [-15, 15]);

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { width, left } = currentTarget.getBoundingClientRect();
    const relativeX = clientX - left;
    const move = ((relativeX / width) - 0.5) * 400; // adjust sensitivity
    x.set(move);
  };

  return (
    <div
      className="section relative flex flex-col justify-center items-center text-center h-[100dvh] w-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background with parallax + fade */}
      <motion.div
        style={{ x: translateX }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={bgImage}
          alt="Section background"
          loading="lazy"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      {/* Foreground content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
