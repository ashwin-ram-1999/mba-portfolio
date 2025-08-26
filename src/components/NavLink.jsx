import React from 'react';

const NavLink = ({ sectionId, children }) => (
  <a href={`#${sectionId}`} className="text-lg font-medium hover:text-purple-400 transition-colors duration-300">
    {children}
  </a>
);

export default NavLink;
