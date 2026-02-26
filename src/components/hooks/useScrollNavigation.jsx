/**
 * Custom hook for managing horizontal scroll navigation
 * Provides methods to scroll left, right, to start, and to end
 *
 * @param {number} scrollDistance - Distance to scroll on left/right (default: 600)
 * @returns {Object} - { scrollRef, handleScrollLeft, handleScrollRight, scrollToStart, scrollToEnd }
 */

import { useRef, useCallback } from "react";

export const useScrollNavigation = (scrollDistance = 600) => {
  const scrollRef = useRef(null);

  const handleScrollLeft = useCallback(() => {
    scrollRef.current?.scrollBy({
      left: -scrollDistance,
      behavior: "smooth",
    });
  }, [scrollDistance]);

  const handleScrollRight = useCallback(() => {
    scrollRef.current?.scrollBy({
      left: scrollDistance,
      behavior: "smooth",
    });
  }, [scrollDistance]);

  const scrollToStart = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  const scrollToEnd = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

  return {
    scrollRef,
    handleScrollLeft,
    handleScrollRight,
    scrollToStart,
    scrollToEnd,
  };
};
