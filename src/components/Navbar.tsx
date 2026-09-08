"use client";

import { Menu, X, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const pathname = usePathname(); // Active link eka highlight karanna

  // Scroll weddi background eka wenas karanna
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Panel eka open/close karana function eka
  const togglePanel = () => setIsSidePanelOpen(!isSidePanelOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-12 ${
          isScrolled 
            ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg" 
            : "bg-transparent border-b border-white/10 py-6" 
        }`}
      >
        {/* Left - Logo or Spacer */}
        <div className="flex-1">
          <Link href="/" className="text-white text-xl font-semibold tracking-wide">
            ROOFING.
          </Link>
        </div>
        
        {/* Center - Desktop Links (Hidden on mobile) */}
        <div className="hidden md:flex gap-10 font-medium text-[14px] tracking-wide">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`transition-colors duration-300 ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        
        {/* Right - Menu Icon (Hamburger) */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <button 
            onClick={togglePanel}
            className="text-white/60 hover:text-white transition-colors flex items-center gap-3 group cursor-pointer"
          >
            <span className="hidden md:block text-[13px] font-medium tracking-widest uppercase group-hover:text-white transition-colors">
              Contact
            </span>
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Side Panel Overlay & Drawer */}
      <AnimatePresence>
        {isSidePanelOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={togglePanel}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Slide-out Panel (Right Side) */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-full md:w-[420px] bg-[#0a0a0a] border-l border-white/10 z-[70] p-8 md:p-12 flex flex-col shadow-2xl overflow-y-auto custom-scrollbar"
            >
              {/* Header & Close Button */}
              <div className="flex items-center justify-between mb-12">
                <span className="text-white font-semibold tracking-widest uppercase text-lg">Roofing.</span>
                <button 
                  onClick={togglePanel} 
                  className="text-gray-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-2 rounded-full"
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </div>

              {/* Mobile Navigation (Only visible on small screens) */}
              <div className="md:hidden flex flex-col gap-6 mb-12 border-b border-white/10 pb-10">
                <p className="text-[12px] text-gray-500 font-medium tracking-widest uppercase mb-2">Navigation</p>
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={togglePanel}
                    className="text-white text-2xl font-light hover:text-[#cc3333] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              {/* Contact Us Content */}
              <div className="flex flex-col gap-10 mt-auto md:mt-0">
                <div>
                  <h3 className="text-white text-3xl font-medium tracking-tight mb-4">Let's build <br/><span className="text-gray-500">together.</span></h3>
                  <p className="text-gray-400 text-[15px] font-light leading-relaxed">
                    Have an engineering project or roofing requirement in mind? Reach out to our expert team for a consultation.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                      <MapPin className="w-4 h-4 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-gray-300 text-[15px] font-light">Haputale Road,<br/>Welimada, Sri Lanka.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                      <Mail className="w-4 h-4 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500 uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:hello@Roofing.com" className="text-gray-300 text-[15px] font-light hover:text-white transition-colors">hello@Roofing.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                      <Phone className="w-4 h-4 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                      <a href="tel:+94701234562" className="text-gray-300 text-[15px] font-light hover:text-white transition-colors">+94 70 123 4562</a>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/contact" 
                  onClick={togglePanel}
                  className="mt-4 flex items-center justify-center gap-3 border border-white/20 rounded-full text-white px-6 py-4 w-full hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <span className="text-[13px] font-semibold tracking-[0.15em] uppercase">
                    Contact Us Page
                  </span>
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </Link>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}