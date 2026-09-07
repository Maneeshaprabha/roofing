"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    // Pure Black Background - No gradients, no glows. Just clean contrast.
    <footer className="bg-black pt-32 pb-10 font-sans text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full">
        
        {/* Top Massive Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-white/10 pb-16 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[60px] lg:text-[72px] font-medium leading-[1.1] tracking-tight max-w-3xl"
          >
            Let's build something <br className="hidden md:block"/> 
            <span className="text-gray-500">extraordinary together.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="#" className="flex items-center gap-4 group">
              <span className="text-[18px] font-medium uppercase tracking-widest text-[#cc3333] group-hover:text-white transition-colors">
                Start a project
              </span>
              <div className="w-12 h-12 rounded-full border border-[#cc3333] flex items-center justify-center group-hover:bg-[#cc3333] transition-all duration-300">
                <ArrowUpRight size={20} className="text-[#cc3333] group-hover:text-white" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Address & Contact */}
          <div className="flex flex-col">
            <p className="text-[12px] text-gray-500 font-semibold tracking-[0.2em] uppercase mb-8">
              Headquarters
            </p>
            <p className="text-[16px] text-gray-300 font-light leading-relaxed mb-6">
              Haputale Road, <br />
              Welimada, Sri Lanka.
            </p>
            <a href="mailto:hello@vintaengineering.com" className="text-[16px] text-white hover:text-[#cc3333] transition-colors mb-2 w-max">
              hello@vintaengineering.com
            </a>
            <a href="tel:+94701234562" className="text-[16px] text-white hover:text-[#cc3333] transition-colors w-max">
              +94 70 123 4562
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:pl-12">
            <p className="text-[12px] text-gray-500 font-semibold tracking-[0.2em] uppercase mb-8">
              Navigation
            </p>
            <ul className="flex flex-col gap-4 text-[16px] text-gray-300 font-light">
              {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white hover:translate-x-2 transition-transform duration-300 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials (Text-based, highly modern) */}
          <div className="flex flex-col lg:pl-12">
            <p className="text-[12px] text-gray-500 font-semibold tracking-[0.2em] uppercase mb-8">
              Socials
            </p>
            <ul className="flex flex-col gap-4 text-[16px] text-gray-300 font-light">
              {["Facebook", "Instagram", "LinkedIn", "Twitter"].map((item) => (
                <li key={item}>
                  <Link href="#" className="group flex items-center gap-2 hover:text-white transition-colors w-max">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter (Minimalist Bottom-Border Input) */}
          <div className="flex flex-col">
            <p className="text-[12px] text-gray-500 font-semibold tracking-[0.2em] uppercase mb-8">
              Newsletter
            </p>
            <p className="text-[16px] text-gray-300 font-light leading-relaxed mb-8">
              Get the latest updates on our engineering projects and innovations.
            </p>
            <form className="relative flex items-center border-b border-gray-700 hover:border-[#cc3333] transition-colors duration-300 pb-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent text-white placeholder-gray-600 w-full outline-none text-[16px] font-light"
                required
              />
              <button type="submit" className="text-gray-400 hover:text-white transition-colors">
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Giant Brand Name */}
        <div className="w-full border-t border-white/10 pt-10 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-[12vw] md:text-[8vw] font-bold leading-none tracking-tighter text-white">
            VINTA.
          </h1>
          
          <div className="flex flex-col items-center md:items-end text-[13px] text-gray-500 font-light gap-2">
            <p>© {new Date().getFullYear()} Vinta Roofing.</p>
            <p>
              Site by <Link href="https://netxium.com/" target="_blank" className="text-white hover:text-[#cc3333] transition-colors ml-1">Netxium</Link>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}