import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Sidebar animation variants
  const sidebarVariants = {
    open: { x: 0, transition: { duration: 0.3 } },
    closed: { x: '-100%', transition: { duration: 0.3 } },
  };

  return (
    <div className="relative ">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 m-4 rounded-full text-gray-300 bg-gray-800 "
      >
         <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        
      </button>

      {/* Sidebar */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-20"
      >
        <div className="p-6 flex flex-col gap-5 ">
        <div><Link to='/'>HOME</Link></div>
        <div><Link to='/signin'>SIGN IN</Link></div>
             <div><Link to='/createAccount'>CREATE ACCOUNT</Link></div>
             <div><Link to='/films'>FILMS</Link></div>
          
        </div>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
