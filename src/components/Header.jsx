import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = [
    "Home",
    "Trustees",
    "MileStones",
    "Alumni",
    "Gallery",
    "Careers",
    "Contact",
  ];

  const handleNavigation = (section) => {
    
    if(section === "Careers") {
      window.open("https://careers.psginstitutions.in", "_blank");   
      setMenuOpen(false);
      return;
    } 

    const idMap = {
      Alumni: "alumni.2",
       
    };
    const sectionId = idMap[section] || section.toLowerCase();
    setMenuOpen(false);

    if (location.pathname !== "/") {
      // Navigate to homepage and append the hash
      navigate(`/#${sectionId}`);
    } else {
      // Already on homepage – trigger fullPage scroll
      if (window.fullpage_api) {
        window.fullpage_api.moveTo(sectionId);
      } else {
        // fallback if fullpage isn't ready
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const [Modal, setOpenModal] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black p-2 rounded-full bg-white shadow-md"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-40">
            <ul className="flex flex-col items-start px-6 py-4 space-y-4">
              {navItems.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNavigation(item)}
                    className="text-base font-bold text-black hover:text-blue-600 uppercase"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between px-10 py-2 shadow-md backdrop-blur-xs bg-transparent">
          <a href="/#home" className="flex items-center px-12">
            <img
              src="/images/Logo.png"
              alt="PSG Logo"
              className="w-16 h-auto object-contain"
            />
          </a>
          <nav className="flex space-x-16">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => handleNavigation(item)}
                className="text-md font-semibold text-black hover:text-blue-600 uppercase"
              >
                {item}
              </button>
            ))}
          </nav>
          <div
            className="flex items-center px-12 cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            <img
              src="/images/100yearsLogo.png"
              alt="PSG Logo"
              className="w-24 h-auto object-contain"
            />
          </div>
        </div>
      </header>
      {Modal && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpenModal(false)}
          >
            <motion.div
              className={`relative p-2 max-w-3xl w-full mx-2 bg-white rounded-lg overflow-hidden shadow-lg ${
                Modal
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-95 opacity-0 -translate-y-10"
              }`}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-black bg-white rounded-full p-1 shadow-md hover:bg-gray-200"
                onClick={() => setOpenModal(false)}
              >
                <FiX size={24} />
              </button>
              <img
                src="/images/100yearsLogo.png"
                alt="PSG 100 Years Logo"
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Header;
