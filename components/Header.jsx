'use client'
import { useState } from "react";
import { FaChartBar, FaCog, FaUser, FaProjectDiagram, FaGraduationCap, FaGithub,FaUserCircle, FaFile, FaCreditCard, FaBars, FaTimes,FaFileDownload } from 'react-icons/fa';
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation'; 

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); 
  const pathname = usePathname(); 
  
  const links = [
    { href: "/profile", label: "Profile", icon: <FaUser className="text-xl" /> },
    { href: "/projects", label: "Projects", icon: <FaProjectDiagram className="text-xl" /> },
    { href: "/skilles", label: "Skills", icon: <FaGraduationCap className="text-xl" /> },
    { href: "/github", label: "Gihub", icon: <FaGithub className="text-xl" /> },
    {href:'https://drive.google.com/file/d/1sIFocoDopM_22hKYpoNIkqtzdm3P8f68/view?usp=sharing',label:'CV',icon: <FaFileDownload className="rounded-lg text-xl" ></FaFileDownload>}
  ];

  const toggleSidebar = () => setIsOpen(!isOpen); 
  const closesidbar=()=>(setIsOpen(false))
  return (
    <div className={`bg-white p-5 h-screen shadow-lg transition-all duration-300 fixed z-20  ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex justify-between items-center">
        <motion.h3 
          className={`text-center mt-0 text-2xl font-bold text-mainColor ${!isOpen ? 'hidden' : ''}`} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: isOpen ? 1 : 0 }} 
          transition={{ duration: 0.3 }}
        >
          Safwat
        </motion.h3>
        
        <button 
          onClick={toggleSidebar} 
          className="text-xl text-mainColor p-3"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <motion.ul 
        className="mt-5 space-y-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.3 }}
      >
        {links.map((link, index) => (
          <motion.li 
            key={index} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={link.href} onClick={closesidbar}>
              <div 
                className={`flex items-center text-sm text-black p-3 text-center rounded-lg transition ${
                  pathname === link.href ? ' text-mainColor' : 'hover:text-mainColor'
                }`} 
              >

                <div className="flex items-center">
                  <span className="text-xl flex">{link.icon}</span>
                  <span className={`ml-3 ${!isOpen ? 'hidden' : ''}`}>{link.label}</span> 
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
