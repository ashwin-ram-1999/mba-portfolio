import React from 'react';
import NavLink from '../components/NavLink';

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50 shadow-lg shadow-purple-900/10">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#home" className="text-2xl font-bold text-purple-400">
        Ashwin
      </a>
      <div className="hidden md:flex space-x-8">
        <NavLink sectionId="about">About</NavLink>
        <NavLink sectionId="experience">Experience</NavLink>
        <NavLink sectionId="projects">Projects</NavLink>
        <NavLink sectionId="education">Education</NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
