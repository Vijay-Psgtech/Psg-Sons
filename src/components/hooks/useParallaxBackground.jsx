// hooks/useParallaxBackground.js
import { useMotionValue, useTransform } from "framer-motion";

export const useParallaxBackground = (rangeX = 30) => {
  // Mouse move parallax (X)
  const x = useMotionValue(0);
  const translateX = useTransform(x, [-300, 300], [-rangeX, rangeX]);

  // Mouse move handler
  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { width, left } = currentTarget.getBoundingClientRect();
    const relativeX = clientX - left;
    const move = (relativeX / width - 0.5) * 600; // adjust sensitivity
    x.set(move);
  };

  return { handleMouseMove, translateX };
};
