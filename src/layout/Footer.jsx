import React from 'react';

const Footer = ({ name }) => (
  <footer className="relative z-10 text-center py-8 border-t border-purple-800/20">
    <p className="text-gray-400">Designed &amp; Built by {name}</p>
    <p className="text-gray-500 text-sm">&copy; 2025 All rights reserved.</p>
  </footer>
);

export default Footer;
