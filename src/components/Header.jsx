import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['Home', 'Trustees', 'MileStones', 'Alumni', 'Gallery', 'Contact'];

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm shadow-md'>
      <div className='max-w-7xl mx-auto px-6 py-3 flex justify-between items-center'>
        {/* Logo */}
        <a href="#home"><img src="/images/Logo.png" alt="PSG Logo" className='w-16 cursor-pointer' /></a>

        {/* Desktop Nav */}
        <nav className='hidden md:flex space-x-10'>
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className='text-sm font-bold text-black hover:text-blue-600 uppercase'
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-black p-2 rounded-full bg-white shadow'
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-40'>
          <ul className='flex flex-col items-start px-6 py-4 space-y-4'>
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className='text-base font-bold text-black hover:text-blue-600 uppercase'
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
