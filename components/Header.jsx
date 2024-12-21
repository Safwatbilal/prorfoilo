'use client'
import { useState } from "react";
import { FaChartBar, FaCog, FaUser, FaProjectDiagram, FaGraduationCap, FaGithub,FaUserCircle, FaFile, FaCreditCard, FaBars, FaTimes } from 'react-icons/fa';
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation'; // Import usePathname

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // State to control sidebar visibility
  const pathname = usePathname(); // Get the current path
  
  const links = [
    { href: "/profile", label: "Profile", icon: <FaUser className="text-xl" /> },
    { href: "/projects", label: "Projects", icon: <FaProjectDiagram className="text-xl" /> },
    { href: "/skilles", label: "Skills", icon: <FaGraduationCap className="text-xl" /> },
    { href: "/github", label: "Gihub", icon: <FaGithub className="text-xl" /> },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen); // Toggle sidebar open/close

  return (
    <div className={`bg-white p-5 h-screen shadow-lg transition-all duration-300 fixed z-20  ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex justify-between items-center">
        {/* Animated header */}
        <motion.h3 
          className={`text-center mt-0 text-2xl font-bold text-gray-800 ${!isOpen ? 'hidden' : ''}`} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: isOpen ? 1 : 0 }} 
          transition={{ duration: 0.3 }}
        >
          Safwat
        </motion.h3>
        
        {/* Toggle button */}
        <button 
          onClick={toggleSidebar} 
          className="text-xl text-gray-700 p-3"
        >
          {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle sidebar */}
        </button>
      </div>
      
      {/* Animated icons and links */}
      <motion.ul 
        className="mt-5 space-y-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.3 }}
      >
        {links.map((link, index) => (
          <motion.li 
            key={index} 
            whileHover={{ scale: 1.05 }} // Animation on hover
            transition={{ duration: 0.2 }}
          >
            <Link href={link.href}>
              <div 
                className={`flex items-center text-sm text-black p-3 text-center rounded-lg transition ${
                  pathname === link.href ? ' text-indigo-500' : 'hover:bg-gray-200'
                }`} // Highlight active link
              >
                {/* Icon and label container */}
                <div className="flex items-center">
                  <span className="text-xl flex">{link.icon}</span> {/* Icon */}
                  <span className={`ml-3 ${!isOpen ? 'hidden' : ''}`}>{link.label}</span> {/* Label */}
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
