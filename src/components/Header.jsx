import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['Home', 'Trustees', 'MileStones', 'Alumni', 'Gallery', 'Contact'];

  return (
    <header className='fixed top-0 left-0 w-full z-50'>
      {/* Mobile Header: Only menu icon on top-right */}
      <div className='md:hidden flex justify-end p-4'>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='text-black p-2 rounded-full bg-white shadow-md'
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
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

      {/* Desktop Header: Full navigation */}
      <div className='hidden md:flex items-center justify-between px-10 py-2 shadow-md backdrop-blur-xs bg-transparent'>
        {/* Logo */}
        <a href="#home" className="flex items-center px-12">
          <img
            src="/images/Logo.png"
            alt="PSG Logo"
            className='w-16 h-auto object-contain'
          />
        </a>

        {/* Navigation Items */}
        <nav className='flex space-x-16'>
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className='text-md font-semibold text-black hover:text-blue-600 uppercase'
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
