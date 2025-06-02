
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from './icons/HeroIcons';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out ${
      isActive 
        ? 'bg-[#C5895A] text-white dark:bg-[#D4A373] dark:text-[#2C231E]' 
        : 'text-[#574133] dark:text-[#EFEAE6] hover:bg-[#F5EADD] dark:hover:bg-[#3E322B] hover:text-[#C5895A] dark:hover:text-[#D4A373]'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ease-in-out ${
    isActive 
      ? 'bg-[#C5895A] text-white dark:bg-[#D4A373] dark:text-[#2C231E]' 
      : 'text-[#574133] dark:text-[#EFEAE6] hover:bg-[#F5EADD] dark:hover:bg-[#3E322B] hover:text-[#C5895A] dark:hover:text-[#D4A373]'
  }`;

  return (
    <nav className="bg-white/80 dark:bg-[#352A24]/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 text-2xl font-bold text-[#C5895A] dark:text-[#D4A373]">
              Namaste
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClass} end>Home</NavLink>
              <NavLink to="/resume" className={navLinkClass}>Resume</NavLink>
              <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
              <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-[#8A766A] dark:text-[#A39890] hover:bg-[#F5EADD] dark:hover:bg-[#4A3F37] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#FDFBF9] dark:focus:ring-offset-[#352A24] focus:ring-[#C5895A]"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <SunIcon className="h-6 w-6 text-[#D4A373]" /> : <MoonIcon className="h-6 w-6 text-[#C5895A]" />}
            </button>
            <div className="md:hidden ml-2">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-[#8A766A] dark:text-[#A39890] hover:bg-[#F5EADD] dark:hover:bg-[#4A3F37] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#FDFBF9] dark:focus:ring-offset-[#352A24] focus:ring-[#C5895A]"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#DCD0C7] dark:border-[#4A3F37]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClass} onClick={toggleMobileMenu} end>Home</NavLink>
            <NavLink to="/resume" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Resume</NavLink>
            <NavLink to="/projects" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Projects</NavLink>
            <NavLink to="/blog" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Blog</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;