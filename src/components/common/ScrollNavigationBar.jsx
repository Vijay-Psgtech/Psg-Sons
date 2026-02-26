/**
 * Reusable ScrollNavigationBar Component
 *
 * Combines scroll navigation logic with UI controls
 * Includes: Start button, Scroll Left, Scroll Right, End button
 *
 * @param {React.Ref} scrollRef - REQUIRED: Reference to the scrollable container
 * @param {number} scrollDistance - Optional: Custom scroll distance (default: 600)
 * @param {string} className - Optional: Additional CSS classes
 * @param {boolean} showLabels - Optional: Show "Start" and "End" text labels (default: true)
 *
 * @returns {JSX.Element}
 */

import { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import NavButton from "./NavButton";

const ScrollNavigationBar = ({
  scrollRef,
  scrollDistance = 600,
  className = "",
  showLabels = true,
}) => {
  // Create handlers that use the external scrollRef directly
  const handleScrollLeft = useCallback(() => {
    scrollRef?.current?.scrollBy({
      left: -scrollDistance,
      behavior: "smooth",
    });
  }, [scrollRef, scrollDistance]);

  const handleScrollRight = useCallback(() => {
    scrollRef?.current?.scrollBy({
      left: scrollDistance,
      behavior: "smooth",
    });
  }, [scrollRef, scrollDistance]);

  const scrollToStart = useCallback(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [scrollRef]);

  const scrollToEnd = useCallback(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [scrollRef]);

  return (
    <div
      className={`hidden md:flex shrink-0 gap-4 absolute right-16 bottom-12 z-20 ${className}`}
    >
      {showLabels && (
        <button
          onClick={scrollToStart}
          className="text-sm text-gray-700 font-medium transition-colors hover:text-gray-900 cursor-pointer"
        >
          <MdKeyboardDoubleArrowLeft className="inline mr-1" />
          Start
        </button>
      )}

      <NavButton onClick={handleScrollLeft} title="Scroll left">
        <FaChevronLeft />
      </NavButton>

      <NavButton onClick={handleScrollRight} title="Scroll right">
        <FaChevronRight />
      </NavButton>

      {showLabels && (
        <button
          onClick={scrollToEnd}
          className="text-sm text-gray-700 font-medium transition-colors hover:text-gray-900 cursor-pointer"
        >
          End
          <MdKeyboardDoubleArrowRight className="inline ml-1" />
        </button>
      )}
    </div>
  );
};

export default ScrollNavigationBar;
