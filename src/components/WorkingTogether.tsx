"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function WorkingTogether() {
  const partners = ["NESCAFÉ", "Northbridge",
  "Brighton Works",
  "Redwood Studio",
  "Crown & Co",
  "Westfield",
  "Blue Finch",
  "Harbor & Lane",
  "Limehouse",
  "Everton Digital",
  "Willow & Co",
  "Briar Group",
  "Kingsley",
  "Rosewood",
  "Greenwich Labs",
  "Ashford & Co",
  "Hampton Works",
  "Silver Oak", ];

  return (
    <section className="py-24 w-full bg-white font-sans overflow-hidden">
      
      {/* Header Section (Centered with padding) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-4xl"
        >
          <div className="flex items-center gap-1 mb-4">
            <ChevronUp size={20} strokeWidth={2.5} className="text-[#cc3333]" />
            <p className="font-medium text-[15px] text-gray-600">Working Together</p>
          </div>
          
          <h2 className="text-[32px] md:text-[44px] font-medium leading-[1.3] text-[#1a1a1a] tracking-tight">
            Working together with trusted partners to <br className="hidden md:block" /> achieve excellence.
          </h2>
        </motion.div>
      </div>

      {/* Infinite Scrolling Logos Marquee (Full width, Edge-to-Edge) */}
      <div className="relative w-full flex items-center mt-16">
        
        {/* Left/Right Fade Gradients (Now at the absolute edges of the screen) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex gap-6 w-max px-6"
        >
          {/* Duplicated array to create a seamless infinite loop */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="bg-[#f7f7f7] rounded-full px-12 py-5 flex items-center justify-center shrink-0 min-w-[220px] hover:bg-[#f0f0f0] transition-colors cursor-pointer"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-400 tracking-wider">
                {partner}
              </h3>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}