import React from 'react'

const sections = [
    { id: 'home', label: 'Home' },
    { id: 'genesis', label: '1. Genesis' },
    { id: 'legacy', label: '2. Legacy Continues' },
    { id: 'Visionary', label: '3. Visionary' },
    { id: 'brothers', label: '4. PSG Brothers' },
    { id: 'fifth-brother', label: '5. Fifth Brother' },
    { id: 'leading-the-way', label: '6. Visionaries' },
    { id: 'edu-odyssey', label: '7. Educational Odyssey' },
    { id: 'chronicles-of-excellence', label: '8. Chorincles of excellence' },
    { id: 'alumni', label: '9. Alumni' },
    { id: 'visual-heritage', label: '10. Visual heritage' },
    { id: 'contact', label: 'Contact' },
];

const SideNavbar = ({ activeSection }) => {
  return (
    <div className="hidden md:flex fixed top-0 left-0 h-screen w-16 z-50 bg-[#11214a] flex-col items-center py-6">
      <span className="text-white text-xs absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 rotate-180" style={{ writingMode: 'vertical-rl' }}>
        MENU
      </span>

      {/* Dots with connecting line */}
      <div className="relative flex flex-col items-center h-full justify-center space-y-10">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 w-px bg-white/30 z-0" />

        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className="relative group z-10"
            >
              {/* Dot */}
              <div className={`w-3 h-3 rounded-full transition-all duration-300
                ${isActive ? 'bg-blue-600 ring-6 ring-orange-500' : 'bg-white/50 hover:bg-white'}
              `}></div>

              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-left bg-white text-md font-bold text-gray-800 px-3 py-1 rounded-lg shadow whitespace-nowrap">
                {label}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  )
}

export default SideNavbar