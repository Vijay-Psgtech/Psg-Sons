import React, { useRef, useState, useEffect } from "react";
import { FaChevronDown, FaHandPointRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParallaxBackground } from "../components/hooks/useParallaxBackground";
import ScrollNavigationBar from "../components/common/ScrollNavigationBar";
import { useScrollNavigation } from "../components/hooks/useScrollNavigation";
import { alumniGroups } from "../components/content/Content";

const Alumni2 = () => {
  const { scrollRef } = useScrollNavigation(600);
  const [selectedGroup, setSelectedGroup] = useState(
    "PSG ARTS ALUMNI ASSOCIATION"
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const { handleMouseMove, translateX } = useParallaxBackground(20, 80);

  // Touch & drag scroll
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
      isDown = true;
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = slider.scrollLeft;
    };

    const stopDragging = () => {
      isDown = false;
    };

    const whileDragging = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1.5; // drag speed
      slider.scrollLeft = scrollLeft - walk;
    };

    // Mouse events
    slider.addEventListener("mousedown", startDragging);
    slider.addEventListener("mouseleave", stopDragging);
    slider.addEventListener("mouseup", stopDragging);
    slider.addEventListener("mousemove", whileDragging);

    // Touch events
    slider.addEventListener("touchstart", startDragging);
    slider.addEventListener("touchend", stopDragging);
    slider.addEventListener("touchmove", whileDragging);

    return () => {
      slider.removeEventListener("mousedown", startDragging);
      slider.removeEventListener("mouseleave", stopDragging);
      slider.removeEventListener("mouseup", stopDragging);
      slider.removeEventListener("mousemove", whileDragging);

      slider.removeEventListener("touchstart", startDragging);
      slider.removeEventListener("touchend", stopDragging);
      slider.removeEventListener("touchmove", whileDragging);
    };
  }, []);

  const currentAlumni = alumniGroups[selectedGroup] || [];

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#alumni.2" && scrollRef.current) {
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
      className="section min-h-screen w-full relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.img
        style={{ x: translateX }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        src="/images/bg2.webp"
        alt="Alumni Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110"
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-9 py-10 sm:py-42 md:py-30 flex flex-col items-center">
        {/* Dropdown */}
        <div className="relative mb-3 w-full max-w-xs sm:max-w-md h-5 py-7">
          <button
            className="p-3 text-blue-800 text-sm mx-auto border-b bg-white drop-shadow-lg rounded-lg flex items-center gap-2 w-full justify-between"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedGroup}
            <FaChevronDown />
          </button>
          {showDropdown && (
            <div className="absolute top-full mt-2 left-0 bg-white rounded shadow-lg z-50 w-full sm:w-80">
              {Object.keys(alumniGroups).map((group) => (
                <div
                  key={group}
                  onClick={() => {
                    setSelectedGroup(group);
                    setShowDropdown(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm ${
                    selectedGroup === group
                      ? "text-blue-700 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {group}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Alumni Slider */}
        <div className="relative w-full">
          {/* Navigation Buttons */}
          <ScrollNavigationBar scrollRef={scrollRef} scrollDistance={600} />

          {/* Alumni Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-hidden scroll-smooth pb-6 sm:pb-8 pt-4 px-2 sm:px-4 cursor-grab active:cursor-grabbing"
          >
            {currentAlumni.map((alum, index) => (
              <div
                key={index}
                className="shrink-0 w-56 sm:w-64 md:w-72 rounded-lg p-5 sm:p-6 text-center bg-opacity-80 md"
              >
                <img
                  src={alum.image}
                  alt={alum.name}
                  className="w-full h-60 object-cover rounded-lg mb-4 sm:mb-6"
                />
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight whitespace-pre-wrap">
                  {alum.name}
                </h1>
                <div className="font-sans mt-1 text-xs sm:text-sm">
                  {alum.role}
                </div>
                <p className="mt-2 font-sans font-semibold text-xs sm:text-sm">
                  {alum.details}
                </p>
                <p className="mt-2 font-sans font-semibold text-xs sm:text-sm">
                  {alum.description}
                </p>
                <a
                  href={`mailto:${alum.email}`}
                  className="font-sans mt-4 text-xs sm:text-sm underline block"
                >
                  {alum.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Swipe Animation (Mobile Only) */}
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
    </div>
  );
};

export default Alumni2;
