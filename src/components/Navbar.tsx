"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll weddi background eka wenas karanna oni nisa meka danawa
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu eka open/close karana function eka
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-8 ${
          isScrolled 
            ? "bg-[#111]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg" 
            : "bg-transparent border-b border-white/10 py-6" 
        }`}
      >
        <div className="flex-1"></div> {/* Left spacer */}
        
        {/* Desktop Links (Hidden on mobile) */}
        <div className="hidden md:flex gap-14 font-medium text-[15px] tracking-wide">
          <a href="./" className="text-white">Home</a>
          <a href="services" className="text-gray-400 hover:text-white transition-colors">Service</a>
          <a href="careers" className="text-gray-400 hover:text-white transition-colors">Careers</a>
          <a href="blogs" className="text-gray-400 hover:text-white transition-colors">Blogs</a>
          <a href="blogs" className="text-gray-400 hover:text-white transition-colors">Blogs</a>
        </div>
        
        {/* Menu Icon (Works as toggle on mobile) */}
        <div className="flex-1 flex justify-end">
          <button 
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-[#111]/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            {/* Close Button */}
            <button 
              onClick={toggleMenu} 
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
            
            {/* Mobile Links */}
            <div className="flex flex-col items-center gap-8 text-2xl font-medium tracking-wide">
              <a href="#" onClick={toggleMenu} className="text-white">Home</a>
              <a href="#" onClick={toggleMenu} className="text-gray-400 hover:text-white transition-colors">Service</a>
              <a href="#" onClick={toggleMenu} className="text-gray-400 hover:text-white transition-colors">Careers</a>
              <a href="#" onClick={toggleMenu} className="text-gray-400 hover:text-white transition-colors">Blogs</a>
              <a href="#" onClick={toggleMenu} className="text-gray-400 hover:text-white transition-colors">Blogs</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}