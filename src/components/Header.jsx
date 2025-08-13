import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
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
    "Contact",
  ];

  const handleNavigation = (section) => {
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

  return (
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
        <a href="/#home" className="flex items-center px-12">
          <img
            src="/images/100yearsLogo.png"
            alt="PSG Logo"
            className="w-24 h-auto object-contain"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
