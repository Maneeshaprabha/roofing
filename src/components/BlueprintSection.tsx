"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function BlueprintSection() {
  return (
    // Dark background matching the design
    <section className="bg-[#141414] py-20 px-6 md:px-16 lg:px-24 w-full font-sans border-b border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 lg:gap-20">
        
        {/* Top: Blueprint Image Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-square md:aspect-video lg:aspect-[21/9] flex items-center justify-center"
        >
          <Image 
            // METANA OYAGE ACTUAL WIREFRAME IMAGE PATH EKA DANNA (e.g., "/blueprint.png")
            src="/assets/blueprint1.webp" 
            alt="Layered roofing sheets blueprint" 
            fill 
            className="object-contain opacity-80 mix-blend-lighten" // mix-blend eken kalu background kapila yanawa
          />
        </motion.div>

        {/* Bottom: Text and Download Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          {/* Left Text */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-normal text-[#f5f5f5] leading-[1.3] max-w-3xl tracking-wide">
            Layered roofing sheets designed for <br className="hidden lg:block" /> durability and weather resistance.
          </h2>
          
          {/* Right Button */}
          <button className="flex items-center gap-3 bg-[#d93833] hover:bg-[#b82d29] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-105 shrink-0">
            <Download size={20} strokeWidth={2} />
            <span className="text-[15px] tracking-wide">Download</span>
          </button>
        </motion.div>
        
      </div>
    </section>
  );
}